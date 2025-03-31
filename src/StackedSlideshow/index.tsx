import React, { useState, useEffect, useRef } from 'react';

export interface BlockProps {
  /** @description id: 1a2b3c4d5e6f7g8h | type: string | visible: true */
  title?: string;
  /** @description id: 2b3c4d5e6f7g8h9i | type: array | visible: true */
  slides?: {
    /** @description id: 3c4d5e6f7g8h9i0j | type: string | visible: true */
    imageUrl?: string;
    /** @description id: 4d5e6f7g8h9i0j1k | type: string | visible: true */
    title?: string;
    /** @description id: 6f7g8h9i0j1k2l3m | type: string | visible: true */
    linkUrl?: string;
  }[];
  /** @description id: 8h9i0j1k2l3m4n5o | type: color | visible: true */
  navButtonColor?: string;
  /** @description id: 9i0j1k2l3m4n5o6p | type: number | visible: true */
  maxWidth?: number;
  /** @description id: 0j1k2l3m4n5o6p7q | type: number | visible: true */
  cardBorderRadius?: number;
  /** @description id: 1k2l3m4n5o6p7q8r | type: number | visible: true */
  animationDuration?: number;
  /** @description id: 3m4n5o6p7q8r9s0t | type: string | visible: true */
  aspectRatio?: string;
  /** @description id: 4n5o6p7q8r9s0t1u | type: number | visible: true */
  cardRotation?: number;
  /** @description id: 5o6p7q8r9s0t1u2v | type: boolean | visible: true */
  autoSlideshow?: boolean;
  /** @description id: 6p7q8r9s0t1u2v3w | type: number | visible: true */
  slideshowInterval?: number;
}

