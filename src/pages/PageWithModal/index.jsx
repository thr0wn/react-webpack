import React, { useCallback, useState } from "react";
import PageWithHeader from "@/src/pages/PageWithHeader";
import Title from "@/src/components/Title";
import Text from "@/src/components/Text";
import Modal from "@/src/components/Modal";
import Button from "@/src/components/Button";
import "./index.scss";

const PageWithModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <>
      <Modal open={isModalOpen} onClose={closeModal}>
        <Title>Modal title</Title>
        <Text>
          Modal content.
        </Text>
      </Modal>
      <PageWithHeader>
        <section>
          <Title>Basic modal</Title>
          <Text>
            Click below to open a controlled modal.
          </Text>
          <Button onClick={openModal}>open modal</Button>
        </section>
      </PageWithHeader >
    </>
  )
};

export default PageWithModal;
