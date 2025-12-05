import React, { useCallback, useState, useContext } from "react";
import PageWithHeader from "@/src/pages/PageWithHeader";
import Title from "@/src/components/Title";
import Text from "@/src/components/Text";
import Modal from "@/src/components/Modal";
import Button from "@/src/components/Button";
import UsernameModal, { UsernameContext, getUsername } from "@/src/components/UsernameModal";
import "./index.scss";

const PageWithModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const usernameContext = useContext(UsernameContext);
  
  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const openUsernameDialog = useCallback(async () => {
    await getUsername(usernameContext);
  }, [usernameContext]);

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
        <section>
          <Title>Username dialgog</Title>
          <Text>
            Click below to open a username dialog.
          </Text>
          <Button onClick={openUsernameDialog}>open dialog</Button>
          <UsernameModal />
        </section>
      </PageWithHeader >
    </>
  )
};

export default PageWithModal;
