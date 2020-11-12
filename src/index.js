import React from "react";
import ReactDOM from "react-dom";
import Board from "./Board";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Board />
  </React.StrictMode>,
  rootElement
);
