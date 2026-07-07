import React from 'react';

function ScrollIndicator() {
  return (
    <div className="absolute bottom-10 left-10 z-30 text-white flex items-center gap-3 animate-bounce">
      <span className="uppercase text-sm tracking-widest font-semibold">
        Scroll
      </span>
      <svg
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M6 8l6 6 6-6" />
      </svg>
    </div>
  );
}

export default ScrollIndicator;
