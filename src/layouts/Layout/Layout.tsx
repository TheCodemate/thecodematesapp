import { Outlet, useOutletContext } from 'react-router';

import { useModal } from '@components/Modal/hooks';
import { Header } from '@components/Navigation/Header/Header';
import { Footer } from '@components/Navigation/Footer/Footer';
import { Modal } from '@components/Modal/Modal';

import styles from './Layout.module.scss';
import { LoginForm } from '@/components/Forms/LoginForm/LoginForm';
import { RegisterForm } from '@/components/Forms/RegisterForm/RegisterForm';
import { Dispatch, SetStateAction, useState } from 'react';

type ContextType = {
  isModalOpen: boolean;
  toggleModalHandler: () => void;
  isRegisterRequested: boolean;
  setIsRegisterRequested: Dispatch<SetStateAction<boolean>>;
};

export const Layout = () => {
  const { isModalOpen, toggleModalHandler } = useModal();
  const [isRegisterRequested, setIsRegisterRequested] = useState(false);
  return (
    <div className={styles.container}>
      <Header toggleModalHandler={toggleModalHandler} />
      <Outlet
        context={{ isModalOpen, toggleModalHandler, isRegisterRequested, setIsRegisterRequested }}
      />
      <Footer />
      <Modal isOpen={isModalOpen} toggleModalHandler={toggleModalHandler}>
        {isRegisterRequested ? (
          <RegisterForm
            toggleModalHandler={toggleModalHandler}
            showCloseButton={true}
            registrationRequestedHandler={setIsRegisterRequested}
          />
        ) : (
          <LoginForm
            toggleModalHandler={toggleModalHandler}
            showCloseButton={true}
            registrationRequestedHandler={setIsRegisterRequested}
          />
        )}
      </Modal>
    </div>
  );
};

export const useModalContext = () => {
  return useOutletContext<ContextType>();
};
