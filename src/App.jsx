import React, { useEffect, useState } from "react";
import { SurveyCreator, SurveyCreatorComponent } from "survey-creator-react";
import {
  editorLocalization,
  getLocaleStrings,
  registerCreatorTheme,
} from "survey-creator-core";

import "survey-core/survey-core.css";
import "survey-creator-core/survey-creator-core.css";
import "./common/survey-theme.js";
import { MethodEightCreator } from "./utils/method-eight-creator-theme";

// Define your custom Method8 theme
const method8Theme = {
  themeName: "Method8 Theme",
  cssVariables: { ...MethodEightCreator },
};

// Register Method8 theme with localization
const enLocale = getLocaleStrings("en");
function addCustomTheme(theme, userFriendlyThemeName) {
  enLocale.creatortheme.names[theme.themeName] = userFriendlyThemeName;
  registerCreatorTheme(theme);
}
addCustomTheme(method8Theme, "Method8 Theme");

function App() {
  const [creator, setCreator] = useState(null);

  useEffect(() => {
    // Initialize the Survey Creator
    const c = new SurveyCreator({
      showLogicTab: true,
      showTranslationTab: true,
      showThemeTab: true,
      showPreviewTab: true,
      showPropertyGrid: true,
      isAutoSave: false,
    });

    // Apply your custom theme
    c.applyCreatorTheme(method8Theme);

    // Load empty or default JSON
    c.JSON = {
      pages: [
        {
          name: "page1",
          elements: [
            {
              type: "text",
              name: "username",
              title: "What is your name?",
              isRequired: true,
            },
          ],
        },
      ],
    };

    setCreator(c);

    // Cleanup on unmount
    return () => {
      c.dispose();
    };
  }, []);

  if (!creator) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg text-gray-600">Loading Survey Builder...</div>
      </div>
    );
  }

  return (
    <div className="w-full h-screen">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full">
        <div style={{ height: "calc(100vh - 80px)", width: "100%" }}>
          <SurveyCreatorComponent creator={creator} />
        </div>
      </div>
    </div>
  );
}

export default App;
