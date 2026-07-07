"use client";

import { useJourneyAnimation } from "../../Hooks/useJourneyAnimation.js";
import { Reveal } from "./Reveal.jsx";
import { StoryImages } from "./StoryImages.jsx";

export function JourneyPath({ children }) {
  const { containerRef, pathRef, markerRef } = useJourneyAnimation();

  return (
    <div ref={containerRef} className="relative w-full max-w-7xl mx-auto h-[200vh] sm:h-[250vh] flex justify-center mt-32 mb-16 overflow-visible pointer-events-none">

      {/* SVG Path Background */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1586 2550"
        fill="none"
        preserveAspectRatio="none"
        className="absolute top-0 w-full h-full opacity-20"
      >
        <path
          d="M1140.55 -25.4447L860.57 264.754L836.204 337.931L699.96 498.459L701.2 556.949L669.686 568.117L622.409 584.871C622.498 594.194 618.821 611.398 603.405 605.636C584.136 598.434 468.088 580.628 447.828 587.808C431.619 593.552 177.717 608.697 52.7915 615.551L2.41221 673.729C39.12 691.329 113.743 727.435 118.57 731.056C123.398 734.677 340.087 977.964 447.828 1099.15L681.279 1188.16L660.158 1262.08L1002.61 1262.08L1020.71 1299.8L1041.83 1262.08L1085.58 1248.51L1129.33 1280.19L1222 1380.72L1310.4 1369.44L1310.4 1431.51L1511.66 1581.98L1583.13 1770.06L1020.71 1899.6L836.204 1926.71L800.609 1827.29L699.96 1899.6L757.988 2044.22C784.06 2037.19 836.204 2027.35 836.204 2044.22C836.204 2061.09 911.808 2101.46 949.609 2119.54L983.958 2221.98L860.57 2342.5C789.381 2410.09 637.822 2545.77 633.116 2548.04"
          stroke="#333"
          strokeWidth="3"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* SVG Path Animated Foreground */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1586 2550"
        fill="none"
        preserveAspectRatio="none"
        className="absolute top-0 w-full h-full"
      >
        <path
          ref={pathRef}
          d="M1140.55 -25.4447L860.57 264.754L836.204 337.931L699.96 498.459L701.2 556.949L669.686 568.117L622.409 584.871C622.498 594.194 618.821 611.398 603.405 605.636C584.136 598.434 468.088 580.628 447.828 587.808C431.619 593.552 177.717 608.697 52.7915 615.551L2.41221 673.729C39.12 691.329 113.743 727.435 118.57 731.056C123.398 734.677 340.087 977.964 447.828 1099.15L681.279 1188.16L660.158 1262.08L1002.61 1262.08L1020.71 1299.8L1041.83 1262.08L1085.58 1248.51L1129.33 1280.19L1222 1380.72L1310.4 1369.44L1310.4 1431.51L1511.66 1581.98L1583.13 1770.06L1020.71 1899.6L836.204 1926.71L800.609 1827.29L699.96 1899.6L757.988 2044.22C784.06 2037.19 836.204 2027.35 836.204 2044.22C836.204 2061.09 911.808 2101.46 949.609 2119.54L983.958 2221.98L860.57 2342.5C789.381 2410.09 637.822 2545.77 633.116 2548.04"
          stroke="#F5F3EF"
          strokeWidth="4"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* Floating GPS coordinates */}
      <Reveal className="absolute top-[20%] left-[10%] hidden md:block">
        <div className="flex flex-col gap-1 items-start bg-white/5 backdrop-blur-md px-4 py-2 rounded-xl border border-[#ccff00]/20">
          <div className="font-display text-sm font-semibold text-[#ccff00]">WAYPOINT 01</div>
          <div className="text-xs text-[#f5f5f5]/60">54.3378°N, 7.6462°W</div>
        </div>
      </Reveal>

      {/* Center Marker (Static/Pulse in center of viewport or animated along if possible) */}
      <div
        ref={markerRef}
        className="sticky top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 z-10 flex items-center justify-center rounded-full bg-[#ccff00]/20"
      >
        <div className="w-3 h-3 bg-[#ccff00] rounded-full shadow-[0_0_15px_rgba(204,255,0,0.8)]" />
      </div>

      {/* Story Images Overlay */}
      <div className="absolute inset-0 w-full h-full pointer-events-auto">
        <StoryImages />
        <div className="absolute top-[40%] left-0 w-full z-10">
          {children}
        </div>
      </div>

    </div>
  );
}
