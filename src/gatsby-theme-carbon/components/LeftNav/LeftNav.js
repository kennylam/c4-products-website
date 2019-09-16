import React, { useContext } from 'react';
import classnames from 'classnames';
import { useStaticQuery, graphql } from 'gatsby';

import {
  SideNav,
  SideNavItems,
} from 'carbon-components-react/lib/components/UIShell';

import NavContext from 'gatsby-theme-carbon/src/util/context/NavContext';
import LeftNavItem from 'gatsby-theme-carbon/src/components/LeftNav/LeftNavItem';
import LeftNavResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';
import { useWindowSize } from 'gatsby-theme-carbon/src/util/hooks';

import LeftNavWrapper from 'gatsby-theme-carbon/src/components/LeftNav/LeftNavWrapper';
import { sideNavDark } from './LeftNav.module.scss';

const LeftNav = props => {
  const { leftNavIsOpen, toggleNavState } = useContext(NavContext);
  const windowSize = useWindowSize();

  if (windowSize.innerWidth > 1056 && !leftNavIsOpen) {
    toggleNavState('leftNavIsOpen', 'open');
  }

  const {
    allNavItemsYaml: { edges },
  } = useStaticQuery(graphql`
    query LEFT_NAV_QUERY2 {
      allNavItemsYaml {
        edges {
          node {
            title
            pages {
              title
              path
            }
            separator
          }
        }
      }
    }
  `);

  const navItems = edges.map(({ node }) => node);

  const renderNavItems = () =>
    navItems.map((item, i) => {
      return (
        <React.Fragment key={i}>
          {item.separator &&
            <hr className="bx--side-nav__divider"/>
          }
          <LeftNavItem items={item.pages} category={item.title} key={i} />
        </React.Fragment>
      )
    });

  // TODO: replace old addon website styles with sass modules, move to wrapper
  return (
    <LeftNavWrapper expanded={leftNavIsOpen}>
      <SideNav
        expanded
        defaultExpanded
        aria-label="Side navigation"
        className={classnames({
          [sideNavDark]: props.theme === 'dark' || props.homepage,
          'bx--side-nav--website': true,
          'bx--side-nav--website--dark':
            props.theme === 'dark' || props.homepage,
          'bx--side-nav--website--light':
            props.theme !== 'dark' && !props.homepage,
        })}
      >
        <SideNavItems>
          {renderNavItems()}
          <LeftNavResourceLinks />
        </SideNavItems>
      </SideNav>
    </LeftNavWrapper>
  );
};

export default LeftNav;
