import { useCallback, useEffect, useState } from 'react';

function App() {
  const [number, setNumber] = useState(1);
  const [toggle, setToggle] = useState(true);

  // const testFunc = () => {
  //   console.log('Excuted Function!!');
  //   return;
  // }

  const testFunc = useCallback( () => {
    console.log('%cExcuted Function!!', 'color:coral', '\n', number);
    return;
  },[number] )

  useEffect( () => {
    console.log('Changed testFunc');
  },[testFunc] )

  return (
    <div className="App">
      <h1>useCallback</h1>
      {/* <h3>Change Number</h3> */}
      <input 
        style={{width: '80px'}}
        type='number'
        value={number}
        onChange={ (e) => { setNumber(parseInt(e.target.value)) } }
      />
      <button onClick={testFunc}>Call Function</button>
      <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
      <hr />
    </div>
  );
}

export default App;
