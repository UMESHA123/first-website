import React from 'react';
import { motion } from 'framer-motion';

export function Telemetry() {
    return (
        <div className="page-container" style={{ width: '100vw', height: '100vh', background: '#030303', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
            <motion.div
                initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="panel-container"
                style={{ width: '80%', height: '70%', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', padding: '40px', display: 'flex', flexDirection: 'column' }}
            >
                <div className="panel-flex-col" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '40px' }}>
                    <div>
                        <div style={{ fontSize: '1rem', color: '#ff2800', letterSpacing: '4px', fontWeight: 700, marginBottom: '10px' }}>SYSTEM 03</div>
                        <h1 style={{ fontSize: '3rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-1px', margin: 0 }}>LIVE TELEMETRY</h1>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '2px' }}>STATUS</div>
                        <div style={{ fontSize: '1.2rem', color: '#00ff66', fontWeight: 800 }}>ACTIVE · ONLINE</div>
                    </div>
                </div>

                <div className="panel-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '30px', flex: 1 }}>
                    <div style={{ background: '#080808', borderRadius: '15px', padding: '30px', display: 'flex', flexDirection: 'column', gap: '30px', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <div>
                            <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '1px' }}>TYRE TEMP AVG</div>
                            <div style={{ fontSize: '2rem', fontWeight: 800 }}>98°C</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '1px' }}>BRAKE BIAS</div>
                            <div style={{ fontSize: '2rem', fontWeight: 800 }}>58.2% F</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '1px' }}>FUEL LOAD</div>
                            <div style={{ fontSize: '2rem', fontWeight: 800 }}>105 kg</div>
                        </div>
                    </div>

                    <div style={{ background: '#080808', borderRadius: '15px', overflow: 'hidden', padding: '30px', display: 'flex', alignItems: 'flex-end', position: 'relative', border: '1px solid rgba(255,255,255,0.05)' }}>
                        {/* Fake dynamic graph using pure CSS for visual effect */}
                        <div style={{ width: '100%', height: '100%', background: 'linear-gradient(transparent 90%, rgba(255, 40, 0, 0.2) 100%)', display: 'flex', alignItems: 'flex-end', gap: '5px' }}>
                            {[40, 50, 45, 60, 30, 80, 55, 65, 90, 75, 85, 40, 60, 50, 70, 95].map((val, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ height: 0 }}
                                    animate={{ height: `${val}%` }}
                                    transition={{ duration: 1, delay: i * 0.05 }}
                                    style={{ flex: 1, background: val > 80 ? '#ff0033' : 'rgba(255,255,255,0.2)', borderRadius: '3px 3px 0 0' }}
                                ></motion.div>
                            ))}
                        </div>
                        <div style={{ position: 'absolute', top: '30px', left: '30px', fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '1px' }}>SPEED / RPM TRACE</div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
