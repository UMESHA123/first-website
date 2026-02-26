import { motion } from 'framer-motion';

const MotionDiv = motion.div;

const powerSpecs = [
  { key: 'Max Power', value: '900+ BHP' },
  { key: 'MGU-K RPM Max', value: '50,000 RPM' },
  { key: 'Energy Store', value: 'Lithium-Ion' },
  { key: 'Rev Limit', value: '15,000 RPM' },
];

export function PowerUnit() {
  return (
    <main className="page-container info-page">
      <MotionDiv
        className="info-shell glass-panel"
        initial={{ opacity: 0, x: -42, filter: 'blur(10px)' }}
        animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <p className="panel-tag">System 02</p>
        <h1 className="page-title">Honda RA620H</h1>
        <p className="page-subtitle">
          Turbo combustion and electrical recovery are tuned for repeatable race pace, not only headline peak output.
        </p>

        <section className="spec-list glass-inset">
          {powerSpecs.map((item) => (
            <div key={item.key} className="spec-row">
              <span>{item.key}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </section>

        <section className="split-row">
          <article className="info-card highlight">
            <h3>Hybrid Boost Map</h3>
            <p>Sector-based deployment prioritizes traction zones and end-of-straight defense events.</p>
          </article>
          <article className="info-card highlight">
            <h3>Reliability Window</h3>
            <p>Cooling strategy and energy management prevent thermal spikes over long race stints.</p>
          </article>
        </section>
      </MotionDiv>
    </main>
  );
}
