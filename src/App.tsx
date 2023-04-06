import { Footer } from 'layouts/Navigation/Footer/Footer';
import { Header } from 'layouts/Navigation/Header/Header';
import { Modal } from 'components/Modal/Modal';
import { Form } from 'components/Form/Form';
import { useModal } from 'components/Modal/hooks';

export const App: React.FC = () => {
  const { isModalOpen, toggleModalHandler } = useModal();

  return (
    <>
      <Header toggleModalHandler={toggleModalHandler} />
      <Modal toggleModalHandler={toggleModalHandler} isOpen={isModalOpen}>
        <Form toggleModalHandler={toggleModalHandler} />
      </Modal>
      <Footer />
    </>
  );
};
