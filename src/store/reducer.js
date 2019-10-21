import React from "react";
import * as actionTypes from "./actions";


const initialState = {
  cols: 10,
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

    default:
      return state;
  }
};

export default Reducer;
