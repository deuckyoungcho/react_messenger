import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

const Messenger = () => {
  return (
    <Wrapper>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </Wrapper>
  );
};

export default Messenger;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 100%;
  border: 1px solid #aaa;
`;
