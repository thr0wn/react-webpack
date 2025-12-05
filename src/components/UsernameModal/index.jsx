import React, { useCallback, useState, useContext } from "react";
import Modal from "@/src/components/Modal";
import Title from "@/src/components/Title";
import Text from "@/src/components/Text";
import Button from "@/src/components/Button";
import "./index.scss";

export const UsernameContext = React.createContext({ open: false, resolve: () => null, setContext: () => null });

export const getUsername = async (context) => {
  const token = await Promise.resolve("fake-token-123");

  const username = await new Promise((resolve) => {
    const newContext = { ...context, open: true };
    context.setContext({ ...newContext, resolve });
  });

  console.info(`getUsername() returned ${username}`);

  return { username, token };
};

const UsernameModal = (props) => {
  const [username, setUsername] = useState("");
  const context = useContext(UsernameContext);
  const onChange = useCallback((event) => {
    setUsername(event.target.value);
  }, []);
  const onClose = useCallback(() => {
    context.resolve(username);
    context.setContext({ ...context, open: false });
  }, [username, context]);
  return (
    <Modal open={context.open} onClose={onClose} {...props}>
      <Title>Username Modal</Title>
      <Text>Enter a username</Text>
      <input type="text" value={username || ""} onChange={onChange} />
      <br />
      <Button onClick={onClose}>Ok</Button>
    </Modal>
  );
};

export default UsernameModal;
