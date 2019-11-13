import React from 'react';
import { HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import HomepageVideo from '../../components/HomepageVideo/HomepageVideo';
import { bannerText } from './Homepage.module.scss';

const FirstLeftText = () => <p>Unifying the portfolio experience of <strong>IBM Cloud, Data and AI</strong> products.</p>;

const FirstRightText = () => (
  <div>
    <p className="homepage">This site provides guidance and resources for designers working on products within the <strong>Cloud, Data and AI</strong> portfolio.</p>
    <p className="homepage">Where any of our products have requirements not already met by Carbon, these are provided as additional patterns and components here.</p>
  </div>
);

const SecondLeftText = () => <p>IBM Cloud, Data and AI</p>;

const SecondRightText = () => (
  <p>
    Incorporating: Analytics Platform, Blockchain, Business Analytics, IBM Cloud Integration, IBM Cloud Platform, and IBM Watson Data & AI.
  </p>
);

const BannerText = () => <h1>Cloud, Data and AI<br />Common Pattern Asset Library</h1>;

const customProps = {
  Banner: (
    <>
      <section className="homepage--header">
        <div className="bx--grid">
          <div className="bx--row">
            <div className={'bx--col-lg-12 ' + bannerText}>
              {BannerText()}
            </div>
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
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
