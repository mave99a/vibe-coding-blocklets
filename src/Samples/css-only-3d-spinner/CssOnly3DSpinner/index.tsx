import React from 'react';

export interface BlockProps {
  /** @description id: bg6s7t4h2k9l3m5n | type: color | visible: true */
  backgroundColor?: string;
  /** @description id: sp1n3rc0l0r123456 | type: color | visible: true */
  spinnerColor?: string;
  /** @description id: sh4d0wc0l0r789012 | type: color | visible: true */
  shadowColor?: string;
  /** @description id: sp1n3rsp33d345678 | type: number | visible: true */
  animationDuration?: number;
}

export default function BlockComponent({
  backgroundColor = '#607d8b',
  spinnerColor = 'linear-gradient(0deg, #f1f1f1, #bbb)',
  shadowColor = '#0009',
  animationDuration = 5,
}: BlockProps) {
  // Animation keyframes
  const keyframes = `
    @keyframes animate {
      0% {
        transform: perspective(1000px) rotateX(0deg);
      }
      100% {
        transform: perspective(1000px) rotateX(359deg);
      }
    }
  `;

  // Container style
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    minHeight: '300px',
    background: backgroundColor,
    position: 'relative' as const,
    margin: 0,
    padding: 0,
    boxSizing: 'border-box' as const,
    overflow: 'hidden' as const,
  };

  // Box style
  const boxStyle = {
    position: 'relative' as const,
    transformStyle: 'preserve-3d' as const,
    width: '200px',
    height: '300px',
    transform: 'perspective(1000px) rotateY(-45deg)',
  };

  // Box before style - for shadow
  const boxBeforeStyle = {
    content: '""',
    position: 'absolute' as const,
    left: 0,
    bottom: '-180px',
    width: '100%',
    height: '150px',
    background: shadowColor,
    transform: 'rotateX(90deg)',
    filter: 'blur(40px)',
    opacity: 0.5,
  };

  // Inner div style
  const innerDivStyle = {
    position: 'absolute' as const,
    inset: 0,
    transformStyle: 'preserve-3d' as const,
    animation: `animate ${animationDuration}s linear infinite`,
  };

  return (
    <div style={containerStyle}>
      <style>{keyframes}</style>
      <div style={boxStyle} className="spinner-box">
        <div style={innerDivStyle}>
          <span style={{ 
            position: 'absolute', 
            inset: 0, 
            background: spinnerColor, 
            borderRadius: '20px', 
            transform: 'rotateX(calc(1 * 45deg))', 
            transformStyle: 'preserve-3d' 
          }}></span>
          <span style={{ 
            position: 'absolute', 
            inset: 0, 
            background: spinnerColor, 
            borderRadius: '20px', 
            transform: 'rotateX(calc(2 * 45deg))', 
            transformStyle: 'preserve-3d' 
          }}></span>
          <span style={{ 
            position: 'absolute', 
            inset: 0, 
            background: spinnerColor, 
            borderRadius: '20px', 
            transform: 'rotateX(calc(3 * 45deg))', 
            transformStyle: 'preserve-3d' 
          }}></span>
          <span style={{ 
            position: 'absolute', 
            inset: 0, 
            background: spinnerColor, 
            borderRadius: '20px', 
            transform: 'rotateX(calc(4 * 45deg))', 
            transformStyle: 'preserve-3d' 
          }}></span>
        </div>
        <div style={boxBeforeStyle}></div>
      </div>
    </div>
  );
}

// Export component metadata
export const metadata = {
  name: 'CSS Only 3D Spinner',
  description: 'A pure CSS 3D spinner with configurable colors',
  icon: 'cube',
}; 