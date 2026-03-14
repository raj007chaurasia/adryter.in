import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/common/Navbar';
import SmoothScroll from './components/common/SmoothScroll';
import MouseFollower from './components/common/MouseFollower';

function App() {
  return (
    <Router>
      <SmoothScroll>
        <div className="bg-[#030303] min-h-screen text-white selection:bg-[#cc00cc]/30">
          <MouseFollower />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </SmoothScroll>
    </Router>
  );
}

export default App;
