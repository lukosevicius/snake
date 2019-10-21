import React from "react";
import * as actionTypes from "../actions";

const initialState = {
  cols: 10, //cols in a row
  boardSize: "", //in px
  cellSize: "",
  snakeCoords: 13
};

const Reducer = (state = initialState, action) => {
  if (action.type.indexOf("MOVE_") > -1) {
    const currPos = state.snakeCoords.toString();
    const length = currPos.length;
    const side = length / 2;

    var X = +currPos.substring(0, side);
    var Y = +currPos.substring(side);
    var newPos = "";
  }

  const combine = (X, Y) => {
    return X.toString() + Y.toString();
  };

  switch (action.type) {
    case actionTypes.MOVE_UP:
      if (X === 0) {
        X = state.cols;
      }
      X = X - 1;

      newPos = combine(X, Y);

      return {
        ...state,
        snakeCoords: newPos
      };

    case actionTypes.MOVE_DOWN:
      if (X === state.cols - 1) {
        X = 0;
      }
      X = X + 1;

      newPos = combine(X, Y);

      return {
        ...state,
        snakeCoords: newPos
      };

    case actionTypes.MOVE_LEFT:
      if (Y === 0) {
        Y = state.cols;
      }
      Y = Y - 1;

      newPos = combine(X, Y);

      return {
        ...state,
        snakeCoords: newPos
      };

    case actionTypes.MOVE_RIGHT:
      if (Y === state.cols - 1) {
        Y = 0;
      }
      Y = Y + 1;

      newPos = combine(X, Y);

      return {
        ...state,
        snakeCoords: newPos
      };
    case actionTypes.CALC_CELL:
      const cellSize = state.boardSize / state.cols;

      console.log(state.boardSize);
      console.log(state.cols);
      console.log(cellSize);

      return {
        ...state,
        cellSize: cellSize
      };
    case actionTypes.CALC_BOARD:
      let width = window.screen.width;
      let height = window.screen.height;
      let boardSize = 800;

      console.log('width: ' + window.screen.width);
      

      if(width <= 280) {
        boardSize = 220;
      }
      else if(width <= 320) {
        boardSize = 240;
      }
      else if(width <= 400) {
        boardSize = 300;
      }
      else if(width <= 500) {
        boardSize = 400;
      }
      else if(width <= 600) {
        boardSize = 500;
      }
      else if(width <= 700) {
        boardSize = 600;
      }
      else if(width <= 800) {
        boardSize = 700;
      }
      else if(width <= 900) {
        boardSize = 800;
      }

      


      console.log();

      return {
        ...state,
        boardSize: boardSize
      };

    default:
      return state;
  }
};

export default Reducer;
