//
// Any changes to this file will be overwritten (during build)
//

import React, { useContext } from 'react';
import { Link } from 'gatsby';
import {
  Header as ShellHeader,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderMenu,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderNavigation,
  SkipToContent,
} from 'carbon-components-react';
import { AppSwitcher20, Close20 } from '@carbon/icons-react';
import cx from 'classnames';

import GlobalSearch from 'gatsby-theme-carbon/src/components/GlobalSearch';
import NavContext from 'gatsby-theme-carbon/src/util/context/NavContext';
import useMetadata from 'gatsby-theme-carbon/src/util/hooks/useMetadata';

import {
  header,
  headerButton,
  headerName,
  searchIsOpenOnLink,
  skipToContent,
  switcherButton,
  switcherButtonOpen
} from 'gatsby-theme-carbon/src/components/Header/Header.module.scss';
import { useRef, useEffect } from 'react';

import cdaiConfig from '../../../cdai-config.json';

const { header: headerConfiguration } = cdaiConfig;
const titleUrl = headerConfiguration?.href || 'https://pages.github.ibm.com/cdai-design/';

const redirect = param => () => {
  if (window) {
    window.location.href = 'https://pages.github.ibm.com/cdai-design/' + param;
  }
}

const NavMenu = () => {
  const styleEl = useRef();
  useEffect(() => {
    const idx = {'/':1,'/practices':2,'/pal':3,'/guidance':4,'/digital':5}[cdaiConfig.repo.replace('cdai-design','')];
    styleEl.current.innerHTML = `<style>
.bx--header__menu-bar > li > a:not(:focus) { border-left-width: 0; border-right-width: 0; padding: 0 calc(1rem + 2px); }
.bx--header__menu-bar > li:nth-child(${idx}) > a:not(:focus) { border-bottom: 2px solid #4589ff; }
</style>`}, [styleEl]);

  // NOTE: UPDATE THE ABOVE OBJECT AS WELL
  return (<>
  <div ref={styleEl}></div>
  {!headerConfiguration?.noNavigation &&
  <HeaderNavigation aria-label="Product Design">
    <HeaderMenu aria-label="Home" menuLinkName="Home">
      <HeaderMenuItem href="#" onClick={redirect('')}>Overview</HeaderMenuItem>
      <HeaderMenuItem href="#" onClick={redirect('awards')}>Awards</HeaderMenuItem>
      <HeaderMenuItem href="#" onClick={redirect('design-share')}>Design share</HeaderMenuItem>
      <HeaderMenuItem href="#" onClick={redirect('design-jams')}>Design jams</HeaderMenuItem>
      <HeaderMenuItem href="#" onClick={redirect('teachable-moments')}>Teachable moments</HeaderMenuItem>
      <HeaderMenuItem href="#" onClick={redirect('speaking-events')}>Eminence tracking</HeaderMenuItem>
      <HeaderMenuItem href="#" onClick={redirect('careers/overview')}>Careers</HeaderMenuItem>
      <HeaderMenuItem href="#" onClick={redirect('contribute')}>Contribute</HeaderMenuItem>
    </HeaderMenu>
    <HeaderMenu aria-label="Practices" menuLinkName="Practices">
      <HeaderMenuItem href="#" onClick={redirect('practices/')}>Overview</HeaderMenuItem>
      <HeaderMenuItem href="#" onClick={redirect('practices/archetypes/overview/')}>Archetypes</HeaderMenuItem>
      <HeaderMenuItem href="#" onClick={redirect('practices/content-design/overview')}>Content design</HeaderMenuItem>
      <HeaderMenuItem href="#" onClick={redirect('practices/research/overview')}>Research</HeaderMenuItem>
      <HeaderMenuItem href="#" onClick={redirect('practices/workshops/overview')}>Workshops</HeaderMenuItem>
      <HeaderMenuItem href="#" onClick={redirect('practices/persona-playbook')}>Persona playbook</HeaderMenuItem>
    </HeaderMenu>
    <HeaderMenu aria-label="PAL" menuLinkName="PAL">
      <HeaderMenuItem href="#" onClick={redirect('pal/')}>Overview</HeaderMenuItem>
      <HeaderMenuItem href="#" onClick={redirect('pal/layouts/library')}>Layouts</HeaderMenuItem>
      <HeaderMenuItem href="#" onClick={redirect('pal/illustrations/library/')}>Illustrations</HeaderMenuItem>
      <HeaderMenuItem href="#" onClick={redirect('pal/content/overview/overview/')}>Content guide</HeaderMenuItem>
      <HeaderMenuItem href="#" onClick={redirect('pal/walkme-guide/overview/overview/')}>WalkMe guide</HeaderMenuItem>
    </HeaderMenu>
    <HeaderMenu aria-label="Guidance" menuLinkName="Guidance">
      <HeaderMenuItem href="#" onClick={redirect('guidance/')}>Overview</HeaderMenuItem>
      <HeaderMenuItem href="#" onClick={redirect('guidance/article-writing')}>Article writing guide</HeaderMenuItem>
      <HeaderMenuItem href="#" onClick={redirect('guidance/events')}>Event organization guide</HeaderMenuItem>
      <HeaderMenuItem href="#" onClick={redirect('guidance/self-service-research')}>Self-service research</HeaderMenuItem>
      <HeaderMenuItem href="#" onClick={redirect('guidance/vector-images')}>Vector image guide</HeaderMenuItem>
    </HeaderMenu>
    <HeaderMenu aria-label="Digital Journey" menuLinkName="Digital Journey">
      <HeaderMenuItem href="#" onClick={redirect('digital/overview')}>Overview</HeaderMenuItem>
      <HeaderMenuItem href="#" onClick={redirect('digital/trial-accelerator/trial-accelerator-overview')}>Trial accelerator</HeaderMenuItem>
      <HeaderMenuItem href="#" onClick={redirect('digital/discover/discover-overview')}>Discover</HeaderMenuItem>
      <HeaderMenuItem href="#" onClick={redirect('digital/learn/learn-overview')}>Learn</HeaderMenuItem>
      <HeaderMenuItem href="#" onClick={redirect('digital/try/try-overview')}>Try</HeaderMenuItem>
      <HeaderMenuItem href="#" onClick={redirect('digital/buy/buy-overview')}>Buy</HeaderMenuItem>
    </HeaderMenu>
  </HeaderNavigation> }
</>);
}

