import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    id: "swap",
    title: "Swap in 30 seconds",
    caption: "Radian InfiniPack. Tool-free. Built for enduro. Faster than refueling.",
    image: "https://cdn.prod.website-files.com/69c0f1e667a0fb75bfd742b5/69fc8170f752a008082de9ad_3-radian.webp"
  },
  {
    id: "power",
    title: "Power, instantly",
    caption: "Instant 1060 Nm. Staggering 70 hp. No delay between input and action.",
    image: "https://cdn.prod.website-files.com/69c0f1e667a0fb75bfd742b5/69f87da8181709f934d5dd3f_2%20Power.webp"
  },
  {
    id: "storage",
    title: "Smart storage",
    caption: "Carry all you could need. For any situation. Tools, parts, charger, more.",
    image: "https://cdn.prod.website-files.com/69c0f1e667a0fb75bfd742b5/69fc8170f752a008082de9ad_3-radian.webp"
  },
  {
    id: "silence",
    title: "Ride in silence",
    caption: "Less noise. More focus. Hear the feedback from the terrain.",
    image: "https://cdn.prod.website-files.com/69c0f1e667a0fb75bfd742b5/69f87da836ed9b1a17c194a0_4%20silence.webp"
  },
  {
    id: "maintenance",
    title: "Less maintenance",
    caption: "Fewer moving parts. Less servicing. Lower costs. More riding.",
    image: "https://cdn.prod.website-files.com/69c0f1e667a0fb75bfd742b5/69f87da843abe87363281379_5%20maintenance.webp"
  },
  {
    id: "personalities",
    title: "Tune your ride",
    caption: "One bike. Countless personalities. Adjust it to your riding preference.",
    image: "https://cdn.prod.website-files.com/69c0f1e667a0fb75bfd742b5/69f87da848a495f77d2d65dd_6%20-%20app.webp"
  },
  {
    id: "design",
    title: "Confident by design",
    caption: "Strongly defined lines. Speed-inducing. Robust design. Built for purpose.",
    image: "https://cdn.prod.website-files.com/69c0f1e667a0fb75bfd742b5/69f87da8d976ba002e61df71_7%20-%20design.webp"
  }
];

