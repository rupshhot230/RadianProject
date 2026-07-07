import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useHeroAnimation(sectionRef, frameCount, isLoaded) {
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
  const [videoOpacity, setVideoOpacity] = useState(1);

  useEffect(() => {
    if (!isLoaded || !sectionRef.current) return;

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "+=200%",
      pin: true,
      scrub: 0.5,
      onUpdate: (self) => {
        const progress = self.progress;

        // Calculate canvas frame
        const frame = Math.round(progress * (frameCount - 1));
        setCurrentFrameIndex(frame);

        // Fade out video quickly during the first 10% of scroll
        const opacity = Math.max(0, 1 - progress * 10);
        setVideoOpacity(opacity);
      }
    });

    // CRITICAL: Sort triggers by DOM order before refreshing!
    // Since this trigger is created asynchronously after images load,
    // it gets created AFTER RadianEXR's trigger. Without sorting,
    // RadianEXR calculates its position BEFORE HeroSection adds its pin spacer,
    // causing a massive blank gap in the middle of the page.
    ScrollTrigger.sort();
    ScrollTrigger.refresh();

    return () => {
      trigger.kill();
    };
  }, [sectionRef, frameCount, isLoaded]);

  return { currentFrameIndex, videoOpacity };
}
