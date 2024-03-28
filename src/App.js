import React, { useState } from "react";
import "./App.css";
function App() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    setExpression((prevExpression) => prevExpression + value);
  };

  const evaluateExpression = () => {
    console.log(expression);

    if (!expression){
      setResult("Error");
      return
    }
    try {
      const result = eval(expression);
      if(isNaN(result)){
        setResult('NaN')
      }else if(!isFinite(result)){
        setResult('Infinity');
      }else{
        setResult(result);
      }
    } catch (error) {
      setResult("Error");
    }
  };

  const clearCalculator = () => {
    setExpression("");
    setResult("");
  };

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <input
        type="text"
        value={expression}
        readOnly
        className="expression-input"
      />
      <div className="result">{result}</div>
      <div className="buttons">
       
        <div>
          <button onClick={() => handleButtonClick("7")}>7</button>
          <button onClick={() => handleButtonClick("8")}>8</button>
          <button onClick={() => handleButtonClick("9")}>9</button>
          <button onClick={() => handleButtonClick("+")}>+</button>
         
        </div>

        <div>
          <button onClick={() => handleButtonClick("4")}>4</button>
          <button onClick={() => handleButtonClick("5")}>5</button>
          <button onClick={() => handleButtonClick("6")}>6</button>
          <button onClick={() => handleButtonClick("-")}>-</button>
        </div>
        <div>
          <button onClick={() => handleButtonClick("1")}>1</button>

          <button onClick={() => handleButtonClick("2")}>2</button>
          <button onClick={() => handleButtonClick("3")}>3</button>
           <button onClick={() => handleButtonClick("*")}>*</button>
          
         
        </div>
         <div>
          <button onClick={clearCalculator}>C</button>
          <button onClick={() => handleButtonClick("0")}>0</button>
           <button onClick={evaluateExpression}>=</button>
          <button onClick={() => handleButtonClick("/")}>/</button>
        </div>
      </div>
    </div>
  );
}

export default App;