import React from 'react';
import ResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';

const links = [
  {
    title: 'Sketch library',
    href: 'https://sketch.cloud/s/9cef53a0-d5fa-4741-adaa-55c92fab2fc8',
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
