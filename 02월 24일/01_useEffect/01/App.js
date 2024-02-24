import React, { useState } from 'react';
import Timer from './Timer';

function App() {
  const [ showTimer, setShowTimer ] = useState(false)

  return (
    <div>
      <button 
        onClick={ () => { setShowTimer(!showTimer) } }
      >{ showTimer? '타이머 종료' : '타이머 실행' }</button>
      <hr />
      {/* { showTimer? <Timer /> : null } */}
      { showTimer && <Timer /> }
    </div>
  );
}

export default App;