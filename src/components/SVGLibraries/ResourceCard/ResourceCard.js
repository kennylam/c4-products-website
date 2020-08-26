import React from 'react'
import { Download16 } from '@carbon/icons-react';
import { StaticQuery, graphql } from 'gatsby';
import { handleDownload } from '../shared/utils/helpers';
import { resourceCardIcon, resourceCardButton, resourceCardSubtitle } from './ResourceCard.module.scss';




const ResourceCard = ({title, image, alt, source}) => {
  return (
    <StaticQuery 
       query={graphql`
         query {
           files: allFile(filter: {ext: {regex: "/zip|ai/"}, 
           relativeDirectory: 
           {eq: "masterFiles/lightTheme"}}) {
              edges {
                node {
                  name
                  relativePath
                  relativeDirectory
                  publicURL
                  ext
                }
              }
            }
           site {
             pathPrefix
           }
         }
       `}
       render={({files, site}) => {
          return (
            <div className="bx--resource-card">
              <div className="bx--aspect-ratio bx--aspect-ratio--2x1">
                <div className={`bx--aspect-ratio--object`}>
                  <button onClick={() => handleDownload(files, site, source)} className={`bx--tile bx--tile--clickable ${resourceCardButton}`}>
                    <h5 className={`bx--resource-card__subtitle ${resourceCardSubtitle}`}>{title}</h5>
                    <div className="bx--resource-card__icon--img">
                      <img className={resourceCardIcon} src={image} alt={alt} />
                    </div>
                    <div className="bx--resource-card__icon--action">
                      <Download16 />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          )
        }}
    />
  )  
}

export default ResourceCard
