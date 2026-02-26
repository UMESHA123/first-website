import { Scroll } from '@react-three/drei';
import { motion } from 'framer-motion';

const MotionDiv = motion.div;

export function ScrollingTextOverlay() {
  return (
    <Scroll html style={{ width: '100vw' }}>
      <section className="story-panel panel-hero" style={{ top: '0vh' }}>
        <MotionDiv
          className="hero-card glass-panel"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.45 }}
        >
          <p className="panel-tag">2026 Performance Lab</p>
          <h1>
            RB16
            <span>Immersive Showroom</span>
          </h1>
          <p>
            Explore chassis behavior, airflow strategy, and power delivery in a cinematic digital garage built to mirror race-week engineering reviews.
          </p>
          <div className="hero-metrics">
            <div>
              <strong>900+</strong>
              <small>BHP output</small>
            </div>
            <div>
              <strong>15k</strong>
              <small>RPM ceiling</small>
            </div>
            <div>
              <strong>3 Zones</strong>
              <small>Interactive story</small>
            </div>
          </div>
        </MotionDiv>
      </section>

      <section className="story-panel panel-right" style={{ top: '100vh' }}>
        <MotionDiv
          className="insight-card glass-panel"
          initial={{ opacity: 0, x: 56 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: false, amount: 0.45 }}
        >
          <p className="panel-tag">System 01</p>
          <h2>Aerodynamics Window</h2>
          <p>
            Front wing geometry, floor edges, and rear diffuser work as one package to protect cornering stability without sacrificing straight-line speed.
          </p>
          <ul>
            <li>
              <span>Downforce delta</span>
              <strong>+12% vs previous package</strong>
            </li>
            <li>
              <span>DRS mode</span>
              <strong>Low-drag overtaking profile</strong>
            </li>
            <li>
              <span>Balance target</span>
              <strong>High-speed confidence setup</strong>
            </li>
          </ul>
        </MotionDiv>
      </section>

      <section className="story-panel panel-left" style={{ top: '200vh' }}>
        <MotionDiv
          className="insight-card glass-panel"
          initial={{ opacity: 0, x: -56 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: false, amount: 0.45 }}
        >
          <p className="panel-tag">System 02</p>
          <h2>Hybrid Power Delivery</h2>
          <p>
            Turbo combustion and electric recovery systems deliver aggressive exits while preserving battery state through the lap.
          </p>
          <ul>
            <li>
              <span>Power unit</span>
              <strong>Honda RA620H architecture</strong>
            </li>
            <li>
              <span>Energy recovery</span>
              <strong>MGU-K and MGU-H synchronized</strong>
            </li>
            <li>
              <span>Output strategy</span>
              <strong>Adaptive deployment by sector</strong>
            </li>
          </ul>
          <button type="button">View Full Telemetry</button>
        </MotionDiv>
      </section>

      <div style={{ height: '300vh', width: '100vw', opacity: 0 }} />
    </Scroll>
  );
}
