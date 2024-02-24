import { useState } from 'react';
import Timer from './components/Timer.js';
import './App.css';

function App() {
  const [showTimer, setShowTimer] = useState(false);
  return (
    <div className="App">
      <button onClick={ () => { setShowTimer(!showTimer) } }>{showTimer? '타이머 종료' : '타이머 실행'}</button>
      <hr />
      { showTimer && <Timer /> }
    </div>
  );
}

export default App;
