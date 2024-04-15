import React from "react";
import Footer from "gatsby-theme-carbon/src/components/Footer";
import packageJson from "gatsby-theme-carbon/package.json";
// import pageContext from "../../pageContext";
// import cdaiConfig from "../../../../cdai-config.json";

const currentYear = new Date().getFullYear();
const versions = {
  "vanilla-components": packageJson.dependencies["carbon-components"],
  "react-components": packageJson.dependencies["carbon-components-react"],
};

const Content = ({ buildTime }) => (
  <>
    <p>
      Have questions? Talk to us
      <br />
      on{" "}
      <a href="https://ibm-casdesign.slack.com/archives/CQGR0HC05">
        #ibmproducts-pal
      </a>
      <br />
      or open an issue in{" "}
      <a href="https://github.ibm.com/CDAI-design/pal/issues">GitHub</a>
    </p>
    <p>
      Vanilla Components version {versions["vanilla-components"]}
      <br />
      React Components version {versions["react-components"]}
      <br />
      Last updated {buildTime}
      <br />
      Copyright © {currentYear} IBM
    </p>
  </>
);

const links = {
  firstCol: [
    { href: "#", linkText: "Contribute" },
    { href: "https://www.ibm.com/privacy", linkText: "Privacy" },
    { href: "https://www.ibm.com/legal", linkText: "Terms of use" },
    { href: "https://www.ibm.com/", linkText: "IBM.com" },
  ],
  secondCol: [
    { href: "https://dribbble.com/_carbondesign/about", linkText: "Dribble" },
    { href: "https://medium.com/carbondesign", linkText: "Medium" },
    { href: "https://twitter.com/_carbondesign", linkText: "Twitter" },
  ],
};

const CustomFooter = () => <Footer links={links} Content={Content} />;

export default CustomFooter;
