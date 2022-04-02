import React from "react";
import "./App.css";
import { Background } from "./components/BackgroundParticles";
import { NavBar } from "./components/NavBar";
import { HomePage } from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Settings from "./pages/Settings";
import CalculatedTimeSuggestions from "./pages/CalculatedTimeSuggestions";

function NotFound() {
  return (
    <>
      <div className="w-full h-full flex flex-col justify-center gap-24">
        <p className="text-white grow-0 shrink font-RedHat">
          <span className="text-[9vh] underline underline-offset-1">
            404 - Not Found!
          </span>
        </p>
        <p className="alt_text">What you were looking for wasn't found!</p>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Background />
      <div className="App contrast-100">
        <NavBar />
        <span className="pt-1 lg:pt-4" />
        {/* Switch goes here */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/FAQ" element={<FAQ />} /> */}
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/settings" element={<Settings />} /> */}
          <Route path="/settings" element={<Settings />} />
          <Route path="/sleep" element={<CalculatedTimeSuggestions />} />
          <Route path="/wake" element={<CalculatedTimeSuggestions />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
