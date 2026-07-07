import React, { forwardRef } from 'react';

export const CTASection = forwardRef((props, ref) => {
  return (
    <div 
      ref={ref} 
      className="absolute bottom-20 left-1/2 -translate-x-1/2 z-40 text-center flex flex-col items-center opacity-0"
    >
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#f5f5f5] mb-6">
        Ready to ride?
      </h2>
      <button className="px-8 py-4 bg-[#ccff00] text-[#0a0a0a] font-bold rounded-full hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(204,255,0,0.4)]">
        Reserve Your EXR
      </button>
    </div>
  );
});

CTASection.displayName = "CTASection";
