import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Overlay({ progress, active }) {
    return (
        <>
            <AnimatePresence>
                {active && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="loading-screen"
                    >
                        <div className="loading-content">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h2>ENGINE BOOT SEQUENCE</h2>
                                <div className="progress-container">
                                    <div className="progress-bar" style={{ width: `${progress}%` }} />
                                </div>
                                <div className="percentage">{progress.toFixed(0)}%</div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </>
    );
}
