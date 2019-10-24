import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Button from "../button/button";
import * as actionTypes from "../../store/actions";

const Controls = props => {
  const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    @media (min-width: 1200px) {
      margin-left: 50px;
    }
    @media (min-width: 1400px) {
      margin-left: 100px;
    }
  `;

  const Upper = styled.div`
    display: flex;
    justify-content: center;
  `;

  const Bottom = styled.div`
    display: flex;
    justify-content: center;
  `;

  const ButtonWrapper = styled.div`
    margin: 2px;
  `;

  const Main = styled.div``;

  document.onkeydown = function(e) {
    e = e || window.event;
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
      <Main>
        <Upper>
          <ButtonWrapper>
            <Button clicked={props.up}>Up</Button>
          </ButtonWrapper>
        </Upper>
        <Bottom>
          <ButtonWrapper>
            <Button clicked={props.left}>Left</Button>
          </ButtonWrapper>
          <ButtonWrapper>
            <Button clicked={props.down}>Down</Button>
          </ButtonWrapper>
          <ButtonWrapper>
            <Button clicked={props.right}>Right</Button>
          </ButtonWrapper>
        </Bottom>
        <div>
          <Button clicked={props.grow}>Grow</Button>
        </div>
      </Main>
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
    right: () => dispatch({ type: actionTypes.MOVE_RIGHT }),
    grow: () => dispatch({ type: actionTypes.GROW })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls);
