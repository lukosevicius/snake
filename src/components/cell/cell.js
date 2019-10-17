import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  // padding: 3em;
  background: papayawhip;
  width: 10%;
  height: 10%;
  border: 1px solid black;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div``;

const Cell = props => {
  return (
    <Wrapper>
      <Content>{props.coord}</Content>
    </Wrapper>
  );
};

export default Cell;
