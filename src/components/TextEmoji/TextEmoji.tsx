import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
};

export const TextEmoji = ({ children, className }: Props) => {
  return (
    <span className={className} aria-hidden="true">
      {children}
    </span>
  );
};
