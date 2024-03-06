import React from "react";
import {Routes, Route} from "react-router-dom";
import Story from "./universe/Story";
import Charactor from "./universe/Charactor";
import Class from "./universe/Class";
import World from "./universe/World";

function Universe() {
    return (
        <div className="Universe">
            <h2>Universe</h2>
            <Routes>
                <Route path="/story" index element={<Story />}></Route>
                <Route path="/charactor" element={<Charactor />} />
                <Route path="/class" element={<Class />} />
                <Route path="/world" element={<World />} />
            </Routes>
        </div>
    );
}

export default Universe;