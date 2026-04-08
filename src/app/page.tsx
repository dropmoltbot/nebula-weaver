import NebulaCanvas from '@/components/NebulaParticles';
import BackgroundCanvas from '@/components/BackgroundCanvas';
import UIOverlay from '@/components/UIOverlay';

export default function Home() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Background with shader */}
      <BackgroundCanvas />

      {/* Nebula Particles Canvas */}
      <NebulaCanvas />

      {/* UI Overlay */}
      <UIOverlay />
    </div>
  );
}
