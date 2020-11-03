import React, { useState, useEffect } from "react";
import Pictogram from "../Pictogram";
import { useIntersectionObserver } from "../shared/utils/hooks/shared";
import {
  useSvgLibraryDark,
  useDarkAssetQuery,
} from "../shared/utils/hooks/illustrations/dark-theme";

const DarkThemeLibrary = () => {
  const [sectionRef, containerIsVisible] = useIntersectionObserver();

  const {
    allDarkThemeSvgLibraryJson,
    site,
    allDarkThemeResourcesJson,
  } = useSvgLibraryDark();
  const { files } = useDarkAssetQuery();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const darkTheme = allDarkThemeSvgLibraryJson.edges.filter(({ node }) => {
      return node.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setSearchResults(darkTheme);
  }, [searchTerm, site, allDarkThemeSvgLibraryJson, allDarkThemeResourcesJson]);

  const handleChange = (evt) => {
    setSearchTerm(evt.target.value);
  };

  return (
    <Pictogram
      handleChange={handleChange}
      searchResults={searchResults}
      site={site}
      sectionRef={sectionRef}
      containerIsVisible={containerIsVisible}
      files={files}
      themedResources={allDarkThemeResourcesJson}
      theme="dark"
    />
  );
};

export default DarkThemeLibrary;
