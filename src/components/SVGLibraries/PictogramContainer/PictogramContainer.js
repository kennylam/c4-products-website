import React, { useEffect, useState } from "react";
import { Tabs, Tab } from "gatsby-theme-carbon";
// import LightThemeLibrary from "../LightThemeLibrary/LightThemeLibrary";
// import DarkThemeLibrary from "../DarkThemeLibrary/DarkThemeLibrary";
import Pictogram from "../Pictogram";
import { useIntersectionObserver } from "../shared/utils/hooks/shared";
import {
  useSvgLibrary,
  useAssetQuery,
} from "../shared/utils/hooks/illustrations/light-theme";
import {
  useSvgLibraryDark,
  useDarkAssetQuery,
} from "../shared/utils/hooks/illustrations/dark-theme";

import "./_overrides.scss";

const PictogramContainer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sectionRef, containerIsVisible] = useIntersectionObserver();
  // light theme resources
  const {
    allLightThemeSvgLibraryJson,
    site,
    allLightThemeResourcesJson,
  } = useSvgLibrary();
  const { files: lightFiles } = useAssetQuery();

  // Dark theme resources
  const {
    allDarkThemeSvgLibraryJson,
    allDarkThemeResourcesJson,
  } = useSvgLibraryDark();

  const { files: darkFiles } = useDarkAssetQuery();

  return (
    <Tabs>
      <Tab label="Light Theme">
        <Pictogram
          site={site}
          files={lightFiles}
          sectionRef={sectionRef}
          containerIsVisible={containerIsVisible}
          themedResources={allLightThemeSvgLibraryJson}
          allThemedResources={allLightThemeResourcesJson}
          theme="light"
        />
      </Tab>
      <span className="light-theme__tab"></span>

      {/*
       * The span is necessary to be able to target the specific element.
       * Unable to add className to tab itself.
       * This is a hack until a better solution can be determined.
       */}

      <Tab label="Dark Theme">
        {/* <DarkThemeLibrary /> */}
        <Pictogram
          site={site}
          files={darkFiles}
          sectionRef={sectionRef}
          containerIsVisible={containerIsVisible}
          themedResources={allDarkThemeSvgLibraryJson}
          allThemedResources={allDarkThemeResourcesJson}
          theme="dark"
        />
      </Tab>
    </Tabs>
  );
};

export default PictogramContainer;
