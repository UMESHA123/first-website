import React from 'react';
import { motion } from 'framer-motion';

export function Aerodynamics() {
    return (
        <div style={{ width: '100vw', height: '100vh', background: '#030303', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
            <motion.div
                initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ maxWidth: '800px', padding: '40px', textAlign: 'center' }}
            >
                <div style={{ fontSize: '1rem', color: '#ff0033', letterSpacing: '4px', fontWeight: 700, marginBottom: '20px' }}>SYSTEM 01</div>
                <h1 style={{ fontSize: '6rem', fontWeight: 900, textTransform: 'uppercase', lineHeight: 0.9, marginBottom: '40px', letterSpacing: '-2px' }}>AERO<span style={{ color: 'transparent', WebkitTextStroke: '2px #fff' }}>DYNAMICS</span></h1>

                <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: '60px', maxWidth: '600px', margin: '0 auto 60px' }}>
                    The airflow over the chassis is manipulated with surgical precision, guaranteeing the minimum possible drag coefficient while maximizing downforce generation across all speeds.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: '30px', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <div style={{ fontSize: '3rem', fontWeight: 900 }}>240<span style={{ fontSize: '1.5rem', opacity: 0.5 }}>kg</span></div>
                        <div style={{ fontSize: '0.8rem', opacity: 0.6, letterSpacing: '1px', marginTop: '10px' }}>FRONT WING DOWNFORCE</div>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: '30px', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <div style={{ fontSize: '3rem', fontWeight: 900 }}>v3.2</div>
                        <div style={{ fontSize: '0.8rem', opacity: 0.6, letterSpacing: '1px', marginTop: '10px' }}>FLOOR SPECIFICATION</div>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: '30px', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <div style={{ fontSize: '3rem', fontWeight: 900, color: '#ff0033' }}>DRS</div>
                        <div style={{ fontSize: '0.8rem', opacity: 0.6, letterSpacing: '1px', marginTop: '10px' }}>DRAG REDUCTION SYSTEM</div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
