import React from 'react';
import { HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import HomepageVideo from '../../components/HomepageVideo/HomepageVideo';
import { bannerText, firstRightText, thirdRightText } from './Homepage.module.scss';

const FirstLeftText = () => <p>Unifying the portfolio experience of <strong>IBM Cloud, Data and AI</strong> products.</p>;

const FirstRightText = () => (
  <div>
    <p className={firstRightText}>This site provides guidance and resources for designers working on products within the <strong>Cloud, Data and AI</strong> portfolio.</p>
    <p className={firstRightText}>Where any of our products have requirements not already met by Carbon, these are provided as additional patterns and components here.</p>
    <p className={thirdRightText}>This site contains assets that are platform agnostic and can be used by any product design team. You'll also find links to IBM Cloud and Watson specific guidelines.</p>
  </div>
);

const SecondLeftText = () => <p>IBM Cloud, Data and AI</p>;

const SecondRightText = () => (
  <p>
    Incorporating: Blockchain, Business Analytics, Cloud Integration, Cloud Platform, Information Management, and Watson AI.
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
