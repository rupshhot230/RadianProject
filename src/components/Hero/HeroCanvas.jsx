import React from 'react';

function HeroCanvas({ canvasRef }) {
  return (
    <canvas
      ref={canvasRef}
      id="hero-canvas"
      className="absolute inset-0 w-full h-full pointer-events-none"
      data-hero-canvas=""
      data-src="https://uncommon.b-cdn.net/Sequence-home-hero/frame-"
      data-filetype="webp"
      data-frames="76"
      data-digits="5"
      data-index-start="1"
      data-static-src="https://uncommon.b-cdn.net/Sequence-home-hero/frame-00001.webp"
      data-handoff-src="https://uncommon.b-cdn.net/Sequence-home-hero/frame-00076.webp"
    />
  );
}

export default HeroCanvas;
