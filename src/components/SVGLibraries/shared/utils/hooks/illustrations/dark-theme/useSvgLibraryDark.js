import { useStaticQuery, graphql } from "gatsby";

export const useSvgLibraryDark = () => {
  const {
    allDarkThemeSvgLibraryJson,
    site,
    allDarkThemeResourcesJson,
  } = useStaticQuery(
    graphql`
      query DarkThemeSvgLibrary {
        allDarkThemeSvgLibraryJson {
          edges {
            node {
              image
              title
              alt
            }
          }
        }
        site {
          pathPrefix
        }
        allDarkThemeResourcesJson {
          edges {
            node {
              image
              alt
              title
              source
            }
          }
        }
      }
    `
  );
  return { allDarkThemeSvgLibraryJson, site, allDarkThemeResourcesJson };
}; 