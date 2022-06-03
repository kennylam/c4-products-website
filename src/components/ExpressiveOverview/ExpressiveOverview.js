import React from 'react';
import cx from 'classnames';

import {
  Column,
  Row,
} from 'carbon-components-react';

import * as styles from './ExpressiveOverview.module.scss';

function ExpressiveOverview({
  title,
  pictogram: Pictogram,
  color = 'blue',
  children,
}) {
  const colorClasses = cx(
    Object.fromEntries(['red', 'magenta', 'purple', 'blue', 'cyan', 'teal', 'green'].map((key) => [styles[key], color === key])),
  );

  return (
    <Row className={colorClasses}>
      <Column className={styles.intro} sm={4} md={2} lg={4}>
        <div className={styles.title}>
          <h4>
            {title}
          </h4>
          <Pictogram className={styles.pictogram} />
        </div>
      </Column>
      <Column sm={4} md={6} lg={8}>
        <div className={styles.content}>
          {children}
        </div>
      </Column>
    </Row>
  );
}

export default ExpressiveOverview;
