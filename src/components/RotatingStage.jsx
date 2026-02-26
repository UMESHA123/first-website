import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export function RotatingStage({ children }) {
    const ref = useRef();

    useFrame((state, delta) => {
        // Continuous smooth rotation for the entire stage (car + base)
        ref.current.rotation.y += delta * 0.2;
    });

    return <group ref={ref}>{children}</group>;
}
