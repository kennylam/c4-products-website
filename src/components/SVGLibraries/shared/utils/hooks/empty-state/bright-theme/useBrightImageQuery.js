import { useStaticQuery, graphql } from "gatsby";

export const useBrightImageQuery = () => {
  const { files, site } = useStaticQuery(
    graphql`
      query ImageQuery {
  files: allFile(filter: {ext: {regex: "/svg/"}, relativeDirectory: {eq: "pages/empty-state/master-files/bright-theme/images"}}) {
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
    `
  );
  return { files, site };
};