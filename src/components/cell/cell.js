import React from "react";
import styled from "styled-components";

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

  const SnakeHead = styled.div`
    width: 100%;
    height: 100%;
    background-color: green;
  `;

  const SnakeBody = styled.div`
    width: 100%;
    height: 100%;
    background-color: lime;
  `;

  const SnakeTail = styled.div`
    width: 100%;
    height: 100%;
    background-color: lime;
  `;

  const Apple = styled.div`
    width: 100%;
    height: 100%;
    background-color: orange;
  `;

  let content = <div></div>;
  // let content = <div>{props.coords}</div>;

  if (props.hasApple) {
    content = <Apple />;
  }
  
  switch (true) {
    case props.snakeHead:
      content = <SnakeHead />;
      break;
    case props.snakeBody:
      content = <SnakeBody />;
      break;
    case props.snakeTail:
      content = <SnakeTail />;
      break;

    default:
      break;
  }

  return <Wrapper>{content}</Wrapper>;
};

export default Cell;
