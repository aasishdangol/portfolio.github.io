import React from "react";
import { Routes, Route} from "react-router-dom";
import "./index.css";
import Home from "./router/Home";
import Project from "./router/Project";
import Contact from "./router/Contact";
import About from "./router/About";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/project" element={<Project/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </>
  );
}

export default App;
