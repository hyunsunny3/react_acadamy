import './App.css';
import Gnb from './components/Gnb.js';
import Layout from './components/study240113/Layout.js'
import CompType from './components/study240113/CompType.js'
import StudyProps from './components/study240113/props.js'
import StudyEvent from './components/study240120/event.js'
import StudyState01 from './components/study240120/state01.js'
import StudyState02 from './components/study240120/state02.js'

function App() {
  return (
    <div className="App">

      <Gnb></Gnb>

      <Layout></Layout>

      <CompType></CompType>

      <StudyProps></StudyProps>
      
      <StudyEvent></StudyEvent>

      <StudyState01></StudyState01>

      <StudyState02></StudyState02>

    </div>
  );
}

export default App;
