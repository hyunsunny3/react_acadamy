import React, { useState } from 'react';

function App() {
  const [ number, setNumber ] = useState(1)
  const [ isOn, setIsOn ] = useState(true)

  const nowState = isOn? 'ON' : 'OFF'

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
      <p>State : {nowState}</p>
      <button
        onClick={ () => { setIsOn(!isOn) } }
      >Change</button>
    </div>
  );
}

export default App;