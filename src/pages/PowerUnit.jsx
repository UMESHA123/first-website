import React from 'react';
import { motion } from 'framer-motion';

export function PowerUnit() {
    return (
        <div className="page-container" style={{ width: '100vw', height: '100vh', background: '#030303', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
            <motion.div
                initial={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="panel-flex-col"
                style={{ maxWidth: '900px', display: 'flex', alignItems: 'center', gap: '60px' }}
            >
                <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '1rem', color: '#b0d4ff', letterSpacing: '4px', fontWeight: 700, marginBottom: '20px' }}>SYSTEM 02</div>
                    <h1 className="page-title" style={{ fontSize: '5rem', fontWeight: 900, textTransform: 'uppercase', lineHeight: 0.9, marginBottom: '20px', letterSpacing: '-2px' }}>HONDA<br /><span style={{ color: 'transparent', WebkitTextStroke: '2px #fff' }}>RA620H</span></h1>

                    <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: '40px' }}>
                        The 1.6-liter V6 turbocharged engine combined with MGU-K and MGU-H hybrid systems deliver blistering acceleration and incredible reliability.
                    </p>

                    <ul style={{ listStyle: 'none', padding: 0, borderTop: '1px solid rgba(255,255,255,0.1)', margin: 0 }}>
                        <li style={{ padding: '20px 0', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between' }}>
                            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', letterSpacing: '2px' }}>MAX POWER</span>
                            <span style={{ fontWeight: 800 }}>900+ BHP</span>
                        </li>
                        <li style={{ padding: '20px 0', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between' }}>
                            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', letterSpacing: '2px' }}>MGU-K RPM MAX</span>
                            <span style={{ fontWeight: 800 }}>50,000 RPM</span>
                        </li>
                        <li style={{ padding: '20px 0', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between' }}>
                            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', letterSpacing: '2px' }}>ENERGY STORE</span>
                            <span style={{ fontWeight: 800 }}>Lithium-Ion</span>
                        </li>
                    </ul>
                </div>

                <div className="panel-hide-mobile" style={{ flex: 1, height: '400px', background: 'radial-gradient(circle, rgba(0,85,255,0.2) 0%, rgba(3,3,3,1) 70%)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <h2 style={{ fontSize: '8rem', color: '#0055ff', opacity: 0.3, fontWeight: 900 }}>V6</h2>
                </div>
            </motion.div>
        </div>
    );
}
