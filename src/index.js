import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar/>
    
    <div className=" flex items-center h-full justify-center">
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
    </div>
    <Footer /> 
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
