import { useModal } from '@components/Modal/hooks';

import { Modal } from '@components/Modal/Modal';
import { Form } from '@components/Form/Form';

import { Footer } from '@layouts/Navigation/Footer/Footer';
import { Header } from '@layouts/Navigation/Header/Header';
import { Content } from '@layouts/Content/Content';

import styles from './Layout.module.scss';

export const Layout = () => {
  const { isModalOpen, toggleModalHandler } = useModal();

  return (
    <div className={styles.container}>
      <Header toggleModalHandler={toggleModalHandler} />
      <Modal toggleModalHandler={toggleModalHandler} isOpen={isModalOpen}>
        <Form toggleModalHandler={toggleModalHandler} />
      </Modal>
      <Content toggleModalHandler={toggleModalHandler} />
      <Footer />
    </div>
  );
};
