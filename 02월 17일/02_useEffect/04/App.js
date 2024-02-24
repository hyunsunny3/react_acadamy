import React, { useEffect, useState } from 'react';

function App() {
  const [ count, setCount ] = useState(0)
  const [ secondCount, setSecondCount ] = useState(0)

  const CountUpdate = () => {
    setCount( count + 1 )
  }
  const SecondCountUpdate = () => {
    setSecondCount( secondCount + 1 )
  }

  useEffect( () => {
    console.log("useEffect가 실행되었습니다.")
  }, [])

  return (
    <div>
      <p>COUNT : { count }</p>
      <button
        onClick={CountUpdate}
      >UPDATE</button>
      <hr />
      <p>Second COUNT : { secondCount }</p>
      <button
        onClick={SecondCountUpdate}
      >UPDATE</button>
    </div>
  );
}

export default App;