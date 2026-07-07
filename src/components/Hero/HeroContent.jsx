import React from 'react';
import HeroButtons from './HeroButtons.jsx';

function HeroContent() {
  return (
    <div className="absolute inset-0 z-20 flex flex-col justify-center px-4 md:px-16 text-white pointer-events-none mt-48 md:mt-[20rem] lg:mt-[24rem]">
      <div className="pointer-events-auto flex flex-col items-start text-left max-w-3xl">
        <div className="text-sm md:text-base font-semibold tracking-[0.2em] mb-4 text-gray-300">
          THE RADIAN EXR
        </div>
        <h1 className="text-6xl md:text-7xl lg:text-[5rem] font-semibold mb-6 tracking-tighter leading-[1.1]">
          A new era of<br />enduro starts here.
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-2xl font-light opacity-90">
          Made for those driven to explore beyond limits.
        </p>
        <HeroButtons />
      </div>
    </div>
  );
}

export default HeroContent;
