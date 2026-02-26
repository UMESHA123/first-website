import { motion } from 'framer-motion';

const MotionDiv = motion.div;

const aeroStats = [
  { label: 'Front Wing Load', value: '240kg' },
  { label: 'Drag Reduction', value: 'DRS Active' },
  { label: 'Floor Spec', value: 'v3.2' },
];

export function Aerodynamics() {
  return (
    <main className="page-container info-page">
      <MotionDiv
        className="info-shell glass-panel"
        initial={{ opacity: 0, y: 32, filter: 'blur(10px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <p className="panel-tag">System 01</p>
        <h1 className="page-title">Aero Dynamics</h1>
        <p className="page-subtitle">
          Airflow is shaped from front wing to diffuser to keep the car stable through high-speed load changes and aggressive braking zones.
        </p>

        <section className="info-grid three-col">
          {aeroStats.map((item) => (
            <article key={item.label} className="info-card">
              <h3>{item.value}</h3>
              <p>{item.label}</p>
            </article>
          ))}
        </section>

        <section className="split-row">
          <article className="glass-inset">
            <h4>Wind-Tunnel Objective</h4>
            <p>Preserve rear grip under yaw while reducing straight-line drag for improved overtaking windows.</p>
          </article>
          <article className="glass-inset">
            <h4>Trackside Adjustment</h4>
            <p>Flap and floor-edge trim updates allow setup balancing between qualifying one-lap pace and race consistency.</p>
          </article>
        </section>
      </MotionDiv>
    </main>
  );
}
