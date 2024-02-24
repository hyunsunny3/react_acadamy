import React, { useState } from 'react';
import Box from './Box';

function App() {
  const [ size, setSize ] = useState(100)
  const [ isDark, setIsDark ] = useState(false)

  const boxStyle = () => {
    return {
      background: 'teal',
      width: size+'px',
      height: size+'px'
    }
  }
  
  return (
    <div>
      <div style={
        {
          background: isDark? 'black' : 'lightgray',
          width: '100px',
          height: '100px'
        }
      }></div>
      <button onClick={ () => { setIsDark(!isDark) } }>Change Mode</button>

      <hr />

      <input
        style={{width: '100px'}}
        step={10}
        type='number'
        value={ size }
        onChange={ (e) => { setSize(e.target.value) } }
      />
      <Box boxStyle={ boxStyle } />
    </div>
  );
}

export default App;