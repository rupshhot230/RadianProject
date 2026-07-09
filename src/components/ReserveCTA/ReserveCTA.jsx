import React from "react";

export function ReserveCTA() {
  return (
    <section
      id="reserve"
      className="relative w-full min-h-[220vh] bg-[#0a0a0a] flex items-start justify-center pt-32 pb-16 overflow-hidden"
    >
      {/* Static Background Images */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.prod.website-files.com/69c0f1e667a0fb75bfd742b5/69e60f1fa567203c624b1fcd_1%20-%20Background%20-%20Desktop.webp"
          alt="Forest background"
          className="w-full h-full object-cover opacity-100"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div> */}
        {/* <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" /> */}
      </div>

      {/* Side Trees (Left and Right) */}
      <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
        <img
          src="https://cdn.prod.website-files.com/69c0f1e667a0fb75bfd742b5/69e612909b13c3d89f65ab4c_2-%20Bomen%20links.webp"
          alt="Trees Left"
          className="absolute top-0 left-0 w-full h-full object-cover object-left opacity-90"
        />
        <img
          src="https://cdn.prod.website-files.com/69c0f1e667a0fb75bfd742b5/69e612d44dbaaad20b987a33_2-%20Bomen%20rechts.webp"
          alt="Trees Right"
          className="absolute top-0 right-0 w-full h-full object-cover object-right opacity-90"
        />
      </div>

      {/* Motorcycle Image (Static at bottom) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1550px] z-[5] pointer-events-none opacity-80">
        <img
          src="https://cdn.prod.website-files.com/69c0f1e667a0fb75bfd742b5/69e61150ef5b4f7d0708c37f_Parallax%20Motor.webp"
          alt="Motorcycle"
          className="w-full object-cover"
        />
      </div>

      {/* Overlapping Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center pt-48">
        <div className="text-center flex flex-col gap-8 items-center max-w-4xl ">
          <h2 className="text-4xl md:text-9xl font-bold tracking-tight text-white mb-36 font-sans">
            Be the first <br className="hidden md:block" />on the line
          </h2>
          <p className="text-lg md:text-2xl text-white/80 max-w-2xl font-light leading-relaxed">
            The Radian EXR can now be configured and reserved in Europe. For the rest of the world, including the US and Australia, configure your EXR now and join the interest list!
            <br /><br />
            If you're ready to ride electric without compromise, this is your moment.
          </p>
          <p className="text-xl md:text-2xl font-medium text-white">
            <strong>From €14,450 - Reserve now for €99</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mt-4 w-full sm:w-auto">
            <a href="/exr" className="group border border-white/30 rounded-full px-8 py-4 flex items-center justify-center gap-4 bg-black  text-white transition-all duration-300 w-full sm:w-auto">
              <span className="font-semibold text-lg">Explore the bike</span>
              <svg width="20" height="20" viewBox="0 0 32 32" fill="none" className="text-current group-hover:translate-x-1 transition-transform"><path d="M16.6671 20.5L15.8346 19.6832L17.5938 17.9241C17.887 17.6309 18.1487 17.3848 18.3791 17.1859C18.6095 16.9764 18.7927 16.8194 18.9289 16.7147C19.065 16.5995 19.133 16.5419 19.133 16.5419C19.133 16.5419 19.044 16.5524 18.866 16.5733C18.688 16.5838 18.4419 16.5995 18.1278 16.6204C17.8241 16.6309 17.4681 16.6361 17.0597 16.6361L10.8398 16.6361V15.3639L17.044 15.3639C17.4524 15.3639 17.8137 15.3743 18.1278 15.3953C18.4419 15.4058 18.6828 15.4215 18.8503 15.4424C19.0283 15.4634 19.1173 15.4738 19.1173 15.4738C19.1173 15.4738 19.0493 15.4162 18.9131 15.301C18.777 15.1859 18.5938 15.0236 18.3634 14.8141C18.133 14.6047 17.8765 14.3586 17.5938 14.0759L15.8503 12.3168L16.6828 11.5L21.1592 16.0079L16.6671 20.5Z" fill="currentColor"></path></svg>
            </a>
            <a href="/pre-order" className="group border border-white/30 rounded-full px-8 py-4 flex items-center justify-center gap-4 bg-yellow-400 transition-all duration-300 w-full sm:w-auto">
              <span className="font-bold text-lg">Configure now</span>
              <svg width="20" height="20" viewBox="0 0 32 32" fill="none" className="text-current group-hover:translate-x-1 transition-transform"><path d="M16.6671 20.5L15.8346 19.6832L17.5938 17.9241C17.887 17.6309 18.1487 17.3848 18.3791 17.1859C18.6095 16.9764 18.7927 16.8194 18.9289 16.7147C19.065 16.5995 19.133 16.5419 19.133 16.5419C19.133 16.5419 19.044 16.5524 18.866 16.5733C18.688 16.5838 18.4419 16.5995 18.1278 16.6204C17.8241 16.6309 17.4681 16.6361 17.0597 16.6361L10.8398 16.6361V15.3639L17.044 15.3639C17.4524 15.3639 17.8137 15.3743 18.1278 15.3953C18.4419 15.4058 18.6828 15.4215 18.8503 15.4424C19.0283 15.4634 19.1173 15.4738 19.1173 15.4738C19.1173 15.4738 19.0493 15.4162 18.9131 15.301C18.777 15.1859 18.5938 15.0236 18.3634 14.8141C18.133 14.6047 17.8765 14.3586 17.5938 14.0759L15.8503 12.3168L16.6828 11.5L21.1592 16.0079L16.6671 20.5Z" fill="currentColor"></path></svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
