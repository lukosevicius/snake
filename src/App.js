import React from "react";
// import logo from './logo.svg';
import Board from "./containers/board/board";
import Layout from "./containers/board/layout/layout";
import Controls from "./components/controls/controls";

function App() {
  return (
    <div className="App">
      <Layout>
        <Board />
        <Controls />
      </Layout>
    </div>
  );
}

export default App;
