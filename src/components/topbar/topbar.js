import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";


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
console.log(props);

  return (
    <Header>
      <div>Snake</div>
      <div>Length: {props.snakeLength}</div>
    </Header>
  );
};
const mapStateToProps = state => {
  return {
    snakeLength: state.move.snakeLength
  };
};

export default connect(mapStateToProps)(Topbar);
