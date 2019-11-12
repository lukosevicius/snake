import * as actionTypes from "../actions";

const initialState = {
  cols: 10, //cols in a row
  boardSize: 800, //in px
  cellSize: 80,
  snake: [
    // { coords: "44", dir: "MOVE_LEFT" },
    { coords: "45", dir: "MOVE_LEFT" },
    { coords: "46", dir: "MOVE_LEFT" },
    { coords: "47", dir: "MOVE_LEFT" }
  ],
  snakeLength: 3,
  direction: "MOVE_LEFT",
  appleCoords: "42",
  canGrow: true
};

const Reducer = (state = initialState, action) => {
  if (action.type.indexOf("MOVE_") > -1 || action.type.indexOf("GROW") > -1) {
    var updatedSnake;
    var updatedDirection;
  }

  const getX = coords => {
    coords = coords.toString();
    return +coords.substring(0, coords.length / 2);
  };

  const getY = coords => {
    coords = coords.toString();
    return +coords.substring(coords.length / 2);
  };

  const combine = (X, Y, direction) => {
    return {
      coords: X.toString() + Y.toString(),
      dir: direction
    };
  };

  const move = (direction, coords) => {
    let X = getX(coords);
    let Y = getY(coords);

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

    let head = move(direction, state.snake[0].coords);
    let tail = state.snake.slice(0, state.snakeLength - 1);

    updatedSnake = updatedSnake.concat(head);
    updatedSnake = updatedSnake.concat(tail);

    return updatedSnake;
  };

  const moveApple = snake => {
    let usedCoords = [];    

    snake.forEach(element => {
      usedCoords.push(element.coords);
    });

    let newX;
    let newY;
    let newCoords;

    do{
      newX = (Math.floor(Math.random() * 10)).toString();
      newY = (Math.floor(Math.random() * 10)).toString();
      newCoords = newX + newY;
    } while (usedCoords.indexOf(newCoords) > -1)

    console.log("New Apple Coords: " + newCoords);

    return newCoords;

  }

  switch (action.type) {
    case actionTypes.MOVE_UP:
      //disallow to move backwards
      if (state.direction === "MOVE_DOWN") {
        updatedSnake = state.snake;
        updatedDirection = state.direction;
      } else {
        updatedSnake = moveSnake("MOVE_UP");
        updatedDirection = "MOVE_UP";
      }

      return {
        ...state,
        snake: updatedSnake,
        direction: updatedDirection,
        canGrow: true
      };
    case actionTypes.MOVE_DOWN:
      //disallow to move backwards
      if (state.direction === "MOVE_UP") {
        updatedSnake = state.snake;
        updatedDirection = state.direction;
      } else {
        updatedSnake = moveSnake("MOVE_DOWN");
        updatedDirection = "MOVE_DOWN";
      }

      return {
        ...state,
        snake: updatedSnake,
        direction: updatedDirection,
        canGrow: true
      };
    case actionTypes.MOVE_LEFT:
      //disallow to move backwards
      if (state.direction === "MOVE_RIGHT") {
        updatedSnake = state.snake;
        updatedDirection = state.direction;
      } else {
        updatedSnake = moveSnake("MOVE_LEFT");
        updatedDirection = "MOVE_LEFT";
      }

      return {
        ...state,
        snake: updatedSnake,
        direction: updatedDirection,
        canGrow: true
      };
    case actionTypes.MOVE_RIGHT:
      //disallow to move backwards
      if (state.direction === "MOVE_LEFT") {
        updatedSnake = state.snake;
        updatedDirection = state.direction;
      } else {
        updatedSnake = moveSnake("MOVE_RIGHT");
        updatedDirection = "MOVE_RIGHT";
      }

      return {
        ...state,
        snake: updatedSnake,
        direction: updatedDirection,
        canGrow: true
      };

    case actionTypes.GROW:
      let snakeTailCoord = state.snake[state.snakeLength - 1].coords;
      let snakeTailDir = state.snake[state.snakeLength - 1].dir;
      let newTail = null;

      switch (snakeTailDir) {
        case "MOVE_LEFT":
          newTail = move("MOVE_RIGHT", snakeTailCoord);
          break;
        case "MOVE_RIGHT":
          newTail = move("MOVE_LEFT", snakeTailCoord);
          break;
        case "MOVE_UP":
          newTail = move("MOVE_DOWN", snakeTailCoord);
          break;
        case "MOVE_DOWN":
          newTail = move("MOVE_UP", snakeTailCoord);
          break;
        default:
          break;
      }

      updatedSnake = state.snake.concat(newTail);
      // moveApple(updatedSnake);

      return {
        ...state,
        snakeLength: state.snakeLength + 1,
        snake: updatedSnake,
        appleCoords: moveApple(updatedSnake),
        canGrow: false
      };

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
