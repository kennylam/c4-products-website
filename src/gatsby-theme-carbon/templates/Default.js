import React from 'react'

import DefaultTemplate from 'gatsby-theme-carbon/src/templates/Default';
import pageContext from '../pageContext';


// spreading the original props gives us props.children (mdx content)
function ShadowedDefault(props) {
  Object.assign(pageContext, props.pageContext);
  return <DefaultTemplate {...props}>{props.children}</DefaultTemplate>;
}

export default ShadowedDefault;