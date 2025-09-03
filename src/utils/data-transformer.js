const getElementDescription = (element) => {
  return element?.description || element?.title || element?.name || '';
};

const getType = (element) => {
  return element?.type || 'text';
};

const getCategory = (element) => {
  return element?.category || 'Survey';
};

const getHtmlContent = (element, id) => {
  return {
    id,
    type: element?.type || 'text',
    name: element?.name || '',
    title: element?.title || '',
    isWorkshop: element?.is_workshop_question,
    category: getCategory(element),
    ...element,
  };
};

const buildPagesFromWorkshopQuestions = (questions) => {
  if (!Array.isArray(questions) || questions.length === 0) {
    return [];
  }

  // Preserve first-seen chapter order
  const chapters = new Map();
  let orderCounter = 0;

  for (const q of questions) {
    const fd = q?.form_data || {};
    const chapterName = fd.chapter_title || fd.chapter_name || 'Module';

    if (!chapters.has(chapterName)) {
      chapters.set(chapterName, {
        name: chapterName,
        title: chapterName,
        _orderKey: orderCounter++,
        elements: [],
      });
    }

    const chapter = chapters.get(chapterName);
    chapter.elements.push({
      name: fd.name,
      type: fd.type || 'text',
      is_workshop_question: fd.is_workshop_question ?? false,
      title: fd.title || fd.name || null,
    });
  }

  return Array.from(chapters.values())
    .sort((a, b) => a._orderKey - b._orderKey)
    .map(({ _orderKey, ...page }) => page);
};

const transformData = (apiResponse, titleSelector) => {
  const workshop = apiResponse?.data?.workshop;
  const questions = Array.isArray(workshop?.questions)
    ? workshop.questions
    : [];

  // Pages are derived from questions
  const pages = buildPagesFromWorkshopQuestions(questions);

  // Lookup by form_data.name
  const questionLookup = {};
  for (const q of questions) {
    const name = q?.form_data?.name;
    if (name) {
      questionLookup[name] = q;
    }
  }

  // Stable sort key using question id (preferred) else index
  const questionOrder = questions.reduce((acc, q, idx) => {
    const name = q?.form_data?.name;
    if (name) {
      acc[name] = q.id || idx;
    }
    return acc;
  }, {});

  const modules = (pages || []).map((page, moduleIndex) => {
    const moduleId = (moduleIndex + 1).toString();
    const pageElements = Array.isArray(page?.elements) ? page.elements : [];

    const sortedElements = [...pageElements].sort((a, b) => {
      const aKey = questionOrder[a?.name];
      const bKey = questionOrder[b?.name];
      if (aKey === undefined || bKey === undefined) {
        return 0;
      }
      return aKey - bKey;
    });

    const children = sortedElements.map((element, questionIndex) => {
      const matchedQ = element?.name ? questionLookup[element.name] || {} : {};
      const questionId = matchedQ?.id || null;
      const lessonId = `${moduleId}.${questionIndex + 1}`;
      const lessonType = 'survey';

      const content = {
        id: questionId,
        title: `${lessonId} ${element.title || element.name}`,
        description: getElementDescription(element),
        surveyElement: getHtmlContent(element, questionId || lessonId),
        // new API only
        workshopFormData: matchedQ?.workshop_form_data || {},
      };

      const contentType = getType(element);

      return {
        id: lessonId,
        questionId,
        title: titleSelector(element),
        type: 'lesson',
        contentType,
        category: getCategory(element),
        lessonType,
        duration: contentType, // mirrors your previous behavior
        completed: Boolean(matchedQ?.is_completed),
        completedAt: matchedQ?.completed_at || null,
        content,
      };
    });

    return {
      id: moduleId,
      title: page.title || page.name || `Module ${moduleId}`,
      expanded: moduleIndex === 0,
      type: 'module',
      children,
    };
  });

  return {
    course: {
      title: workshop?.module_name,
      workshop_id: workshop?.id || null,
      assessment_module_id: workshop?.assessment_module_id || null,
      assessment_id: workshop?.assessment_id || null,
      progress: typeof workshop?.progress === 'number' ? workshop.progress : 0,
      total_response_count:
        typeof workshop?.total_response_count === 'number'
          ? workshop.total_response_count
          : 0,
      status: workshop?.status || 'in_progress',
      modules,
    },
  };
};

export const transformApiDataToCourseData = (apiResponse) => {
  return transformData(apiResponse, (element) => {
    const capitalizedType =
      element.type?.charAt(0).toUpperCase() + element.type?.slice(1);
    if (element.type === 'html') {
      return element.name || element.title || capitalizedType || 'Html';
    }
    return element.title || element.name || capitalizedType || 'Question';
  });
};

export const transformApiDataForDashboard = (apiResponse) => {
  return transformData(apiResponse, (element) => {
    const capitalizedType =
      element.type?.charAt(0).toUpperCase() + element.type?.slice(1);
    if (element.type === 'html') {
      return element.name || element.title || capitalizedType || 'Html';
    }
    return element.title || element.name || capitalizedType || 'Question';
  });
};
