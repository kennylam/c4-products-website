import React from "react";
import { Helmet } from "react-helmet";

const RotateIcon = ({children}) => (
  <Helmet>
    <style type="text/css">
      {`
        div {
            animation: rotating 8s infinite linear;
          }
          
          @keyframes rotating {
            from {transform: scaleY(-1) rotate(360deg);}
            to {scaleY(-1) rotate(0deg);}
          }
      `}
      {children}
    </style>
  </Helmet>
);

export default RotateIcon;