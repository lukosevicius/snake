import React from "react";
import styled from "styled-components";

const Button = props => {
  const Button = styled.button`
    color: #494949 !important;
    text-transform: uppercase;
    text-decoration: none;
    background: #ffffff;
    padding: 20px;
    border: 4px solid #494949 !important;
    display: inline-block;
    transition: all 0.1s;
    &:active {
      color: #ffffff !important;
      background: #f6b93b;
      border-color: #f6b93b !important;
      transition: all 0.1s;
    }
  `;

  return <Button onClick={props.clicked}>{props.children}</Button>;
};

export default Button;
