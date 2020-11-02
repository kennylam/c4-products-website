import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search } from "carbon-components-react";
import SvgCard from "../SvgCard/SvgCard.js";

import { checkProdImage } from "../shared/utils/helpers.js";
import DownloadAssetCard from "../DownloadAssetCard";

import {
  svgGrid,
  pictogramSearch,
  resourceCard,
} from "./Pictogram.module.scss";
import { searchVariants, pictogramVariants } from "../shared/variants";
import resourceImages from "../shared/data/icons";

const Pictogram = ({
  site,
  files,
  sectionRef,
  containerIsVisible,
  themedResources,
  allThemedResources,
  theme,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    console.log("searchTerm", searchTerm);
    console.log("themedResources", themedResources);
  });

  const handleChange = (evt) => {
    setSearchTerm(evt.target.value.toLowerCase());
  };

  const handleFilter = (node, searchTerm) => {
    return node.title.toLowerCase().includes(searchTerm);
  };

  return (
    <>
      <motion.div variants={searchVariants} initial="hidden" animate="visible">
        <Search
          className={pictogramSearch}
          onChange={handleChange}
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
        {themedResources.edges
          .filter(({ node }) => handleFilter(node, searchTerm))
          .map(({ node }, i) => {
            // Rename this to be more clear what it is actual intended for
            const isProdImage = checkProdImage(
              process.env.NODE_ENV,
              site.pathPrefix,
              node.image
            );
            return (
              <>
                <SvgCard
                  theme={theme}
                  index={i}
                  containerIsVisible={containerIsVisible}
                  key={node.title}
                  title={node.title}
                  image={isProdImage}
                  siteMetadata={site}
                  alt={node.alt}
                />
              </>
            );
          })}
      </motion.ul>
      <motion.div
        className={`bx--row resource-card-group ${resourceCard}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 2 } }}
      >
        {allThemedResources.edges.map(({ node }, i) => {
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
                theme={theme}
              />
            </div>
          );
        })}
      </motion.div>
    </>
  );
};

export default Pictogram;
