'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const vertexShader = `
varying vec2 vUv;
varying vec3 vPosition;
uniform float uTime;
uniform vec3 uMouse;
uniform float uHover;

void main() {
  vUv = uv;
  vPosition = position;
  
  vec3 pos = position;
  
  float pulse = sin(uTime * 0.5 + position.x * 2.0) * 0.3;
  pos.z += pulse;
  
  pos.x += sin(uTime * 0.3 + position.y * 5.0) * 0.15;
  pos.y += cos(uTime * 0.4 + position.x * 5.0) * 0.15;
  
  float angle = uTime * 0.2 + length(position.xy) * 2.0;
  float s = sin(angle);
  float c = cos(angle);
  mat2 rotation = mat2(c, -s, s, c);
  pos.xy *= rotation;
  
  float dist = distance(pos.xy, uMouse.xy * 5.0);
  float influence = smoothstep(2.0, 0.0, dist) * uHover;
  pos.z += influence * 2.0;
  pos.xy += normalize(uMouse.xy * 5.0 - pos.xy) * influence * 0.3;
  
  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
  gl_PointSize = 4.0 * (1.0 + influence);
  gl_Position = projectionMatrix * mvPosition;
}
`;

const fragmentShader = `
uniform float uTime;
uniform vec2 uResolution;
uniform vec3 uMouse;
varying vec2 vUv;
varying vec3 vPosition;

float noise(vec2 p) {
  return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}

void main() {
  vec3 color1 = vec3(0.0, 0.2, 0.4);
  vec3 color2 = vec3(0.5, 0.0, 0.3);
  vec3 color3 = vec3(0.0, 0.4, 0.5);
  vec3 color4 = vec3(0.3, 0.0, 0.2);
  
  float t = vPosition.x * 0.5 + 0.5;
  vec3 nebulaColor = mix(color1, color2, t);
  nebulaColor = mix(nebulaColor, color3, sin(vPosition.y * 0.5 + uTime * 0.3) * 0.5 + 0.5);
  nebulaColor = mix(nebulaColor, color4, cos(vPosition.z * 0.5 + uTime * 0.2) * 0.3);
  
  float twinkle = noise(vUv * 100.0 + uTime * 2.0);
  float intensity = 0.5 + twinkle * 0.5;
  
  float center = 1.0 - length(vUv - 0.5) * 2.0;
  center = smoothstep(0.0, 1.0, center);
  intensity *= center;
  
  vec3 finalColor = nebulaColor * intensity;
  finalColor += vec3(0.2, 0.3, 0.4) * twinkle * 0.3;
  
  gl_FragColor = vec4(finalColor, intensity * 0.8);
}
`;

function NebulaCloud() {
  const pointsRef = useRef<THREE.Points>(null);
  const uniforms = useRef({
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector3(0, 0, 0) },
    uHover: { value: 0 },
  });

  const [positions, colors] = useMemo(() => {
    const positions = [];
    const colors = [];
    const particleCount = 2000;

    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const radius = 2 + Math.random() * 3;

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      positions.push(x, y, z);

      const color = new THREE.Color();
      color.setHSL(0.6 + Math.random() * 0.3, 0.8, 0.6);
      colors.push(color.r, color.g, color.b);
    }

    return [new Float32Array(positions), new Float32Array(colors)];
  }, []);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      uniforms.current.uTime.value += delta * 0.5;
      pointsRef.current.rotation.y += delta * 0.1;
    }
  });

  const handleMouseMove = (event: any) => {
    const point = event.point;
    uniforms.current.uMouse.value.set(point.x, point.y, point.z);
  };

  const handlePointerEnter = () => {
    uniforms.current.uHover.value = 1;
  };

  const handlePointerLeave = () => {
    uniforms.current.uHover.value = 0;
  };

  return (
    <Points
      ref={pointsRef}
      positions={positions}
      colors={colors}
      stride={3}
      frustumCulled={false}
      onPointerMove={handleMouseMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <PointMaterial
        transparent
        vertexColors
        size={2}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      >
        <shaderMaterial
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms.current}
          transparent
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </PointMaterial>
    </Points>
  );
}

export default function NebulaCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 60 }}
      style={{ position: 'fixed', top: 0, left: 0, zIndex: 0 }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <NebulaCloud />
    </Canvas>
  );
}
