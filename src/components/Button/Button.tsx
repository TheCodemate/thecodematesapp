import { ReactNode } from 'react';
import styles from './Button.module.scss';

export type Props = {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'action' | 'outlined' | 'disabled' | 'default';
};

export const Button = ({ children, onClick, variant = 'default' }: Props) => {
  return (
    <button className={`${styles.button} ${styles[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
};
