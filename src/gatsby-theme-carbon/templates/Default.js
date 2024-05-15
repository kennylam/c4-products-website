import React from "react";

import DefaultTemplate from "gatsby-theme-carbon/src/templates/Default";

// spreading the original props gives us props.children (mdx content)
function ShadowedDefault(props) {
  return <DefaultTemplate {...props}>{props.children}</DefaultTemplate>;
}

export default ShadowedDefault;
