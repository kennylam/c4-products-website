import React from 'react';
import ResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';

const links = [
  {
    title: 'Our Sketch kit',
    href: 'https://github.ibm.com/CDAI-design/pal/raw/master/src/resources/sketch-kit/CDAI_design_kit_v01.sketch',
  },
  {
    title: 'Our GitHub repo',
    href: 'https://github.ibm.com/CDAI-design/pal',
  },
  {
    title: 'Our Slack channel',
    href: 'https://ibm-casdesign.slack.com/archives/CQGR0HC05',
  },
  {
    title: 'Carbon Design System',
    href: 'https://www.carbondesignsystem.com/',
  },
  {
    title: 'IBM Cloud Platform guide',
    href: 'https://pages.github.ibm.com/ibmcloud/pal/',
  },
  {
    title: 'Watson Experience guide',
    href: 'https://www.ibm.com/brand/systems/watson/',
  },
  {
    title: 'Watson Moments guide',
    href: 'https://w3.ibm.com/w3publisher/watson-embed/watson-moments',
  },
];

// shouldOpenNewTabs: true if outbound links should open in a new tab
const CustomResources = () => <ResourceLinks shouldOpenNewTabs links={links} />;

export default CustomResources;
