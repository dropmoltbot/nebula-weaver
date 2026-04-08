'use client';

import { Canvas } from '@react-three/fiber';
import BackgroundPlane from './BackgroundPlane';

export default function BackgroundCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 75 }}
      style={{ position: 'fixed', top: 0, left: 0, zIndex: 0 }}
    >
      <BackgroundPlane />
    </Canvas>
  );
}
