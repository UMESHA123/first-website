import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  Environment,
  ContactShadows,
  Float,
  ScrollControls,
  Sparkles,
  useProgress,
} from '@react-three/drei';
import * as THREE from 'three';

import { Car } from '../components/Car';
import { Overlay } from '../components/Overlay';
import { ScrollingTextOverlay } from '../components/ScrollingTextOverlay';

function CameraRig() {
  useFrame((state, delta) => {
    const { camera, pointer } = state;
    const t = state.clock.getElapsedTime();
    const targetX = pointer.x * 0.9;
    const targetY = 2 + pointer.y * 0.45 + Math.sin(t * 0.35) * 0.06;
    const targetZ = 8 + Math.cos(t * 0.32) * 0.15;

    camera.position.x = THREE.MathUtils.damp(camera.position.x, targetX, 3, delta);
    camera.position.y = THREE.MathUtils.damp(camera.position.y, targetY, 3, delta);
    camera.position.z = THREE.MathUtils.damp(camera.position.z, targetZ, 3, delta);
    camera.lookAt(0, -0.4, 0);
  });

  return null;
}

function LightRig() {
  const rig = useRef();

  useFrame((_, delta) => {
    if (!rig.current) {
      return;
    }

    rig.current.rotation.y += delta * 0.18;
  });

  return (
    <group ref={rig}>
      <pointLight position={[7, 3.8, 3]} intensity={90} color="#37d2ff" />
      <pointLight position={[-7, 3.5, -3]} intensity={70} color="#ff5a2e" />
    </group>
  );
}

function EndlessRotatingStage() {
  const group = useRef();

  useFrame((state, delta) => {
    if (!group.current) {
      return;
    }

    const drift = Math.sin(state.clock.getElapsedTime() * 0.4) * 0.02;
    group.current.rotation.y += delta * 0.32;
    group.current.position.y = -0.02 + drift;
  });

  return (
    <group ref={group}>
      <Float speed={0.8} rotationIntensity={0.03} floatIntensity={0.06}>
        <Car scale={1.38} position={[0, -1.03, 0]} />
      </Float>

      <mesh position={[0, -1.12, 0]} receiveShadow>
        <cylinderGeometry args={[4.5, 4.5, 0.13, 128]} />
        <meshStandardMaterial color="#05080f" metalness={0.95} roughness={0.12} />
      </mesh>

      <mesh position={[0, -1.045, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[3.95, 4.25, 128]} />
        <meshStandardMaterial emissive="#f38f25" emissiveIntensity={0.85} color="#f7b151" roughness={0.3} />
      </mesh>

      <mesh position={[0, -0.3, -5.2]}>
        <planeGeometry args={[18, 8]} />
        <meshStandardMaterial color="#0b1223" emissive="#0f274f" emissiveIntensity={0.35} />
      </mesh>
    </group>
  );
}

export function Showroom() {
  const { progress, active } = useProgress();

  return (
    <div className="canvas-container">
      <Canvas
        dpr={[1, 1.8]}
        shadows
        camera={{ position: [0, 2, 8], fov: 42 }}
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.25 }}
      >
        <fog attach="fog" args={['#03060b', 10, 32]} />
        <color attach="background" args={['#03060b']} />

        <CameraRig />

        <ambientLight intensity={0.25} color="#d9e4ff" />

        <spotLight
          position={[0, 16, 0]}
          angle={0.55}
          penumbra={0.6}
          intensity={300}
          castShadow
          shadow-bias={-0.0001}
          color="#ffffff"
        />

        <spotLight
          position={[-10, 7, -10]}
          angle={0.5}
          penumbra={1}
          intensity={160}
          color="#0b8cff"
          distance={36}
        />

        <spotLight
          position={[10, 6, 6]}
          angle={0.4}
          penumbra={1}
          intensity={120}
          color="#ff5e32"
          distance={32}
        />

        <LightRig />

        <Sparkles count={60} scale={[14, 5, 14]} size={1.6} speed={0.35} color="#9ec7ff" />

        <ScrollControls pages={3} damping={0.24} distance={1.2}>
          <Suspense fallback={null}>
            <EndlessRotatingStage />
          </Suspense>
          <ScrollingTextOverlay />
        </ScrollControls>

        <ContactShadows
          position={[0, -1.06, 0]}
          opacity={0.85}
          scale={24}
          blur={2.6}
          far={5.5}
          color="#000000"
        />

        <Environment preset="night" environmentIntensity={0.4} />
      </Canvas>

      <Overlay progress={progress} active={active} />
    </div>
  );
}
