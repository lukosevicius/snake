import React from "react";
import * as actionTypes from "../actions";
import { EWOULDBLOCK } from "constants";

const initialState = {
  cols: 10, //cols in a row
  boardSize: 800, //in px
  cellSize: 80,
  snake: [
    { coord: 44, dir: "LEFT" },
    { coord: 45, dir: "LEFT" },
    { coord: 46, dir: "LEFT" }
  ],
  snakeLength: 1,
  direction: "RIGHT"
};

const Reducer = (state = initialState, action) => {
  if (action.type.indexOf("MOVE_") > -1 || action.type.indexOf("GROW") > -1) {
    var newSnakeCoords = [];
    const currPos = state.snake[0].toString();
    const length = currPos.length;
    const side = length / 2;

    var X = +currPos.substring(0, side);
    var Y = +currPos.substring(side);
    var newPos = "";
  }

  const getX = coord => {
    coord = coord.toString();
    return +coord.substring(0, coord.length / 2);
  };

  const getY = coord => {
    coord = coord.toString();
    return +coord.substring(coord.length / 2);
  };

  const combine = (X, Y, direction) => {
    return {
      coord: +(X.toString() + Y.toString()),
      dir: direction
    };
  };

  const move = (direction, X, Y) => {
    switch (direction) {
      case "UP":
        if (X === 0) {
          X = state.cols;
        }
        X = X - 1;
        break;
      case "DOWN":
        if (X === state.cols - 1) {
          X = 0;
        } else {
          X = X + 1;
        }
        break;

      case "LEFT":
        if (Y === 0) {
          Y = state.cols;
        } else {
          Y = Y - 1;
        }
        break;

      case "RIGHT":
        if (Y === state.cols - 1) {
          Y = 0;
        } else {
          Y = Y + 1;
        }
        break;

      default:
        break;
    }

    return combine(X, Y, direction);
  };

  switch (action.type) {
    case actionTypes.MOVE_UP:
      state.snake.forEach((snakeElement, index) => {
        X = getX(snakeElement.coord);
        Y = getY(snakeElement.coord);

        if (index === 0) {
          newPos = move("UP", X, Y);
        } else {
          // console.log(snakeElement[index - 1][1]);

          newPos = move(state.direction, X, Y);
        }

        newSnakeCoords = newSnakeCoords.concat(newPos);
      });

      console.log(newSnakeCoords);

      return {
        ...state,
        snake: newSnakeCoords,
        direction: "UP"
      };

    case actionTypes.MOVE_DOWN:
      state.snake.forEach((coord, index) => {
        X = getX(coord);
        Y = getY(coord);

        newPos = move("DOWN", X, Y);
        newSnakeCoords = newSnakeCoords.concat(newPos);
      });

      console.log(newSnakeCoords);

      return {
        ...state,
        snake: newSnakeCoords,
        direction: "DOWN"
      };

    case actionTypes.MOVE_LEFT:
      state.snake.forEach(element => {
        X = getX(element.coord);
        Y = getY(element.coord);

        newPos = move("LEFT", X, Y);

        newSnakeCoords.push(newPos);
      });

      console.log(newSnakeCoords);

      return {
        ...state,
        snake: newSnakeCoords,
        direction: "LEFT"
      };

    case actionTypes.MOVE_RIGHT:
      state.snake.forEach(element => {
        X = getX(element.coord);
        Y = getY(element.coord);

        newPos = move("RIGHT", X, Y);

        newSnakeCoords = newSnakeCoords.concat(newPos);
      });

      console.log(newSnakeCoords);

      return {
        ...state,
        snake: newSnakeCoords,
        direction: "RIGHT"
      };

    // case actionTypes.GROW:
    //   switch (state.direction) {
    //     case "RIGHT":
    //       if (Y === 0) {
    //         Y = state.cols;
    //       }
    //       Y = Y - 1;

    //       newPos = combine(X, Y);
    //   }

    //   let newSnakeCoords = state.snake;
    //   newSnakeCoords = newSnakeCoords.concat(newPos);

    //   console.log(newSnakeCoords);

    //   return {
    //     ...state,
    //     snakeLength: state.snakeLength + 1,
    //     snake: newSnakeCoords
    //   };

    case actionTypes.CALC_CELL:
      const cellSize = state.boardSize / state.cols;

      return {
        ...state,
        cellSize: cellSize
      };

    case actionTypes.CALC_BOARD:
      let width = window.screen.width;
      let height = window.screen.height;
      let boardSize = 800;

      if (width <= 280) {
        boardSize = 220;
      } else if (width <= 320) {
        boardSize = 240;
      } else if (width <= 380) {
        boardSize = 300;
      } else if (width <= 420) {
        boardSize = 320;
      } else if (width <= 480) {
        boardSize = 340;
      } else if (width <= 500) {
        boardSize = 400;
      } else if (width <= 600) {
        boardSize = 500;
      } else if (width <= 700) {
        boardSize = 600;
      } else if (width <= 800) {
        boardSize = 700;
      } else if (width <= 900) {
        boardSize = 800;
      }

      return {
        ...state,
        boardSize: boardSize
      };

    default:
      return state;
  }
};

export default Reducer;
