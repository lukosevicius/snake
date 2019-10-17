import React, { Component } from "react";

import Cell from "../../components/cell/cell";
import styled from "styled-components";

class Board extends Component {
  state = {
    size: 10,
    cells: []
  };

  createCoords = () => {
    const coordArray = [];

    for (let x = 0; x < this.state.size; x++) {
      for (let y = 0; y < this.state.size; y++) {
        let coord = x.toString() + y.toString();

        coordArray.push(coord);
      }
    }

    this.setState({ cells: coordArray });
  };

  render() {
    if (this.state.cells.length === 0) {
      this.createCoords();
    }

    const Board = styled.div`
      width: 800px;
      height: 800px;
      display: flex;
      flex-wrap: wrap;
    `;

    return (
      <Board>
        {this.state.cells.map(coord => {
          return <Cell coord={coord} />;
        })}
      </Board>
    );
  }
}

export default Board;
