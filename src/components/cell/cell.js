import React from "react";
import styled from "styled-components";


const Cell = props => {
  
  const Inside = styled.div``;
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

  const Snake = styled.div`
    width: 60%;
    height: 60%; 
    border-radius: 50%;
    background-color: green;
  `

  let content = <div>{props.coord}</div>;

  // console.log(props.coord);
  // console.log(props.snakeCoords);

  if(+props.snakeCoords === +props.coord){
    content = <Snake />
  }
  

  return (
    <Wrapper>
      {content}
    </Wrapper>
  );
};

export default Cell;
