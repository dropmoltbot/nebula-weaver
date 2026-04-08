'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const bgFragmentShader = `
uniform float uTime;
uniform vec2 uResolution;
uniform vec3 uMouse;

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;
  
  vec3 color1 = vec3(0.0, 0.05, 0.1);
  vec3 color2 = vec3(0.02, 0.0, 0.05);
  vec3 color3 = vec3(0.0, 0.03, 0.08);
  
  vec3 bgColor = mix(color1, color2, uv.y);
  bgColor = mix(bgColor, color3, uv.x);
  
  float wave = sin(uv.x * 10.0 + uTime * 0.2) * 0.02;
  wave += sin(uv.y * 15.0 + uTime * 0.15) * 0.02;
  bgColor += vec3(wave);
  
  float mouseDist = length(uv - uMouse.xy);
  float mouseGlow = smoothstep(0.5, 0.0, mouseDist) * 0.05;
  bgColor += vec3(0.0, 0.1, 0.15) * mouseGlow;
  
  gl_FragColor = vec4(bgColor, 1.0);
}
`;

export default function BackgroundPlane() {
  const meshRef = useRef<THREE.Mesh>(null);
  const uniforms = useRef({
    uTime: { value: 0 },
    uResolution: { value: new THREE.Vector2() },
    uMouse: { value: new THREE.Vector2(0, 0) },
  });

  useFrame((state, delta) => {
    if (meshRef.current) {
      uniforms.current.uTime.value += delta * 0.3;
      uniforms.current.uResolution.value.set(
        state.size.width,
        state.size.height
      );
      uniforms.current.uMouse.value.set(
        (state.mouse.x + 1) / 2,
        (state.mouse.y + 1) / 2
      );
    }
  });

  return (
    <mesh ref={meshRef} scale={[20, 20, 1]} position={[0, 0, -10]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        uniforms={uniforms.current}
        vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={bgFragmentShader}
      />
    </mesh>
  );
}
