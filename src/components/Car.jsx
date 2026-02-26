import { useGLTF } from '@react-three/drei';

export function Car(props) {
  const { scene } = useGLTF('/f1/source/2020 F1 Red Bull RB16.glb');

  return (
    <group {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload('/f1/source/2020 F1 Red Bull RB16.glb');
