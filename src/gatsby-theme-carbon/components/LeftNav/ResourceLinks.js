import React from 'react';
import ResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';

const links = [
  {
    title: 'Carbon',
    href: 'https://www.carbondesignsystem.com/',
  },
  {
    title: 'Our Sketch library',
    href: 'sketch://add-library/cloud/a831d1a7-486c-4293-af6f-58543496c93a',
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
    title: 'IBM Cloud PAL',
    href: 'https://pages.github.ibm.com/ibmcloud/pal/',
  },
  {
    title: 'IBM Security experience guide',
    href: 'http://security-design-guide.stage1.mybluemix.net/',
  },
  {
    title: 'IBM Watson experience guide',
    href: 'https://www.ibm.com/brand/systems/watson/',
  },
];

// shouldOpenNewTabs: true if outbound links should open in a new tab
const CustomResources = () => <ResourceLinks shouldOpenNewTabs links={links} />;

export default CustomResources;
