import { useEffect, useRef } from 'react';

export interface BlockProps {
  /** @description id: a1b2c3d4e5f6g7h8 | type: string | visible: true */
  line1?: string;
  /** @description id: i9j0k1l2m3n4o5p6 | type: string | visible: true */
  line2?: string;
  /** @description id: q7r8s9t0u1v2w3x4 | type: string | visible: true */
  line3?: string;
  /** @description id: y5z6a7b8c9d0e1f2 | type: number | visible: true */
  fontSize?: number;
  /** @description id: g3h4i5j6k7l8m9n0 | type: color | visible: true */
  primaryColor?: string;
  /** @description id: o1p2q3r4s5t6u7v8 | type: color | visible: true */
  secondaryColor?: string;
  /** @description id: w9x0y1z2a3b4c5d6 | type: color | visible: true */
  backgroundColor?: string;
}

declare global {
  interface Window {
    gsap: any;
  }
}

export default function BlockComponent({
  line1 = 'CODE',
  line2 = 'DRIVEN',
  line3 = 'ANIMATION',
  fontSize = 150,
  primaryColor = '#ffffff',
  secondaryColor = '#aaaaaa',
  backgroundColor = '#000000'
}: BlockProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load GSAP from CDN if not already loaded
    if (!window.gsap) {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js';
      script.async = true;
      script.onload = initAnimation;
      document.head.appendChild(script);
    } else {
      initAnimation();
    }

    function initAnimation() {
      const { gsap } = window;
      
      // Get all text elements
      const textElements = containerRef.current?.querySelectorAll('text');
      if (!textElements) return;

      // Create timelines
      const tl = gsap.timeline({
        defaults: {
          duration: 2,
          yoyo: true,
          ease: 'power2.inOut'
        }
      })
      .fromTo('.left, .right', {
        svgOrigin: '640 500',
        skewY: (i: number) => [-30, 15][i],
        scaleX: (i: number) => [0.6, 0.85][i],
        x: 200
      }, {
        skewY: (i: number) => [-15, 30][i],
        scaleX: (i: number) => [0.85, 0.6][i],
        x: -200
      })
      .play(0.5);

      const tl2 = gsap.timeline();

      textElements.forEach((t: Element, i: number) => {
        tl2.add(
          gsap.fromTo(t, {
            xPercent: -100,
            x: 700
          }, {
            duration: 1,
            xPercent: 0,
            x: 575,
            ease: 'sine.inOut'
          }),
          i % 3 * 0.2
        );
      });

      // Add pointer move handler
      const handlePointerMove = (e: PointerEvent) => {
        tl.pause();
        tl2.pause();
        gsap.to([tl, tl2], {
          duration: 2,
          ease: 'power4',
          progress: e.x / window.innerWidth
        });
      };

      window.addEventListener('pointermove', handlePointerMove);

      // Cleanup
      return () => {
        window.removeEventListener('pointermove', handlePointerMove);
      };
    }

    return () => {
      // Cleanup any animation on unmount
      if (window.gsap) {
        window.gsap.killTweensOf('.left, .right');
        window.gsap.killTweensOf('text');
      }
    };
  }, [line1, line2, line3, fontSize, primaryColor, secondaryColor, backgroundColor]);

  const containerStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    minHeight: '400px',
    backgroundColor: backgroundColor,
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 900,
    fontStyle: 'normal',
    overflow: 'hidden',
  };

  return (
    <div ref={containerRef} style={containerStyle}>
      <svg viewBox="0 0 1280 720" style={{ width: '100%', height: '100%' }}>
        <mask id="maskLeft">
          <rect x="-50%" width="100%" height="100%" fill="#fff" />
        </mask>
        <mask id="maskRight">
          <rect x="50%" width="100%" height="100%" fill="#fff" />
        </mask>
        <g fontSize={fontSize}>
          <g mask="url(#maskLeft)" fill={primaryColor} className="left">
            <text y="120">{line1}</text>
            <text y="250">{line2}</text>
            <text y="380">{line3}</text>
          </g>
          <g mask="url(#maskRight)" fill={secondaryColor} className="right">
            <text y="120">{line1}</text>
            <text y="250">{line2}</text>
            <text y="380">{line3}</text>
          </g>
        </g>
      </svg>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap');
        `}
      </style>
    </div>
  );
} 