import React from "react";
import styled from "styled-components";

const Content = styled.div``;

const Cell = props => {
  const Wrapper = styled.div`
    background: papayawhip;
    width: ${props.size}px;
    height: ${props.size}px;
    border: 1px solid black;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return (
    <Wrapper>
      <Content>{props.coord}</Content>
    </Wrapper>
  );
};

export default Cell;
