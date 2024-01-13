import './App.css';
import Gnb from './components/Gnb.js';
import Layout from './components/study240113/Layout.js'
import CompType from './components/study240113/CompType.js'
import StudyProps from './components/study240113/props.js'

function App() {
  return (
    <div className="App">

      <Gnb></Gnb>

      <Layout></Layout>

      <CompType></CompType>

      <StudyProps></StudyProps>

    </div>
  );
}

export default App;
