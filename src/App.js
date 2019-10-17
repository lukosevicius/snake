import React from "react";
// import logo from './logo.svg';
import Board from "./containers/board/board";
import Layout from "./containers/board/layout/layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Board />
      </Layout>
    </div>
  );
}

export default App;
