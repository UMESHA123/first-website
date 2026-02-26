import React from 'react';
import { Scroll } from '@react-three/drei';
import { motion } from 'framer-motion';

export function ScrollingTextOverlay() {
    return (
        <Scroll html style={{ width: '100vw' }}>
            {/* 1st Page: Main Static-like Hero that scrolls away */}
            <div style={{ width: '100vw', height: '100vh', padding: '40px', display: 'flex', flexDirection: 'column', pointerEvents: 'none' }}>
                <div style={{ position: 'absolute', top: '15%', left: '10%', maxWidth: '400px' }}>
                    <h1 style={{ fontSize: '5rem', fontWeight: 900, lineHeight: 1, letterSpacing: '-2px', textTransform: 'uppercase', color: '#fff', margin: 0 }}>RED BULL</h1>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#ff2800', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '40px', margin: 0 }}>RACING</h2>
                    <p style={{ fontSize: '0.75rem', lineHeight: 1.5, color: 'rgba(255, 255, 255, 0.8)', textTransform: 'uppercase', maxWidth: '250px', fontWeight: 500 }}>
                        IN THE HEART OF THE FORMULA 1 FRENZY, WHERE PRECISION MEETS VELOCITY AND INNOVATION KISSES THE ASPHALT, ONE TEAM STANDS OUT AS THE EPITOME OF ADRENALINE-FUELED EXCELLENCE
                    </p>
                </div>
            </div>

            {/* 2nd Page: AeroDynamics Details */}
            <div style={{ position: 'absolute', top: '100vh', right: '5vw', width: '45vw', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', pointerEvents: 'none' }}>
                <motion.div
                    initial={{ opacity: 0, filter: 'blur(10px)', x: 50 }}
                    whileInView={{ opacity: 1, filter: 'blur(0px)', x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ amount: 0.5 }}
                    style={{ background: 'rgba(5, 5, 5, 0.6)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', padding: '40px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                        <div style={{ width: '40px', height: '2px', background: '#ffffff' }}></div>
                        <span style={{ fontSize: '1rem', color: '#ffffff', letterSpacing: '2px', fontWeight: 600 }}>SYSTEM 01</span>
                    </div>
                    <h2 style={{ fontSize: '4rem', fontWeight: 900, marginBottom: '20px', textTransform: 'uppercase', lineHeight: 0.9, color: '#fff' }}>
                        Aero<br /><span style={{ color: 'transparent', WebkitTextStroke: '1.5px #fff' }}>Dynamics</span>
                    </h2>
                    <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: '40px' }}>
                        The meticulously sculpted carbon-fiber bodywork significantly reduces drag while maximizing downforce. Every millimeter of the RB16’s surface directs airflow to glue the car to the tarmac.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '10px', backdropFilter: 'blur(5px)' }}>
                            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#fff', marginBottom: '5px' }}>+12%</div>
                            <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '1px' }}>Downforce Gain versus previous season</div>
                        </div>
                        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '10px', backdropFilter: 'blur(5px)' }}>
                            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#fff', marginBottom: '5px' }}>DRS</div>
                            <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '1px' }}>Active aerofoil flap system for top speed</div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* 3rd Page: Engine Specifications */}
            <div style={{ position: 'absolute', top: '200vh', left: '5vw', width: '45vw', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', pointerEvents: 'none' }}>
                <motion.div
                    initial={{ opacity: 0, filter: 'blur(10px)', x: -50 }}
                    whileInView={{ opacity: 1, filter: 'blur(0px)', x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ amount: 0.5 }}
                    style={{ background: 'rgba(5, 5, 5, 0.6)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', padding: '40px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                        <div style={{ width: '40px', height: '2px', background: '#b0d4ff' }}></div>
                        <span style={{ fontSize: '1rem', color: '#b0d4ff', letterSpacing: '2px', fontWeight: 600 }}>POWER UNIT</span>
                    </div>
                    <h2 style={{ fontSize: '4rem', fontWeight: 900, marginBottom: '20px', textTransform: 'uppercase', lineHeight: 0.9, color: '#fff' }}>
                        Honda<br /><span style={{ color: 'transparent', WebkitTextStroke: '1.5px #fff' }}>RA620H</span>
                    </h2>
                    <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: '30px' }}>
                        A masterpiece of hybrid engineering. The V6 turbo-hybrid delivers staggering thermal efficiency, combining petrol combustion with advanced kinematic energy recovery systems.
                    </p>

                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: '40px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px' }}>
                            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Max RPM limit</span>
                            <span style={{ fontWeight: 600, color: '#fff', fontSize: '1.1rem' }}>15,000 rpm</span>
                        </li>
                        <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px' }}>
                            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Hybrid System</span>
                            <span style={{ fontWeight: 600, color: '#fff', fontSize: '1.1rem' }}>MGU-K / MGU-H</span>
                        </li>
                        <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px' }}>
                            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Configuration</span>
                            <span style={{ fontWeight: 600, color: '#fff', fontSize: '1.1rem' }}>1.6 Liter V6, 90° Bank</span>
                        </li>
                    </ul>

                    <button style={{ pointerEvents: 'auto', padding: '16px 40px', background: '#fff', color: '#000', border: 'none', borderRadius: '30px', fontSize: '0.9rem', fontWeight: 700, letterSpacing: '1px', cursor: 'pointer', display: 'inline-block', width: 'fit-content' }}>
                        VIEW FULL TELEMETRY
                    </button>
                </motion.div>
            </div>

            {/* Spacing element to trigger the correct scroll length */}
            <div style={{ height: '300vh', width: '100vw', opacity: 0 }}></div>
        </Scroll>
    );
}
