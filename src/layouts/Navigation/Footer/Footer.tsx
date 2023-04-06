import React from 'react';

import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.linksList}>
        {/* all li elements needs to be replaces in the future with react-router-dom Link elements */}
        <li className={styles.listElement}>Terms of service</li>
        <li className={styles.listElement}>Privacy policy</li>
        <li className={styles.listElement}>Blog</li>
        <li className={styles.listElement}>About</li>
      </ul>
    </div>
  );
};
