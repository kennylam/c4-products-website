import { useStaticQuery, graphql } from "gatsby"

export const useSvgLibrary = () => {
  const { allLightThemeSvgLibraryJson, site, allLightThemeResourceCardJson } = useStaticQuery(
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
          allLightThemeResourceCardJson {
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
  )
  return { allLightThemeSvgLibraryJson, site, allLightThemeResourceCardJson };
}

