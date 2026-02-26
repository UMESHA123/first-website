import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import * as THREE from 'three';

export function AnimatedStage({ children }) {
    const ref = useRef();
    const scroll = useScroll();

    useFrame((state, delta) => {
        const offset = scroll.offset;

        // 1. Continuous Rotation
        // The model spins smoothly and endlessly, regardless of scrolling
        ref.current.rotation.y += delta * 0.4;

        // 2. Beautiful Scrolling Effects
        // Instead of interrupting the rotation, scrolling gently adjusts the 
        // car's placement and camera proximity.

        // Smoothly shift left or right depending on scroll page to make room for text
        const targetPositionX = offset < 0.33 ? 0 : (offset < 0.66 ? -1.2 : 1.2);
        ref.current.position.x = THREE.MathUtils.damp(ref.current.position.x, targetPositionX, 4, delta);

        // Smoothly push the car forward/closer to camera as you scroll
        const targetPositionZ = offset * 2.0;
        ref.current.position.z = THREE.MathUtils.damp(ref.current.position.z, targetPositionZ, 4, delta);

        // Subtle tilt for aerodynamics feel
        const targetRotationZ = offset < 0.33 ? 0 : (offset < 0.66 ? 0.1 : -0.1);
        ref.current.rotation.z = THREE.MathUtils.damp(ref.current.rotation.z, targetRotationZ, 3, delta);

        // Bobbing animation for a lively floating effect
        const t = state.clock.getElapsedTime();
        ref.current.position.y = Math.sin(t * 2) * 0.02 - (offset * 0.5);
    });

    return <group ref={ref}>{children}</group>;
}
