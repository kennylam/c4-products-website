import React, { useState, useEffect } from "react";
import Pictogram from '../Pictogram/'
import { useIntersectionObserver } from "../shared/utils/hooks/shared";
import {
  useSvgLibrary,
  useAssetQuery,
} from "../shared/utils/hooks/illustrations/light-theme";

const LightThemeLibrary = () => {
    const [sectionRef, containerIsVisible] = useIntersectionObserver();

    const {
        allLightThemeSvgLibraryJson,
        site,
        allLightThemeResourcesJson,
      } = useSvgLibrary();
      const { files } = useAssetQuery();
      const [searchTerm, setSearchTerm] = useState("");
      const [searchResults, setSearchResults] = useState([]);

      useEffect(() => {
        const lightTheme = allLightThemeSvgLibraryJson.edges.filter(({ node }) => {
          return node.title.toLowerCase().includes(searchTerm.toLowerCase());
        });
        setSearchResults(lightTheme);
      }, [
        searchTerm,
        site,
        allLightThemeSvgLibraryJson,
        allLightThemeResourcesJson,
      ]);

      const handleChange = (evt) => {
        setSearchTerm(evt.target.value);
      };

      return (
            <Pictogram handleChange= {handleChange} searchResults={searchResults} site={site} files={files} sectionRef={sectionRef} containerIsVisible={containerIsVisible} themedResources={allLightThemeResourcesJson}/>
      );

}

export default LightThemeLibrary; 
