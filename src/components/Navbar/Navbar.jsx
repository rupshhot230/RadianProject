import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import RadianLogo from './RadianLogo.jsx';

gsap.registerPlugin(ScrollTrigger);

const SECTIONS = [
  "Overview",
  "Performance",
  "Battery",
  "Storage",
  "Design",
  "App",
  "Maintenance",
  "Specs",
  "Pre-order"
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [showSubnav, setShowSubnav] = useState(false);

  const subnavRef = useRef(null);

  useEffect(() => {
    // Simple scroll listener to toggle subnav visibility when scrolling past hero
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      if (window.scrollY > heroHeight * 0.5) {
        setShowSubnav(true);
      } else {
        setShowSubnav(false);
      }

      // Simple calculation for active section based on scroll progress
      // In a real app, this would use IntersectionObserver or GSAP ScrollTrigger per section
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(1, window.scrollY / maxScroll));

      const newIndex = Math.min(SECTIONS.length - 1, Math.floor(progress * SECTIONS.length));
      setActiveSectionIndex(newIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 transition-all duration-300 bg-transparent">
        <div className="flex items-center justify-between w-full max-w-[1920px] mx-auto text-white">

          {/* Left Side: Product Dropdown */}
          <div className="flex items-center gap-4 flex-1 relative group">
            <div className="hidden md:flex items-center gap-4 cursor-pointer hover:opacity-70 transition-opacity mix-blend-difference text-white">
              <div className={`flex items-center gap-1 text-sm font-semibold tracking-wider transition-opacity duration-300 ${showSubnav ? 'opacity-100' : 'opacity-0'}`}>
                <span className="w-4 text-center">0{activeSectionIndex + 1}</span>
                <span className="text-gray-400">/</span>
                <span className="text-gray-400">09</span>
              </div>
              <div className="text-sm font-semibold tracking-wider uppercase">
                {showSubnav ? SECTIONS[activeSectionIndex] : "Discover EXR"}
              </div>

              {/* Dropdown arrow */}
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" className={`transition-transform duration-300 ${showSubnav ? 'opacity-100 group-hover:rotate-180' : 'opacity-0'}`}>
                <path d="M5 9L12 16L19 9" stroke="currentColor" strokeMiterlimit="10"></path>
              </svg>
            </div>

            {/* Mobile Discover text */}
            <div className="md:hidden text-sm font-semibold tracking-wider uppercase mix-blend-difference text-white">
              {showSubnav ? SECTIONS[activeSectionIndex] : "Discover EXR"}
            </div>

            {/* Sticky Subnav Dropdown (Desktop) */}
            <div className={`absolute top-full left-0 mt-4 bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden transition-all duration-300 origin-top ${showSubnav ? 'opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 pointer-events-none group-hover:pointer-events-auto' : 'hidden'}`}>
              <ul className="flex flex-col py-2 w-48">
                {SECTIONS.map((section, idx) => (
                  <li key={section}>
                    <button
                      onClick={() => {
                        window.scrollTo({
                          top: (document.body.scrollHeight / SECTIONS.length) * idx,
                          behavior: 'smooth'
                        });
                      }}
                      className={`w-full text-left px-6 py-3 text-sm transition-colors hover:bg-white/5 ${idx === activeSectionIndex ? 'text-volt font-bold' : 'text-white/70'}`}
                    >
                      {section}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Center: Logo */}
          <div className="flex justify-center flex-1 mix-blend-difference text-white">
            <a href="/" aria-label="Home" className="w-24 md:w-32 hover:opacity-70 transition-opacity">
              <RadianLogo />
            </a>
          </div>

          {/* Right Side: Links & Pre-order */}
          <div className="flex items-center justify-end gap-8 flex-1">
            <div className="hidden lg:flex items-center gap-8 text-sm font-semibold tracking-wider uppercase mix-blend-difference text-white">
              <a href="/our-story" className="hover:opacity-70 transition-opacity">Our story</a>
              <a href="/support" className="hover:opacity-70 transition-opacity">Support</a>
            </div>

            {/* Pre-order Button */}
            <div className="hidden md:block">
              <a href="/pre-order" className="flex items-center gap-3 bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold uppercase tracking-wider hover:bg-white transition-colors group">
                <span>Pre-order</span>
                <div className="bg-black/10 p-1 rounded-full group-hover:bg-black/5 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 9 9" fill="none">
                    <path d="M3.60849 9V0H5.39151V9H3.60849ZM0 5.32816V3.6918H9V5.32816H0Z" fill="currentColor" />
                  </svg>
                </div>
              </a>
            </div>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none relative z-[60] mix-blend-difference"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <div className={`w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-white transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Menu Overlay with Video Background */}
      <div className={`fixed inset-0 bg-[#0a0a0a] z-[55] transition-transform duration-700 ease-in-out flex flex-col ${menuOpen ? 'translate-y-0' : '-translate-y-full'}`}>

        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <video
            src="https://uncommon.b-cdn.net/Radian%20-%20hero%20cinematisch.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 flex flex-col h-full pt-28 px-8 pb-12">
          <ul className="flex flex-col gap-8 text-4xl font-display font-bold uppercase tracking-tighter text-white">
            <li><a href="/" onClick={() => setMenuOpen(false)} className="hover:text-volt transition-colors">Home</a></li>
            <li><a href="/exr" onClick={() => setMenuOpen(false)} className="hover:text-volt transition-colors">Radian EXR</a></li>
            <li><a href="/our-story" onClick={() => setMenuOpen(false)} className="hover:text-volt transition-colors">Our story</a></li>
            <li><a href="/support" onClick={() => setMenuOpen(false)} className="hover:text-volt transition-colors">Support</a></li>
          </ul>

          <div className="mt-auto">
            <a href="/pre-order" className="inline-flex items-center gap-3 bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold uppercase tracking-wider w-full justify-center">
              <span>Pre-order</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
