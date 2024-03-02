import { useMemo, useState } from 'react';

function hardProc(num){
  console.log('Hard Processing...');
  for( let i = 1; i < 999999999; i++ ){}
  return num + 1000
}
function easyProc(num){
  console.log('Easy Processing...');
  
  return num + 1000
}

function App() {
  const [hardNum, setHardNum] = useState(1);
  const [easyNum, setEasyNum] = useState(1);

  const returnHardNum = useMemo( () => {return hardProc(hardNum)}, [hardNum] );
  const returnEasyNum = easyProc(easyNum);

  return (
    <div className="App">
      <h3>복잡한 연산 함수</h3>
      <input 
        style={{width: '80px'}}
        type='number'
        value={hardNum}
        onChange={ (e) => { setHardNum(parseInt(e.target.value)) } }
      /> + 1000 = {returnHardNum}
      <hr />
      <h3>간단한 연산 함수</h3>
      <input 
        style={{width: '80px'}}
        type='number'
        value={easyNum}
        onChange={ (e) => { setEasyNum(parseInt(e.target.value)) } }
      /> + 1000 = {returnEasyNum}
      <hr />
    </div>
  );
}

export default App;
