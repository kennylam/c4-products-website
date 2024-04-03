import React from 'react';
import { Row, Column } from 'gatsby-theme-carbon/src/components/Grid';
import { bannerQuoteWrapper, bannerQuoteContainer, bannerQuoteLeft, bannerQuoteRight, bannerQuoteQuote, bannerQuoteAttribution } from './BannerQuote.module.scss';

const BannerQuote = ({ quote, attribution, background='linear-gradient(45deg, #000, #000 60%, #491d8b)', backgroundColor='#000', backgroundHighlight, textColor='#fff', children }) => {

  const divStyle = { background: backgroundHighlight ?
    `linear-gradient(45deg, ${backgroundColor}, ${backgroundColor} 60%, ${backgroundHighlight})` :
    background };
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
            { children }
          </div>
        </Column>
      </Row>
    </div>
  );
};

export default BannerQuote;
