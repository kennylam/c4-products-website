import React from "react";
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
  searchResults,
  site,
  files,
  sectionRef,
  containerIsVisible,
  handleChange,
  themedResources,
}) => {
  return (
    <>
      <motion.div variants={searchVariants} initial="hidden" animate="visible">
        <Search
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
            <div>
              <SvgCard
                index={i}
                containerIsVisible={containerIsVisible}
                key={node.title}
                title={node.title}
                image={isProdImage}
                siteMetadata={site}
                alt={node.alt}
              />
            </div>
          );
        })}
      </motion.ul>
      <motion.div
        className={`bx--row resource-card-group ${resourceCard}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 2 } }}
      >
        {themedResources.edges.map(({ node }, i) => {
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
