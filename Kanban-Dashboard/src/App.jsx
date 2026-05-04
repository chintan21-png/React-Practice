import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Dashboard from "./Dashboard";
import Board from "./Board";
import Navbar from "./Navbar";

//import React from 'react'

const App = () => {
  return (
    <div>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Board />}></Route>
                <Route path="/dashboard" element={<Dashboard />}></Route>
            </Routes>
        </Router>
    </div>
  );
};

export default App;
