import React from "react";
import { Column,  Tile } from "carbon-components-react";
import "./InfoCard.scss";
import "../../styles/card.scss";

const InfoCard = (props) => {

  const { cardName, cardDescription, children } = props;

  return ( 
    <Column lg={6} className="infocard">
      <Tile>
        <div className="infocard__main">
          <h3 className="card__title">
              {cardName}
          </h3>
          <p className="infocard__description">
              {cardDescription}
          </p>
        </div>
          {children}
      </Tile>
    </Column>    
  );
};


export default InfoCard;
