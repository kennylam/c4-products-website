import React from 'react';
import { FourOhFour } from 'gatsby-theme-carbon';

const links = [
  { href: 'https://pages.github.ibm.com/cdai-design/', text: 'CD&AI Design Home page' },
  { href: '/overview/about', text: 'About this site' },
  { href: '/components/additional-tag-features', text: 'Components' },
  { href: '/patterns/advanced-filtering/usage', text: 'Patterns' },
  { href: '/content/overview/overview', text: 'Content guide' },
  { href: '/walkme-guide/overview/overview', text: 'WalkMe guide' },
];

const Custom404 = () => <div className={`container-404`}><FourOhFour links={links} /></div>;

export default Custom404;
