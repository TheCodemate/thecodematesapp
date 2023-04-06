import React, { ReactElement } from 'react';

import styles from './Modal.module.scss';

type ModalProps = {
  children?: ReactElement | ReactElement[];
  isOpen: boolean;
  toggleHandler: () => void;
};

export const Modal: React.FC<ModalProps> = ({ isOpen, children, toggleHandler }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div onClick={toggleHandler} className={styles.backdrop}>
        {children}
      </div>
    </div>
  );
};
