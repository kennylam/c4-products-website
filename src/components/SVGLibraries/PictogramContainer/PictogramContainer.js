import React from "react";
import { Tabs, Tab } from "gatsby-theme-carbon";
import Pictogram from "../Pictogram";
import { useSvgLibrary } from "../shared/utils/hooks/shared";
import { useGetAllResourcesQuery as useLightThemeResourceQuery } from "../shared/utils/hooks/illustrations/light-theme";
import { useGetAllResourcesQuery as useDarkThemeResourceQuery } from "../shared/utils/hooks/illustrations/dark-theme";

import "./_overrides.scss";

const PictogramContainer = () => {

  const {
    allLightThemeSvgLibraryJson,
    allLightThemeResourcesJson,
    allDarkThemeSvgLibraryJson,
    allDarkThemeResourcesJson,
    site,
  } = useSvgLibrary();

  const { files: lightFiles } = useLightThemeResourceQuery();
  const { files: darkFiles } = useDarkThemeResourceQuery();

  return (
    <Tabs>
      <Tab label="Light Theme">
        <Pictogram
          site={site}
          files={lightFiles}
          themedResources={allLightThemeSvgLibraryJson}
          allThemedResources={allLightThemeResourcesJson}
          theme="light"
        />
      </Tab>
      <Tab label="Dark Theme">
        <Pictogram
          site={site}
          files={darkFiles}
          themedResources={allDarkThemeSvgLibraryJson}
          allThemedResources={allDarkThemeResourcesJson}
          theme="dark"
        />
      </Tab>
    </Tabs>
  );
};

export default PictogramContainer;
