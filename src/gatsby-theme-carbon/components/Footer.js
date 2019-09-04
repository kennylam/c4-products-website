import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';

const Content = () => (
  <>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </>
);

const links = {
  firstCol: [
    { href: 'https://ibm.com/design', linkText: 'IBM Design' },
    { href: 'https://ibm.com/design', linkText: 'IBM Design' },
    { href: 'https://ibm.com/design', linkText: 'IBM Design' },
  ],
  secondCol: [
    { href: 'https://ibm.com/design', linkText: 'IBM Design' },
    { href: 'https://ibm.com/design', linkText: 'IBM Design' },
    { href: 'https://ibm.com/design', linkText: 'IBM Design' },
    { href: 'https://ibm.com/design', linkText: 'IBM Design' },
  ],
};

const CustomFooter = () => <Footer links={links} Content={Content} />;

export default CustomFooter;
