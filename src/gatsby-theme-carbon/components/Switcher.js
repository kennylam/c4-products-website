import React from 'react';
import Switcher, { SwitcherDivider, SwitcherLink } from 'gatsby-theme-carbon/src/components/Switcher/Switcher.js';

const DefaultChildren = () => {
  return (
    <>
      <SwitcherDivider>CD&amp;AI Design sites</SwitcherDivider>
        <SwitcherLink href="https://cdai-design.us-south.cf.test.appdomain.cloud/">CD&amp;AI Design home</SwitcherLink>
        <SwitcherLink href="https://pages.github.ibm.com/cdai-design/pal/">Pattern asset library</SwitcherLink>
        <SwitcherLink href="https://pages.github.ibm.com/cdai-design/personas/">Persona toolkit</SwitcherLink>
        <SwitcherLink href="https://pages.github.ibm.com/cdai-design/content-design/">Content design</SwitcherLink>
      <SwitcherDivider>IBM Design sites</SwitcherDivider>
        <SwitcherLink href="https://ibm.com/design">IBM Design</SwitcherLink>
        <SwitcherLink href="https://ibm.com/design/language">IBM Design Language</SwitcherLink>
        <SwitcherLink href="https://www.carbondesignsystem.com/">Carbon Design System</SwitcherLink>
    </>
  );
};

const CustomSwitcher = props => <Switcher {...props} />;

CustomSwitcher.defaultProps = {
  children: <DefaultChildren />,
};

export default CustomSwitcher;
