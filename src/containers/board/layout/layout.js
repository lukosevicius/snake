import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

class Layout extends Component {
  render() {
    return <Wrapper>{this.props.children}</Wrapper>;
  }
}

export default Layout;
