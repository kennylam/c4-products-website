import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'carbon-components-react';
import SvgCard from '../SvgCard/SvgCard.js';
import ResourceCard from '../ResourceCard/index.js';
import { useIntersectionObserver, useSvgLibrary } from '../shared/utils/hooks/';
import { searchVariants, pictogramVariants} from '../shared/variants';
import { svgGrid, pictogramSearch, resourceCard } from './Pictogram.module.scss';
import { checkProdImage } from '../shared/utils/helpers.js';

import resourceImages from '../shared/data/icons';



const Pictogram = () => {
  const [sectionRef, containerIsVisible] = useIntersectionObserver();
  const { allLightThemeSvgLibraryJson, site, allLightThemeResourceCardJson } = useSvgLibrary();
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    const results = allLightThemeSvgLibraryJson.edges.filter(({ node }) => {
      return node.title.toLowerCase().includes(searchTerm.toLowerCase())
    });

    setSearchResults(results)
  }, [searchTerm, site, allLightThemeSvgLibraryJson, allLightThemeResourceCardJson]);

  const handleChange = (evt) => {
    setSearchTerm(evt.target.value)  
  }

  return (
    <>
      <motion.div
        variants={searchVariants}
        initial="hidden"
        animate="visible"
      >
        <Search 
          className={pictogramSearch}
          onChange={handleChange}
          light
          labelText='Search SVG Library'
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
          {searchResults.map(({node}, i) => {
            const isProdImage = checkProdImage(process.env.NODE_ENV, site.pathPrefix, node.image)
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
                )
            })}
        </motion.ul>
        <div className={`bx--row resource-card-group ${resourceCard}`}>
          {allLightThemeResourceCardJson.edges.map(({ node }, i) => {
            const findImage = resourceImages.find(image => image.name === node.title);
            return (
              <div className="bx--no-gutter-sm bx--col-md-4 bx--col-lg-4" key={i}>
                <ResourceCard 
                  title={node.title}
                  image={findImage.image}
                  alt={node.alt}
                  source={node.source}
                  />
              </div>
            )
          })}
      </div>
    </>
  )
}

export default Pictogram
