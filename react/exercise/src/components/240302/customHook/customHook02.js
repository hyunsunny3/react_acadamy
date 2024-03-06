import React from "react";
import useInput from "./useInput";
import Sub from "./Sub";

function App() {
  const [inputValue, handleChange, handleSubmit] = useInput("1234");
  const [inputValue2, handleChange2, handleSubmit2] = useInput("abcd");

  return (
    <div className="App">
      <h1>Custom Hook</h1>
      <input 
        type="text"
        value={inputValue}
        onChange={ handleChange }
      /><button onClick={ handleSubmit }>click!</button>

      <hr />

      <input 
        type="text"
        value={inputValue2}
        onChange={ handleChange2 }
      /><button onClick={ handleSubmit2 }>click!</button>

      <hr />

      <Sub></Sub>
    </div>
  );
}

export default App;
