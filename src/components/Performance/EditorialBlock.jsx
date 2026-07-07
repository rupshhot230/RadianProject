import { Reveal } from "./Reveal.jsx";

export function EditorialBlock({ heading, paragraph, imageSrc, imageAlt, reverse = false }) {
  return (
    <div className="relative mx-auto max-w-full px-5 sm:px-8 pt-0 pb-16 sm:pb-32 overflow-hidden">
      <div className={`flex flex-col gap-12 lg:gap-20 items-center ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>

        {/* Text Content */}
        <div className="w-full lg:w-[40%] flex flex-col justify-center">
          <Reveal>
            <h2 className="font-display text-[clamp(2rem,5vw,3rem)] font-bold leading-[0.95] tracking-tight text-[#f5f5f5] mb-8">
              {heading}
            </h2>
            <p className="text-lg md:text-xl text-[#f5f5f5]/70 leading-relaxed max-w-lg">
              {paragraph}
            </p>
          </Reveal>
        </div>

        {/* Image Content */}
        <div className="w-full lg:w-[40%] flex justify-center">
          <Reveal delay={0.2} className="w-full max-w-md md:max-w-lg">
            <div className="relative aspect-[10/6] overflow-hidden rounded-3xl shadow-xl bg-[#1a1a1a]/30 group">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>

      </div>
    </div>
  );
}
