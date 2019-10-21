import React, { Component } from "react";
import styled from "styled-components";
import Topbar from "../../../components/topbar/topbar";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 20px;
`;

class Layout extends Component {
  render() {
    return (
      <Wrapper>
        <Topbar />
        {this.props.children}
      </Wrapper>
    );
  }
}

export default Layout;
