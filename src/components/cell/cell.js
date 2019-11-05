import React from "react";
import styled from "styled-components";

const Cell = props => {
  const Wrapper = styled.div`
    background: papayawhip;
    width: ${props.size}px;
    height: ${props.size}px;
    // width: 10%;
    // height: 10%;
    border: 1px solid black;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const Snake = styled.div`
    width: 60%;
    height: 60%;
    border-radius: 50%;
    background-color: green;
  `;

  let content = <div>{props.coord}</div>;

  if (props.snakeCoords.indexOf(+props.coord) > -1) {
    content = <Snake />;
  }

  return <Wrapper>{content}</Wrapper>;
};

export default Cell;
