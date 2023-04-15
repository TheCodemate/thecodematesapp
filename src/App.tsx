import { Layout } from '@layouts/Layout/Layout';
import { Header } from '@layouts/Navigation/Header/Header';
import { Content } from '@layouts/Content/Content';
import { Modal } from '@components/Modal/Modal';
import { Form } from '@components/Form/Form';
import { useModal } from '@components/Modal/hooks';

export const App = () => {
  const { isModalOpen, toggleModalHandler } = useModal();
  return (
    <Layout isFooterVisible={false}>
      <Header toggleModalHandler={toggleModalHandler} />
      <Modal toggleModalHandler={toggleModalHandler} isOpen={isModalOpen}>
        <Form toggleModalHandler={toggleModalHandler} />
      </Modal>
      <Content toggleModalHandler={toggleModalHandler} />
    </Layout>
  );
};
