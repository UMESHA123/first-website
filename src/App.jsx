import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { Navbar } from './components/Navbar';
import { Showroom } from './pages/Showroom';
import { Aerodynamics } from './pages/Aerodynamics';
import { PowerUnit } from './pages/PowerUnit';
import { Telemetry } from './pages/Telemetry';

function App() {
  const location = useLocation();

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', background: '#030303' }}>
      {/* Global Navigation Bar */}
      <Navbar />

      {/* Route Handling with AnimatePresence for smooth transitions */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Showroom />} />
          <Route path="/aerodynamics" element={<Aerodynamics />} />
          <Route path="/power-unit" element={<PowerUnit />} />
          <Route path="/telemetry" element={<Telemetry />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
