import { useEffect, useMemo, useState } from 'react';

function App() {
  const [number, setNumber] = useState(1);
  const [isOn, setIsOn] = useState(true);
  const nowState = useMemo( () => {return{isState: isOn? 'ON' : 'OFF'}},[isOn] );
  // const nowState = isOn? 'ON' : 'OFF';
  
  useEffect( () => {
    console.log("Call useEffect!!");
  }, [nowState] )

  let aa = {location : 'korea'};
  let bb = {location : 'korea'};
  const c = (aa === bb)? 'true':'false';

  return (
    <div className="App">
      <h2>{c}</h2>
      <h3>Change Number</h3>
      <input 
        style={{width: '80px'}}
        type='number'
        value={number}
        onChange={ (e) => { setNumber(parseInt(e.target.value)) } }
      />
      <hr />
      <h3>Switch On/Off</h3>
      <p>State : {nowState.isState}</p>
      <button onClick={ () => {setIsOn(!isOn)} }>Change</button>
      <hr />
    </div>
  );
}

export default App;
