import { useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';

const IMAGES = [
  { src: "https://cdn.prod.website-files.com/69c0f1e667a0fb75bfd742b5/69e76045eb3a15f96de6906a_radian-1.webp", alt: "Rider with helmet" },
  { src: "https://cdn.prod.website-files.com/69c0f1e667a0fb75bfd742b5/69e7604589c59545118a5e3e_radian-6.webp", alt: "Wheelie in forest" },
  { src: "https://cdn.prod.website-files.com/69c0f1e667a0fb75bfd742b5/69e7604586b19abdceff1082_radian-2.webp", alt: "Narrow forest trail" },
  { src: "https://cdn.prod.website-files.com/69c0f1e667a0fb75bfd742b5/69e76045ef373c24042e5673_radian-3.webp", alt: "Dirt spray sunset" },
  { src: "https://cdn.prod.website-files.com/69c0f1e667a0fb75bfd742b5/69e7604537eed64c7a0b90a0_radian-5.webp", alt: "Fast trail riding" },
  { src: "https://cdn.prod.website-files.com/69c0f1e667a0fb75bfd742b5/69e760452c49d82527f86784_Radian-4.webp", alt: "Forest trail gear" }
];

export function DraggableGallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
    },
    [AutoScroll({ playOnInit: true, stopOnInteraction: false, speed: 1 })]
  );

  const [isHovered, setIsHovered] = useState(false);

  // AutoScroll handles interaction natively via its own options, 
  // but if we want to pause on hover, we can interact with the plugin:
  // emblaApi?.plugins()?.autoScroll?.stop() / play()
  const handleMouseEnter = () => {
    setIsHovered(true);
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (autoScroll) autoScroll.stop();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (autoScroll) autoScroll.play();
  };

  return (
    <div className="w-full overflow-hidden pt-0 pb-16 sm:pb-24 bg-[#1a1a1a]/10">
      <div
        className="embla cursor-grab active:cursor-grabbing"
        ref={emblaRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="embla__container flex touch-pan-y">
          {IMAGES.map((img, index) => (
            <div key={index} className="embla__slide flex-[0_0_80%] sm:flex-[0_0_50%] md:flex-[0_0_40%] lg:flex-[0_0_30%] min-w-0 pl-6 sm:pl-8">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-lg group">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  draggable={false}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
