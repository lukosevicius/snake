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
    // border-radius: 50%;
    // border-radius: 79% 21% 21% 79% / 50% 10% 10% 50% 
    background-color: green;
  `;

  const SnakeTail = styled.div`
    width: 0;
    height: 0;
    border-top: 50px solid transparent;
    border-left: 100px solid red;
    border-bottom: 50px solid transparent;
    background-color: green;
  `;

  const Snake = styled.div`
    width: 100%;
    height: 100%;
    // border-radius: 50%;
    background-color: lime;
  `;

  let content = <div>{props.coord}</div>;

  let snakeHead = null;
  let snakeTail = null;
  let snakeCoords = [];

  props.snake.forEach((element, index) => {
    if (index === 0) {
      snakeHead = element.coord;
    }
    if (index === (props.snake.length - 1)) {
      snakeTail = element.coord;
    } else {
      snakeCoords.push(element.coord);
    }
  });

  //Check if snake should be printed in this cell
  if (snakeCoords.indexOf(props.coord) > -1) {
    if (props.coord === snakeHead) {
      content = <SnakeHead />;
    } else if (props.coord === snakeTail) {
      content = <SnakeTail />;
    } else {
      content = <Snake />;
    }
  }

  return <Wrapper>{content}</Wrapper>;
};

export default Cell;
