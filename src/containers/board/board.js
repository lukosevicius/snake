import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import Cell from "../../components/cell/cell";
import styled from "styled-components";

class Board extends Component {
  state = {
    boardSize: 800,
    cellSize: "",
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

  calcCellSize = () => {
    const size = this.state.boardSize / this.props.cols;
    this.setState({ cellSize: size });
  };

  componentDidMount() {
    if (this.state.cells.length === 0) {
      this.createCoords();
    }
    if (this.state.cellSize === "") {
      this.calcCellSize();
    }
  }

  render() {
    const Board = styled.div`
      width: ${this.state.boardSize}px;
      height: ${this.state.boardSize}px;
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
              size={this.state.cellSize}
              snakeCoords={this.props.snakeCoords}
            />
          );
        })}
      </Board>
    );
  }
}

const mapStateToProps = state => {
  return {
    cols: state.cols,
    snakeCoords: state.snakeCoords
  };
};

export default connect(mapStateToProps)(Board);
