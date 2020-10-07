import React from 'react';
import { Download16 } from '@carbon/icons-react';
import { TooltipIcon } from 'carbon-components-react';
import cx from 'classnames';
import { StaticQuery, graphql } from 'gatsby';
import { handleDownload } from '../shared/utils/helpers';
import styles from './ActionBar.module.scss';

const ActionBar = ({
  title, 
  source, 
  isActionBarVisible, 
  setIsActionBarVisible 
}) => {
  return (
    <StaticQuery 
      query={graphql`
        query {
      images: allFile(filter: {extension: {regex: "/svg/"}, relativeDirectory: {eq: "pages/illustrations/master-files/light-theme/images"}}) {
            edges {
              node {
                extension
                relativePath
                publicURL
                name
                ext
                relativeDirectory
              }
            }
          }
          site {
            pathPrefix
          }
        }
      `}
      render={({images, site}) => {
        return (
          <div
            className={cx(styles.container, {
              [styles.hidden]: !isActionBarVisible,
            })}
            aria-hidden={isActionBarVisible}
            data-cypress={title}
          >
            <TooltipIcon
              onFocus={() => setIsActionBarVisible(true)} 
              onClick={() => handleDownload(images, site, source)}
              align="center"
              direction="top"
              tooltipText="Download SVG"
            >
              <Download16 />
            </TooltipIcon>
          </div>
        )
      }
    }
    />
  )
}

export default ActionBar