export default function StackedSlideshow({
  title = 'Stacked Slideshow',
  slides = [],
  navButtonColor = '#6366F1',
  maxWidth = 1200,
  cardBorderRadius = 12,
  animationDuration = 400,
  aspectRatio = '4:3',
  cardRotation = 2,
  autoSlideshow = false,
  slideshowInterval = 2000,
}: BlockProps) {
  // Ensure we have at least some slides
  const safeSlides = slides && slides.length > 0 ? slides : [];

  // Create an array of indices representing the visual order of cards (top to bottom)
  const [cardOrder, setCardOrder] = useState<number[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoveredButton, setHoveredButton] = useState<'left' | 'right' | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const transitionTimeout = useRef<NodeJS.Timeout | null>(null);
  const slideshowTimeout = useRef<NodeJS.Timeout | null>(null);
  
  // Initialize the card order on mount and when slides change
  useEffect(() => {
    setCardOrder(Array.from({ length: safeSlides.length }, (_, i) => i));
  }, [safeSlides.length]);

  // Setup auto slideshow
  useEffect(() => {
    const startSlideshow = () => {
      if (autoSlideshow && !isHovering && !isAnimating && safeSlides.length > 1) {
        slideshowTimeout.current = setTimeout(() => {
          handleNext();
        }, slideshowInterval);
      }
    };
    
    // Clear any existing timeout
    if (slideshowTimeout.current) {
      clearTimeout(slideshowTimeout.current);
      slideshowTimeout.current = null;
    }
    
    startSlideshow();
    
    return () => {
      if (slideshowTimeout.current) {
        clearTimeout(slideshowTimeout.current);
      }
    };
  }, [autoSlideshow, isHovering, isAnimating, safeSlides.length, cardOrder, slideshowInterval]);

  useEffect(() => {
    // Cleanup any pending animations on unmount
    return () => {
      if (transitionTimeout.current) {
        clearTimeout(transitionTimeout.current);
      }
      if (slideshowTimeout.current) {
        clearTimeout(slideshowTimeout.current);
      }
    };
  }, []);

  // Calculate image dimensions based on aspect ratio
  const getImageDimensions = () => {
    // Base width for the card
    const baseWidth = 350;
    let height;

    switch (aspectRatio) {
      case '1:1':
        height = baseWidth;
        break;
      case '4:3':
        height = (baseWidth * 3) / 4;
        break;
      case '3:4':
        height = (baseWidth * 4) / 3;
        break;
      case '16:9':
        height = (baseWidth * 9) / 16;
        break;
      default:
        height = (baseWidth * 3) / 4; // Default to 4:3
    }

    return { width: baseWidth, height };
  };

  const imageDimensions = getImageDimensions();

  const handlePrev = () => {
    if (isAnimating || safeSlides.length <= 1) return;
    
    setIsAnimating(true);
    
    // Move the bottom card to the top (rotate the array)
    setCardOrder(prev => {
      const newOrder = [...prev];
      const last = newOrder.pop()!;
      return [last, ...newOrder];
    });
    
    // Reset animation flag after transition completes
    transitionTimeout.current = setTimeout(() => {
      setIsAnimating(false);
    }, animationDuration);
  };

  const handleNext = () => {
    if (isAnimating || safeSlides.length <= 1) return;
    
    setIsAnimating(true);
    
    // Move the top card to the bottom (rotate the array)
    setCardOrder(prev => {
      const newOrder = [...prev];
      const first = newOrder.shift()!;
      return [...newOrder, first];
    });
    
    // Reset animation flag after transition completes
    transitionTimeout.current = setTimeout(() => {
      setIsAnimating(false);
    }, animationDuration);
  };

  // Container style
  const containerStyle: React.CSSProperties = {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    maxWidth: `${maxWidth}px`,
    margin: '0 auto',
    padding: '2rem',
    position: 'relative',
    overflow: 'hidden',
  };

  // Title style
  const titleStyle: React.CSSProperties = {
    fontSize: '2rem',
    fontWeight: 700,
    textAlign: 'center',
    marginBottom: '2.5rem',
    color: '#333',
  };

  // Slideshow container
  const slideshowContainerStyle: React.CSSProperties = {
    position: 'relative',
    height: `${imageDimensions.height + 60}px`, // Reduced height for smaller title area
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    perspective: '1000px',
  };

  // Navigation buttons
  const navButtonStyle = (isLeft: boolean): React.CSSProperties => {
    const isHovered = isLeft ? hoveredButton === 'left' : hoveredButton === 'right';
    
    return {
      position: 'absolute',
      top: '50%',
      left: isLeft ? '10px' : 'auto',
      right: isLeft ? 'auto' : '10px',
      transform: isHovered ? 'translateY(-50%) scale(1.1)' : 'translateY(-50%)',
      width: '48px',
      height: '48px',
      borderRadius: '50%',
      backgroundColor: isHovered ? `${navButtonColor}dd` : navButtonColor,
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'none',
      cursor: 'pointer',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
      zIndex: 20,
      fontSize: '24px',
      transition: 'transform 0.2s ease, background-color 0.2s ease',
    };
  };

  // Arrow style for nav buttons
  const arrowStyle: React.CSSProperties = {
    width: '12px',
    height: '12px',
    border: 'solid white',
    borderWidth: '0 3px 3px 0',
    padding: '3px',
  };

  // Get card style based on its position in the stack
  const getCardStyle = (visualIndex: number): React.CSSProperties => {
    const totalCards = safeSlides.length;
    const isTopCard = visualIndex === 0;
    
    // Base card style
    const style: React.CSSProperties = {
      position: 'absolute',
      width: `${imageDimensions.width}px`,
      borderRadius: `${cardBorderRadius}px`,
      backgroundColor: 'white',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
      overflow: 'hidden',
      border: '1px solid rgba(0, 0, 0, 0.05)',
      transition: `all ${animationDuration / 1000}s cubic-bezier(0.25, 0.1, 0.25, 1.0)`,
      transformOrigin: 'center center',
      cursor: 'pointer',
      zIndex: totalCards - visualIndex,
    };

    // Apply different styles based on position in stack
    if (isTopCard && hoveredIndex === cardOrder[visualIndex]) {
      // Top card being hovered
      Object.assign(style, {
        transform: 'scale(1.05) translateZ(20px)',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
      });
    } else {
      // Calculate offset based on position in stack
      const xOffset = visualIndex * 10; // Increase horizontal offset for each card
      const yOffset = visualIndex * 8;  // Increase vertical offset for each card
      const scale = 1 - (visualIndex * 0.05); // Decrease size for each card
      const rotate = (visualIndex * cardRotation) - 2; // Use configurable cardRotation value for rotation

      Object.assign(style, {
        transform: `translateX(${xOffset}px) translateY(${yOffset}px) scale(${scale}) rotate(${rotate}deg)`,
        filter: `brightness(${1 - visualIndex * 0.1})`,
      });
    }

    return style;
  };

  // Card image style
  const cardImageStyle: React.CSSProperties = {
    width: '100%',
    height: `${imageDimensions.height}px`,
    objectFit: 'cover',
    display: 'block',
  };

  // Card content style
  const cardContentStyle: React.CSSProperties = {
    padding: '0.4rem 0.6rem',
    backgroundColor: 'white',
  };

  // Card title style
  const cardTitleStyle: React.CSSProperties = {
    margin: 0,
    fontSize: '0.9rem',
    fontWeight: 600,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  };

  const handleMouseEnter = (slideIndex: number) => {
    setHoveredIndex(slideIndex);
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setIsHovering(false);
  };

  const handleButtonMouseEnter = (button: 'left' | 'right') => {
    setHoveredButton(button);
    setIsHovering(true);
  };

  const handleButtonMouseLeave = () => {
    setHoveredButton(null);
    setIsHovering(false);
  };

  const handleCardClick = (url?: string) => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  const handleContainerMouseEnter = () => {
    setIsHovering(true);
  };

  const handleContainerMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>{title}</h2>
      
      <div 
        style={slideshowContainerStyle}
        onMouseEnter={handleContainerMouseEnter}
        onMouseLeave={handleContainerMouseLeave}
      >
        {/* Cards */}
        {safeSlides.length > 0 && cardOrder.map((slideIndex, visualIndex) => {
          const slide = safeSlides[slideIndex];
          if (!slide) return null;
          
          return (
            <div
              key={slideIndex}
              style={getCardStyle(visualIndex)}
              onClick={() => handleCardClick(slide.linkUrl)}
              onMouseEnter={() => handleMouseEnter(slideIndex)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={slide.imageUrl}
                alt={slide.title || `Slide ${slideIndex + 1}`}
                style={cardImageStyle}
              />
              {slide.title && (
                <div style={cardContentStyle}>
                  <h3 style={cardTitleStyle}>{slide.title}</h3>
                </div>
              )}
            </div>
          );
        })}
        
        {/* Navigation buttons (only show if more than one slide) */}
        {safeSlides.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              style={navButtonStyle(true)}
              onMouseEnter={() => handleButtonMouseEnter('left')}
              onMouseLeave={handleButtonMouseLeave}
              aria-label="Previous slide"
            >
              <div style={{ ...arrowStyle, transform: 'rotate(135deg)' }} />
            </button>
            
            <button
              onClick={handleNext}
              style={navButtonStyle(false)}
              onMouseEnter={() => handleButtonMouseEnter('right')}
              onMouseLeave={handleButtonMouseLeave}
              aria-label="Next slide"
            >
              <div style={{ ...arrowStyle, transform: 'rotate(-45deg)' }} />
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export const EditComponent: React.FC<BlockProps & { onChange?: (value: BlockProps) => void }> = ({
  onChange,
  ...props
}) => {
  return null; // Using standard editor controls for all properties
}; 