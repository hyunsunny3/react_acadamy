import React, { useState } from 'react';

function App() {
  const [ count, setCount ] = useState(0)

  return (
    <div>
      <p>COUNT : { count }</p>
      <button>UPDATE</button>
    </div>
  );
}

export default App;