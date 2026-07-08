import React, { useState } from 'react';

function MiniVideo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mini Video Trigger */}
      <div 
        className="absolute bottom-10 right-10 z-30 w-64 md:w-80 rounded-3xl overflow-hidden shadow-2xl border border-white/10 hidden md:block group cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        >
          <source
            src="https://uncommon.b-cdn.net/Radian%20-%20hero%20cinematisch.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/20 flex flex-col justify-end p-5">
          <div className="text-white text-sm font-semibold flex items-center justify-between">
            <span>Play release video</span>
            <span className="text-xs opacity-70">02:56</span>
          </div>
        </div>
      </div>

      {/* Fullscreen Video Modal / Lightbox */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95">
          <button 
            className="absolute top-8 right-8 text-white hover:opacity-70 transition-opacity z-[110]"
            onClick={() => setIsOpen(false)}
            aria-label="Close video"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <div className="w-full max-w-6xl aspect-video relative p-4">
            <video
              autoPlay
              controls
              className="w-full h-full object-contain rounded-xl shadow-2xl"
            >
              <source
                src="https://uncommon.b-cdn.net/Radian%20-%20hero%20cinematisch.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      )}
    </>
  );
}

export default MiniVideo;
