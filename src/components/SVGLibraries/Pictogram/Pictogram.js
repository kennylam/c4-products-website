import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "carbon-components-react";
import SvgCard from "../SvgCard/SvgCard.js";
import DownloadAssetCard from "../DownloadAssetCard";

import {
  svgGrid,
  resourceCard,
} from "./Pictogram.module.scss";
import { searchVariants, pictogramVariants } from "../shared/variants";
import resourceImages from "../shared/data/icons";
import { useIntersectionObserver } from "../shared/utils/hooks/shared/index.js";

const Pictogram = ({
  site,
  files,
  themedResources,
  allThemedResources,
  theme,
}) => {
  const [sectionRef, containerIsVisible] = useIntersectionObserver();
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (evt) => {
    setSearchTerm(evt.target.value);
  };

  const handleFilter = (node, searchTerm) =>
    node.title.toLowerCase().includes(searchTerm.toLowerCase());

  return (
    <>
      <motion.div variants={searchVariants} initial="hidden" animate="visible">
        <Search
          onChange={handleChange}
          labelText="Search SVG Library"
          placeHolderText='Search for descriptors like "warehouse" or "bar chart"'
          value={searchTerm}
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
            return (
              <>
                <SvgCard
                  theme={theme}
                  index={i}
                  containerIsVisible={containerIsVisible}
                  key={node.title}
                  title={node.title}
                  image={
                    // if prod env, pathPrefix MUST be added
                    process.env.NODE_ENV === "production"
                      ? `${site.pathPrefix}${node.image}`
                      : `${node.image}`
                  }
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
