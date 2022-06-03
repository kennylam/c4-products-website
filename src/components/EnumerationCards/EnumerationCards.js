import React from 'react';
import cx from 'classnames';
import * as colors from '@carbon/colors';

import {
  list,
  ordered,
  unordered,
} from './EnumerationCards.module.scss';

function EnumerationCards({
  kind = 'alphabetical',
  color,
  children,
}) {
  let tag = 'ol';

  if (kind === 'checklist') {
    tag = 'ul';
  }

  const classes = cx(
    list,
    {
      [ordered]: tag === 'ol',
      [unordered]: tag === 'ul',
    }
  );

  return React.createElement(
    tag,
    {
      className: classes,
      style: color && {
        '--enumeration-cards-color': colors[color],
      },
    },
    children,
  );
}

export default EnumerationCards;
