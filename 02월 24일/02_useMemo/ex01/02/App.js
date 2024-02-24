import React, { useState } from 'react';

function hardProc( num ){
  console.log('Hard Processing...');
  for( let i = 1; i < 999999999; i++ ){}
  return num + 1000
}

function App() {
  const [ hardNum, setHardNum ] = useState(1)

  const returnHardNum = hardProc( hardNum )

  return (
    <div>
      <h3>복잡한 연산 함수</h3>
      <input
        style={{width: '50px'}}
        type='number'
        value={hardNum}
        onChange={ (e) => {  setHardNum(parseInt(e.target.value)) } }
      /> + 1000 = { returnHardNum }
      <hr />

    </div>
  );
}

export default App;