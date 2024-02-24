import React, { useEffect, useState } from 'react';

function App() {
  const [ number, setNumber ] = useState(1)
  
  const testFunc = () => {
    console.log('Executed "Function!!!"');
    return ;
  }

  useEffect( () => {
    console.log('Executed "useEffect!!"')
  }, [ testFunc ] )

  return (
    <div>
      <input
        style={{width: '100px'}}
        type='number'
        value={number}
        onChange={ (e) => {  setNumber(parseInt(e.target.value)) } }
      />
      <button onClick={testFunc}>Call Function</button>
    </div>
  );
}

export default App;