import './App.css';
import CompLogic from './components/CompLogic.js';
import Gnb from './components/Gnb.js';
import Study240113 from './components/study240113/Study240113.js'
import Study240120 from './components/study240120/Study240120.js'
import Study240127 from './components/study240127/Study240127.js'
import Study240203 from './components/study240203/Study240203.js'

function App() {
  return (
    <div className="App">

      <Gnb></Gnb>

      <Study240113></Study240113>
      
      <Study240120></Study240120>

      <Study240127></Study240127>

      <Study240203></Study240203>

      <CompLogic></CompLogic>

    </div>
  );
}

export default App;
