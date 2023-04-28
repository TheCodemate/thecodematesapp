import { Outlet, useOutletContext } from 'react-router';

import { useModal } from '@components/Modal/hooks';
import { Header } from '@components/Navigation/Header/Header';
import { Footer } from '@components/Navigation/Footer/Footer';
import { Modal } from '@components/Modal/Modal';
import { Form } from '@components/Form/Form';

import styles from './Layout.module.scss';

type ContextType = {
  isModalOpen: boolean;
  toggleModalHandler: () => void;
};

export const Layout = () => {
  const { isModalOpen, toggleModalHandler } = useModal();
  return (
    <div className={styles.container}>
      <Header toggleModalHandler={toggleModalHandler} />
      <Outlet context={{ isModalOpen, toggleModalHandler }} />
      <Footer />
      <Modal isOpen={isModalOpen} toggleModalHandler={toggleModalHandler}>
        <Form toggleModalHandler={toggleModalHandler} showCloseButton={true} />
      </Modal>
    </div>
  );
};

export const useModalContext = () => {
  return useOutletContext<ContextType>();
};
