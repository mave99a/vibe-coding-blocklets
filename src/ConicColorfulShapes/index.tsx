import React, { useEffect, useRef } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'css-doodle': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

// Define the type for css-doodle element with the update method
interface CssDoodleElement extends HTMLElement {
  update: () => void;
}

export interface BlockProps {
  /** @description id: 1ajrz12ik7esfy3z | type: number | visible: true */
  gridRows?: number;
  /** @description id: 2bjrz12ik7esfy4z | type: number | visible: true */
  gridColumns?: number;
  /** @description id: 3cjrz12ik7esfy5z | type: string | visible: true */
  containerSize?: string;
  /** @description id: 4djrz12ik7esfy6z | type: number | visible: true */
  multiCount?: number;
  /** @description id: 5ejrz12ik7esfy7z | type: array | visible: true */
  colors?: {
    /** @description id: 6fjrz12ik7esfy8z | type: color | visible: true */
    colorHex?: string;
  }[];
  /** @description id: 7gjrz12ik7esfy9z | type: color | visible: true */
  backgroundColor?: string;
  /** @description id: 8hjrz12ik7esfyaz | type: color | visible: true */
  containerBackgroundColor?: string;
}

export default function BlockComponent({
  gridRows = 8,
  gridColumns = 1,
  containerSize = '70vmin',
  multiCount = 50,
  colors = [
    { colorHex: '#fc0' },
    { colorHex: '#00f' },
    { colorHex: '#f7b' },
    { colorHex: '#09f' },
    { colorHex: '#000' }
  ],
  backgroundColor = '#f9a8d4',
  containerBackgroundColor = '#000000'
}: BlockProps) {
  const doodleRef = useRef<CssDoodleElement | null>(null);
  
  useEffect(() => {
    // Load the css-doodle script if it doesn't exist
    if (!document.querySelector('script[src*="css-doodle"]')) {
      const script = document.createElement('script');
      script.src = 'https://esm.sh/css-doodle/css-doodle.min.js?raw';
      script.async = true;
      document.body.appendChild(script);
      
      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  // Format colors for the CSS-doodle
  const colorList = colors?.map(c => c.colorHex).join(', ') || '#fc0, #00f, #f7b, #09f, #000';
  
  // Container style
  const containerStyle = {
    display: 'grid',
    placeItems: 'center',
    height: '100vh',
    width: '100%',
    backgroundColor: backgroundColor,
  };
  
  // CSS Doodle style
  const doodleStyle = {
    boxShadow: '0 4vmin 8vmin -4vmin',
    width: containerSize,
    height: containerSize,
    margin: '0 auto',
    padding: '5vmin',
    backgroundColor: containerBackgroundColor,
  };

  return (
    <div style={containerStyle}>
      <css-doodle
        ref={doodleRef}
        style={doodleStyle}
        onClick={() => {
          if (doodleRef.current) {
            doodleRef.current.update();
          }
        }}
      >
        {`
          @grid: ${gridColumns}x${gridRows} / ${containerSize};
          @place-cell: center;
          @size: calc(100% - @calc(@i() - 1) * 100% / @size());
          
          background-image: @multi(${multiCount}, conic-gradient(from @r(360deg), @p(${colorList}) @r(20%), transparent @lr()));
        `}
      </css-doodle>
    </div>
  );
}

// Export component metadata for the Component Studio
export const componentMetadata = {
  name: 'ConicColorfulShapes',
  description: 'A configurable CSS-doodle component with colorful conic gradients',
  previewImageUrl: '@preview-images/cover.png',
}; 