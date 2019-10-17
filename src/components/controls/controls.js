import React from "react";
import styled from "styled-components";
import Button from "../button/button";

const Controls = props => {
  const Wrapper = styled.div`
    margin-top: 20px;
  `;

  return (
    <Wrapper>
      <Button>Up</Button>
    </Wrapper>
  );
};

export default Controls;
