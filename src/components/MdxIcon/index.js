import React from 'react';
import cx from 'classnames';
import { Launch16, LogoGithub32, Download16 } from '@carbon/icons-react';
import { mdxIcon, iconInverse } from './MdxIcon.module.scss';

import Slack from '../../images/Slack-icon.png';

const localIcons = {
  Slack,
};

const carbonIcons = {
  Launch16,
  LogoGithub32,
  Download16,
};

const iconColor = {
  inverse: iconInverse,
};

const MdxIcon = ({ name, color }) => {
  if (localIcons[name]) {
    return (
      <img className={mdxIcon} alt={`${name} icon`} src={localIcons[name]} />
    );
  }

  if (carbonIcons[name]) {
    const Icon = carbonIcons[name];
    return <Icon className={cx(mdxIcon, iconColor[color])} />;
  }

  return null;
};

export default MdxIcon;
