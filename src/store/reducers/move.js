import * as actionTypes from "../actions";

const initialState = {
  cols: 10, //cols in a row
  boardSize: 800, //in px
  cellSize: 80,
  snake: [
    { coord: 44, dir: "LEFT" },
    { coord: 45, dir: "LEFT" },
    { coord: 46, dir: "LEFT" },
    { coord: 47, dir: "LEFT" },
    { coord: 48, dir: "LEFT" }
  ],
  snakeLength: 5,
  direction: "MOVE_RIGHT"
};

const Reducer = (state = initialState, action) => {
  if (action.type.indexOf("MOVE_") > -1 || action.type.indexOf("GROW") > -1) {
    var newSnakeCoords = [];
    var newPos = "";
    var updatedSnake;
    var updatedDirection;
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

  const move = (direction, coord) => {
    let X = getX(coord);
    let Y = getY(coord);

    switch (direction) {
      case "MOVE_UP":
        if (X === 0) {
          X = state.cols;
        }
        X = X - 1;
        break;
      case "MOVE_DOWN":
        if (X === state.cols - 1) {
          X = 0;
        } else {
          X = X + 1;
        }
        break;

      case "MOVE_LEFT":
        if (Y === 0) {
          Y = state.cols - 1;
        } else {
          Y = Y - 1;
        }
        break;

      case "MOVE_RIGHT":
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

  const moveSnake = direction => {
    let updatedSnake = [];

    let head = move(direction, state.snake[0].coord);
    let tail = state.snake.slice(0, state.snakeLength - 1);

    updatedSnake = updatedSnake.concat(head);
    updatedSnake = updatedSnake.concat(tail);

    return updatedSnake;
  };

  switch (action.type) {
    case actionTypes.MOVE_UP:
      //disallow to move backwards
      if (state.direction == "MOVE_DOWN") {
        updatedSnake = state.snake;
        updatedDirection = state.direction;
      } else {
        updatedSnake = moveSnake("MOVE_UP");
        updatedDirection = "MOVE_UP";
      }

      return {
        ...state,
        snake: updatedSnake,
        direction: updatedDirection
      };
    case actionTypes.MOVE_DOWN:
      //disallow to move backwards
      if (state.direction == "MOVE_UP") {
        updatedSnake = state.snake;
        updatedDirection = state.direction;
      } else {
        updatedSnake = moveSnake("MOVE_DOWN");
        updatedDirection = "MOVE_DOWN";
      }

      return {
        ...state,
        snake: updatedSnake,
        direction: updatedDirection
      };
    case actionTypes.MOVE_LEFT:
      //disallow to move backwards
      if (state.direction == "MOVE_RIGHT") {
        updatedSnake = state.snake;
        updatedDirection = state.direction;
      } else {
        updatedSnake = moveSnake("MOVE_LEFT");
        updatedDirection = "MOVE_LEFT";
      }

      return {
        ...state,
        snake: updatedSnake,
        direction: updatedDirection
      };
    case actionTypes.MOVE_RIGHT:
      //disallow to move backwards
      if (state.direction == "MOVE_LEFT") {
        updatedSnake = state.snake;
        updatedDirection = state.direction;
      } else {
        updatedSnake = moveSnake("MOVE_RIGHT");
        updatedDirection = "MOVE_RIGHT";
      }

      return {
        ...state,
        snake: updatedSnake,
        direction: updatedDirection
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
      // let height = window.screen.height;
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
