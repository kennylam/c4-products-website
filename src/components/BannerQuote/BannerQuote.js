import React from 'react';
import { Row, Column } from 'gatsby-theme-carbon/src/components/Grid';
import { bannerQuoteWrapper, bannerQuoteContainer, bannerQuoteLeft, bannerQuoteRight, bannerQuoteQuote, bannerQuoteAttribution, bannerQuoteImage } from './BannerQuote.module.scss';

const BannerQuote = ({ quote, attribution, image, bg='transparent', textColor='#fff' }) => {

  const divStyle = { background: bg };
  const textStyle = { color: textColor };

  return (
    <div className={bannerQuoteWrapper} style={divStyle}>
      <Row>
        <Column className={bannerQuoteContainer}>
          <div className={bannerQuoteLeft}>
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
