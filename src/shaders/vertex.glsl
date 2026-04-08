
varying vec2 vUv;
varying vec3 vPosition;
uniform float uTime;
uniform vec3 uMouse;
uniform float uHover;

void main() {
  vUv = uv;
  vPosition = position;
  
  // Animation sinusoïdale basée sur le temps
  vec3 pos = position;
  
  // Effet de pulsation
  float pulse = sin(uTime * 0.5 + position.x * 2.0) * 0.3;
  pos.z += pulse;
  
  // Mouvement ondulaire
  pos.x += sin(uTime * 0.3 + position.y * 5.0) * 0.15;
  pos.y += cos(uTime * 0.4 + position.x * 5.0) * 0.15;
  
  // Effet de tourbillon
  float angle = uTime * 0.2 + length(position.xy) * 2.0;
  float s = sin(angle);
  float c = cos(angle);
  mat2 rotation = mat2(c, -s, s, c);
  pos.xy *= rotation;
  
  // Réaction au curseur
  float dist = distance(pos.xy, uMouse.xy * 5.0);
  float influence = smoothstep(2.0, 0.0, dist) * uHover;
  pos.z += influence * 2.0;
  pos.xy += normalize(uMouse.xy * 5.0 - pos.xy) * influence * 0.3;
  
  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
  gl_PointSize = 4.0 * (1.0 + influence);
  gl_Position = projectionMatrix * mvPosition;
}
