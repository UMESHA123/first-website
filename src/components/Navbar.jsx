import React from 'react';
import { NavLink } from 'react-router-dom';

export function Navbar() {
    return (
        <div className="ui-container" style={{ pointerEvents: 'none', zIndex: 9999 }}>
            {/* Beautiful Navigation Bar */}
            <nav className="navbar" style={{ pointerEvents: 'auto' }}>
                <div className="nav-brand"><span>RED BULL</span> RACING</div>
                <div className="nav-links">
                    <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>SHOWROOM</NavLink>
                    <NavLink to="/aerodynamics" className={({ isActive }) => isActive ? "active" : ""}>AERODYNAMICS</NavLink>
                    <NavLink to="/power-unit" className={({ isActive }) => isActive ? "active" : ""}>POWER UNIT</NavLink>
                    <NavLink to="/telemetry" className={({ isActive }) => isActive ? "active" : ""}>TELEMETRY</NavLink>
                </div>
                <div className="nav-actions">
                    <button className="nav-btn">BOOK A TEST DRIVE</button>
                </div>
            </nav>
        </div>
    );
}
