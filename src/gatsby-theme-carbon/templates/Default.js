import React from 'react'

import DefaultTemplate from 'gatsby-theme-carbon/src/templates/Default';
import pageContext from '../pageContext';

export default props => {
  Object.assign(pageContext, props.pageContext);
  return (
    <DefaultTemplate {...props}>
      { props.children }
    </DefaultTemplate>
  );
}