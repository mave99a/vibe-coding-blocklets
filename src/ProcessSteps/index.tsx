import React, { useState, useRef, useEffect } from 'react';

export interface StepType {
  /** @description id: dq4vl2p9cn9ryvgh | type: string | visible: true */
  title?: string;
  /** @description id: eq5vl2p9cn9ryvgh | type: string | visible: true */
  description?: string;
}

export interface BlockProps {
  /** @description id: aq1rn5jmxfvpxptx | type: string | visible: true */
  title?: string;
  /** @description id: bq2rz12ik7esfk1z | type: string | visible: true */
  subtitle?: string;
  /** @description id: cq3vl2p9cn9ryvgh | type: array | visible: true */
  steps?: StepType[];
  /** @description id: fq6oj4rq1eziup1d | type: color | visible: true */
  primaryColor?: string;
  /** @description id: gq7oj4rq1eziup1d | type: color | visible: true */
  stepNumberBgColor?: string;
  /** @description id: hq8oj4rq1eziup1d | type: decimal | visible: true */
  hoverScale?: number;
  /** @description id: iq9oj4rq1eziup1d | type: decimal | visible: true */
  animationDuration?: number;
  /** @description id: jq0oj4rq1eziup1d | type: number | visible: true */
  maxWidth?: number;
}

