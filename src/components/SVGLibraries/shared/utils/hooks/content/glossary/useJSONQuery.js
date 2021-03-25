import { useStaticQuery, graphql } from "gatsby";

export const useJSONQuery = () => {
  const { allGlossaryJson } = useStaticQuery(
    graphql`
      query GlossaryJSONQuery {
        allGlossaryJson {
          edges {
            node {
              terms {
                compare
                definition
                example
                id
                title
                usage
                used_by
                last_updated
                source
              }
            }
          }
        }
      }
    `
  );
  return { allGlossaryJson };
};
