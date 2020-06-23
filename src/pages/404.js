import React from 'react';
import { FourOhFour } from 'gatsby-theme-carbon';

const links = [
  { href: 'https://pages.github.ibm.com/cdai-design/', text: 'CD&AI Design Home page' },
  { href: '/overview/about', text: 'About this PAL site' },
  { href: '/components/component-status', text: 'Components' },
  { href: '/patterns/pattern-status', text: 'Patterns' },
];

const Custom404 = () => <FourOhFour links={links} />;

export default Custom404;
