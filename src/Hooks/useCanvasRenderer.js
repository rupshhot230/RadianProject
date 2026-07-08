import { useEffect, useRef } from 'react';

export function useCanvasRenderer(canvasRef, images, currentFrameIndex) {
  const renderRequestId = useRef(null);
  const lastRenderedFrame = useRef(-1);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    const render = () => {
      if (lastRenderedFrame.current === currentFrameIndex) {
        return;
      }

      const img = images[currentFrameIndex];
      if (!img) return;

      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, rect.width, rect.height);

      const canvasRatio = rect.width / rect.height;
      const imgRatio = img.width / img.height;

      let drawWidth = rect.width;
      let drawHeight = rect.height;
      let offsetX = 0;
      let offsetY = 0;

      if (canvasRatio > imgRatio) {
        drawHeight = rect.width / imgRatio;
        offsetY = (rect.height - drawHeight) / 2;
      } else {
        drawWidth = rect.height * imgRatio;
        offsetX = (rect.width - drawWidth) / 2;
      }

      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      lastRenderedFrame.current = currentFrameIndex;
    };

    renderRequestId.current = requestAnimationFrame(render);

    return () => {
      if (renderRequestId.current) {
        cancelAnimationFrame(renderRequestId.current);
      }
    };
  }, [canvasRef, images, currentFrameIndex]);

  // Handle Resize
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      lastRenderedFrame.current = -1;
      const img = images[currentFrameIndex];
      if (!img) return;

      const ctx = canvas.getContext('2d');
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();

      // Only resize if dimensions actually changed
      if (canvas.width === Math.floor(rect.width * dpr) && canvas.height === Math.floor(rect.height * dpr)) {
        return;
      }

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);

      const canvasRatio = rect.width / rect.height;
      const imgRatio = img.width / img.height;
      let drawWidth = rect.width;
      let drawHeight = rect.height;
      let offsetX = 0;
      let offsetY = 0;

      if (canvasRatio > imgRatio) {
        drawHeight = rect.width / imgRatio;
        offsetY = (rect.height - drawHeight) / 2;
      } else {
        drawWidth = rect.height * imgRatio;
        offsetX = (rect.width - drawWidth) / 2;
      }

      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    const observer = new ResizeObserver(() => {
      // Use requestAnimationFrame to avoid "ResizeObserver loop limit exceeded" errors
      requestAnimationFrame(handleResize);
    });

    observer.observe(canvas);

    return () => observer.disconnect();
  }, [canvasRef, images, currentFrameIndex]);
}
