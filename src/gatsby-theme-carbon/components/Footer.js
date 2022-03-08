import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';

const currentYear = new Date().getFullYear();

const Content = ({ buildTime }) => (
  <>
    <p>Have questions? Email us for site feedbacks or open an issue in <a href="https://github.ibm.com/CDAI-design/pal/issues">GitHub</a></p>
    <p>
      Vanilla Components version <a href="#">9.9.0</a>
      <br />
      React Components version <a href="#">6.26.2</a>
      <br />
      Last updated {buildTime}
      <br />
      Copyright © {currentYear} IBM
    </p>
  </>
);

const links = {
  firstCol: [
    { href: '#', linkText: 'Contribute' },
    { href: 'https://www.ibm.com/privacy', linkText: 'Privacy' },
    { href: 'https://www.ibm.com/legal', linkText: 'Terms of use' },
    { href: 'https://www.ibm.com/', linkText: 'IBM.com' },
  ],
  secondCol: [
    { href: '#', linkText: 'Dribble' },
    { href: 'https://medium.com/carbondesign', linkText: 'Medium' },
    { href: 'https://twitter.com/_carbondesign', linkText: 'Twitter' },
  ],
};

const CustomFooter = () => <Footer links={links} Content={Content} />;

export default CustomFooter;
