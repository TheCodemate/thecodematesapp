import { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './NavLinkWrapper.module.scss';

type Props = {
  to: string;
  children: ReactElement | ReactElement[];
};

export const NavLinkWrapper = ({ children, to }: Props) => {
  return (
    <NavLink className={styles.navLink} to={to}>
      {children}
    </NavLink>
  );
};
