import React, { useEffect, useMemo, useState } from 'react';

function App() {
  const [ number, setNumber ] = useState(1)
  const [ isOn, setIsOn ] = useState(true)

  const nowState = useMemo( () => {
    return {
      isState: isOn? 'ON' : 'OFF'
    }
  }, [ isOn ] )

  useEffect( () => {
    console.log('Call useEffect!!!');
  }, [ nowState ] )

  return (
    <div>
      <h3>Change Number</h3>
      <input
        style={{width: '50px'}}
        type='number'
        value={number}
        onChange={ (e) => {  setNumber(parseInt(e.target.value)) } }
      />

      <hr />

      <h3>Switch On/Off</h3>
      <p>State : { nowState.isState }</p>
      <button
        onClick={ () => { setIsOn(!isOn) } }
      >Change</button>
      <div>
        
      </div>
    </div>
  );
}

export default App;