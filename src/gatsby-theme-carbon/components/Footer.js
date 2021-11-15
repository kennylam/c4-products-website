import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';
import pageContext from '../pageContext';

const Content = () => (
  <>
    <p>Have questions? Email us for site feedbacks or open an issue in <a href="https://github.ibm.com/CDAI-design/pal/issues">GitHub</a></p>
    <p>
      Vanilla Components version <a href="#">9.9.0</a>
      <br />
      React Components version <a href="#">6.26.2</a>
      <br />
      Last updated {pageContext.MdxNode && pageContext.MdxNode.fields.gitDate.split('T')[0]}
      <br />
      Copyright © 2018 IBM
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
