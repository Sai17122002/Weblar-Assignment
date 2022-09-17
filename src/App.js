import "./App.css";
import NavBar from "./Components/Navbar/NavBar";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import { useState, useEffect } from "react";

function App() {
  return (
    <>
      {/* Navbar */}
      <NavBar />
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <ScrollToTop />
    </>
  );
}

export default App;
