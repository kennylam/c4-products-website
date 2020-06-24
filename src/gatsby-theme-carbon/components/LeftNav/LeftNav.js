import React, { useContext, useRef, useEffect } from 'react';
import classnames from 'classnames';
import { useStaticQuery, graphql } from 'gatsby';
import { SideNav, SideNavItems } from 'carbon-components-react';

import NavContext from 'gatsby-theme-carbon/src/util/context/NavContext';
import LeftNavItem from 'gatsby-theme-carbon/src/components/LeftNav/LeftNavItem';
import LeftNavResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';

import LeftNavWrapper from 'gatsby-theme-carbon/src/components/LeftNav/LeftNavWrapper';
import { sideNavDark } from './LeftNav.module.scss';
import useMetadata from 'gatsby-theme-carbon/src/util/hooks/useMetadata';

const LeftNav = (props) => {
  const {
    leftNavIsOpen,
    leftNavScrollTop,
    setLeftNavScrollTop,
    toggleNavState,
  } = useContext(NavContext);

  const sideNavRef = useRef();
  const sideNavListRef = useRef();

  useEffect(() => {
    sideNavListRef.current = sideNavRef.current.querySelector('.sidenav-list');
  }, []);

  useEffect(() => {
    sideNavListRef.current.addEventListener('scroll', (e) => {
      setLeftNavScrollTop(e.target.scrollTop);
    });
  }, [setLeftNavScrollTop]);

  useEffect(() => {
    if (leftNavScrollTop >= 0 && !sideNavListRef?.current.scrollTop) {
      sideNavListRef.current.scrollTop = leftNavScrollTop;
    }
  }, [leftNavScrollTop]);

  const { navigationStyle } = useMetadata();

  const closeSwitcher = () => {
    toggleNavState('switcherIsOpen', 'close');
  };

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
    <LeftNavWrapper
      expanded={leftNavIsOpen}
      onClick={closeSwitcher}
      onKeyPress={closeSwitcher}
    >
      <SideNav
        ref={sideNavRef}
        aria-label="Side navigation"
        expanded={navigationStyle ? leftNavIsOpen : true}
        defaultExpanded={!navigationStyle}
        isPersistent={!navigationStyle}
        className={classnames({
          [sideNavDark]: props.theme === 'dark' || props.homepage,
          'bx--side-nav--website': true,
          'bx--side-nav--website--dark':
            props.theme === 'dark' || props.homepage,
          'bx--side-nav--website--light':
            props.theme !== 'dark' && !props.homepage,
        })}
      >
        <SideNavItems className="sidenav-list">
          {renderNavItems()}
          <LeftNavResourceLinks />
        </SideNavItems>
      </SideNav>
    </LeftNavWrapper>
  );
};

export default LeftNav;
