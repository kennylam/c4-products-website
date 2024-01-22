import React from 'react';
import { FourOhFour } from 'gatsby-theme-carbon';

const links = [
  { href: '/overview/about', text: 'About this site' },
  { href: '/overview/asset-index', text: 'Asset index' },
  { href: '/patterns/onboarding/overview', text: 'Onboarding patterns' },
  { href: `/ai-design/overview`, text: `AI Design guidance`},
  { href: '/saas-for-hyperscalers/overview', text: 'PLG and MultiCloud SaaS' },
  { href: '/product-gallery/gallery', text: 'Product gallery' },
  { href: '/content/overview/overview', text: 'Content guide' },
  { href: '/design-kits/figma', text: 'Design kits' },
  { href: '/contributing/overview', text: 'Contributing to IBM Products' },
];

const Custom404 = () => <div className={`container-404`}><FourOhFour links={links} /></div>;

export default Custom404;
