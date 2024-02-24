import React, { useCallback, useEffect, useState } from 'react';

function App() {
  const [ number, setNumber ] = useState(1)
  const [ toggle, setToggle ] = useState(true)
  
  /* const testFunc = () => {
    console.log('Executed "Function!!!"');
    return ;
  } */

  const testFunc = useCallback( () => {
    console.log('%cExecuted "Function!!!"', "color: teal", '\n', 'number : ', number);
    return ;
  }, [ number ] )

  useEffect( () => {
    console.log('%cExecuted "useEffect!!"', "color: tomato")
  }, [ testFunc ] )

  return (
    <div>
      <input
        style={{width: '100px'}}
        type='number'
        value={number}
        onChange={ (e) => { setNumber(parseInt(e.target.value)) } }
      />
      <button onClick={ testFunc }>Call Function</button>
      <button onClick={ () => { setToggle(!toggle) } }>{ toggle.toString() }</button>
    </div>
  );
}

export default App;