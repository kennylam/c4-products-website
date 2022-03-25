import React from "react";
import HomepageTemplate from "gatsby-theme-carbon/src/templates/Homepage";
import SEO from "../../components/SEO";
import pageContext from "../pageContext";
import {
  bannerText,
  bannerTextHeading,
  bannerContainer,
  homepageHeader,
} from "./Homepage.module.scss";
import TooltipChart from "../../components/Visualization/TooltipChart";
import PatternAdoptionModal from "../../components/Modal/PatternAdoptionModal";

const customProps = {
  Banner: (
    <>
      <section className={homepageHeader}>
        <div className="bx--grid">
          <div className="bx--row">
            <div className={"bx--col-lg-12 " + bannerText}>
              <div className={bannerContainer}>
                <div className={bannerTextHeading}>
                  <h1>Carbon for IBM products</h1>
                  <h2>
                    A single place to view guidance for all components and
                    patterns across Cloud Paks, Cloud Platform, SaaS, and
                    on-premise products
                  </h2>
                </div>
                <PatternAdoptionModal />
              </div>
              <TooltipChart />
            </div>
          </div>
        </div>
      </section>
    </>
  ),
  FirstCallout: null,
  SecondCallout: null
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
