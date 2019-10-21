import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Button from "../button/button";
import * as actionTypes from "../../store/actions";

const Controls = props => {
  const Wrapper = styled.div`
    margin-top: 20px;
  `;

  document.onkeydown = function(e) {
    e = e || window.event;
    // console.log(e.key);
    switch (e.key) {
      case "ArrowUp":
        props.up();
        break;
      case "ArrowDown":
        props.down();
        break;
      case "ArrowLeft":
        props.left();
        break;
      case "ArrowRight":
        props.right();
        break;
    }
  };

  return (
    <Wrapper>
      <Button clicked={props.up}>Up</Button>
      <Button clicked={props.down}>Down</Button>
      <Button clicked={props.left}>Left</Button>
      <Button clicked={props.right}>Right</Button>
    </Wrapper>
  );
};

const mapStateToProps = state => {
  return {
    currentPos: state.snakeCoords
  };
};

const mapDispatchToProps = dispatch => {
  return {
    up: () => dispatch({ type: actionTypes.MOVE_UP }),
    down: () => dispatch({ type: actionTypes.MOVE_DOWN }),
    left: () => dispatch({ type: actionTypes.MOVE_LEFT }),
    right: () => dispatch({ type: actionTypes.MOVE_RIGHT })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls);
