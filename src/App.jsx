import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./routes/home/Home";
import ProjectDesc from "./components/projectDesc/ProjectDesc";
import Nav from "./components/nav/Nav";
import desc from "./data/projects.js";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/gateway" element={<ProjectDesc props={desc} />}></Route>
        <Route path="/ecommerce" element={<ProjectDesc props={desc} />}></Route>
        <Route
          path="/ecommerce_react"
          element={<ProjectDesc props={desc} />}
        ></Route>
        <Route
          path="/code_for_justice"
          element={<ProjectDesc props={desc} />}
        ></Route>
        <Route
          path="/tesla_clone"
          element={<ProjectDesc props={desc} />}
        ></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
