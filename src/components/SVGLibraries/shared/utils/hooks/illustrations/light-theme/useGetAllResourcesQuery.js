import { useStaticQuery, graphql } from "gatsby";

export const useGetAllResourcesQuery = () => {
  const { files, site } = useStaticQuery(
    graphql`
      query IllustrationsLightThemeAssetQuery {
        files: allFile(
          filter: {
            ext: { regex: "/zip|ai/" }
            relativeDirectory: {
              eq: "pages/illustrations/master-files/light-theme"
            }
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
