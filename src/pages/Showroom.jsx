import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, ContactShadows, useProgress, ScrollControls } from '@react-three/drei';
import * as THREE from 'three';
import { Car } from '../components/Car';
import { Overlay } from '../components/Overlay';
import { ScrollingTextOverlay } from '../components/ScrollingTextOverlay';

function EndlessRotatingStage() {
    const group = useRef();

    useFrame((state, delta) => {
        // Smooth endless rotation 360 continually
        group.current.rotation.y += delta * 0.4;
    });

    return (
        <group ref={group}>
            {/* Positioned cleanly on top of the base surface (-1.05) */}
            <Car scale={1.4} position={[0, -1.05, 0]} />

            {/* Scaled up metallic showroom base */}
            <mesh position={[0, -1.1, 0]} receiveShadow>
                <cylinderGeometry args={[4.2, 4.2, 0.1, 128]} />
                <meshStandardMaterial color="#050505" metalness={0.9} roughness={0.1} />
            </mesh>

            {/* Scaled golden accent ring */}
            <mesh position={[0, -1.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <ringGeometry args={[4.0, 4.2, 128]} />
                <meshStandardMaterial color="#cca000" metalness={0.5} roughness={0.3} />
            </mesh>
        </group>
    );
}

export function Showroom() {
    const { progress, active } = useProgress();

    return (
        <div className="canvas-container">
            <Canvas
                shadows
                camera={{ position: [0, 2, 8], fov: 45 }}
                gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.2 }}
            >
                <color attach="background" args={['#030303']} />

                {/* --- Dark cinematic showroom lighting --- */}
                <ambientLight intensity={0.1} color="#ffffff" />

                {/* Sharp, moody overhead spotlight with deep shadows */}
                <spotLight
                    position={[0, 15, 0]}
                    angle={0.6}
                    penumbra={0.5}
                    intensity={300}
                    castShadow
                    shadow-bias={-0.0001}
                    color="#ffffff"
                />

                {/* Subtle, cool back-rim light to outline the aerodynamic edges */}
                <spotLight
                    position={[-15, 10, -15]}
                    angle={0.4}
                    penumbra={1}
                    intensity={200}
                    color="#0055ff"
                    distance={40}
                />

                {/* Subtle, warm accent lighting on the other side */}
                <spotLight
                    position={[15, 5, 5]}
                    angle={0.5}
                    penumbra={1}
                    intensity={100}
                    color="#ff2800"
                    distance={40}
                />

                {/* Main interactive and scrolling wrapped content */}
                <ScrollControls pages={3} damping={0.25} distance={1.2}>
                    <Suspense fallback={null}>
                        <EndlessRotatingStage />
                    </Suspense>

                    {/* This component safely holds all scrolling text! */}
                    <ScrollingTextOverlay />
                </ScrollControls>

                <ContactShadows position={[0, -1.05, 0]} opacity={1} scale={20} blur={2.5} far={4.5} color="#000000" />
                <Environment preset="studio" environmentIntensity={0.3} />
            </Canvas>

            {/* Render the loading sequence over everything */}
            <Overlay progress={progress} active={active} />
        </div>
    );
}
