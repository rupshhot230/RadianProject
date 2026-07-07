import { useState, useEffect } from 'react';

export function useImagePreloader(frameCount) {
  const [images, setImages] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let loadedCount = 0;
    const loadedImages = [];
    
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      const frameName = `frame-${i.toString().padStart(5, '0')}.webp`;
      img.src = `https://uncommon.b-cdn.net/Sequence-home-hero/${frameName}`;
      
      img.onload = () => {
        loadedCount++;
        loadedImages[i - 1] = img;
        setProgress(Math.round((loadedCount / frameCount) * 100));
        
        if (loadedCount === frameCount) {
          setImages(loadedImages);
          setLoaded(true);
        }
      };
      
      img.onerror = () => {
        console.error(`Failed to load image: ${frameName}`);
        loadedCount++;
        if (loadedCount === frameCount) {
          setImages(loadedImages);
          setLoaded(true);
        }
      };
    }
  }, [frameCount]);

  return { images, loaded, progress };
}
