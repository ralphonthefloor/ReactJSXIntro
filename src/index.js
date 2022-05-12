import React from "react";
import ReactDOM from "react-dom";

const name = "Matt";

ReactDOM.render(
  <div id="greeting">
    <h1>Hello, my name is {name}</h1>
    <p>This is a paragraph!!!</p>
  </div>,
  document.getElementById("root")
);
