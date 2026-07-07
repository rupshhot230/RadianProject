import { Reveal } from "./Reveal.jsx";

export function BrandStory() {
  return (
    <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-8 py-32 sm:py-18 mb-24">
      {/* Top Divider */}
      <div className="w-full h-px bg-[#f5f5f5]/20 mb-12 sm:mb-16" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">
        {/* Left Column - Heading */}
        <div className="md:col-span-5 md:col-start-1">
          <Reveal>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight text-[#f5f5f5]">
              Built by engineers.
              <br />
              Driven by riders.
            </h2>
          </Reveal>
        </div>

        {/* Right Column - Paragraph */}
        <div className="md:col-span-7 pt-2 md:pt-4">
          <Reveal delay={0.2}>
            <p className="text-lg sm:text-base text-[#f5f5f5]/70 leading-relaxed font-sans font-light sm:columns-2 sm:gap-8">
              This didn’t start with a market opportunity or a category trend. It began with people who love to ride and who have spent their lives building things, breaking them, and improving them. Electric technology was never unfamiliar to us, it’s always been part of how we think, design and solve problems. The goal was never to translate a conventional bike into electric form. The goal was to build a platform that fully embraces the possibilities of electric propulsion, without losing what riders care about.
            </p>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
