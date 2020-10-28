import React from 'react';
import { Tabs, Tab } from 'gatsby-theme-carbon'
import LightThemeLibrary from '../LightThemeLibrary/LightThemeLibrary';
import DarkThemeLibrary from '../DarkThemeLibrary/DarkThemeLibrary';

import './_overrides.scss'

const PictogramContainer = () => {
  return (
    <Tabs>
      <Tab label="Light">
        <LightThemeLibrary />
      </Tab>
      {
      /* 
       * The span is necessary to be able to target the specific element.
       * Unable to add className to tab itself.  
       * This is a hack until a better solution can be determined. 
      */
      }
      <span className="dark-theme__tab"></span>
      <Tab label="Dark">
        <DarkThemeLibrary />
      </Tab>
   
    </Tabs>

  )
}

export default PictogramContainer;
