import { useStaticQuery, graphql } from "gatsby";

export const useAssetQuery = () => {
  const { files, site } = useStaticQuery(
    graphql`
      query EmptyStateBrightAssetQuery {
        files: allFile(
          filter: {
            ext: { regex: "/zip|ai/" }
            relativeDirectory: { eq: "pages/empty-state/master-files/bright-theme" }
          }
        ) {
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
