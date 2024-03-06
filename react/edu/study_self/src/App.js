import React from "react";
import { Routes, Route } from 'react-router-dom';
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './css/App.css';
import Universe from "./components/Universe";
import Game from "./components/Game";
import Contents from "./components/Contents";
import News from "./components/News";

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes element={<Main />}>
        <Route path="/" index element={<Main />} />
        <Route path="/universe" element={<Universe />} />
        <Route path="/game" element={<Game />} />
        <Route path="/contents" element={<Contents />}></Route>
        <Route path="/News" element={<News />}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;