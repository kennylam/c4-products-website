import React from "react";
import { HomepageCallout } from "gatsby-theme-carbon";
import HomepageTemplate from "gatsby-theme-carbon/src/templates/Homepage";
import HomepageVideo from "../../components/HomepageVideo/HomepageVideo";
import SEO from "../../components/SEO";
import pageContext from "../pageContext";
import {
  bannerText,
  rightText,
  bannerTextHeading,
} from "./Homepage.module.scss";

const FirstLeftText = () => (
  <p>
    Unifying the portfolio across the <strong>Cloud and Cognitive</strong>{" "}
    organization
  </p>
);

const FirstRightText = () => (
  <div>
    <p className={rightText}>
      This site provides resources for designers working on products within the
      Cloud, Data and Security business units.
    </p>
    <p className={rightText}>
      Where any of our products have requirements not already met by Carbon,
      these are provided as additional patterns and components here.
    </p>
    <p className={rightText}>
      This site contains assets that are platform agnostic and can be used by
      any product design team.
    </p>
  </div>
);

const SecondLeftText = () => <p>Carbon for Cloud &amp; Cognitive</p>;

const SecondRightText = () => (
  <p>
    Incorporating: Blockchain, Business Analytics, Cloud Integration, Cloud
    Platform, Information Management, Security and Watson AI.
  </p>
);

const BannerText = () => (
  <h1 className={bannerTextHeading}>
    Product design library for IBM Cloud, Data and Security
  </h1>
);

const customProps = {
  Banner: (
    <>
      <section className="homepage--header">
        <div className="bx--grid">
          <div className="bx--row">
            <div className={"bx--col-lg-12 " + bannerText}>{BannerText()}</div>
            <HomepageVideo />
          </div>
        </div>
      </section>
    </>
  ),
  FirstCallout: (
    <HomepageCallout
      backgroundColor="#030303"
      color="white"
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  ),
  SecondCallout: (
    <HomepageCallout
      leftText={SecondLeftText}
      rightText={SecondRightText}
      color="white"
      backgroundColor="#061f80"
    />
  ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  Object.assign(pageContext, props.pageContext);
  return (
    <>
      <SEO pageContext={props.pageContext} />
      <HomepageTemplate {...props} {...customProps} />
    </>
  );
}

export default ShadowedHomepage;
