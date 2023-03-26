import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Skills from "./components/Skills/Skills";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar/>
    <div className="w-[100vw] flex items-center flex-col h-[100%] justify-center">
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="projects" element={<Projects />} />
      <Route path="contact" element={<Contact />} />
      <Route path="aboutme" element={<AboutMe />} />
      <Route path="skills" element={<Skills />} />
    </Routes>
    </div>
    <Footer /> </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
