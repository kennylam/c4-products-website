import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';
import pageContext from '../pageContext';

const Content = () => (
  <>
    <p>
        Have questions or feedback for us?
      </p>
      <p>
        Contact us via {' '}
        <a href="https://ibm-casdesign.slack.com/messages/G7LSWTAA0">
          Slack
        </a>{' '}
        or open an issue in our {' '}
        <a href="https://github.ibm.com/CDAI-design/pal/issues"> GitHub </a> repo.
      </p>
       <p>Page last updated: { pageContext.MdxNode && pageContext.MdxNode.fields.gitDate.split('T')[0]}</p>
  </>
);

const links = {
  firstCol: [
// Commenting out the 1st placeholder links column
/*
    { href: 'https://ibm.com/design', linkText: 'IBM Design' },
    { href: 'https://ibm.com/design', linkText: 'IBM Design' },
    { href: 'https://ibm.com/design', linkText: 'IBM Design' },
*/
  ],
  secondCol: [
// Commenting out the 2nd placeholder links column
/*
    { href: 'https://ibm.com/design', linkText: 'IBM Design' },
    { href: 'https://ibm.com/design', linkText: 'IBM Design' },
    { href: 'https://ibm.com/design', linkText: 'IBM Design' },
    { href: 'https://ibm.com/design', linkText: 'IBM Design' },
*/
  ],
};

const CustomFooter = () => <Footer links={links} Content={Content} />;

export default CustomFooter;
