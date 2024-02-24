import React from 'react';

function Counter(){
  return(
    <div>
      <p>count : 0</p>
      <button>ADD</button>
    </div>
  )
}

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;