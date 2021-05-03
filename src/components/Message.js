import React from "react";
import styled from "styled-components";

const Message = ({ message }) => {
  const { content } = message;

  return (
    <Wrapper>
      <Text>{content}</Text>
    </Wrapper>
  );
};

export default Message;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 50px;
`;

const Text = styled.span`
  background: rgb(255, 235, 51);
  padding: 10px;
  border-radius: 10px;
`;
