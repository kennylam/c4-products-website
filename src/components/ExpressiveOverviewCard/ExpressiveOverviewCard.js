import React from 'react';

import { Launch20 } from '@carbon/icons-react';

import * as styles from './ExpressiveOverviewCard.module.scss';

function ExpressiveOverviewCard({
  title,
  href,
  children,
}) {
  return href ? (
    <a href={href} className={styles.card}>
      <h5>{title}</h5>
      {children}
      <div className={styles.icon}>
        <Launch20 />
      </div>
    </a>
  ) : (
    <div className={styles.card}>
      <h5>{title}</h5>
      {children}
    </div>
  );
}

export default ExpressiveOverviewCard;
