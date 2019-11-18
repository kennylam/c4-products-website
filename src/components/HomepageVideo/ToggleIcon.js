import React from 'react';
import {
  PlayOutlineFilled32,
  PauseOutlineFilled32,
} from '@carbon/icons-react';

const Pause = () => <PauseOutlineFilled32 />;

const Play = () => <PlayOutlineFilled32 />;

const ToggleIcon = ({ paused }) =>
  paused ? <Play /> : <Pause />;

export default ToggleIcon;
