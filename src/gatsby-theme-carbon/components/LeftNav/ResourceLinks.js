import React from 'react';
import ResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';

const links = [
  {
    title: 'Our GitHub repo',
    href: 'https://github.ibm.com/CDAI-design/CDAI-design-website',
  },
  {
    title: 'Our Slack channel',
    href: 'https://ibm-casdesign.slack.com/archives/CQGR0HC05',
  },
  {
    title: 'Carbon Design System',
    href: 'https://www.carbondesignsystem.com/',
  },
];

// shouldOpenNewTabs: true if outbound links should open in a new tab
const CustomResources = () => <ResourceLinks shouldOpenNewTabs links={links} />;

export default CustomResources;
