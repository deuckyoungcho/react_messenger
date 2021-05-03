import React from "react";
import styled from "styled-components";
import { Observer } from "mobx-react";
import { useStores } from "./../stores";
import Message from "./Message";

const Content = () => {
  const { messageStore } = useStores();
  return (
    <Wrapper>
      <Observer>
        {() =>
          messageStore.messages.map((message) => (
            <Message key={message.id} message={message} />
          ))
        }
      </Observer>
    </Wrapper>
  );
};

export default Content;

const Wrapper = styled.div`
  flex: 1;
  flex-direction: column;
  background: rgba(178, 199, 217);
  border-bottom: 1px solid #aaa;
  padding: 5px 10px;
  overflow: auto;
`;
