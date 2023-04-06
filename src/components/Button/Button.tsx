import { ReactNode } from 'react';
import styles from './Button.module.scss';

export type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'action' | 'outlined' | 'disabled' | 'default';
};

export const Button: React.FC<ButtonProps> = ({ children, onClick, variant = '' as const }) => {
  return (
    <button className={`${styles.button} ${styles[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
};
