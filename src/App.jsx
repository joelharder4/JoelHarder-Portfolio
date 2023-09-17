import React from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import About from "./About";
import Projects from "./Projects";
import AI from "./AI";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/ai" element={<AI />} />
      </Routes>

      
    </div>
  );
}

export default App;
