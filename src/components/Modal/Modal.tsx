import React, { ReactElement } from 'react';

import styles from './Modal.module.scss';

type Props = {
  children?: ReactElement | ReactElement[];
  isOpen: boolean;
  toggleModalHandler: () => void;
};

export const Modal = ({ isOpen, children, toggleModalHandler }: Props) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div onClick={toggleModalHandler} className={styles.backdrop}>
        {children}
      </div>
    </div>
  );
};
