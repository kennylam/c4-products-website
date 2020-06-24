import React from 'react';
import { Row, Column } from 'gatsby-theme-carbon/src/components/Grid';
import { bannerQuoteWrapper, bannerQuoteContainer, bannerQuoteLeft, bannerQuoteRight, bannerQuoteQuotemark, bannerQuoteQuote, bannerQuoteAttribution, bannerQuoteImage } from './BannerQuote.module.scss';

const BannerQuote = ({ quote, attribution, image, bgColor='transparent', textColor='#fff', quoteColor='#1d3649' }) => {

  const divStyle = { backgroundColor: bgColor };
  const textStyle = { color: textColor };
  const quotemarkStyle = { color: quoteColor }

  return (
    <div className={bannerQuoteWrapper} style={divStyle}>
      <Row>
        <Column className={bannerQuoteContainer}>
          <div className={bannerQuoteLeft}>
            <div className={bannerQuoteQuotemark} style={quotemarkStyle}>{'\u201c'}</div>
            <div className={bannerQuoteQuote} style={textStyle}>{quote}
              {attribution ? <div className={bannerQuoteAttribution}>{attribution}</div> : null}
            </div>
          </div>
          <div className={bannerQuoteRight}>
            {image ? <img className={bannerQuoteImage} src={image} alt="" /> : null}
          </div>
        </Column>
      </Row>
    </div>
  );
};

export default BannerQuote;
