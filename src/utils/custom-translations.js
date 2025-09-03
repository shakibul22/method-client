export const customTranslations = {
  ed: {
    designer: 'Module',
    surveySettings: 'Module Settings',
    surveySettingsTooltip: 'Module settings',
    surveyTypeName: 'Module',
    pageTypeName: 'Chapter',
    addNewPage: 'Add New Chapter',
    deletePage: 'Delete Chapter',
    editPage: 'Edit Chapter',
    newPageName: 'Chapter',
    testSurveyAgain: 'Preview Module Again',
    testSurveyWidth: 'Module width: ',
    saveSurvey: 'Save Module',
    saveSurveyTooltip: 'Save Module',
    surveyResults: 'Module Results ',
    translationShowAllPages: 'All Chapters',
    selectPage: 'Select chapter...',
    previewPlaceholderDescription:
      "The module doesn't contain any visible elements.",
    previewPlaceholderDescriptionMobile:
      "The module doesn't contain any visible elements.",
    pagePlaceHolder:
      'The chapter is empty. Drag an element from the toolbox or click the button below.',
    pagePlaceHolderMobile:
      'Click the "Add Question" button below to add a new element to the chapter.',
    lg: {
      empty_tab: 'Create a rule to customize the flow of the module.',
      logicPlaceholderDescription:
        'Create a rule to customize the flow of the module.',
      logicPlaceholderDescriptionMobile:
        'Create a rule to customize the flow of the module.',
      page_visibilityName: 'Show/hide chapter',
      page_enableName: 'Enable/disable chapter',
      page_requireName: 'Make chapter required',
      trigger_completeName: 'Complete module',
      completedHtmlOnConditionName: 'Set "Thank You" chapter markup',
      page_visibilityDescription:
        'Make the chapter visible when the logical expression evaluates to true. Otherwise, keep the chapter invisible.',
      trigger_completeDescription:
        'When the logical expression evaluates to true, the module ends, and the respondent sees the "Thank you" chapter.',
      completedHtmlOnConditionDescription:
        'If the logical expression evaluates to true, the the "Thank You" chapter displays the specified content.',
      page_visibilityText: 'make chapter {0} visible',
      trigger_completeText: 'module becomes completed',
      completedHtmlOnConditionText:
        'show custom text for the "Thank You" chapter.',
    },
  },
  pe: {
    survey: {
      title: 'Module Title',
      description: 'Module Description',
      readOnly: 'Make the module read-only',
    },
    page: {
      name: 'Chapter name',
      title: 'Chapter title',
      description: 'Chapter description',
      visibleIf: 'Make the chapter visible if',
      requiredIf: 'Make the chapter required if',
      timeLimit: 'Time limit to complete the chapter',
      questionOrder: 'Question order on the chapter',
    },
    widthMode: 'Module Width Mode',
    surveyTitlePlaceholder: 'Module Title',
    pageTitlePlaceholder: 'Chapter {num}',
    panel: {
      page: 'Move the panel to chapter',
    },
    paneldynamic: {
      page: 'Move the panel to chapter',
    },
    question: {
      page: 'Move the question to chapter',
    },
    startPageTitlePlaceholder: 'Start Chapter',
    partialSendEnabled: 'Auto-save survey progress on chapter change',
    showPageTitles: 'Show chapter titles',
    showPageNumbers: 'Show chapter numbers',
    pagePrevText: '"Previous Chapter" button text',
    pageNextText: '"Next Chapter" button text',
    showPrevButton: 'Show the "Previous Chapter" button',
    firstPageIsStartPage: 'First chapter is a start chapter',
    showCompletePage: 'Show the "Thank You" chapter',
    autoAdvanceEnabled: 'Auto-advance to the next chapter',
    timeLimitPerPage: 'Time limit to complete one chapter',
    isSinglePage: 'Show all elements on one chapter',
    completedHtml: '"Thank You" chapter markup',
    completedHtmlOnCondition: 'Dynamic "Thank You" chapter markup',
    autoFocusFirstQuestion: 'Focus first question on a new chapter',
    progressBarShowPageTitles: 'Display chapter titles in the progress bar',
    progressBarShowPageNumbers: 'Display chapter numbers in the progress bar',
    tabs: {
      pages: 'Chapters',
      showOnCompleted: '"Thank You" Chapter',
    },
  },
  pehelp: {
    panel: {
      page: 'Repositions the panel to the end of a selected chapter.',
    },
    paneldynamic: {
      page: 'Repositions the panel to the end of a selected chapter.',
    },
    question: {
      page: 'Repositions the question to the end of a selected chapter.',
      autoFocusFirstQuestion:
        'Select if you want the first input field on each chapter ready for text entry.',
    },
    autoAdvanceEnabled:
      "Select if you want the survey to auto-advance to the next chapter once a respondent has answered all questions on the current chapter. This feature won't apply if the last question on the chapter is open-ended or allows multiple answers.",
    showPreviewBeforeComplete:
      'Enable the preview chapter with all or answered questions only.',
    questionTitleLocation:
      'Applies to all questions within the survey. This setting can be overridden by title alignment rules at lower levels: panel, chapter, or question. A lower-level setting will override those on a higher level.',
    timeLimit:
      'A time interval in seconds after which the survey auto-advances to the "Thank You" chapter. When set to 0, counts the time spent on the survey.',
    timeLimitPerPage:
      'A time interval in seconds after which the survey auto-advances to the next chapter. Hides the "Previous" navigation button. When set to 0, counts the time spent on the current chapter.',
    page: {
      name: 'A chapter ID that is not visible to respondents.',
      description: 'Type a chapter subtitle.',
      timeLimit:
        'A time interval in seconds after which the survey auto-advances to the next chapter. Hides the "Previous" navigation button. When set to 0, counts the time spent on the current chapter.',
      questionTitleLocation:
        'Applies to all questions within this chapter. When set to "Hidden", it also hides question descriptions. If you want to override this setting, define title alignment rules for individual questions or panels. The "Inherit" option applies the survey-level setting ("Top" by default).',
      questionErrorLocation:
        'Sets the location of an error message in relation to the question with invalid input. Choose between: "Top" - an error text is placed at the top of the question box; "Bottom" - an error text is placed at the bottom of the question box. The "Inherit" option applies the survey-level setting ("Top" by default).',
      showNavigationButtons:
        'Sets the visibility of navigation buttons on the chapter. The "Inherit" option applies the survey-level setting, which defaults to "Visible".',
    },
    singleInputTitleTemplate:
      "Used when the 'Survey layout' is set to 'Single input field per chapter'. In this layout, the matrix is split so that each input field appears on a separate chapter. Use the {rowIndex} placeholder to insert auto numbering, {rowTitle} or {rowName} to reference the row's title or ID, and {row.columnid} to include the value of a specific matrix column.",
  },
  pv: {
    page: 'Chapter',
    questionsOnPageMode: {
      singlePage: 'Show all questions on one chapter',
      questionPerPage: 'Show single question per chapter',
      inputPerPage: 'Show single input field per chapter',
    },
    pages: 'Completed chapters',
    buttons: 'Completed chapters (button UI)',
    onNextPage: 'When switching to the next chapter',
    showQuestionNumbers: {
      onPage: 'Reset on each chapter',
    },
  },
  ew: {
    showOnPage: 'Show survey on a chapter',
  },
  ts: {
    selectPage: 'Select the chapter to test it',
  },
  p: {
    pages: 'Chapters',
  },
  theme: {
    pageTitle: 'Chapter',
  },
};
