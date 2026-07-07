import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';

export const ScrollProgress = forwardRef((props, ref) => {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useImperativeHandle(ref, () => ({
    updateProgress: (newProgress) => setProgress(newProgress),
    containerRef: containerRef
  }));

  return (
    <div className="absolute right-8 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-2 pointer-events-none">
      <div ref={containerRef} className="flex flex-col gap-1">
        {Array.from({ length: 50 }).map((_, i) => (
          <div 
            key={i} 
            className="w-1 h-2 bg-[#f5f5f5]/20 rounded-full transition-all duration-300"
          />
        ))}
      </div>
    </div>
  );
});

ScrollProgress.displayName = "ScrollProgress";
