/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Location } from "@reach/router";

import {
  SideNavLink,
  SideNavMenu,
  SideNavMenuItem,
} from "carbon-components-react";

import { divider } from "gatsby-theme-carbon/src/components/LeftNav/LeftNav.module.scss";
import { SERVICE_WORKER_UPDATE_FOUND as _SERVICE_WORKER_UPDATE_FOUND } from "gatsby-theme-carbon/src/components/LeftNav/LeftNavItem";
import usePathprefix from "gatsby-theme-carbon/src/util/hooks/usePathprefix";

import React from "react";

const HOST = "https://pages.github.ibm.com/";
const PATH_SEPARATOR = "/";
const REG_EXP = new RegExp(`^${PATH_SEPARATOR}|${PATH_SEPARATOR}$`, "g");

// Normalizes a path, for example from `/directory/page/tab/` to `directory/page/tab`, accepting additional patterns.
function normalize(path, patterns = []) {
  return [...patterns, REG_EXP].reduce(
    (path, pattern) => path.replace(pattern, ""),
    path
  );
}

export default function LeftNavItem({ category, hasDivider, items }) {
  const pathprefix = normalize(usePathprefix() || "");

  return (
    <Location>
      {({ location: { pathname } }) => {
        const urlParts = normalize(pathname, [pathprefix + PATH_SEPARATOR]).split(PATH_SEPARATOR);

        function isItemActive({ path: item, pathDepth }) {
          // TODO: This matches `directory/page` and nothing further, similarly to https://github.com/carbon-design-system/gatsby-theme-carbon/blob/main/packages/gatsby-theme-carbon/src/components/LeftNav/LeftNavItem.js#L47
        const url = urlParts
          .slice(0, pathDepth || 2)
          .join(PATH_SEPARATOR);

          return (
          url && // Current page should be not root
          item.includes(pathprefix) && // Matches the current microsite, for example `cdai-design/pal`.
          (normalize(item, [HOST, pathprefix]) + PATH_SEPARATOR).includes(url + PATH_SEPARATOR)
          );
        }

        const isActive = items.some(isItemActive);

        return (
          <>
            {items.length === 1 ? (
              <SideNavLink href={items[0].path} isActive={isActive}>
                {category}
              </SideNavLink>
            ) : (
              <SideNavMenu
                defaultExpanded={isActive}
                isActive={isActive} // TODO: Similar categories.
                title={category}
              >
                {items.map(({ path, title, pathDepth }, index) => {
                  return (
                    <SideNavMenuItem
                      key={`SideNavMenuItem__${category}__${title}--${index}`}
                      href={path}
                      isActive={isItemActive({ path, pathDepth })}
                    >
                      {title}
                    </SideNavMenuItem>
                  );
                })}
              </SideNavMenu>
            )}

            {hasDivider && <hr className={divider} />}
          </>
        );
      }}
    </Location>
  );
}

export const SERVICE_WORKER_UPDATE_FOUND = _SERVICE_WORKER_UPDATE_FOUND;
