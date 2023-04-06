import React, { ReactElement } from 'react';

import styles from './Modal.module.scss';

type ModalProps = {
  children?: ReactElement | ReactElement[];
  isOpen: boolean;
  toggleModalHandler: () => void;
};

export const Modal: React.FC<ModalProps> = ({ isOpen, children, toggleModalHandler }) => {
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
