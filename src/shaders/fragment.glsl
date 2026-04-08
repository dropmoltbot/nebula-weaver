
uniform float uTime;
uniform vec2 uResolution;
uniform vec3 uMouse;
varying vec2 vUv;
varying vec3 vPosition;

// Fonction de bruit simple
float noise(vec2 p) {
  return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}

void main() {
  // Couleurs de nébuleuses
  vec3 color1 = vec3(0.0, 0.2, 0.4);  // Bleu profond
  vec3 color2 = vec3(0.5, 0.0, 0.3);  // Violet
  vec3 color3 = vec3(0.0, 0.4, 0.5);  // Cyan
  vec3 color4 = vec3(0.3, 0.0, 0.2);  // Rose profond
  
  // Variation de couleur basée sur la position
  float t = vPosition.x * 0.5 + 0.5;
  vec3 nebulaColor = mix(color1, color2, t);
  nebulaColor = mix(nebulaColor, color3, sin(vPosition.y * 0.5 + uTime * 0.3) * 0.5 + 0.5);
  nebulaColor = mix(nebulaColor, color4, cos(vPosition.z * 0.5 + uTime * 0.2) * 0.3);
  
  // Scintillement
  float twinkle = noise(vUv * 100.0 + uTime * 2.0);
  float intensity = 0.5 + twinkle * 0.5;
  
  // Effet de brillance au centre
  float center = 1.0 - length(vUv - 0.5) * 2.0;
  center = smoothstep(0.0, 1.0, center);
  intensity *= center;
  
  // Couleur finale
  vec3 finalColor = nebulaColor * intensity;
  
  // Brillance accentuée
  finalColor += vec3(0.2, 0.3, 0.4) * twinkle * 0.3;
  
  gl_FragColor = vec4(finalColor, intensity * 0.8);
}
