import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'carbon-components-react';
import SvgCard from '../SvgCard/SvgCard.js';
import { useIntersectionObserver, useSvgLibrary } from '../shared/utils/hooks/';
import { svgGrid, pictogramSearch, resourceCard } from './Pictogram.module.scss';
import { searchVariants, pictogramVariants} from '../shared/variants';
import ResourceCard from '../ResourceCard/index.js';
import { checkProd } from '../shared/utils/helpers.js';

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
            const isImageProd = checkProd(process.env.NODE_ENV, site.pathPrefix, node.image)
              return (
                  <SvgCard
                    index={i}
                    containerIsVisible={containerIsVisible}
                    key={node.title} 
                    title={node.title}
                    image={isImageProd}
                    alt={node.alt}
                  />
                )
            })}
        </motion.ul>
        <div className={`bx--row resource-card-group ${resourceCard}`}>
          {allLightThemeResourceCardJson.edges.map(({ node }, i) => {
            const isProdImage = checkProd(process.env.NODE_ENV, site.pathPrefix, node.image)
            const isProdSource = checkProd(process.env.NODE_ENV, site.pathPrefix, node.source)
            return (
              <div className="bx--no-gutter-sm bx--col-md-4 bx--col-lg-4" key={i}>
                <ResourceCard 
                  title={node.title}
                  image={isProdImage}
                  alt={node.alt}
                  source={isProdSource}
                  />
              </div>
            )
          })}
      </div>
    </>
  )
}

export default Pictogram
