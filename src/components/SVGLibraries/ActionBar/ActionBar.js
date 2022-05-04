import React from "react";
import { Download16 } from "@carbon/icons-react";
import { TooltipIcon } from "carbon-components-react";
import cx from "classnames";
import { StaticQuery, graphql } from "gatsby";
import { handleDownload } from "../shared/utils/helpers";
import { container, hidden, containerDark } from "./ActionBar.module.scss";

const ActionBar = ({
  title,
  source,
  isActionBarVisible,
  setIsActionBarVisible,
  theme,
}) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          images: allFile(
            filter: {
              extension: { regex: "/svg/" }
              relativeDirectory: { regex: "/master-files/i" }
            }
          ) {
            edges {
              node {
                extension
                relativePath
                publicURL
                name
                ext
                relativeDirectory
              }
            }
          }
          site {
            pathPrefix
          }
        }
      `}
      render={({ images, site }) => {
        return (
          <div
            className={cx(container, {
              [hidden]: !isActionBarVisible,
              [containerDark]: theme === "dark",
            })}
            aria-hidden={isActionBarVisible}
          >
            <TooltipIcon
              onFocus={() => setIsActionBarVisible(true)}
              onClick={() => handleDownload(images, site, source)}
              align="center"
              direction="top"
              tooltipText="Download SVG"
            >
              <Download16 />
            </TooltipIcon>
          </div>
        );
      }}
    />
  );
};

export default ActionBar;
