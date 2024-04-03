import React from 'react';
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from 'gatsby';

const formatTitle = (title) => {
  return title + ' - %s';
}

const Seo = (props) => {
  const { site } = useStaticQuery(graphql`
    query HeadingQuery {
      site {
        siteMetadata {
          title
        }
        buildTime
      }
    }
  `)
  const lastModified = (props.pageContext.MdxNode && props.pageContext.MdxNode.fields.gitDate) ||
    props.pageContext.frontmatter['last-modified'] ||
    site.buildTime; 
  return (
    <Helmet titleTemplate={formatTitle(site.siteMetadata.title)}>
      <meta name="robots" content="index,follow"></meta>
      <meta name="date" content={lastModified}></meta>
      <meta name="owner" content="terrybl@us.ibm.com"></meta>
      <meta name="Language" scheme="iso6391" content="en" />
    </Helmet>
  );
}

export default Seo;