import React, { useEffect, useState } from 'react';

export interface BlockProps {
  /** @description id: gs1rn5jmxfvpxptx | type: boolean | visible: true */
  showSeconds?: boolean;
  /** @description id: 9ajrz12ik7esfk1z | type: boolean | visible: true */
  showDate?: boolean;
  /** @description id: 3ckcfvf6b7zyskk8 | type: color | visible: true */
  textColor?: string;
  /** @description id: x3lqht8ikble1itx | type: color | visible: true */
  backgroundColor?: string;
}

const MinimalistClock: React.FC<BlockProps> = ({
  showSeconds = true,
  showDate = true,
  textColor = '#333333',
  backgroundColor = '#ffffff'
}) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = () => {
    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');

    return showSeconds
      ? `${hours}:${minutes}:${seconds}`
      : `${hours}:${minutes}`;
  };

  const formatDate = () => {
    return time.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '200px',
    padding: '2rem',
    backgroundColor,
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease'
  };

  const timeStyle = {
    fontSize: '3.5rem',
    fontWeight: 300,
    color: textColor,
    margin: 0,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    letterSpacing: '2px'
  };

  const dateStyle = {
    fontSize: '1.2rem',
    color: textColor,
    opacity: 0.8,
    marginTop: '1rem',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    fontWeight: 300
  };

  return (
    <div style={containerStyle}>
      <h1 style={timeStyle}>{formatTime()}</h1>
      {showDate && <p style={dateStyle}>{formatDate()}</p>}
    </div>
  );
};

export default MinimalistClock; 