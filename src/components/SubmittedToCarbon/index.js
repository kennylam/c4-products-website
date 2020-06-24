import React from 'react';
import { Row, Column } from 'gatsby-theme-carbon/src/components/Grid';
import { Launch16 } from '@carbon/icons-react';
import { image, text, textReference } from './SubmittedToCarbon.module.scss';
import submittedImage from './images/submitted-to-carbon.svg';

const SubmittedToCarbon = ({ to, children }) => {
  return (
    <Row>
      <Column colMd={4} colLg={4}>
        <img className={image} alt="Submitted to carbon" src={submittedImage} />
      </Column>
      <Column colMd={8} colLg={8}>
        <div className={text}>
          <div>
            {children}
          </div>
          <div  className={textReference}>
            Click <a href={to} target="_blank" rel="noopener noreferrer">
            here <Launch16 fill="currentColor" style={{'verticalAlign': 'middle', 'margin': '0 6px 2px 0'}}/></a>
            to view the Carbon website.
          </div>
        </div>
      </Column>
    </Row>
  );
};

export default SubmittedToCarbon;
