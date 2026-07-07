import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ParallaxLayer } from "./ParallaxLayer.jsx";
import { ScrollProgress } from "./ScrollProgress.jsx";
import { CTASection } from "./CTASection.jsx";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ReserveCTA() {
  const containerRef = useRef(null);
  const pinRef = useRef(null);
  
  // Layer Refs
  const bgRef = useRef(null);
  const forestRef = useRef(null);
  const mountainRef = useRef(null);
  const motoRef = useRef(null);
  const treesLeftRef = useRef(null);
  const treesRightRef = useRef(null);
  const grassRef = useRef(null);
  
  const ctaRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !pinRef.current) return;

    // We create a ScrollTrigger that pins the view for 250vh
    // and animates all layers along the scroll progress.
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=250%", // Pins for 250vh
          pin: pinRef.current,
          scrub: 1, // Smooth scrubbing
          onUpdate: (self) => {
            // Update the vertical scroll progress indicator
            progressRef.current?.updateProgress(self.progress);
            
            // Highlight lines based on progress
            if (progressRef.current?.containerRef?.current) {
              const lines = progressRef.current.containerRef.current.children;
              const activeIndex = Math.floor(self.progress * 50);
              for (let i = 0; i < lines.length; i++) {
                const line = lines[i];
                if (i === activeIndex) {
                  line.style.backgroundColor = "rgba(255, 209, 0, 1)"; // Volt
                  line.style.boxShadow = "0 0 8px rgba(255, 209, 0, 0.8)";
                } else if (i < activeIndex) {
                  line.style.backgroundColor = "rgba(245, 245, 245, 0.8)"; // Snow bright
                  line.style.boxShadow = "none";
                } else {
                  line.style.backgroundColor = "rgba(245, 245, 245, 0.2)"; // Snow dim
                  line.style.boxShadow = "none";
                }
              }
            }
          }
        },
      });

      // Layer Parallax Speeds (y translations)
      // We animate them concurrently by putting them all at label 'start'
      tl.addLabel('start', 0);
      
      // 1. Background (10%)
      if (bgRef.current) tl.to(bgRef.current, { yPercent: 10, ease: "none" }, 'start');
      
      // 2. Forest (20%)
      if (forestRef.current) tl.to(forestRef.current, { yPercent: 20, ease: "none" }, 'start');
      
      // 3. Mountains (30%) - Optional additional layer if needed, we'll skip if not provided in assets
      
      // 4. Motorcycle (35% speed, scaling 0.9->1.1, glow, small rotation)
      if (motoRef.current) {
        gsap.set(motoRef.current, { scale: 0.9, yPercent: 10 });
        tl.to(motoRef.current, { 
          yPercent: -25, // Move upward relative to container
          scale: 1.1,
          rotation: -2,
          filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.5)) drop-shadow(0 0 60px rgba(255,209,0,0.3))",
          ease: "none" 
        }, 'start');
      }

      // 5. Trees Left & Right (50%)
      if (treesLeftRef.current) tl.to(treesLeftRef.current, { yPercent: 50, ease: "none" }, 'start');
      if (treesRightRef.current) tl.to(treesRightRef.current, { yPercent: 50, ease: "none" }, 'start');

      // 6. Foreground Grass (70%)
      if (grassRef.current) tl.to(grassRef.current, { yPercent: 70, ease: "none" }, 'start');

      // 7. CTA Reveal at the end of the timeline
      // Appears in the last 30% of the scroll
      if (ctaRef.current) {
        tl.to(ctaRef.current, {
          opacity: 1,
          y: -50,
          duration: 0.3,
          ease: "power2.out",
        }, 0.7); // 0.7 means it starts animating 70% into the timeline
      }

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="reserve" 
      ref={containerRef} 
      className="relative w-full h-[350vh] bg-[#0a0a0a]"
    >
      <div 
        ref={pinRef} 
        className="relative w-full h-[100vh] overflow-hidden bg-[#0a0a0a]"
        style={{ willChange: "transform" }}
      >
        {/* Cinematic Background & Effects */}
        <div className="absolute inset-0 bg-[#0a0a0a] z-0" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-0 pointer-events-none" />
        
        {/* Seamless Blending Gradients */}
        <div className="absolute inset-x-0 top-0 h-[20vh] bg-gradient-to-b from-[#0a0a0a] to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-[30vh] bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-20 pointer-events-none" />

        {/* Parallax Layers */}
        {/* 1. Background Sky */}
        <ParallaxLayer 
          ref={bgRef} 
          src="https://cdn.prod.website-files.com/69c0f1e667a0fb75bfd742b5/69e60f1fa567203c624b1fcd_1%20-%20Background%20-%20Desktop.webp" 
          alt="Sky background"
          className="z-[1]"
        />
        
        {/* 2. Forest */}
        <ParallaxLayer 
          ref={forestRef} 
          src="https://cdn.prod.website-files.com/69c0f1e667a0fb75bfd742b5/69e60f1fa567203c624b1fcd_1%20-%20Background%20-%20Desktop.webp" // Reusing as requested if separate not provided
          alt="Forest layer"
          className="z-[2] opacity-80"
        />

        {/* 4. Motorcycle */}
        <div ref={motoRef} className="absolute inset-0 z-[10] flex items-end justify-center pb-[10vh] pointer-events-none">
          <img 
            src="https://cdn.prod.website-files.com/69c0f1e667a0fb75bfd742b5/69e61150ef5b4f7d0708c37f_Parallax%20Motor.webp"
            alt="Motorcycle"
            className="w-full max-w-[1200px] object-contain origin-bottom"
          />
        </div>

        {/* 5. Trees Left & Right */}
        <ParallaxLayer 
          ref={treesLeftRef}
          src="https://cdn.prod.website-files.com/69c0f1e667a0fb75bfd742b5/69e612909b13c3d89f65ab4c_2-%20Bomen%20links.webp"
          alt="Trees Left"
          className="z-[11] object-left"
        />
        <ParallaxLayer 
          ref={treesRightRef}
          src="https://cdn.prod.website-files.com/69c0f1e667a0fb75bfd742b5/69e612d44dbaaad20b987a33_2-%20Bomen%20rechts.webp"
          alt="Trees Right"
          className="z-[11] object-right"
        />

        {/* 7. Foreground Grass/Ground - Using a dark gradient as fallback since no explicit grass asset was provided, or using the bottom gradient to simulate ground */}
        <div ref={grassRef} className="absolute -bottom-[20%] left-0 w-full h-[40%] bg-gradient-to-t from-[#0a0a0a] to-transparent z-[12]" />

        {/* Scroll Progress Indicator */}
        <ScrollProgress ref={progressRef} />

        {/* CTA Section Overlay */}
        <CTASection ref={ctaRef} />

      </div>
    </section>
  );
}
