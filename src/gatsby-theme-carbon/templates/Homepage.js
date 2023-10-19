import React from "react";
import HomepageTemplate from "gatsby-theme-carbon/src/templates/Homepage";
import { HomepageBanner, HomepageCallout } from "gatsby-theme-carbon";
import Seo from "../../components/Seo";
import pageContext from "../pageContext";
import {
  homepageWelcome,
  homepageWelcomeDescription
} from "./Homepage.module.scss";
import HomeBannerImg from "../../images/homepage/pal-banner.png";

const FirstLeftText = () => <div className={homepageWelcome}>Welcome</div>;

const FirstRightText = () => (
  <p className={homepageWelcomeDescription}>
    Carbon for IBM Products is single place to view guidance for all assets
    across IBM Software.
  </p>
);

const BannerText = () => <></>;

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={HomeBannerImg} />,
  FirstCallout: (
    <HomepageCallout
      backgroundColor="transparent"
      color="#161616"
      style={{ width: "initial", maxWidth: "fit-content" }}
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  )
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  Object.assign(pageContext, props.pageContext);
  return (
    <>
      <Seo pageContext={props.pageContext} />
      <HomepageTemplate {...props} {...customProps} />
    </>
  );
}

export default ShadowedHomepage;
