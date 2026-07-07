import { JourneyPath } from "./JourneyPath.jsx";
import { EditorialBlock } from "./EditorialBlock.jsx";
import { DraggableGallery } from "./DraggableGallery.jsx";
import { BrandStory } from "./BrandStory.jsx";

export function Performance() {
  return (
    <section id="performance" className="relative w-full bg-[#0a0a0a] overflow-hidden text-[#f5f5f5] selection:bg-[#ccff00] selection:text-[#0a0a0a]">

      {/* Background gradients for premium f  eel */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#1a1a1a]/40 via-[#0a0a0a] to-[#0a0a0a]" />

      {/* Scene 1, 2, 3: Animated SVG Journey Path with Floating Images & Editorial Blocks */}
      <JourneyPath>
        {/* Scene 3: Editorial Content (Block 1) */}
        <EditorialBlock
          heading="Built for enduro."
          paragraph="From tight forest single tracks and steep rocky climbs, to wide open terrains and long-distance races, the Radian EXR is made for the full spectrum of enduro. Electric power gives you the freedom to ride the way you want, wherever you want."
          imageSrc="https://cdn.prod.website-files.com/69c0f1e667a0fb75bfd742b5/69cd2465cf61f9c747574bb1_Enduro%2002.webp"
          imageAlt="Motorcyclist riding a yellow dirt bike rapidly on a dirt track"
        />

        {/* Scene 3: Editorial Content (Block 2 - Reversed) */}
        <EditorialBlock
          heading="Ready for racing"
          paragraph="The EXR's rapidly swappable battery removes previous limits from any race strategy. Push the pace without compromise. With premium components and a highly responsive chassis, the Radian EXR inspires confidence to ride beyond your previous limits."
          imageSrc="https://cdn.prod.website-files.com/69c0f1e667a0fb75bfd742b5/69f87fa230dee903ea0d4dc5_radian-race.webp"
          imageAlt="Person wearing protective gear riding a yellow dirt bike through a forest trail"
          reverse={true}
        />
      </JourneyPath>


      {/* Scene 4: Infinite Draggable Gallery */}
      <div className="relative z-10 w-full -mt-[20vh] lg:-mt-[40vh]">
        <DraggableGallery />
      </div>

      {/* Scene 6: Brand Story */}
      <BrandStory />

    </section>
  );
}
