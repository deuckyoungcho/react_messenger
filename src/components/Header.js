import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <span>채팅방 이름</span>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  flex: 0 0 50px;
  border-bottom: 1px solid #aaa;
`;
