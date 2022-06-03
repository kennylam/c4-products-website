import React from 'react';

import {
  AspectRatio,
  ClickableTile,
} from 'carbon-components-react';

import * as styles from './StepCard.module.scss';

function StepCard({
  title,
  pictogram: Pictogram,
  href,
  children,
}) {
  return (
  <ClickableTile href={href}>
      <AspectRatio ratio="1x1">
        <div className={styles.card}>
          <div className={styles.header}>
            <Pictogram className={styles.pictogram} />
          </div>
          <div className={styles.content}>
            <h4>
              {title}
            </h4>
            <p>
              {children}
            </p>
          </div>
        </div>
      </AspectRatio>
    </ClickableTile>
  );
}

export default StepCard;
