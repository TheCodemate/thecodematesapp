import { ReactNode } from 'react';
import styles from './Button.module.scss';

export type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  style?: React.HTMLAttributes<HTMLButtonElement> | undefined;
  variant?: 'action' | 'outlined' | 'disabled' | 'default';
};

export const Button: React.FC<ButtonProps> = ({
  children,
  style,
  onClick,
  variant = '' as const
}) => {
  return (
    <button style={style} className={`${styles.button} ${styles[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
};
