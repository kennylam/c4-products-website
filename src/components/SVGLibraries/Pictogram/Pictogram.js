import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search } from "carbon-components-react";
import SvgCard from "../SvgCard/SvgCard.js";
import DownloadAssetCard from "../DownloadAssetCard";
import resourceImages from "../shared/data/icons";

import { checkProdImage } from "../shared/utils/helpers.js";
import { useIntersectionObserver } from "../shared/utils/hooks/shared";
import {
  useSvgLibrary,
  useAssetQuery,
} from "../shared/utils/hooks/illustrations/light-theme";

import {
  svgGrid,
  pictogramSearch,
  resourceCard,
} from "./Pictogram.module.scss";
import { searchVariants, pictogramVariants } from "../shared/variants";

const Pictogram = () => {
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
    const results = allLightThemeSvgLibraryJson.edges.filter(({ node }) => {
      return node.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setSearchResults(results);
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
    <>
      <motion.div variants={searchVariants} initial="hidden" animate="visible">
        <Search
          data-cypress="illustrations"
          className={pictogramSearch}
          onChange={handleChange}
          light
          labelText="Search SVG Library"
          placeHolderText='Search for descriptors like "warehouse" or "bar chart"'
        />
      </motion.div>
      <motion.ul
        variants={pictogramVariants}
        initial="hidden"
        animate="visible"
        ref={sectionRef}
        className={svgGrid}
      >
        {searchResults.map(({ node }, i) => {
          const isProdImage = checkProdImage(
            process.env.NODE_ENV,
            site.pathPrefix,
            node.image
          );
          return (
            <SvgCard
              index={i}
              containerIsVisible={containerIsVisible}
              key={node.title}
              title={node.title}
              image={isProdImage}
              siteMetadata={site}
              alt={node.alt}
            />
          );
        })}
      </motion.ul>
      <motion.div
        className={`bx--row resource-card-group ${resourceCard}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 2 } }}
      >
        {allLightThemeResourcesJson.edges.map(({ node }, i) => {
          const findImage = resourceImages.find(
            (image) => image.name === node.title
          );
          return (
            <div className="bx--no-gutter-sm bx--col-md-4 bx--col-lg-4" key={i}>
              <DownloadAssetCard
                title={node.title}
                image={findImage.image}
                source={node.source}
                alt={node.alt}
                files={files}
                site={site}
                iconSize="iconSize"
              />
            </div>
          );
        })}
      </motion.div>
    </>
  );
};

export default Pictogram;
