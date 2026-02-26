import { NavLink } from 'react-router-dom';
import { Flag, Radar, Zap, ActivitySquare } from 'lucide-react';

const navItems = [
  { to: '/', label: 'Showroom', icon: Flag },
  { to: '/aerodynamics', label: 'Aerodynamics', icon: Radar },
  { to: '/power-unit', label: 'Power Unit', icon: Zap },
  { to: '/telemetry', label: 'Telemetry', icon: ActivitySquare },
];

export function Navbar() {
  return (
    <header className="ui-container">
      <nav className="navbar glass-panel">
        <div className="nav-brand">
          <span>Oracle Red Bull</span>
          <p>Performance Interface</p>
        </div>

        <div className="nav-links">
          {navItems.map(({ to, label, icon: Icon }) => {
            const NavIcon = Icon;

            return (
              <NavLink key={to} to={to} className={({ isActive }) => (isActive ? 'active' : '')}>
                <NavIcon size={14} aria-hidden="true" />
                {label}
              </NavLink>
            );
          })}
        </div>

        <button className="nav-btn">Schedule Experience</button>
      </nav>
    </header>
  );
}
