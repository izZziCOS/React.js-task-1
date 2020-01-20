import React from "react";
import ReactDOM from "react-dom";
import MainPage from "./routes/MainPage";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <MainPage />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);