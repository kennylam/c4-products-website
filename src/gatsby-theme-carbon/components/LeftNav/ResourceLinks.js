import React from 'react';
import ResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';

const links = [
  {
    title: 'Sketch library',
    href: 'sketch://add-library/cloud/a831d1a7-486c-4293-af6f-58543496c93a',
  },
  {
    title: 'GitHub repo',
    href: 'https://github.ibm.com/CDAI-design/pal',
  },
  {
    title: 'Slack channel',
    href: 'https://ibm-casdesign.slack.com/archives/CQGR0HC05',
  }
];

// shouldOpenNewTabs: true if outbound links should open in a new tab
const CustomResources = () => <ResourceLinks shouldOpenNewTabs links={links} />;

export default CustomResources;
