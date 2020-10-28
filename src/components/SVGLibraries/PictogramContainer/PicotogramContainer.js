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
      <span className="test"></span>
      <Tab label="Dark">
        <DarkThemeLibrary />
      </Tab>
   
    </Tabs>

  )
}

export default PictogramContainer;
