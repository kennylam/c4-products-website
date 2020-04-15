import React from 'react';
import Switcher, { SwitcherDivider, SwitcherLink } from 'gatsby-theme-carbon/src/components/Switcher/Switcher.js';

const DefaultChildren = () => {
  return (
    <>
      <SwitcherLink href="https://ibm.com/design">IBM Design</SwitcherLink>
      <SwitcherLink href="https://ibm.com/design/language">
        IBM Design Language
      </SwitcherLink>
      <SwitcherLink href="https://ibm.com/brand">IBM Brand Center</SwitcherLink>
      <SwitcherDivider>Design disciplines</SwitcherDivider>
      <SwitcherLink href="https://www.carbondesignsystem.com/">
        Product
      </SwitcherLink>
      <SwitcherLink href="https://www.ibm.com/standards/web/">
        Digital
      </SwitcherLink>
      <SwitcherDivider>Design practices</SwitcherDivider>
      <SwitcherLink href="https://www.ibm.com/design/thinking/">
        Enterprise Design Thinking
      </SwitcherLink>
      <SwitcherLink href="https://www.ibm.com/design/research/">
        IBM Design Research
      </SwitcherLink>
      <SwitcherLink href="https://www.ibm.com/design/ai">
        IBM Design for AI
      </SwitcherLink>
      <SwitcherLink href="https://www.ibm.com/services/ibmix/">
        IBM iX
      </SwitcherLink>
    </>
  );
};

const CustomSwitcher = props => <Switcher {...props} />;

CustomSwitcher.defaultProps = {
  children: <DefaultChildren />,
};

export default CustomSwitcher;
