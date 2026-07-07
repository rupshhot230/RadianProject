import React, { forwardRef } from 'react';

export const ParallaxLayer = forwardRef(({ src, alt, className = "" }, ref) => {
  return (
    <div ref={ref} className={`absolute inset-0 w-full h-full ${className}`}>
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover" 
      />
    </div>
  );
});

ParallaxLayer.displayName = "ParallaxLayer";
