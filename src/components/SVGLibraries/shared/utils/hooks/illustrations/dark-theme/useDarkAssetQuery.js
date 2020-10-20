import { useStaticQuery, graphql } from "gatsby";

export const useDarkAssetQuery = () => {
  const { files, site } = useStaticQuery(
    graphql`
    query IllustrationsDarkThemeAssetQuery {
      files: allFile(
        filter: { ext: { regex: "/zip|ai/" },  relativeDirectory: {eq: "pages/illustrations/master-files/dark-theme"}}
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