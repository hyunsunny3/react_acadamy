import { useCallback, useState } from 'react';
import Box from './components/Box';

function App() {
  const [size, setSize] = useState(100);
  const [isDark, setIsDark] = useState(false);

  // const boxStyle = () => {
  //   return {
  //     background : 'teal',
  //     width: size + 'px',
  //     height: size + 'px',
  //   }
  // }

  const boxStyle = useCallback( () => {
      return {
        background : 'teal',
        width: size + 'px',
        height: size + 'px',
      }
  },[size] )

  return (
    <div className="App">
      <h1>useCallback</h1>
      <div style={{
        background: isDark? '#232323':'coral',
        width: '100px',
        height: '100px'
        }}></div>
      <button onClick={() => { setIsDark(!isDark) }}>Change Mode</button>
      <hr />
      <input 
        style={{width: '100px'}}
        step={10}
        type='number'
        value={size}
        onChange={ (e) => setSize(parseInt(e.target.value)) }
      />
      <Box boxStyle={boxStyle} />
    </div>
  );
}

export default App;
