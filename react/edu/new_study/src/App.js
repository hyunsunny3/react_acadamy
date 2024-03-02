import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import './App.css';
import RootLayout from "./RootLayout";

// 화면을 바꾸는 기술 - 라우팅 routing
// a : url은 바꾸지만 component는 바꾸지 못함
// routing : url에 따른 component로 바꿔줌
// react-router 
// react-router-dom(실무에서 주로 사용) :  가상돔을 만들고 비교하여 차이가 있는 부분만 바꿔줌
// npm install -g react-router-dom
// 중첩라우팅 네스티드라우팅
// 파라미터 useParams : aa.html?id=1&name=hs

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route index element={<RootLayout />}>
      {/* <Route path="주소" element={해당 주소 입력 시 출력될 컴포넌트} /> */}
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
    </Route>
  )
)

function App() {

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
