import React from 'react';

function MiniVideo() {
  return (
    <div className="absolute bottom-10 right-10 z-30 w-64 md:w-80 rounded-3xl overflow-hidden shadow-2xl border border-white/10 hidden md:block group cursor-pointer">
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
  );
}

export default MiniVideo;
