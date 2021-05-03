import React from "react";
import styled from "styled-components";
import { Observer, useLocalObservable } from "mobx-react";
import { useStores } from "../stores";

const Footer = () => {
  const { messageStore } = useStores();
  const localStore = useLocalObservable(() => ({
    text: "",
    clear() {
      this.text = "";
    },
  }));

  const sendMessage = () => {
    messageStore.add({
      id: messageStore.messages.length,
      content: localStore.text,
    });
  };

  const handleTextChange = (e) => {
    localStore.text = e.target.value;
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      sendMessage();
      localStore.clear();
    }
  };

  const handleSend = () => {
    sendMessage();
  };

  return (
    <Wrapper>
      <Observer>
        {() => (
          <Textarea
            value={localStore.text}
            onChange={handleTextChange}
            onKeyDown={handleKeyDown}
          />
        )}
      </Observer>
      <Button onClick={handleSend}>전송</Button>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  display: flex;
  flex: 0 0 200px;
`;

const Textarea = styled.textarea`
  flex: 1;
  resize: none;
  border: 0;
  padding: 15px;
  font-size: 15px;
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  flex: 0 0 100px;
  padding: 0;
  margin: 0;
  border: 0;
  outline: 0;
`;
