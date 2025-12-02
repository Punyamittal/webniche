import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface TiltedCardProps {
  imageSrc?: string;
  altText?: string;
  captionText?: string;
  containerHeight?: string;
  containerWidth?: string;
  imageHeight?: string;
  imageWidth?: string;
  rotateAmplitude?: number;
  scaleOnHover?: number;
  showMobileWarning?: boolean;
  showTooltip?: boolean;
  displayOverlayContent?: boolean;
  overlayContent?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

const TiltedCard: React.FC<TiltedCardProps> = ({
  imageSrc,
  altText = 'Card image',
  captionText,
  containerHeight = '300px',
  containerWidth = '300px',
  imageHeight = '300px',
  imageWidth = '300px',
  rotateAmplitude = 12,
  scaleOnHover = 1.2,
  showMobileWarning = false,
  showTooltip = true,
  displayOverlayContent = false,
  overlayContent,
  children,
  className = ''
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const x = e.clientX - centerX;
    const y = e.clientY - centerY;

    const rotateX = (y / (rect.height / 2)) * -rotateAmplitude;
    const rotateY = (x / (rect.width / 2)) * rotateAmplitude;

    setRotation({ x: rotateX, y: rotateY });
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div
      ref={cardRef}
      className={`tilted-card-container ${className}`}
      style={{
        width: containerWidth,
        height: containerHeight,
        perspective: '1000px',
        cursor: 'pointer'
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      <motion.div
        className="tilted-card-inner"
        style={{
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${isHovered ? scaleOnHover : 1})`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <div
          className="tilted-card-image-wrapper"
          style={{
            width: '100%',
            height: '100%',
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '12px',
            background: 'var(--dark-bg)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          {imageSrc && (
            <img
              src={imageSrc}
              alt={altText}
              style={{
                objectFit: 'cover',
                width: '100%',
                height: '100%'
              }}
            />
          )}
          {children && (
            <div style={{ width: '100%', height: '100%' }}>
              {children}
            </div>
          )}
          {displayOverlayContent && overlayContent && (
            <div
              className="tilted-card-overlay"
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                padding: '1.5rem',
                color: '#ffffff'
              }}
            >
              {overlayContent}
            </div>
          )}
          {showTooltip && isHovered && captionText && (
            <div
              className="tilted-card-tooltip"
              style={{
                position: 'absolute',
                top: mousePosition.y - 30,
                left: mousePosition.x,
                background: 'rgba(0, 0, 0, 0.9)',
                color: '#ffffff',
                padding: '0.5rem 1rem',
                borderRadius: '6px',
                fontSize: '0.875rem',
                pointerEvents: 'none',
                whiteSpace: 'nowrap',
                zIndex: 1000,
                transform: 'translateX(-50%)'
              }}
            >
              {captionText}
            </div>
          )}
        </div>
      </motion.div>
      {showMobileWarning && (
        <div className="tilted-card-mobile-warning">
          Tilt effect works best on desktop
        </div>
      )}
    </div>
  );
};

export default TiltedCard;

