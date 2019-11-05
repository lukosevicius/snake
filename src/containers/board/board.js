import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import Cell from "../../components/cell/cell";
import styled from "styled-components";
import * as actionTypes from "../../store/actions";

class Board extends Component {
  state = {
    cells: []
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

    
    
    return (
      <Board>
        {this.state.cells.map(coord => {
          return (
            <Cell
              key={coord}
              coord={coord}
              size={this.props.cellSize}
              snake={this.props.snake}
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
    snake: state.move.snake
  };
};

const mapDispatchToProps = dispatch => {
  return {
    calcBoardSize: () => dispatch({ type: actionTypes.CALC_BOARD }),
    calcCellSize: () => dispatch({ type: actionTypes.CALC_CELL })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
