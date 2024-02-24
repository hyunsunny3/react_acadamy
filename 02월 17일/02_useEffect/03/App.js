import React, { useEffect, useState } from 'react';

function App() {
  const [ count, setCount ] = useState(0)

  const CountUpdate = () => {
    setCount( count + 1 )
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
    </div>
  );
}

export default App;