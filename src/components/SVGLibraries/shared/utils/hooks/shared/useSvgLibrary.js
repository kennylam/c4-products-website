import { useStaticQuery, graphql } from "gatsby";

export const useSvgLibrary = () => {
  const {
    allLightThemeSvgLibraryJson,
    allLightThemeResourcesJson,
    allDarkThemeSvgLibraryJson,
    allDarkThemeResourcesJson,
    site,
  } = useStaticQuery(
    graphql`
      query SvgLibrary {
        allLightThemeSvgLibraryJson {
          edges {
            node {
              image
              title
              alt
            }
          }
        }
        allLightThemeResourcesJson {
          edges {
            node {
              image
              alt
              title
              source
            }
          }
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
      }
    `
  );
  return {
    allLightThemeSvgLibraryJson,
    allLightThemeResourcesJson,
    allDarkThemeSvgLibraryJson,
    allDarkThemeResourcesJson,
    site,
  };
};
