import { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './NavLinkWrapper.module.scss';

type Props = {
  to: string;
  type?: 'default' | 'cta';
  children: ReactElement | ReactElement[];
};

export const NavLinkWrapper = ({ type = 'default', children, to }: Props) => {
  return (
    <NavLink className={styles[type]} to={to}>
      {children}
    </NavLink>
  );
};
