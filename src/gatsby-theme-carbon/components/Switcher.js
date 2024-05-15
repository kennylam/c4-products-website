//
// Any changes to this file will be overwritten (during build)
//

import React, { useContext } from 'react';
import Switcher from 'gatsby-theme-carbon/src/components/Switcher/Switcher';
import NavContext from 'gatsby-theme-carbon/src/util/context/NavContext';
import { link, linkDisabled, divider } from 'gatsby-theme-carbon/src/components/Switcher/Switcher.module.scss';
import { Locked16 } from '@carbon/icons-react';

// START COPY FROM https://github.com/carbon-design-system/gatsby-theme-carbon/blob/master/packages/gatsby-theme-carbon/src/components/Switcher/Switcher.js#L21
export const SwitcherDivider = (props) => (
  <li className={divider}>
    <span {...props} />
  </li>
);
export const SwitcherLink = ({
  disabled,
  children,
  href: hrefProp,
  ...rest
}) => {
  const href = disabled || !hrefProp ? undefined : hrefProp;
  const className = disabled ? linkDisabled : link;
  const { switcherIsOpen } = useContext(NavContext);

  return (
    <li>
      <a
        aria-disabled={disabled}
        role="button"
        tabIndex={switcherIsOpen ? 0 : '-1'}
        className={className}
        href={href}
        {...rest}
      >
        {children}
      </a>
    </li>
  );
};
// END COPY

const CustomSwitcher = () => <Switcher>
  <SwitcherDivider>Foundations</SwitcherDivider>
  <SwitcherLink href="https://www.ibm.com/brand/">IBM Brand Center<Locked16 /></SwitcherLink>
  <SwitcherLink href="https://www.ibm.com/design/language/">IBM Design Language</SwitcherLink>
  <SwitcherDivider>Implementation</SwitcherDivider>
  <SwitcherLink href="https://www.carbondesignsystem.com/">Carbon Design System</SwitcherLink>
  <SwitcherLink href="https://pages.github.ibm.com/cdai-design/pal/">Carbon for IBM Products<Locked16 /></SwitcherLink>
  <SwitcherLink href="https://pages.github.ibm.com/ibmcloud/design-operations/carbon-for-cloud/">Carbon for Cloud<Locked16 /></SwitcherLink>
  <SwitcherLink href="https://www.ibm.com/standards/carbon/">Carbon for IBM.com</SwitcherLink>
  <SwitcherLink href="https://www.ibm.com/design/event/">IBM Event Design</SwitcherLink>
  <SwitcherLink href="https://www.ibm.com/design/workplace/">IBM Workplace Design</SwitcherLink>
  <SwitcherDivider>Practices</SwitcherDivider>
  <SwitcherLink href="https://www.ibm.com/design/thinking/">Enterprise Design Thinking</SwitcherLink>
  <SwitcherLink href="https://www.ibm.com/able/">IBM Accessibility</SwitcherLink>
  <SwitcherLink href="https://www.ibm.com/design/ai/">IBM Design for AI</SwitcherLink>
  <SwitcherLink href="https://www.ibm.com/design/research/">IBM Design Research</SwitcherLink>
  <SwitcherLink href="https://w3.ibm.com/design/experience-standards/">IBM Experience Standards<Locked16 /></SwitcherLink>
  <SwitcherDivider>Community</SwitcherDivider>
  <SwitcherLink href="https://w3.ibm.com/design/">IBM Design<Locked16 /></SwitcherLink>
  <SwitcherLink href="https://www.ibm.com/design/racial-equity-in-design/">Racial Equity in Design</SwitcherLink>
</Switcher>

export default CustomSwitcher;
