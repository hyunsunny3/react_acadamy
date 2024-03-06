import React from "react";
import { Routes, Route } from 'react-router-dom';
import Story from "./Story";
import Charactor from "./Charactor";
import Class from "./Class";
import World from "./World";

function Universe() {
    return (
        <div className="Universe">
            <Routes>
                <Route path="/" element={<Story />} />
                <Route path="/" element={<Charactor />} />
                <Route path="/" element={<Class />} />
                <Route path="/" element={<World />} />
            </Routes>
        </div>
    );
}

export default Universe;