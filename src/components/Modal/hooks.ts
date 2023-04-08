import { useState } from 'react';

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModalHandler = () => {
    setIsModalOpen((prev) => !prev);
  };

  return {
    isModalOpen,
    toggleModalHandler
  };
};
