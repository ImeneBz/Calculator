import React, { useState } from "react";
import "./styles.css";

function App() {
  const [input, setInput] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [operator, setOperator] = useState("");

  function handleClick(event) {
    const newClick = event.target.value;

    setInput((prevValue) => prevValue + newClick);
    setButtonDisabled(false);
  }

  function handleOperatorClick(event) {
    const newClick = event.target.value;
    setOperator(newClick);
    setInput((prevValue) => prevValue + newClick);
    setButtonDisabled(true);
  }

  function handleResult() {
    try {
      const preCalc = input.replace(/%/g, "/100").replace(/x/g, "*");
      const calculus = eval(preCalc);
      setInput(calculus.toString());
      setButtonDisabled(false);
    } catch (error) {
      setInput("Error");
    }
  }

  function clear() {
    setOperator("");
    setInput("");
    setButtonDisabled(false);
  }

  function del() {
    try {
      setInput((prevValue) => prevValue.toString().slice(0, -1));
      setButtonDisabled(false);
    } catch (error) {
      setInput("Error");
    }
  }

  function handleZ() {
    if (buttonDisabled) {
      setInput((prev) => eval(prev.slice(0, -1) + "*(-1)") + operator);
    } else {
      setInput((prev) => eval(prev + "* (-1)"));
    }
  }

  return (
    <div className="App">
      <div className="screen">{input}</div>
      <div className="Cells">
        <button onClick={clear} className="cell xtr">
          Clear
        </button>
        <button onClick={del} className="cell xtr">
          Del
        </button>
        <button
          onClick={handleOperatorClick}
          disabled={buttonDisabled}
          className="cell xtr"
          value="%"
        >
          %
        </button>
        <button
          onClick={handleOperatorClick}
          disabled={buttonDisabled}
          className="cell op"
          value="/"
        >
          /
        </button>
        <button onClick={handleClick} className="cell nb" value="9">
          9
        </button>
        <button onClick={handleClick} className="cell nb" value="8">
          8
        </button>
        <button onClick={handleClick} className="cell nb" value="7">
          7
        </button>
        <button
          onClick={handleOperatorClick}
          disabled={buttonDisabled}
          className="cell op"
          value="x"
        >
          x
        </button>
        <button onClick={handleClick} className="cell nb" value="6">
          6
        </button>
        <button onClick={handleClick} className="cell nb" value="5">
          5
        </button>
        <button onClick={handleClick} className="cell nb" value="4">
          4
        </button>
        <button
          onClick={handleOperatorClick}
          disabled={buttonDisabled}
          className="cell op"
          value="-"
        >
          -
        </button>
        <button onClick={handleClick} className="cell nb" value="3">
          3
        </button>
        <button onClick={handleClick} className="cell nb" value="2">
          2
        </button>
        <button onClick={handleClick} className="cell nb" value="1">
          1
        </button>
        <button
          onClick={handleOperatorClick}
          disabled={buttonDisabled}
          className="cell op"
          value="+"
        >
          +
        </button>
        <button onClick={handleClick} className="cell nb" value="0">
          0
        </button>
        <button onClick={handleZ} className="cell xtr" value="">
          +/-
        </button>
        <button
          onClick={handleOperatorClick}
          disabled={buttonDisabled}
          className="cell xtr"
          value="."
        >
          ,
        </button>
        <button
          onClick={handleResult}
          disabled={buttonDisabled}
          className="cell op"
          value="="
        >
          =
        </button>
      </div>
    </div>
  );
}

export default App;
