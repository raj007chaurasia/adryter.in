import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/common/Navbar';
import SmoothScroll from './components/common/SmoothScroll';

function App() {
  return (
    <Router>
      <SmoothScroll>
        <div className="bg-[#030303] min-h-screen text-white selection:bg-[#cc00cc]/30">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </SmoothScroll>
    </Router>
  );
}

export default App;
