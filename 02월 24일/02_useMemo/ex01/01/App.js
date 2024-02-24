import React, { useState } from 'react';

function App() {
  const [ hardNum, setHardNum ] = useState(1)

  return (
    <div>
      <h3>복잡한 연산 함수</h3>
      <input
        style={{width: '50px'}}
        type='number'
        value={hardNum}
        onChange={ (e) => {  setHardNum(parseInt(e.target.value)) } }
      /> + 1000 = { hardNum + 1000 }
      <hr />

    </div>
  );
}

export default App;