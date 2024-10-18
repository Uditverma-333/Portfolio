import React, { useState, useEffect } from "react";
import Preloader from "./components/PreLoader/Pre.jsx"; // Adjust the path if Preloader is in a different folder
import Navbar from "./components/Navbar/Navbar.jsx"; // Adjusted path based on your project structure
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Footer from "./components/Footer/Footer.jsx"; // Adjusted path for Footer if necessary
import Resume from "./components/Resume/ResumeNew.jsx";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/Scroll/ScrollToTop"; // For smooth scrolling between routes
import "./style.css"; // Global styles
import "./App.css"; // App-specific styles
import "bootstrap/dist/css/bootstrap.min.css"; // Importing Bootstrap CSS

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200); // Simulates loading time for preloader

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <Router>
      {/* Preloader component, active while loading */}
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        {/* Navbar remains consistent across routes */}
        <Navbar />
        {/* Ensures scroll to top on route change */}
        <ScrollToTop />
        <Routes>
          {/* Home route */}
          <Route path="/" element={<Home />} />
          {/* About route */}
          <Route path="/about" element={<About />} />
          {/* Projects route */}
          <Route path="/project" element={<Projects />} />
          {/* Resume route */}
          <Route path="/resume" element={<Resume />} />
          {/* Redirect any unknown route to home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        {/* Footer remains consistent across routes */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
