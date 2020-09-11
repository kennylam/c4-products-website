import { useStaticQuery, graphql } from "gatsby";

export const useJSONQuery = () => {
  const { allEmptyStateResourcesJson, site } = useStaticQuery(
    graphql`
      query JSONQuery {
        allEmptyStateResourcesJson {
          edges {
            node {
              alt
              id
              images {
                bright
                dark
              }
              sources {
                bright
                dark
              }
              title
              details
              tableData {
                section
                text
                id
              }
            }
          }
        }
        site {
          pathPrefix
        }
      }
    `
  );
  return { allEmptyStateResourcesJson, site };
};
