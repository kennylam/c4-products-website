import React from "react";
import { Tabs, Tab } from "gatsby-theme-carbon";
import LightThemeLibrary from "../LightThemeLibrary/LightThemeLibrary";
import DarkThemeLibrary from "../DarkThemeLibrary/DarkThemeLibrary";

import "./_overrides.scss";

const PictogramContainer = () => {
  return (
    <Tabs>
      <Tab label="Light Theme">
        <LightThemeLibrary />
      </Tab>
      <span className="light-theme__tab"></span>

      {/*
       * The span is necessary to be able to target the specific element.
       * Unable to add className to tab itself.
       * This is a hack until a better solution can be determined.
       */}

      <Tab label="Dark Theme">
        <DarkThemeLibrary />
      </Tab>
    </Tabs>
  );
};

export default PictogramContainer;
