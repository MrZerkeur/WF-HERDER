import React, { useEffect, useRef } from 'react';

const FrameAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const frameCount = 240;

  const currentFrame = (index: number): string => (
    `/h9/dframe${index}.png`
  );

  const preloadImages = () => {
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
    }
  };

  const updateImage = (index: number) => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext('2d');
      const img = new Image();
      img.src = currentFrame(index);
      img.onload = () => {
        if (context) {

          const dpr = window.devicePixelRatio || 1;

          const canvasWidth = canvas.clientWidth * dpr;
          const canvasHeight = canvas.clientHeight * dpr;

          canvas.width = canvasWidth;
          canvas.height = canvasHeight;
          
          context.scale(dpr, dpr);

          const canvasAspect = canvas.clientWidth / canvas.clientHeight;
          const imgAspect = img.width / img.height;

          let drawWidth: number, drawHeight: number;

          if (canvasAspect > imgAspect) {
            drawWidth = canvas.clientWidth;
            drawHeight = canvas.clientWidth / imgAspect;
          } else {
            drawHeight = canvas.clientHeight;
            drawWidth = canvas.clientHeight * imgAspect;
          }

          const x = (canvas.clientWidth - drawWidth) / 2;
          const y = (canvas.clientHeight - drawHeight) / 2;

          context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
          context.drawImage(img, x, y, drawWidth, drawHeight);
        }
      };
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScrollTop;
      const frameIndex = Math.min(frameCount - 1, Math.ceil(scrollFraction * frameCount));
      requestAnimationFrame(() => updateImage(frameIndex + 1));
    };

    window.addEventListener('scroll', handleScroll);
    preloadImages();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'sticky',
        top: '0%',
        width: '100%',
        height: '100vh',
      }}
    />
  );
};

export default FrameAnimation;
