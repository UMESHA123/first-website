import { AnimatePresence, motion } from 'framer-motion';

const MotionDiv = motion.div;

export function Overlay({ progress, active }) {
  return (
    <AnimatePresence>
      {active && (
        <MotionDiv
          className="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <MotionDiv
            className="loading-content"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <p className="loading-kicker">Garage Link Online</p>
            <h2>Initializing RB16 Digital Twin</h2>

            <div className="progress-container">
              <div className="progress-bar" style={{ width: `${progress}%` }} />
            </div>

            <div className="percentage">{progress.toFixed(0)}%</div>
          </MotionDiv>
        </MotionDiv>
      )}
    </AnimatePresence>
  );
}
