import React, { useRef, useState } from 'react';
import HeroCanvas from './HeroCanvas.jsx';
import HeroContent from './HeroContent.jsx';
import MiniVideo from './MiniVideo.jsx';
import ScrollIndicator from './ScrollIndicator.jsx';
import { useImagePreloader } from '../../Hooks/useImagePreloader.js';
import { useCanvasRenderer } from '../../Hooks/useCanvasRenderer.js';
import { useHeroAnimation } from '../../Hooks/useHeroAnimation.js';

const TOTAL_FRAMES = 76;

function HeroSection() {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const [videoEnded, setVideoEnded] = useState(false);

  const { images, loaded, progress } = useImagePreloader(TOTAL_FRAMES);
  const { currentFrameIndex, videoOpacity } = useHeroAnimation(sectionRef, TOTAL_FRAMES, loaded);
  useCanvasRenderer(canvasRef, images, currentFrameIndex);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-white"
    >
      {/* Canvas Sequence */}
      <HeroCanvas canvasRef={canvasRef} />

      {/* Cover Video that plays until user starts scrolling */}
      <video
        src="https://uncommon.b-cdn.net/hero_final.mp4"
        autoPlay
        muted
        playsInline
        onEnded={() => setVideoEnded(true)}
        className="absolute inset-0 w-full h-full object-cover z-[5] transition-opacity duration-500"
        style={{ opacity: videoEnded ? 0 : videoOpacity }}
      />

      {/* Dark Overlay */}
      <div
        className="absolute inset-0 bg-black/20 z-10 transition-opacity"
        style={{ opacity: videoOpacity }}
      />

      {/* UI Elements that fade out on scroll */}
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          opacity: videoOpacity,
          visibility: videoOpacity === 0 ? 'hidden' : 'visible'
        }}
      >
        {/* Content */}
        <HeroContent />

        {/* Scroll Indicator */}
        <ScrollIndicator />

        {/* Mini Video */}
        <MiniVideo />
      </div>
    </section>
  );
}

export default HeroSection;
