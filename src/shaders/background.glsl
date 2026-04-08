
uniform float uTime;
uniform vec2 uResolution;
uniform vec3 uMouse;

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;
  
  // Gradients profonds
  vec3 color1 = vec3(0.0, 0.05, 0.1);
  vec3 color2 = vec3(0.02, 0.0, 0.05);
  vec3 color3 = vec3(0.0, 0.03, 0.08);
  
  vec3 bgColor = mix(color1, color2, uv.y);
  bgColor = mix(bgColor, color3, uv.x);
  
  // Vagues subtiles
  float wave = sin(uv.x * 10.0 + uTime * 0.2) * 0.02;
  wave += sin(uv.y * 15.0 + uTime * 0.15) * 0.02;
  bgColor += vec3(wave);
  
  // Effet de spot léger sous la souris
  float mouseDist = length(uv - uMouse.xy);
  float mouseGlow = smoothstep(0.5, 0.0, mouseDist) * 0.05;
  bgColor += vec3(0.0, 0.1, 0.15) * mouseGlow;
  
  gl_FragColor = vec4(bgColor, 1.0);
}
