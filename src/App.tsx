import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>This is my variable {process.env.REACT_APP_VARIABLE}</div>
      </header>
    </div>
  );
}

export default App;
