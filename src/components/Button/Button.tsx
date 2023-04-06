import { ButtonProps } from './Button.types';

import styles from './Button.module.scss';

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
