import { ReactNode } from 'react';

export type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  style?: React.HTMLAttributes<HTMLButtonElement> | undefined;
  variant?: 'action' | 'outlined' | 'disabled' | 'default';
};
