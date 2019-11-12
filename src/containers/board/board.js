import React, { Component } from "react";
import { connect } from "react-redux";

import Cell from "../../components/cell/cell";
import styled from "styled-components";
import * as actionTypes from "../../store/actions";

class Board extends Component {
  state = {
    cells: [],
    canGrow: true
  };

  createCoords = () => {
    const coordArray = [];

    for (let x = 0; x < this.props.cols; x++) {
      for (let y = 0; y < this.props.cols; y++) {
        let coord = x.toString() + y.toString();

        coordArray.push(coord);
      }
    }
    this.setState({ cells: coordArray });
  };

  componentDidMount() {
    if (this.state.cells.length === 0) {
      this.createCoords();
    }
    if (this.props.boardSize === "") {
      this.props.calcBoardSize();
    }
    if (this.props.cellSize === "") {
      this.props.calcCellSize();
    }

  }

  render() {
    const Board = styled.div`
      width: ${this.props.boardSize}px;
      height: ${this.props.boardSize}px;
      height: 80%;
      display: flex;
      flex-wrap: wrap;
    `;

    let snakeHeadCoords = this.props.snake[0].coords;

    let snakeBodyArray = this.props.snake.slice(1, this.props.snakeLength - 1);
    let snakeBodyCoords = [];
    snakeBodyArray.forEach(element => {
      snakeBodyCoords.push(element.coords);
    });

    let snakeTailCoords = this.props.snake[this.props.snakeLength - 1].coords;

    if ((this.props.appleCoords === this.props.snake[0].coords) && this.props.canGrow) {
      this.props.grow();
    }

    return (
      <Board>
        {this.state.cells.map(coords => {
          let hasApple = false;
          if (coords === this.props.appleCoords) {
            hasApple = true;
          }

          let snakeHead = false;
          if (coords === snakeHeadCoords) {
            snakeHead = true;
          }

          let snakeBody = false;
          if (snakeBodyCoords.indexOf(coords) > -1) {
            snakeBody = true;
          }

          let snakeTail = false;
          if (coords === snakeTailCoords) {
            snakeTail = true;
          }

          return (
            <Cell
              key={coords}
              coords={coords}
              size={this.props.cellSize}
              snake={this.props.snake}
              hasApple={hasApple}
              snakeHead={snakeHead}
              snakeBody={snakeBody}
              snakeTail={snakeTail}
            />
          );
        })}
      </Board>
    );
  }
}

const mapStateToProps = state => {
  return {
    cols: state.move.cols,
    boardSize: state.move.boardSize,
    cellSize: state.move.cellSize,
    snake: state.move.snake,
    snakeLength: state.move.snakeLength,
    appleCoords: state.move.appleCoords,
    canGrow: state.move.canGrow

  };
};

const mapDispatchToProps = dispatch => {
  return {
    calcBoardSize: () => dispatch({ type: actionTypes.CALC_BOARD }),
    calcCellSize: () => dispatch({ type: actionTypes.CALC_CELL }),
    grow: () => dispatch({ type: actionTypes.GROW })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
