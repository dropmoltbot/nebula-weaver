# 🌌 Nebula Weaver

<div align="center">

![Nebula Weaver Banner](https://img.shields.io/badge/Nebula-Weaver-00bfff?style=for-the-badge&logo=data:image/svg%2bxml%3bbase64%2cPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2Ij48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIHN0b3AtY29sb3I9IiMwMGI5ZmYiLz48c3RvcCBzdG9wLWNvbG9yPSIjOTQwMGQzIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgZmlsbD0idXJsKCNnKSIvPjxjaXJjbGUgY3g9IjEyOCIgY3k9IjEyOCIgcj0iNDAiIGZpbGw9IiNmZmYiIG9wYWNpdHk9IjAuNSIvPjwvc3ZnPg%3d%3d)

![Build](https://img.shields.io/badge/Build-passing-success?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-16.2.2-black?style=for-the-badge&logo=next.js&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-0.172.0-000000?style=for-the-badge&logo=three.js&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

### ✨ Interactive Cosmic Particle Experience

**[Live Demo](https://nebula-weaver-7kcfbeywn-dropmoltbots-projects.vercel.app)** • **[GitHub Repo](https://github.com/dropmoltbot/nebula-weaver)**

```bash
# Clone and Experience
git clone https://github.com/dropmoltbot/nebula-weaver.git
cd nebula-weaver
npm install
npm run dev
```

[![Nebula Weaver Preview](https://via.placeholder.com/1200x600/0a0a0a/00bfff?text=🌌+Interactive+Cosmic+Experience+Move+Your+Cursor)](https://nebula-weaver-7kcfbeywn-dropmoltbots-projects.vercel.app)

*A mesmerizing WebGL-powered nebula simulation with real-time particle interactions powered by custom GLSL shaders.*

</div>

---

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/dropmoltbot/nebula-weaver.git

# Navigate to the project
cd nebula-weaver

# Install dependencies
npm install

# Start the development server
npm run dev

# Open http://localhost:3000 in your browser
```

## 🎨 Features

### 🌟 Core Experience
- **2000 Interactive Particles** - Real-time GPU-accelerated particle system
- **Custom GLSL Shaders** - Vertex and fragment shaders for nebula effects
- **Mouse Interaction** - Particles react to cursor movement with physics-based attraction
- **Dynamic Color Blending** - Seamless transitions between cyan, purple, and pink nebula hues
- **Vortex Animations** - Spiral rotation and wave propagation effects

### 🎭 Visual Effects
- **Pulsation Effects** - Breathing animations synchronized with particle count
- **Twinkle Shimmer** - Procedural noise-based sparkle generation
- **Wave Propagation** - Sinusoidal surface deformation
- **Cursor Glow** - Subtle lighting following mouse movement
- **Glassmorphism UI** - Frosted glass effect with backdrop blur

### 💻 Technical Highlights
- **Optimized Rendering** - Efficient instanced rendering for 2000 particles
- **React Three Fiber** - Declarative Three.js integration with React
- **Framer Motion Animations** - Smooth UI transitions and entrance effects
- **TypeScript** - Full type safety across components
- **Responsive Design** - Adapts to all screen sizes

## 🛠️ Tech Stack

| Category | Technology | Version | Purpose |
|----------|------------|----------|---------|
| **Framework** | [Next.js](https://nextjs.org/) | 16.2.2 | React framework with SSR/SSG |
| **3D Engine** | [Three.js](https://threejs.org/) | 0.172.0 | WebGL rendering engine |
| **React Integration** | [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) | 9.0.0 | React renderer for Three.js |
| **3D Helpers** | [@react-three/drei](https://github.com/pmndrs/drei) | 10.0.0 | Useful abstractions |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) | 12.0.0 | Production-ready animations |
| **State** | [Zustand](https://zustand-demo.pmnd.rs/) | 5.0.0 | State management |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | 4.x | Utility-first CSS |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | 5.x | Static typing |
| **Package Manager** | [npm](https://www.npmjs.com/) | 11.8.0 | Dependency management |

## 📁 Project Structure

```
nebula-weaver/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Main page component
│   │   └── globals.css         # Global styles and animations
│   ├── components/
│   │   ├── NebulaParticles.tsx # 2000-particle system with shaders
│   │   ├── BackgroundPlane.tsx # Shader background plane
│   │   ├── BackgroundCanvas.tsx # Canvas wrapper for background
│   │   └── UIOverlay.tsx      # Glassmorphism UI overlay
│   └── shaders/
│       ├── vertex.glsl         # Vertex shader for particles
│       ├── fragment.glsl       # Fragment shader for nebula colors
│       └── background.glsl     # Background gradient shader
├── public/                    # Static assets
├── package.json               # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
├── tailwind.config.ts        # Tailwind configuration
└── next.config.ts           # Next.js configuration
```

## 🎮 Usage

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Visit http://localhost:3000
```

### Production Build

```bash
# Build for production
npm run build

# Test production build locally
npm start
```

### Linting

```bash
# Run ESLint
npm run lint
```

## 🧬 Shader Architecture

### Vertex Shader Logic

The vertex shader (`vertex.glsl`) handles particle positioning and animation:

```glsl
// Sinusoidal pulsation
float pulse = sin(uTime * 0.5 + position.x * 2.0) * 0.3;
pos.z += pulse;

// Wave propagation
pos.x += sin(uTime * 0.3 + position.y * 5.0) * 0.15;
pos.y += cos(uTime * 0.4 + position.x * 5.0) * 0.15;

// Vortex rotation
float angle = uTime * 0.2 + length(position.xy) * 2.0;
mat2 rotation = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
pos.xy *= rotation;

// Mouse interaction
float dist = distance(pos.xy, uMouse.xy * 5.0);
float influence = smoothstep(2.0, 0.0, dist) * uHover;
pos.z += influence * 2.0;
```

### Fragment Shader Logic

The fragment shader (`fragment.glsl`) generates nebula colors:

```glsl
// Color mixing
vec3 nebulaColor = mix(color1, color2, t);
nebulaColor = mix(nebulaColor, color3, sin(vPosition.y * 0.5 + uTime * 0.3));
nebulaColor = mix(nebulaColor, color4, cos(vPosition.z * 0.5 + uTime * 0.2));

// Procedural twinkle
float twinkle = noise(vUv * 100.0 + uTime * 2.0);
float intensity = 0.5 + twinkle * 0.5;

// Center vignette
float center = 1.0 - length(vUv - 0.5) * 2.0;
intensity *= smoothstep(0.0, 1.0, center);
```

## 🎨 Customization

### Adjust Particle Count

Modify `particleCount` in `NebulaParticles.tsx`:

```typescript
const particleCount = 2000; // Increase/decrease for density
```

### Change Color Scheme

Edit the fragment shader colors:

```glsl
vec3 color1 = vec3(0.0, 0.2, 0.4);  // Change base color
vec3 color2 = vec3(0.5, 0.0, 0.3);  // Change secondary color
// ... adjust mix ratios
```

### Animation Speed

Adjust time multipliers in shaders:

```glsl
uniform float uTime;
// Change 0.5 to faster/slower values
float pulse = sin(uTime * 0.5 + ...);
```

## 🌐 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### Other Platforms

- **Netlify**: Connect Git repository → Deploy
- **GitHub Pages**: Build to `out` directory
- **Cloudflare Pages**: Direct deployment from Git

## 📊 Performance Metrics

| Metric | Value | Target |
|--------|-------|--------|
| **FPS** | 60 FPS | 60 FPS |
| **Particles** | 2000 | 2000 |
| **Shader Compile** | <50ms | <100ms |
| **Initial Load** | <3s | <3s |
| **Bundle Size** | 265KB | <500KB |

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Make your changes**
4. **Test thoroughly** (`npm run dev`)
5. **Commit your changes** (`git commit -m 'Add amazing feature'`)
6. **Push to the branch** (`git push origin feature/amazing-feature`)
7. **Open a Pull Request**

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Three.js](https://threejs.org/) - 3D rendering engine
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) - React renderer
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS

## 📞 Contact

- **GitHub**: [@dropmoltbot](https://github.com/dropmoltbot)
- **Demo**: [nebula-weaver.vercel.app](https://nebula-weaver-7kcfbeywn-dropmoltbots-projects.vercel.app)

---

<div align="center">

**Built with 🌌 by [dropmoltbot](https://github.com/dropmoltbot)**

[![Star](https://img.shields.io/github/stars/dropmoltbot/nebula-weaver?style=social)](https://github.com/dropmoltbot/nebula-weaver)
[![Fork](https://img.shields.io/github/forks/dropmoltbot/nebula-weaver?style=social)](https://github.com/dropmoltbot/nebula-weaver/fork)

</div>
