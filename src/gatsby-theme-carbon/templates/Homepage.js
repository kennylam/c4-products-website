import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
// import { calloutLink } from './Homepage.module.scss';

import Carbon from '../../images/carbon.jpg';

const FirstLeftText = () => <p>Unifying the portfolio experience of <strong>IBM Cloud, Data and AI</strong> products.</p>;

const FirstRightText = () => (
  <p>
    <ul>
      <li>A vision of alignment across the portfolio.</li>
      <li>Providing direction for designing and implementing this user experience.</li>
      <li>Maintaining conformity of the IBM Design Language and Carbon.</li>
      <li>Informing how to maintain consistent experiences and behaviours as well as sharing reusable components whenever possible.</li>
    </ul>
  </p>
);

const SecondLeftText = () => <p>Another callout if needed</p>;

const SecondRightText = () => (
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...
  </p>
);

const BannerText = () => <h1>Cloud, Data and AI<br />Design</h1>;

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={Carbon} />,
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
