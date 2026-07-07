import React, { useState } from 'react';
import RadianLogo from './RadianLogo.jsx';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 transition-all duration-300">
      <div className="flex items-center justify-between w-full max-w-[1920px] mx-auto text-white">

        {/* Left Side: Product Dropdown */}
        <div className="flex items-center gap-4 flex-1">
          <div className="hidden md:flex items-center gap-4 cursor-pointer hover:opacity-70 transition-opacity">
            {/* <div className="flex items-center gap-1 text-sm font-semibold tracking-wider">
              <span>01</span>
              <span className="text-gray-400">/</span>
              <span className="text-gray-400">09</span>
            </div> */}
            <div className="text-sm font-semibold tracking-wider uppercase">
              Discover EXR
            </div>

          </div>

          {/* Mobile Discover text (optional, to match reference) */}
          <div className="md:hidden text-sm font-semibold tracking-wider uppercase">
            Discover EXR
          </div>
        </div>

        {/* Center: Logo */}
        <div className="flex justify-center flex-1">
          <a href="/" aria-label="Home" className="w-24 md:w-32 hover:opacity-70 transition-opacity">
            <RadianLogo />
          </a>
        </div>

        {/* Right Side: Links & Pre-order */}
        <div className="flex items-center justify-end gap-8 flex-1">
          <div className="hidden lg:flex items-center gap-8 text-sm font-semibold tracking-wider uppercase">
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
            className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className={`w-6 h-0.5 bg-white transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-white transition-opacity ${menuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-white transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>

      </div>

      {/* Mobile Menu Overlay (Basic structure) */}
      <div className={`fixed inset-0 bg-black z-40 transition-transform duration-500 flex flex-col pt-24 px-6 ${menuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <ul className="flex flex-col gap-8 text-3xl font-bold uppercase tracking-tighter text-white">
          <li><a href="/" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="/exr" onClick={() => setMenuOpen(false)}>Radian EXR</a></li>
          <li><a href="/our-story" onClick={() => setMenuOpen(false)}>Our story</a></li>
          <li><a href="/support" onClick={() => setMenuOpen(false)}>Support</a></li>
        </ul>
        <div className="mt-auto pb-12">
          <a href="/pre-order" className="inline-flex items-center gap-3 bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold uppercase tracking-wider">
            <span>Pre-order</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
