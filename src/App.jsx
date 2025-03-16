import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./Components/Footer";
import Blog from "./Components/Blog";
function App() {
  return (
    <Router>
      <NavBar title="MyApp" />
      <div className="pt-16"> {/* Add padding-top to avoid content overlap */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />

        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;