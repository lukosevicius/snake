import React, { Component } from "react";

import Cell from "../../components/cell/cell";
import styled from "styled-components";

class Board extends Component {
  state = {
    cols: 10,
    boardSize: 800,
    cellSize: "",
    cells: []
  };

  createCoords = () => {
    const coordArray = [];

    for (let x = 0; x < this.state.cols; x++) {
      for (let y = 0; y < this.state.cols; y++) {
        let coord = x.toString() + y.toString();

        coordArray.push(coord);
      }
    }
    this.setState({ cells: coordArray });
  };

  calcCellSize = () => {
    const size = this.state.boardSize / this.state.cols;
    this.setState({cellSize: size})
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
          return <Cell key={coord} coord={coord} size={this.state.cellSize} />;
        })}
      </Board>
    );
  }
}

export default Board;
