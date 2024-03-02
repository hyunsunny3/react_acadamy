import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function RootLayout() {

  return (
    <div>
        <h2>React Router Dom</h2>

        <nav>
          <ul>
            {/* <li><a href="/">HOME</a></li>
            <li><a href="about">ABOUT</a></li> */}

            {/* Link : url에 따른 component만 변경 */}
            {/* <li><Link to="/">HOME</Link></li>
            <li><Link to="about">ABOUT</Link></li> */}

            {/* NavLink : active 클래스 제공 */}
            <li><NavLink to="/">HOME</NavLink></li>
            <li><NavLink to="about">ABOUT</NavLink></li>
          </ul>
        </nav>

        <hr />
        
        <Outlet />
      </div>
  );
}

export default RootLayout;
