'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef, useMemo } from 'react';

interface Image {
  src: string;
  alt?: string;
}

interface ZoomParallaxProps {
  /** Array of images to be displayed in the parallax effect max 7 images */
  images: Image[];
}

export function ZoomParallax({ images }: ZoomParallaxProps) {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  // Calculate middle image index (for 7 images, index 3 is the middle)
  const middleIndex = useMemo(() => Math.floor(images.length / 2), [images.length]);

  // Calculate scale needed to fill screen
  // Initial image size: 25vw x 25vh
  // To fill screen: need to scale to cover 100vw x 100vh
  // For width: 100vw / 25vw = 4x
  // For height: 100vh / 25vh = 4x
  // Using 5x to ensure full coverage with some margin
  const centerScale = useTransform(scrollYProgress, [0, 1], [1, 5]);
  
  // Fade out other images as center image zooms
  const otherImageOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 0.5, 0.1, 0]);
  
  // Keep other images at their original scale
  const otherImageScale = useTransform(scrollYProgress, [0, 1], [1, 1]);

  return (
    <div ref={container} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {images.map(({ src, alt }, index) => {
          const isMiddle = index === middleIndex;
          const scale = isMiddle ? centerScale : otherImageScale;
          const opacity = isMiddle ? 1 : otherImageOpacity;

          return (
            <motion.div
              key={index}
              style={{ 
                scale,
                opacity,
                zIndex: isMiddle ? 10 : 1,
              }}
              className={`absolute top-0 flex h-full w-full items-center justify-center ${
                isMiddle
                  ? '' // Middle image stays perfectly centered
                  : index === 0
                  ? '' // First image positioning (if needed)
                  : index === 1
                  ? '[&>div]:!-top-[30vh] [&>div]:!left-[5vw] [&>div]:!h-[30vh] [&>div]:!w-[35vw]'
                  : index === 2
                  ? '[&>div]:!-top-[10vh] [&>div]:!-left-[25vw] [&>div]:!h-[45vh] [&>div]:!w-[20vw]'
                  : index === 4
                  ? '[&>div]:!top-[27.5vh] [&>div]:!left-[5vw] [&>div]:!h-[25vh] [&>div]:!w-[20vw]'
                  : index === 5
                  ? '[&>div]:!top-[27.5vh] [&>div]:!-left-[22.5vw] [&>div]:!h-[25vh] [&>div]:!w-[30vw]'
                  : index === 6
                  ? '[&>div]:!top-[22.5vh] [&>div]:!left-[25vw] [&>div]:!h-[15vh] [&>div]:!w-[15vw]'
                  : ''
              }`}
            >
              <div className={`relative ${isMiddle ? 'h-[25vh] w-[25vw]' : 'h-[25vh] w-[25vw]'}`}>
                <img
                  src={src || '/placeholder.svg'}
                  alt={alt || `Parallax image ${index + 1}`}
                  className={`h-full w-full object-cover ${isMiddle ? 'rounded-lg' : 'rounded-lg'}`}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

