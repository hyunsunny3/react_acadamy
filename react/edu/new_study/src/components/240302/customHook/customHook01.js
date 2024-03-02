import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState();
  const handleChange = e => {setInputValue(e.target.value)};
  const handleSubmit = () => { 
    alert(inputValue) ;
    setInputValue("");
  }

  return (
    <div className="App">
      <h1>Custom Hook</h1>
      <input 
        type="text"
        value={inputValue}
        onChange={ handleChange }
      /><button onClick={ handleSubmit }>click!</button>
    </div>
  );
}

export default App;