function RadianEXR() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!sectionRef.current) return;

    // 1. The main pinning logic for RadianEXR features
    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: `+=${features.length * 100}%`,
      pin: true,
      scrub: 0.1,
      onUpdate: (self) => {
        const progress = self.progress;

        // Calculate active index
        const newIndex = Math.min(
          features.length - 1,
          Math.floor(progress * features.length)
        );
        setActiveIndex(newIndex);
      }
    });

    // 2. The Canvas Transition Logic
    let originalParent = null;

    const updateCanvas = () => {
      const canvas = document.getElementById('hero-canvas');
      const target = document.getElementById('usp-media-target');
      if (!canvas || !target || !sectionRef.current) return;

      // Store the original parent (which is inside HeroSection)
      if (!originalParent && canvas.parentNode !== target && canvas.parentNode !== document.body) {
        originalParent = canvas.parentNode;
      }

      const rect = sectionRef.current.getBoundingClientRect();
      const winH = window.innerHeight;

      // If we are above the transition zone (Hero section is fully visible)
      if (rect.top >= winH) {
        if (originalParent && canvas.parentNode !== originalParent) {
          originalParent.appendChild(canvas);
        }
        canvas.style.position = 'absolute';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.top = '0px';
        canvas.style.left = '0px';
        canvas.style.borderRadius = '0px';
        canvas.style.zIndex = '1';
        return;
      }

      // Transition progress (0 when rect.top == winH, 1 when rect.top <= 0)
      let p = 1 - (rect.top / winH);
      if (p > 1) p = 1;
      if (p < 0) p = 0;

      // If transition is fully complete, physically place it inside the target!
      if (p === 1) {
        if (canvas.parentNode !== target) {
          target.appendChild(canvas);
        }
        canvas.style.position = 'absolute';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.top = '0px';
        canvas.style.left = '0px';
        canvas.style.borderRadius = '0px'; // target container has overflow-hidden & rounded-3xl
        canvas.style.zIndex = '10';
        return;
      }

      // Interpolation Phase (0 < p < 1)
      // Move to body to avoid clipping and stacking context issues during fixed transition
      if (canvas.parentNode !== document.body) {
        document.body.appendChild(canvas);
      }

      const targetBounds = target.getBoundingClientRect();
      const startWidth = window.innerWidth;
      const startHeight = window.innerHeight;

      // The start position moves up as the user scrolls, simulating natural scroll
      const startTop = -(p * winH);
      const startLeft = 0;

      const currentWidth = startWidth + (targetBounds.width - startWidth) * p;
      const currentHeight = startHeight + (targetBounds.height - startHeight) * p;
      const currentTop = startTop + (targetBounds.top - startTop) * p;
      const currentLeft = startLeft + (targetBounds.left - startLeft) * p;
      const currentRadius = 0 + (24 - 0) * p; // 3xl is 24px

      canvas.style.position = 'fixed';
      canvas.style.zIndex = '40';
      canvas.style.width = `${currentWidth}px`;
      canvas.style.height = `${currentHeight}px`;
      canvas.style.top = `${currentTop}px`;
      canvas.style.left = `${currentLeft}px`;
      canvas.style.borderRadius = `${currentRadius}px`;
    };

    gsap.ticker.add(updateCanvas);

    return () => {
      trigger.kill();
      gsap.ticker.remove(updateCanvas);
    };
  }, []);

  // Hide the flying canvas when scrolling past the first feature so other images are visible
  useEffect(() => {
    const canvas = document.getElementById('hero-canvas');
    if (canvas) {
      if (!canvas.style.transition.includes('opacity')) {
        canvas.style.transition += ', opacity 0.5s ease-in-out';
      }
      if (activeIndex > 0) {
        canvas.style.opacity = '0';
        canvas.style.pointerEvents = 'none';
      } else {
        canvas.style.opacity = '1';
        canvas.style.pointerEvents = 'auto';
      }
    }
  }, [activeIndex]);

  return (
    <section ref={sectionRef} id="exr-section" className="h-screen w-full bg-white text-black overflow-hidden relative">
      <div className="max-w-[1920px] mx-auto h-full flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-32 py-12 md:py-24">

        {/* Left Column: Titles */}
        <div className="w-full md:w-1/2 flex flex-col justify-center h-full z-10">
          <h1 className="text-6xl font-semibold tracking-widest uppercase mb-8 md:mb-32 text-gray-500">Radian EXR</h1>
          <ul className="flex flex-col gap-4 md:gap-8">
            {features.map((feature, index) => (
              <li
                key={feature.id}
                className={`transition-all duration-500 cursor-pointer ${index === activeIndex ? 'opacity-100 translate-x-2' : 'opacity-20 translate-x-0'
                  }`}
              >
                <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold tracking-tighter leading-none">
                  {feature.title}
                </h2>
              </li>
            ))}
          </ul>

          <div className="mt-12 md:mt-32">
            <button className="flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition group">
              Explore the EXR
              <div className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-full group-hover:translate-x-1 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32" fill="none">
                  <path d="M16.6671 20.5L15.8346 19.6832L17.5938 17.9241C17.887 17.6309 18.1487 17.3848 18.3791 17.1859C18.6095 16.9764 18.7927 16.8194 18.9289 16.7147C19.065 16.5995 19.133 16.5419 19.133 16.5419C19.133 16.5419 19.044 16.5524 18.866 16.5733C18.688 16.5838 18.4419 16.5995 18.1278 16.6204C17.8241 16.6309 17.4681 16.6361 17.0597 16.6361L10.8398 16.6361V15.3639L17.044 15.3639C17.4524 15.3639 17.8137 15.3743 18.1278 15.3953C18.4419 15.4058 18.6828 15.4215 18.8503 15.4424C19.0283 15.4634 19.1173 15.4738 19.1173 15.4738C19.1173 15.4738 19.0493 15.4162 18.9131 15.301C18.777 15.1859 18.5938 15.0236 18.3634 14.8141C18.133 14.6047 17.8765 14.3586 17.5938 14.0759L15.8503 12.3168L16.6828 11.5L21.1592 16.0079L16.6671 20.5Z" fill="currentColor"></path>
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* Right Column: Media */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center relative mt-8 md:mt-0 z-0">
          <div id="usp-media-target" className="relative w-full aspect-[4/3] md:aspect-[4/5] rounded-3xl overflow-hidden bg-transparent">

            {/* The actual feature images */}
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className="absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out"
                style={{
                  opacity: index === activeIndex ? 1 : 0,
                  zIndex: index === activeIndex ? 10 : 1
                }}
              >
                <img
                  src={index === 0 ? "https://uncommon.b-cdn.net/Sequence-home-hero/frame-00070.webp" : feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}

            {/* Always show the caption for the active feature */}
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 bg-gradient-to-t from-black/80 to-transparent text-white z-50">
              <p className="text-lg md:text-2xl font-light">{features[activeIndex].caption}</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default RadianEXR;
