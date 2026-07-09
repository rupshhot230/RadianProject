import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Draggable } from 'gsap/Draggable';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, Draggable);
}

export function Performance() {
  const sectionRef = useRef(null);
  const pathRef = useRef(null);
  const markerRef = useRef(null);
  const marqueeListRef = useRef(null);

  // Parallax refs
  const parallaxRefs = useRef([]);
  const setParallaxRef = (el) => {
    if (el && !parallaxRefs.current.includes(el)) {
      parallaxRefs.current.push(el);
    }
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    // 1. Draw SVG Path Animation & Marker movement
    if (pathRef.current && markerRef.current) {
      const pathLength = pathRef.current.getTotalLength();

      // Initially hide the path by setting dashoffset to full length
      gsap.set(pathRef.current, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          // Draw path
          gsap.set(pathRef.current, {
            strokeDashoffset: pathLength * (1 - progress)
          });

          // Move Marker along path (rough approximation for y, complex motion requires MotionPathPlugin)
          // For now, we simulate vertical movement proportional to scroll
          const markerY = progress * 1673; // Container height
          gsap.set(markerRef.current, {
            y: markerY
          });
        }
      });
    }

    // 2. Parallax Effects for Images
    parallaxRefs.current.forEach((el, index) => {
      // The HTML has data-parallax-start and data-parallax-end logic.
      // We will create a simple vertical parallax effect using GSAP.
      const yStart = (index + 1) * 20; // 20%, 40%, etc.
      const yEnd = -(index + 1) * 20;

      gsap.fromTo(el,
        { yPercent: yStart },
        {
          yPercent: yEnd,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        }
      );
    });

    // 3. Draggable Marquee
    let draggables = [];
    let marqueeTween;

    if (marqueeListRef.current) {
      const list = marqueeListRef.current;

      const updateBounds = () => {
        if (!list) return;
        const containerWidth = document.documentElement.clientWidth;
        const listWidth = list.scrollWidth;
        const minX = Math.min(0, containerWidth - listWidth);
        if (draggables.length > 0) {
          draggables[0].applyBounds({ minX, maxX: 0 });
        }
      };

      const startAutoSlide = () => {
        if (!list) return;
        const halfWidth = list.scrollWidth / 2;

        if (marqueeTween) marqueeTween.kill();

        marqueeTween = gsap.to(list, {
          x: `-=${halfWidth}`,
          duration: 25,
          ease: "none",
          repeat: -1,
          modifiers: {
            x: gsap.utils.unitize(x => {
              let val = parseFloat(x) % halfWidth;
              if (val > 0) val -= halfWidth;
              return val;
            })
          }
        });
      };

      draggables = Draggable.create(list, {
        type: "x",
        zIndexBoost: false,
        onPress: () => {
          updateBounds();
          if (marqueeTween) marqueeTween.pause();
        },
        onRelease: () => {
          if (marqueeTween) marqueeTween.play();
        }
      });

      const handleResize = () => {
        updateBounds();
        if (marqueeTween) marqueeTween.kill();
        setTimeout(startAutoSlide, 100);
      };

      window.addEventListener('resize', handleResize);
      setTimeout(() => {
        updateBounds();
        startAutoSlide();
      }, 1000);

      // Cleanup function addition
      return () => {
        ScrollTrigger.getAll().forEach(t => t.kill());
        if (draggables && draggables[0]) draggables[0].kill();
        if (marqueeTween) marqueeTween.kill();
        window.removeEventListener('resize', handleResize);
      };
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      if (draggables && draggables[0]) draggables[0].kill();
    };
  }, []);

  return (
    <section ref={sectionRef} id="performance" data-theme-switch="" className="enduro theme-dark bg-[#121714] text-[#F5F3EF] relative w-full overflow-hidden ">
      <div className="enduro_wrapper relative z-10">

        {/* SVG Drawing Background */}
        <div className="enduro-background absolute inset-0 z-0 opacity-40 md:opacity-100 pointer-events-none">
          <div className="w-layout-blockcontainer container w-container mx-auto relative h-full flex justify-center">
            <div data-draw-scroll-item="" className="draw-scroll__wrap relative h-full">
              <div data-draw-scroll-wrap="" className="draw-scroll__path-w absolute top-0 left-1/2 -translate-x-1/2 w-[1041px] h-[1673px] overflow-visible pointer-events-none">
                <div aria-hidden="true" className="draw-scroll__overlay absolute top-0 left-1/2 -translate-x-1/2 w-[1041px] h-[1673px] overflow-visible pointer-events-none">

                  {/* Moving Marker */}
                  <div ref={markerRef} data-draw-marker="" className="draw-scroll__marker absolute opacity-100" style={{ transform: 'translate(382.661px, 0px)', transformOrigin: '50% 50%' }}>
                    <div className="draw-scroll__coords mb-2 flex flex-col text-xs font-mono tracking-widest text-[#F1E108]">
                      <div data-coords-north="" className="draw-scroll__coords-item">54.2876°N</div>
                      <div data-coords-west="" className="draw-scroll__coords-item">7.7622°W</div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" viewBox="0 0 26 26" fill="none" className="draw-scroll__pin">
                      <path d="M24 13C24 19.0751 19.0751 24 13 24C6.92487 24 2 19.0751 2 13C2 6.92487 6.92487 2 13 2C19.0751 2 24 6.92487 24 13Z" fill="#121714"></path>
                      <path d="M19.5 13C19.5 16.5899 16.5899 19.5 13 19.5C9.41015 19.5 6.5 16.5899 6.5 13C6.5 9.41015 9.41015 6.5 13 6.5C16.5899 6.5 19.5 9.41015 19.5 13Z" fill="#F1E108"></path>
                      <path d="M13 1C19.6274 1 25 6.37258 25 13C25 19.6274 19.6274 25 13 25C6.37258 25 1 19.6274 1 13C1 6.37258 6.37258 1 13 1Z" stroke="white" strokeWidth="2"></path>
                    </svg>
                  </div>
                </div>

                {/* SVG Path lines */}
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1586 2550" fill="none" data-draw-scroll-desktop="" className="draw-scroll__path-el is-desktop absolute top-0 left-1/2 -translate-x-1/2 w-[1041px] h-[1673px] overflow-visible">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1586 2550" fill="none" className="draw-scroll__line">
                    <path d="M1140.55 -25.4447L860.57 264.754L836.204 337.931L699.96 498.459L701.2 556.949L669.686 568.117L622.409 584.871C622.498 594.194 618.821 611.398 603.405 605.636C584.136 598.434 468.088 580.628 447.828 587.808C431.619 593.552 177.717 608.697 52.7915 615.551L2.41221 673.729C39.12 691.329 113.743 727.435 118.57 731.056C123.398 734.677 340.087 977.964 447.828 1099.15L681.279 1188.16L660.158 1262.08L1002.61 1262.08L1020.71 1299.8L1041.83 1262.08L1085.58 1248.51L1129.33 1280.19L1222 1380.72L1310.4 1369.44L1310.4 1431.51L1511.66 1581.98L1583.13 1770.06L1020.71 1899.6L836.204 1926.71L800.609 1827.29L699.96 1899.6L757.988 2044.22C784.06 2037.19 836.204 2027.35 836.204 2044.22C836.204 2061.09 911.808 2101.46 949.609 2119.54L983.958 2221.98L860.57 2342.5C789.381 2410.09 637.822 2545.77 633.116 2548.04" stroke="#333" strokeWidth="3" strokeLinecap="round"></path>
                  </svg>
                  <path ref={pathRef} d="M1140.55 -25.4447L860.57 264.754L836.204 337.931L699.96 498.459L701.2 556.949L669.686 568.117L622.409 584.871C622.498 594.194 618.821 611.398 603.405 605.636C584.136 598.434 468.088 580.628 447.828 587.808C431.619 593.552 177.717 608.697 52.7915 615.551L2.41221 673.729C39.12 691.329 113.743 727.435 118.57 731.056C123.398 734.677 340.087 977.964 447.828 1099.15L681.279 1188.16L660.158 1262.08L1002.61 1262.08L1020.71 1299.8L1041.83 1262.08L1085.58 1248.51L1129.33 1280.19L1222 1380.72L1310.4 1369.44L1310.4 1431.51L1511.66 1581.98L1583.13 1770.06L1020.71 1899.6L836.204 1926.71L800.609 1827.29L699.96 1899.6L757.988 2044.22C784.06 2037.19 836.204 2027.35 836.204 2044.22C836.204 2061.09 911.808 2101.46 949.609 2119.54L983.958 2221.98L860.57 2342.5C789.381 2410.09 637.822 2545.77 633.116 2548.04" stroke="#F5F3EF" strokeWidth="3" strokeLinecap="round" data-draw-scroll-path=""></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Content Wrapper */}
        <div className="enduro-content_wrapper relative z-20">
          <div className="w-layout-blockcontainer container w-container mx-auto  max-w-9xl mt-32 ">
            <div className="enduro_content flex flex-col gap-32">

              {/* Row 1: Floating Images */}
              <div className="enduro-content_row flex justify-between items-start  gap-20">
                <div className="enduro-content_img is-01 w-[220px] md:w-[260px] lg:w-[300px]  rounded-xl overflow-hidden shadow-xl mt-10">
                  <div className="aspect-[4/4]"> <img src="https://cdn.prod.website-files.com/69c0f1e667a0fb75bfd742b5/69f87fa2affc7dacfb4bd32b_endoru.webp" alt="Person riding a yellow dirt bike through a forest kicking up dust at high speed." className="w-full h-full object-cover" />


                  </div>
                </div>
                <div className="enduro-content_img is-02 w-[260px] md:w-[320px] lg:w-[380px] rounded-xl overflow-hidden shadow-xl mt-32 md:mt-48">
                  <div className="aspect-[2/2]">
                    <img src="https://cdn.prod.website-files.com/69c0f1e667a0fb75bfd742b5/69cd2465cf61f9c747574bb1_Enduro%2002.webp" alt="Motorcyclist riding a yellow dirt bike rapidly on a dirt track, kicking up dust." className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>              {/* Row 2: Built for Enduro */}
              <div className="enduro-content_row grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32 xl:gap-40 items-center">
                <div className="heading-wrapper lg:col-span-7 order-1 lg:order-2">
                  <h2 className="heading-l text-[clamp(2.5rem,4vw,4rem)] font-semibold tracking-tight leading-[1.1] mb-6">Built for enduro.</h2>
                  <p className="paragraph-regular text-lg md:text-xl text-white/70 max-w-[40ch]">From tight forest single tracks and steep rocky climbs, to wide open terrains and long-distance races, the Radian EXR is made for the full spectrum of enduro. Electric power gives you the freedom to ride the way you want, wherever you want.</p>
                </div>
                <div className="enduro-content_img is-03 rounded-xl overflow-hidden shadow-xl lg:col-span-5 w-full order-2 lg:order-1">
                  <div className="aspect-[3/2]">
                    <img src="https://cdn.prod.website-files.com/69c0f1e667a0fb75bfd742b5/69f87fa230dee903ea0d4dc5_radian-race.webp" alt="Person wearing protective gear riding a yellow dirt bike through a forest trail." className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              {/* Row 3: Ready for Racing & Video */}
              <div className="enduro-content_row grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 xl:gap-20 items-center mt-24 md:mt-32">
                <div className="heading-wrapper lg:order-1 lg:col-span-7">
                  <h2 className="heading-l text-[clamp(2.5rem,4vw,4rem)] font-semibold tracking-tight leading-[1.1] mb-6">Ready for racing</h2>
                  <p className="paragraph-regular text-lg md:text-xl text-white/70 max-w-[40ch]">The EXR's rapidly swappable battery removes previous limits from any race strategy. Push the pace without compromise. With premium components and a highly responsive chassis, the Radian EXR inspires confidence to ride beyond your previous limits.</p>
                </div>
                <div className="enduro-content_img is-03 rounded-3xl overflow-hidden shadow-2xl lg:order-2 lg:col-span-5 w-full -ml-6 md:-ml-0">
                  <div className="aspect-[4/3] md:aspect-video relative bunny-bg bg-[#2a2a2a]">
                    <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
                      <source src="https://vz-6299e355-e25.b-cdn.net/79155e06-0ac6-4fd0-b2f2-baed1610df1a/playlist.m3u8" type="application/x-mpegURL" />
                      <source src="https://uncommon.b-cdn.net/Radian%20-%20hero%20cinematisch.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>

              </div>
              <div className="draggable-marquee overflow-hidden pt-36 w-[100vw] relative left-1/2 -ml-[50vw] cursor-grab active:cursor-grabbing">
                <div ref={marqueeListRef} className="draggable-marquee__collection flex gap-6 md:gap-12 pr-6 md:pr-12 w-max" style={{ touchAction: 'pan-y' }}>
                  {[
                    { src: "https://cdn.prod.website-files.com/69c0f1e667a0fb75bfd742b5/69e76045eb3a15f96de6906a_radian-1.webp", alt: "Person wearing a black full-face helmet" },
                    { src: "https://cdn.prod.website-files.com/69c0f1e667a0fb75bfd742b5/69e7604589c59545118a5e3e_radian-6.webp", alt: "Rider performing a wheelie" },
                    { src: "https://cdn.prod.website-files.com/69c0f1e667a0fb75bfd742b5/69e7604586b19abdceff1082_radian-2.webp", alt: "Motorcyclist riding a yellow dirt bike" },
                    { src: "https://cdn.prod.website-files.com/69c0f1e667a0fb75bfd742b5/69e76045ef373c24042e5673_radian-3.webp", alt: "Person riding a yellow dirt bike kicking up a large spray" },
                    { src: "https://cdn.prod.website-files.com/69c0f1e667a0fb75bfd742b5/69e7604537eed64c7a0b90a0_radian-5.webp", alt: "Person riding a yellow dirt bike quickly" },
                    { src: "https://cdn.prod.website-files.com/69c0f1e667a0fb75bfd742b5/69e760452c49d82527f86784_Radian-4.webp", alt: "Person riding a yellow dirt bike through a forest trail" },
                    { src: "https://cdn.prod.website-files.com/69c0f1e667a0fb75bfd742b5/69e76045eb3a15f96de6906a_radian-1.webp", alt: "Person wearing a black full-face helmet" },
                    { src: "https://cdn.prod.website-files.com/69c0f1e667a0fb75bfd742b5/69e7604589c59545118a5e3e_radian-6.webp", alt: "Rider performing a wheelie" },
                    { src: "https://cdn.prod.website-files.com/69c0f1e667a0fb75bfd742b5/69e7604586b19abdceff1082_radian-2.webp", alt: "Motorcyclist riding a yellow dirt bike" },
                    { src: "https://cdn.prod.website-files.com/69c0f1e667a0fb75bfd742b5/69e76045ef373c24042e5673_radian-3.webp", alt: "Person riding a yellow dirt bike kicking up a large spray" },
                    { src: "https://cdn.prod.website-files.com/69c0f1e667a0fb75bfd742b5/69e7604537eed64c7a0b90a0_radian-5.webp", alt: "Person riding a yellow dirt bike quickly" },
                    { src: "https://cdn.prod.website-files.com/69c0f1e667a0fb75bfd742b5/69e760452c49d82527f86784_Radian-4.webp", alt: "Person riding a yellow dirt bike through a forest trail" }
                  ].map((item, index) => (
                    <div key={index} className="draggable-marquee__item w-[60vw] md:w-[45vw] lg:w-[500px] aspect-[4/5] md:aspect-[3/2] flex-shrink-0 rounded-3xl overflow-hidden shadow-2xl">
                      <img className="draggable-marquee__item-img w-full h-full object-cover pointer-events-none" src={item.src} alt={item.alt} draggable="false" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Row 5: Built by engineers */}
              <div className="enduro-content_row flex justify-center pb-48 text-left border-t border-white/20">
                <div className="text-component__item w-full flex flex-col gap-8 mx-auto pt-16">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
                    <div>
                      <h3 className="heading-m text-3xl md:text-5xl font-bold tracking-tight">Built by engineers.<br className="hidden lg:block" /> Driven by riders.</h3>
                    </div>
                    <div>
                      <p className="paragraph-regular text-lg text-white/70 font-light leading-relaxed">
                        This didn’t start with a market opportunity or a category trend. It began with people who love to ride and who have spent their lives building things, breaking them, and improving them. Electric technology was never unfamiliar to us, it’s always been part of
                      </p>
                    </div>
                    <div>
                      <p className="paragraph-regular text-lg text-white/70 font-light leading-relaxed">
                        how we think, design and solve problems. The goal was never to translate a conventional bike into electric form. The goal was to build a platform that fully embraces the possibilities of electric propulsion, without losing what riders care about.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
