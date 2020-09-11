import { useStaticQuery, graphql } from "gatsby";

export const useSvgLibrary = () => {
  const {
    allLightThemeSvgLibraryJson,
    site,
    allLightThemeResourcesJson,
  } = useStaticQuery(
    graphql`
      query LightThemeSvgLibrary {
        allLightThemeSvgLibraryJson {
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
      }
    `
  );
  return { allLightThemeSvgLibraryJson, site, allLightThemeResourcesJson };
};
