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
    <div className="app-shell">
      <div className="ambient-noise" />
      <div className="radial-backdrop" />

      <Navbar />

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
