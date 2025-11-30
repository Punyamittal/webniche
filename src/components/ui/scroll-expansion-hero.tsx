'use client';

import {
  useEffect,
  useRef,
  useState,
  ReactNode,
} from 'react';
import { motion } from 'framer-motion';
import AnimatedShaderBackground from './animated-shader-background';
import { ShaderLines } from './shader-lines';

// Video component that loops at a specific percentage and can switch videos
const VideoWithLoop: React.FC<{ 
  src: string;
  expandedSrc?: string;
  poster?: string; 
  loopPoint: number;
  scrollProgress: number;
  onVideoSwitch?: () => void;
}> = ({ src, expandedSrc, poster, loopPoint, scrollProgress, onVideoSwitch }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentSrc, setCurrentSrc] = useState<string>(src);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const hasSwitchedRef = useRef<boolean>(false);

  // Switch video when scroll starts (when expansion begins, around 10% scroll progress)
  useEffect(() => {
    if (expandedSrc && scrollProgress > 0.1 && !hasSwitchedRef.current) {
      hasSwitchedRef.current = true;
      setIsTransitioning(true);
      
      const video = videoRef.current;
      if (video) {
        const fadeOut = () => {
          video.style.opacity = '0';
          setTimeout(() => {
            setCurrentSrc(expandedSrc);
            video.style.opacity = '1';
            video.play().catch(console.error);
            setTimeout(() => {
              setIsTransitioning(false);
            }, 300);
            onVideoSwitch?.();
          }, 200);
        };
        fadeOut();
      }
    } else if (scrollProgress <= 0.05 && hasSwitchedRef.current) {
      // Reset when scrolling back
      hasSwitchedRef.current = false;
      setCurrentSrc(src);
    }
  }, [scrollProgress, expandedSrc, src, onVideoSwitch]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.duration && !isNaN(video.duration)) {
        const targetTime = video.duration * loopPoint;
        if (video.currentTime >= targetTime) {
          video.currentTime = 0;
        }
      }
    };

    const handleLoadedMetadata = () => {
      video.play().catch(console.error);
    };

    const handleLoadedData = () => {
      video.style.transition = 'opacity 0.3s ease-in-out';
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('loadeddata', handleLoadedData);
    
    if (video.readyState >= 2) {
      handleLoadedMetadata();
    }

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('loadeddata', handleLoadedData);
    };
  }, [loopPoint, currentSrc]);

  return (
    <div className='relative w-full h-full'>
      <video
        ref={videoRef}
        src={currentSrc}
        poster={poster}
        autoPlay
        muted
        playsInline
        preload='auto'
        className='w-full h-full object-cover rounded-xl transition-opacity duration-300'
        controls={false}
        disablePictureInPicture
      />
      {/* Black ash transition overlay - appears during video switch */}
      {isTransitioning && (
        <motion.div
          className='absolute inset-0 rounded-xl'
          style={{
            background: 'radial-gradient(ellipse at center, rgba(0, 0, 0, 0.5) 0%, rgba(20, 20, 20, 0.8) 40%, rgba(0, 0, 0, 0.95) 100%)',
            backdropFilter: 'blur(2px)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </div>
  );
};

interface ScrollExpandMediaProps {
  mediaType?: 'video' | 'image';
  mediaSrc: string;
  expandedMediaSrc?: string; // Video to show when expanded
  posterSrc?: string;
  bgImageSrc?: string;
  useShaderBackground?: boolean;
  title?: string;
  date?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  children?: ReactNode;
}

const ScrollExpandMedia = ({
  mediaType = 'video',
  mediaSrc,
  expandedMediaSrc,
  posterSrc,
  bgImageSrc,
  useShaderBackground = false,
  title,
  date,
  scrollToExpand,
  textBlend,
  children,
}: ScrollExpandMediaProps) => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showContent, setShowContent] = useState<boolean>(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState<boolean>(false);
  const [touchStartY, setTouchStartY] = useState<number>(0);
  const [isMobileState, setIsMobileState] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setScrollProgress(0);
    setShowContent(false);
    setMediaFullyExpanded(false);
  }, [mediaType]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (mediaFullyExpanded && e.deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollDelta = e.deltaY * 0.0009;
        const newProgress = Math.min(
          Math.max(scrollProgress + scrollDelta, 0),
          1
        );
        setScrollProgress(newProgress);
        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartY) return;
      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;
      if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollFactor = deltaY < 0 ? 0.008 : 0.005;
        const scrollDelta = deltaY * scrollFactor;
        const newProgress = Math.min(
          Math.max(scrollProgress + scrollDelta, 0),
          1
        );
        setScrollProgress(newProgress);
        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }
        setTouchStartY(touchY);
      }
    };

    const handleTouchEnd = (): void => {
      setTouchStartY(0);
    };

    const handleScroll = (): void => {
      if (!mediaFullyExpanded) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('wheel', handleWheel as unknown as EventListener, {
      passive: false,
    });
    window.addEventListener('scroll', handleScroll as EventListener);
    window.addEventListener(
      'touchstart',
      handleTouchStart as unknown as EventListener,
      { passive: false }
    );
    window.addEventListener(
      'touchmove',
      handleTouchMove as unknown as EventListener,
      { passive: false }
    );
    window.addEventListener('touchend', handleTouchEnd as EventListener);

    return () => {
      window.removeEventListener(
        'wheel',
        handleWheel as unknown as EventListener
      );
      window.removeEventListener('scroll', handleScroll as EventListener);
      window.removeEventListener(
        'touchstart',
        handleTouchStart as unknown as EventListener
      );
      window.removeEventListener(
        'touchmove',
        handleTouchMove as unknown as EventListener
      );
      window.removeEventListener('touchend', handleTouchEnd as EventListener);
    };
  }, [scrollProgress, mediaFullyExpanded, touchStartY]);

  useEffect(() => {
    const checkIfMobile = (): void => {
      setIsMobileState(window.innerWidth < 768);
    };
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const mediaWidth = 300 + scrollProgress * (isMobileState ? 650 : 1250);
  const mediaHeight = 400 + scrollProgress * (isMobileState ? 200 : 400);
  const textTranslateX = scrollProgress * (isMobileState ? 180 : 150);
  const firstWord = title ? title.split(' ')[0] : '';
  const restOfTitle = title ? title.split(' ').slice(1).join(' ') : '';

  return (
    <div
      ref={sectionRef}
      className='transition-colors duration-700 ease-in-out overflow-x-hidden'
    >
      <section className='relative flex flex-col items-center justify-start min-h-[100dvh]'>
        <div className='relative w-full flex flex-col items-center min-h-[100dvh]'>
          {useShaderBackground ? (
            <div className='absolute inset-0 z-0 h-full'>
              <ShaderLines />
              <motion.div 
                className='absolute inset-0 bg-black/30'
                initial={{ opacity: 0.3 }}
                animate={{ opacity: 0.3 + scrollProgress * 0.4 }}
                transition={{ duration: 0.2 }}
              />
            </div>
          ) : bgImageSrc ? (
            <motion.div
              className='absolute inset-0 z-0 h-full'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 - scrollProgress }}
              transition={{ duration: 0.1 }}
            >
              <img
                src={bgImageSrc}
                alt='Background'
                className='w-screen h-screen object-cover object-center'
                style={{ pointerEvents: 'none' }}
              />
              <div className='absolute inset-0 bg-black/40' />
            </motion.div>
          ) : (
            <div className='absolute inset-0 z-0 h-full bg-[#141414]' />
          )}

          <div className='container mx-auto flex flex-col items-center justify-start relative z-10'>
            <div className='flex flex-col items-center justify-center w-full h-[100dvh] relative'>
              <div
                className='absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-none rounded-2xl overflow-hidden'
                style={{
                  width: `${mediaWidth}px`,
                  height: `${mediaHeight}px`,
                  maxWidth: '95vw',
                  maxHeight: '85vh',
                  boxShadow: '0px 0px 50px rgba(255, 255, 255, 0.5)',
                }}
              >
                {mediaType === 'video' ? (
                  mediaSrc.includes('youtube.com') || mediaSrc.includes('youtu.be') ? (
                    <div className='relative w-full h-full pointer-events-none'>
                      <iframe
                        width='100%'
                        height='100%'
                        src={
                          mediaSrc.includes('embed')
                            ? mediaSrc +
                              (mediaSrc.includes('?') ? '&' : '?') +
                              'autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1'
                            : mediaSrc.replace('watch?v=', 'embed/').replace('youtu.be/', 'youtube.com/embed/') +
                              '?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1&playlist=' +
                              (mediaSrc.includes('v=') ? mediaSrc.split('v=')[1]?.split('&')[0] : '')
                        }
                        className='w-full h-full rounded-xl'
                        frameBorder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                      />
                      <motion.div
                        className='absolute inset-0 bg-gradient-to-b from-white/10 to-black/50 rounded-xl'
                        initial={{ opacity: 0.7 }}
                        animate={{ opacity: 0.5 - scrollProgress * 0.3 }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                  ) : (
                    <div className='relative w-full h-full pointer-events-none'>
                      <VideoWithLoop
                        src={mediaSrc}
                        expandedSrc={expandedMediaSrc}
                        poster={posterSrc}
                        loopPoint={0.75}
                        scrollProgress={scrollProgress}
                      />
                      {/* Dynamic overlay - white when not scrolling, black ash when transitioning */}
                      <motion.div
                        className='absolute inset-0 rounded-xl'
                        style={{
                          background: scrollProgress > 0.1 
                            ? `linear-gradient(135deg, rgba(0, 0, 0, ${0.5 + scrollProgress * 0.3}) 0%, rgba(20, 20, 20, ${0.6 + scrollProgress * 0.2}) 50%, rgba(0, 0, 0, ${0.7 + scrollProgress * 0.2}) 100%)`
                            : 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0.08) 100%)',
                          mixBlendMode: scrollProgress > 0.1 ? 'normal' : 'overlay',
                        }}
                        initial={{ opacity: 1 }}
                        animate={{ opacity: scrollProgress > 0.1 ? Math.min(1, 0.7 + scrollProgress * 0.3) : 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      {/* Black ash/dust particle overlay - intensifies during transition */}
                      {scrollProgress > 0.1 && (
                        <motion.div
                          className='absolute inset-0 rounded-xl pointer-events-none'
                          style={{
                            background: `radial-gradient(circle at 50% 50%, transparent 0%, rgba(0, 0, 0, ${0.2 * scrollProgress}) 40%, rgba(30, 30, 30, ${0.4 * scrollProgress}) 70%, rgba(0, 0, 0, ${0.6 * scrollProgress}) 100%)`,
                            opacity: Math.min(1, scrollProgress * 1.5),
                          }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: Math.min(1, scrollProgress * 1.5) }}
                          transition={{ duration: 0.4 }}
                        />
                      )}
                      {/* Fade out white overlay as scroll progresses */}
                      <motion.div
                        className='absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-black/40 rounded-xl pointer-events-none'
                        initial={{ opacity: 1 }}
                        animate={{ opacity: Math.max(0, 1 - scrollProgress * 2) }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  )
                ) : (
                  <div className='relative w-full h-full'>
                    <img
                      src={mediaSrc}
                      alt={title || 'Media content'}
                      className='w-full h-full object-cover rounded-xl'
                    />
                    <motion.div
                      className='absolute inset-0 bg-gradient-to-b from-white/20 to-black/70 rounded-xl'
                      initial={{ opacity: 0.7 }}
                      animate={{ opacity: 0.7 - scrollProgress * 0.3 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                )}

                <div className='flex flex-col items-center text-center relative z-10 mt-4 transition-none'>
                  {date && (
                    <p
                      className='text-xl md:text-2xl text-white font-light'
                      style={{ transform: `translateX(-${textTranslateX}vw)` }}
                    >
                      {date}
                    </p>
                  )}
                  {scrollToExpand && (
                    <p
                      className='text-white/80 font-medium text-center text-sm md:text-base'
                      style={{ transform: `translateX(${textTranslateX}vw)` }}
                    >
                      {scrollToExpand}
                    </p>
                  )}
                </div>
              </div>

              <div
                className={`flex items-center justify-center text-center gap-4 w-full relative z-10 transition-none flex-col ${
                  textBlend ? 'mix-blend-difference' : 'mix-blend-normal'
                }`}
              >
                <motion.h2
                  className='text-4xl md:text-5xl lg:text-6xl font-bold text-white transition-none'
                  style={{ 
                    transform: `translateX(-${textTranslateX}vw)`,
                    textShadow: '0 4px 20px rgba(0, 0, 0, 0.8), 0 2px 10px rgba(0, 0, 0, 0.6), 0 0 5px rgba(0, 0, 0, 0.5)'
                  }}
                >
                  {firstWord}
                </motion.h2>
                <motion.h2
                  className='text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white transition-none'
                  style={{ 
                    transform: `translateX(${textTranslateX}vw)`,
                    textShadow: '0 4px 20px rgba(0, 0, 0, 0.8), 0 2px 10px rgba(0, 0, 0, 0.6), 0 0 5px rgba(0, 0, 0, 0.5)'
                  }}
                >
                  {restOfTitle}
                </motion.h2>
              </div>
            </div>

            <motion.section
              className='flex flex-col w-full px-8 py-10 md:px-16 lg:py-20'
              initial={{ opacity: 0 }}
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ duration: 0.7 }}
            >
              {children}
            </motion.section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrollExpandMedia;

