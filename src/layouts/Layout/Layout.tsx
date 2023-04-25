import { Outlet, useOutletContext } from 'react-router';

import { useModal } from '@components/Modal/hooks';
import { Header } from '@components/Navigation/Header/Header';
import { Footer } from '@components/Navigation/Footer/Footer';
import { Modal } from '@components/Modal/Modal';

import styles from './Layout.module.scss';
import { useState } from 'react';
import { FormLayout } from '@/components/Forms/FormLayout/FormLayout';

type ContextType = {
  isModalOpen: boolean;
  toggleModalHandler: () => void;
  isRegisterRequested: boolean;
  openRegisterFormHandler: () => void;
  closeRegisterFormHandler: () => void;
};

export const Layout = () => {
  const { isModalOpen, toggleModalHandler } = useModal();
  const [isRegisterRequested, setIsRegisterRequested] = useState(false);

  const openRegisterFormHandler = () => {
    setIsRegisterRequested(true);
  };

  const closeRegisterFormHandler = () => {
    setIsRegisterRequested(false);
  };

  return (
    <div className={styles.container}>
      <Header
        toggleModalHandler={toggleModalHandler}
        openRegisterFormHandler={openRegisterFormHandler}
        closeRegisterFormHandler={closeRegisterFormHandler}
      />
      <Outlet
        context={{
          isModalOpen,
          toggleModalHandler,
          isRegisterRequested,
          openRegisterFormHandler,
          closeRegisterFormHandler
        }}
      />
      <Footer />
      <Modal isOpen={isModalOpen} toggleModalHandler={toggleModalHandler}>
        <FormLayout
          isRegisterRequested={isRegisterRequested}
          openRegisterFormHandler={openRegisterFormHandler}
          closeRegisterFormHandler={closeRegisterFormHandler}
          toggleModalHandler={toggleModalHandler}
          showCloseButton
        />
      </Modal>
    </div>
  );
};

export const useModalContext = () => {
  return useOutletContext<ContextType>();
};
