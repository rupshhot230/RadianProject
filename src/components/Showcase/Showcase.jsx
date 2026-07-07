"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ─────────────────────────────────────────────────────────────────
   SHOWCASE  — Cinematic full-screen storytelling section
   Inspired by Apple · Tesla · Rivian · Radian
───────────────────────────────────────────────────────────────── */

export function Showcase() {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const imgRef = useRef(null);
  const headlineRef = useRef(null);
  const paraRef = useRef(null);
  const btnRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    const img = imgRef.current;
    const headline = headlineRef.current;
    const para = paraRef.current;
    const btn = btnRef.current;

    if (!section || !bg || !img) return;

    const ctx = gsap.context(() => {
      /* ── 1. Background parallax ── */
      gsap.fromTo(
        bg,
        { yPercent: -10 },
        {
          yPercent: 0,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.25,
          },
        }
      );

      /* ── 2. Subtle background image zoom on enter ── */
      gsap.fromTo(
        img,
        { scale: 1.06 },
        {
          scale: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top top",
            scrub: 1.5,
          },
        }
      );

      /* ── 3. Content entrance animations ── */
      if (headline) {
        gsap.fromTo(
          headline,
          { opacity: 0, y: 48 },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 65%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      if (para) {
        gsap.fromTo(
          para,
          { opacity: 0, y: 36 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 65%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      if (btn) {
        gsap.fromTo(
          btn,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            delay: 0.3,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 65%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      aria-label="About Radian — cinematic brand statement"
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center"
      style={{ background: "#050505" }}
    >
      {/* ─────────────────────────────────────────────
          BACKGROUND — parallax wrapper
      ───────────────────────────────────────────── */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full will-change-transform"
        /* Extra height so parallax doesn't clip */
        style={{ top: "-15%", height: "130%" }}
      >
        {/* Background lifestyle image */}
        <img
          ref={imgRef}
          src="https://cdn.prod.website-files.com/69c0f1e667a0fb75bfd742b5/69cbd1c5997f009c5c86f52f_B5A5494%20Squoosh.webp"
          srcSet="
            https://cdn.prod.website-files.com/69c0f1e667a0fb75bfd742b5/69cbd1c5997f009c5c86f52f_B5A5494%20Squoosh-p-500.webp  500w,
            https://cdn.prod.website-files.com/69c0f1e667a0fb75bfd742b5/69cbd1c5997f009c5c86f52f_B5A5494%20Squoosh-p-800.webp  800w,
            https://cdn.prod.website-files.com/69c0f1e667a0fb75bfd742b5/69cbd1c5997f009c5c86f52f_B5A5494%20Squoosh-p-1080.webp 1080w,
            https://cdn.prod.website-files.com/69c0f1e667a0fb75bfd742b5/69cbd1c5997f009c5c86f52f_B5A5494%20Squoosh-p-1600.webp 1600w,
            https://cdn.prod.website-files.com/69c0f1e667a0fb75bfd742b5/69cbd1c5997f009c5c86f52f_B5A5494%20Squoosh.webp         1920w
          "
          sizes="100vw"
          alt="Person riding a yellow dirt bike at speed through a blurred forested area."
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover will-change-transform"
        />

        {/* Dark base overlay */}
        <div
          ref={overlayRef}
          className="absolute inset-0"
          style={{
            background: "rgba(0, 0, 0, 0.52)",
          }}
        />

        {/* Cinematic vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.72) 100%)",
          }}
        />

        {/* Top-to-bottom gradient — eases into section from above */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(5,5,5,0.55) 0%, transparent 18%, transparent 75%, rgba(5,5,5,0.60) 100%)",
          }}
        />

        {/* Luxury warm color-grade tint */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, rgba(232,255,87,0.04) 0%, transparent 50%, rgba(0,0,0,0.08) 100%)",
            mixBlendMode: "screen",
          }}
        />
      </div>

      {/* ─────────────────────────────────────────────
          CONTENT — left aligned text, right aligned button
      ───────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen w-full px-6 sm:px-12 md:px-20 lg:px-28 py-24">
        <div className="w-full mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div className="flex flex-col items-start text-left max-w-2xl">

            {/* Eyebrow label */}
            <div
              className="flex items-center gap-3 mb-6"
              style={{ opacity: 0 }}
              ref={(el) => {
                if (el) {
                  gsap.fromTo(
                    el,
                    { opacity: 0, y: 20 },
                    {
                      opacity: 1,
                      y: 0,
                      duration: 0.9,
                      ease: "power3.out",
                      scrollTrigger: {
                        trigger: el,
                        start: "top 80%",
                        toggleActions: "play none none none",
                      },
                    }
                  );
                }
              }}
            >
              <span
                className="h-px w-10 block"
                style={{ background: "rgba(232,255,87,0.7)" }}
              />
              <span
                className="text-xs font-semibold uppercase tracking-[0.24em] font-sans"
                style={{ color: "rgba(232,255,87,0.85)" }}
              >
                Our Belief
              </span>
            </div>

            {/* Main headline */}
            <h2
              ref={headlineRef}
              className="font-display font-bold leading-[1.05] tracking-tight text-white mb-6"
              style={{
                fontSize: "clamp(1rem, 10vw, 4rem)",
                opacity: 0, // GSAP animates this in
                maxWidth: "20ch",
              }}
            >
              Some people wait for change.{" "}
              <em
                className="not-italic block"
                style={{
                  background:
                    "linear-gradient(90deg, #e8ff57 0%, #c8dc3a 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Others create it.
              </em>
            </h2>

            {/* Supporting paragraph */}
            <p
              ref={paraRef}
              className="font-sans leading-relaxed text-white/70"
              style={{
                fontSize: "clamp(1rem, 1.6vw, 1.2rem)",
                maxWidth: "42ch",
                opacity: 0, // GSAP animates this in
              }}
            >
              We're driven to build an electric future without compromise. Driven
              by curiosity, shaped by engineering, and made for those who move
              first.
            </p>
          </div>

          <div className="flex-shrink-0 pb-2">
            {/* CTA Button */}
            <a
              ref={btnRef}
              href="/our-story"
              id="showcase-our-story-btn"
              aria-label="Read our story"
              className="showcase-btn group"
              style={{ opacity: 0 }} // GSAP animates this in
            >
              <span className="showcase-btn__text">Our story</span>
              <span className="showcase-btn__arrow">
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </span>

              {/* Animated border overlay */}
              <span className="showcase-btn__border" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────
          INLINE STYLES — scoped premium button
      ───────────────────────────────────────────── */}
      <style>{`
        .showcase-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 15px 32px;
          border-radius: 999px;
          border: 1.5px solid rgba(255, 255, 255, 0.32);
          color: rgba(255, 255, 255, 0.9);
          font-family: var(--font-display, inherit);
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-decoration: none;
          overflow: hidden;
          transition:
            color 0.38s cubic-bezier(0.16, 1, 0.3, 1),
            border-color 0.38s cubic-bezier(0.16, 1, 0.3, 1),
            box-shadow 0.38s cubic-bezier(0.16, 1, 0.3, 1);
          backdrop-filter: blur(8px);
          background: rgba(255, 255, 255, 0.06);
          cursor: pointer;
        }

        .showcase-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: #e8ff57;
          transform: translateY(100%);
          transition: transform 0.42s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 0;
        }

        .showcase-btn:hover::before {
          transform: translateY(0%);
        }

        .showcase-btn:hover {
          color: #0a0a0a;
          border-color: #e8ff57;
          box-shadow: 0 8px 40px rgba(232, 255, 87, 0.30);
        }

        .showcase-btn__text,
        .showcase-btn__arrow {
          position: relative;
          z-index: 1;
        }

        .showcase-btn__arrow {
          display: flex;
          align-items: center;
          transition: transform 0.38s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .showcase-btn:hover .showcase-btn__arrow {
          transform: translateX(5px);
        }

        @media (max-width: 640px) {
          .showcase-btn {
            width: 100%;
            justify-content: center;
            padding: 16px 24px;
            font-size: 0.9375rem;
          }
        }
      `}</style>
    </section>
  );
}
