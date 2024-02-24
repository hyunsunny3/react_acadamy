import React, { useState } from 'react';
import Box from './Box';

function App() {
  const [ size, setSize ] = useState(100)

  const boxStyle = () => {
    return {
      background: 'teal',
      width: size+'px',
      height: size+'px'
    }
  }
  
  return (
    <div>
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