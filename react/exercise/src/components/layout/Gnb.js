import React from "react";
import { NavLink } from "react-router-dom";

function Gnb() {

    return (
        <div>
            <h2>React Router Dom</h2>

            <nav>
                <ul>
                    <li><NavLink to="/">HOME</NavLink></li>
                </ul>
            </nav>

        </div>
    );
}

export default Gnb;
