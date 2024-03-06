import React from "react";
import { NavLink, Link } from "react-router-dom";

function Gnb() {

  return (
    <div>
        <h2><Link to="/">React Study in Musign</Link></h2>
        <nav>
          <ul>
            <li><NavLink to="/universe">UNIVERSE</NavLink></li>
            <li><NavLink to="/game">GAME</NavLink></li>
            <li><NavLink to="/contents">CONTENTS</NavLink></li>
            <li><NavLink to="/news">NEWS</NavLink></li>
          </ul>
        </nav>
      </div>
  );
}

export default Gnb;
