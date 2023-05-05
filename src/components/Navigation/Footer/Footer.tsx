import React from 'react';

import styles from './Footer.module.scss';
import { NavLinkWrapper } from '@/components/NavLinkWrapper/NavLinkWrapper';

export const Footer = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.linksList}>
        {/* all li elements needs to be replaces in the future with react-router-dom Link elements */}
        <li className={styles.listElement}>
          <NavLinkWrapper to={'/terms-of-service'}>
            <p>Terms of service</p>
          </NavLinkWrapper>
        </li>
        <li className={styles.listElement}>
          <NavLinkWrapper to={'/privacy-policy'}>
            <p>Privacy Policy</p>
          </NavLinkWrapper>
        </li>
        <li className={styles.listElement}>Blog</li>
        <li className={styles.listElement}>About</li>
      </ul>
    </div>
  );
};
