import React from "react";
import styled from "styled-components";

const Topbar = props => {
  const Header = styled.div`
    width: 100%;
    height: 40px;
    background-color: PaleGreen;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    margin-bottom: 40px;
  `;

  return (
    <Header>
      <div>Snake</div>
      <div>Level: 1</div>
    </Header>
  );
};

export default Topbar;