export default function ProcessSteps({
  title = 'How It Works',
  subtitle = 'Launch Your Startup in 3 Simple Steps',
  steps = [
    {
      title: 'Validate Your Idea',
      description: 'Get instant insights on market demand, competitors, and feasibility.'
    },
    {
      title: 'Brand & Name Your Startup',
      description: 'Generate a unique business name, check domain availability, and create a logo.'
    },
    {
      title: 'Launch Your Landing Page',
      description: 'Instantly generate a professional landing page and go live.'
    }
  ],
  primaryColor = '#3B82F6',
  stepNumberBgColor = '#E0E7FF',
  hoverScale = 1.2,
  animationDuration = 0.3,
  maxWidth = 1200,
}: BlockProps) {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const stepsContainerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [paths, setPaths] = useState<string[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  // Main container style
  const containerStyle: React.CSSProperties = {
    fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
    maxWidth: `${maxWidth}px`,
    margin: '0 auto',
    padding: '2rem 1rem',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden', // Ensure SVG stays within container bounds
  };

  // Title style
  const titleStyle: React.CSSProperties = {
    fontSize: '2.5rem',
    fontWeight: 700,
    marginBottom: '0.75rem',
    color: '#111827',
  };

  // Subtitle style
  const subtitleStyle: React.CSSProperties = {
    fontSize: '1.25rem',
    fontWeight: 400,
    color: '#6B7280',
    marginBottom: '3rem',
  };

  // Steps container style
  const stepsContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '2rem',
    marginTop: '2rem',
    position: 'relative',
    padding: '1rem 0',
  };

  // Step number style with hover effect
  const getStepNumberStyle = (index: number): React.CSSProperties => {
    const isHovered = hoveredStep === index;
    return {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: isHovered ? '70px' : '60px',
      height: isHovered ? '70px' : '60px',
      borderRadius: '50%',
      backgroundColor: isHovered ? primaryColor : stepNumberBgColor,
      color: isHovered ? '#FFFFFF' : primaryColor,
      fontSize: isHovered ? '1.75rem' : '1.5rem',
      fontWeight: 700,
      margin: '0 auto 1.5rem',
      transition: `all ${animationDuration}s ease`,
      transform: isHovered ? `scale(${hoverScale})` : 'scale(1)',
      boxShadow: isHovered 
        ? `0 10px 20px rgba(${parseInt(primaryColor.slice(1, 3), 16)}, ${parseInt(primaryColor.slice(3, 5), 16)}, ${parseInt(primaryColor.slice(5, 7), 16)}, 0.3)`
        : 'none',
      position: 'relative',
      zIndex: 2, // Keep circles above the connection lines
    };
  };

  // Step container style
  const stepContainerStyle: React.CSSProperties = {
    flex: '1 1 300px',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '320px',
    margin: '0 auto',
  };

  // Step title style
  const stepTitleStyle: React.CSSProperties = {
    fontSize: '1.25rem',
    fontWeight: 600,
    color: '#111827',
    marginBottom: '0.75rem',
    position: 'relative',
    zIndex: 2, // Keep text above the connection lines
  };

  // Step description style
  const stepDescriptionStyle: React.CSSProperties = {
    fontSize: '1rem',
    fontWeight: 400,
    color: '#6B7280',
    lineHeight: 1.6,
    position: 'relative',
    zIndex: 2, // Keep text above the connection lines
  };

  // Update connection paths when component mounts or window resizes
  const updateConnectionPaths = () => {
    if (!stepsContainerRef.current || stepRefs.current.some(ref => !ref)) return;

    const newPaths: string[] = [];
    
    for (let i = 0; i < steps.length - 1; i++) {
      const fromStep = stepRefs.current[i];
      const toStep = stepRefs.current[i + 1];
      
      if (!fromStep || !toStep) continue;
      
      const fromRect = fromStep.getBoundingClientRect();
      const toRect = toStep.getBoundingClientRect();
      const containerRect = stepsContainerRef.current.getBoundingClientRect();
      
      // Check if steps are on the same row by comparing their vertical positions
      // If the vertical difference is significant (e.g., more than half the height of a step),
      // we consider them to be on different rows and skip drawing the connection
      const verticalDifference = Math.abs(fromRect.top - toRect.top);
      const isOnSameRow = verticalDifference < fromRect.height / 2;
      
      // Skip drawing connection if steps are on different rows
      if (!isOnSameRow) continue;
      
      // Calculate positions relative to the container
      const fromCenter = {
        x: fromRect.left + fromRect.width / 2 - containerRect.left,
        y: fromRect.top + 30 - containerRect.top, // 30px down from the top of the step container
      };
      
      const toCenter = {
        x: toRect.left + toRect.width / 2 - containerRect.left,
        y: toRect.top + 30 - containerRect.top, // 30px down from the top of the step container
      };
      
      // For a wavy line effect
      const distance = toCenter.x - fromCenter.x;
      const midPoint = fromCenter.x + distance / 2;
      
      // Create the wavy path
      const path = `
        M ${fromCenter.x + 30} ${fromCenter.y}
        C ${midPoint - 50} ${fromCenter.y - 40},
          ${midPoint + 50} ${toCenter.y - 40},
          ${toCenter.x - 30} ${toCenter.y}
      `;
      
      newPaths.push(path);
    }
    
    setPaths(newPaths);
  };

  // Initialize paths and set up resize listener
  useEffect(() => {
    const initializePaths = () => {
      if (!isInitialized) {
        updateConnectionPaths();
        setIsInitialized(true);
      }
    };

    // Initial path calculation (with a delay to ensure DOM is ready)
    const timer = setTimeout(initializePaths, 500);
    
    // Update paths on window resize
    window.addEventListener('resize', updateConnectionPaths);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateConnectionPaths);
    };
  }, [isInitialized, steps.length]);

  // SVG style for the connection lines
  const connectionSvgStyle: React.CSSProperties = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    zIndex: 1,
    pointerEvents: 'none',
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>{title}</h2>
      <p style={subtitleStyle}>{subtitle}</p>
      
      <div ref={stepsContainerRef} style={stepsContainerStyle}>
        {/* SVG connection lines */}
        <svg style={connectionSvgStyle}>
          {paths.map((path, index) => (
            <path
              key={`connection-${index}`}
              d={path}
              fill="none"
              stroke="#D1D5DB"
              strokeWidth="2"
              strokeDasharray="5,5"
              strokeLinecap="round"
            />
          ))}
        </svg>
        
        {/* Step items */}
        {steps.map((step, index) => (
          <div 
            key={index}
            ref={el => stepRefs.current[index] = el}
            style={stepContainerStyle}
            onMouseEnter={() => setHoveredStep(index)}
            onMouseLeave={() => setHoveredStep(null)}
          >
            <div style={getStepNumberStyle(index)}>
              {index + 1}
            </div>
            <h3 style={stepTitleStyle}>{step.title}</h3>
            <p style={stepDescriptionStyle}>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Add a README to document the component
export const README = `
# ProcessSteps Component

A customizable process steps component that displays a workflow or guide with interactive hover effects.

## Features

- Configurable main title and subtitle
- Support for multiple process steps, each with a title and description
- Interactive hover effects on step numbers
- Curved, wavy connection lines between steps
- Customizable colors and animation settings
- Responsive design that works on all devices

## Properties

- \`title\`: Main heading text
- \`subtitle\`: Secondary heading text
- \`steps\`: Array of step objects, each with \`title\` and \`description\`
- \`primaryColor\`: Main color for active/hover elements
- \`stepNumberBgColor\`: Background color for step number circles
- \`hoverScale\`: Amount to scale step numbers on hover (e.g., 1.2 = 120%)
- \`animationDuration\`: Duration of hover animations in seconds
- \`maxWidth\`: Maximum width of the component in pixels
`; 