import React, { useMemo } from 'react';

export interface BlockProps {
  /** @description id: terminalText | type: multiline | visible: true */
  terminalText?: string;
  /** @description id: prompt | type: string | visible: true */
  prompt?: string;
  /** @description id: showCursor | type: boolean | visible: true */
  showCursor?: boolean;
  /** @description id: backgroundColor | type: color | visible: true */
  backgroundColor?: string;
  /** @description id: textColor | type: color | visible: true */
  textColor?: string;
  /** @description id: fontSize | type: number | visible: true */
  fontSize?: number;
  /** @description id: windowTitle | type: string | visible: true */
  windowTitle?: string;
}

export default function BlockComponent({
  terminalText = '$ echo "Hello World"\nHello World\n$ ls\nDocuments Downloads Pictures\n$ pwd\n/home/user\n$ _',
  prompt = '$',
  showCursor = true,
  backgroundColor = '#2D2D2D',
  textColor = '#E0E0E0',
  fontSize = 14,
  windowTitle = 'terminal'
}: BlockProps) {
  const containerStyle = useMemo(() => ({
    width: '100%',
    maxWidth: '800px',
    margin: '20px auto',
    borderRadius: '6px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
    fontFamily: 'Menlo, Monaco, "Courier New", monospace',
  }), []);

  const headerStyle = useMemo(() => ({
    backgroundColor: '#E0E0E0',
    padding: '8px 16px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  }), []);

  const dotStyle = useMemo(() => ({
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    display: 'inline-block',
  }), []);

  const redDotStyle = useMemo(() => ({
    ...dotStyle,
    backgroundColor: '#FF5F56',
  }), [dotStyle]);

  const yellowDotStyle = useMemo(() => ({
    ...dotStyle,
    backgroundColor: '#FFBD2E',
  }), [dotStyle]);

  const greenDotStyle = useMemo(() => ({
    ...dotStyle,
    backgroundColor: '#27C93F',
  }), [dotStyle]);

  const titleStyle = useMemo(() => ({
    flex: 1,
    textAlign: 'center' as const,
    color: '#666',
    fontSize: '14px',
    userSelect: 'none' as const,
  }), []);

  const contentStyle = useMemo(() => ({
    backgroundColor,
    color: textColor,
    padding: '16px',
    fontSize: `${fontSize}px`,
    lineHeight: '1.5',
    whiteSpace: 'pre-wrap',
    minHeight: '200px',
    position: 'relative' as const,
  }), [backgroundColor, textColor, fontSize]);

  const cursorStyle = useMemo(() => ({
    display: showCursor ? 'inline-block' : 'none',
    width: '8px',
    height: `${fontSize * 1.2}px`,
    backgroundColor: textColor,
    animation: 'blink 1s step-end infinite',
    verticalAlign: 'text-bottom',
    marginLeft: '2px',
    position: 'absolute' as const,
  }), [showCursor, fontSize, textColor]);

  const keyframesStyle = `
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
  `;

  const renderTerminalContent = () => {
    // Replace the last underscore with the cursor
    const textWithoutCursor = terminalText.replace(/\_$/, '');
    return textWithoutCursor;
  };

  return (
    <>
      <style>{keyframesStyle}</style>
      <div style={containerStyle}>
        <div style={headerStyle}>
          <span style={redDotStyle}></span>
          <span style={yellowDotStyle}></span>
          <span style={greenDotStyle}></span>
          <span style={titleStyle}>{windowTitle}</span>
        </div>
        <div style={contentStyle}>
          {renderTerminalContent()}
          {showCursor && <span style={cursorStyle}></span>}
        </div>
      </div>
    </>
  );
} 