// START COPY FROM https://github.com/carbon-design-system/gatsby-theme-carbon/blob/master/packages/gatsby-theme-carbon/src/components/Header/Header.js#L27
const Header = ({children}) => {
  const {
    leftNavIsOpen,
    toggleNavState,
    switcherIsOpen,
    searchIsOpen,
  } = useContext(NavContext);
  const { isSearchEnabled } = useMetadata();

  return (
    <>
      <ShellHeader aria-label="Header" className={header}>
        <SkipToContent href="#main-content" className={skipToContent} />
        <HeaderMenuButton
          className={cx('bx--header__action--menu', headerButton)}
          aria-label="Open menu"
          onClick={() => {
            toggleNavState('leftNavIsOpen');
            toggleNavState('switcherIsOpen', 'close');
          }}
          isActive={leftNavIsOpen}
        />

      <Link
        className={cx(headerName, {
          [searchIsOpenOnLink]: searchIsOpen,
        })}
        to={titleUrl}>
        { children }
      </Link>

        <NavMenu />

        <HeaderGlobalBar>
          {isSearchEnabled && <GlobalSearch />}
          <HeaderGlobalAction
            className={cx(headerButton, switcherButton, {
              [switcherButtonOpen]: switcherIsOpen,
            })}
            aria-label="Switch"
            tooltipAlignment="end"
            onClick={() => {
              toggleNavState('switcherIsOpen');
              toggleNavState('searchIsOpen', 'close');
              toggleNavState('leftNavIsOpen', 'close');
            }}
          >
            {switcherIsOpen ? <Close20 /> : <AppSwitcher20 />}
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </ShellHeader>
    </>
  );
};

const DefaultHeaderText = () => (
  <>
    { headerConfiguration?.prefix || 'IBM'}&nbsp;
    <span>{ headerConfiguration?.title || 'Design' }</span>
  </>
);

Header.defaultProps = {
  children: <DefaultHeaderText />,
};

export default Header;
// END COPY
