import { motion } from 'framer-motion';

const MotionDiv = motion.div;
const telemetryBars = [40, 50, 45, 60, 30, 80, 55, 65, 90, 75, 85, 40, 60, 50, 70, 95];

export function Telemetry() {
  return (
    <main className="page-container info-page">
      <MotionDiv
        className="info-shell telemetry-shell glass-panel"
        initial={{ opacity: 0, scale: 0.96, filter: 'blur(10px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.75, ease: 'easeOut' }}
      >
        <div className="telemetry-head">
          <div>
            <p className="panel-tag">System 03</p>
            <h1 className="page-title">Live Telemetry</h1>
          </div>
          <div className="status-pill">Active · Online</div>
        </div>

        <section className="telemetry-grid">
          <article className="glass-inset stats-stack">
            <div>
              <p>Tyre Temp Avg</p>
              <h3>98°C</h3>
            </div>
            <div>
              <p>Brake Bias</p>
              <h3>58.2% F</h3>
            </div>
            <div>
              <p>Fuel Load</p>
              <h3>105 kg</h3>
            </div>
          </article>

          <article className="glass-inset telemetry-chart">
            <p className="chart-label">Speed / RPM Trace</p>
            <div className="chart-bars">
              {telemetryBars.map((value, index) => (
                <MotionDiv
                  key={index}
                  initial={{ height: 0 }}
                  animate={{ height: `${value}%` }}
                  transition={{ duration: 0.9, delay: index * 0.04 }}
                  className={`chart-bar ${value > 80 ? 'hot' : ''}`}
                />
              ))}
            </div>
          </article>
        </section>
      </MotionDiv>
    </main>
  );
}
