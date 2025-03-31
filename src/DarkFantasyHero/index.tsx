import React from 'react';

export interface BlockProps {
  /** @description id: title | type: string | visible: true */
  title?: string;
  /** @description id: subtitle | type: string | visible: true */
  subtitle?: string;
  /** @description id: studioName | type: string | visible: true */
  studioName?: string;
  /** @description id: description | type: string | visible: true */
  description?: string;
  /** @description id: youtubeUrl | type: url | visible: true */
  youtubeUrl?: {
    url: string;
    mediaKitUrl: string;
  };
  /** @description id: backgroundImage | type: url | visible: true */
  backgroundImage?: {
    url: string;
    mediaKitUrl: string;
  };
}

const overlayGradient = 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 100%)';

export default function BlockComponent({
  title = 'WLW ADULT ANIMATION SHORT',
  subtitle = 'SET IN A DARK FANTASY PHILIPPINES',
  studioName = 'A FILM BY STUDIO HEARTBREAK',
  description = '45 SECONDS OF PURE ANIMATION TO SHOW YOU WHAT OUR TEAM IS CAPABLE OF!',
  youtubeUrl = { url: 'https://www.youtube.com/watch?v=example', mediaKitUrl: 'https://www.youtube.com/watch?v=example' },
  backgroundImage = {
    url: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?q=80&w=2942&auto=format&fit=crop',
    mediaKitUrl: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?q=80&w=2942&auto=format&fit=crop'
  }
}: BlockProps) {
  const containerStyle: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    height: '100vh',
    minHeight: '600px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    overflow: 'hidden',
    background: `${overlayGradient}, url(${backgroundImage.url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    textAlign: 'center',
    padding: '2rem'
  };

  const titleStyle: React.CSSProperties = {
    fontSize: 'clamp(2rem, 5vw, 4rem)',
    fontWeight: 'bold',
    letterSpacing: '0.2em',
    marginBottom: '1rem',
    textTransform: 'uppercase',
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
    color: '#ff4444',
    marginBottom: '2rem',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
  };

  const studioNameStyle: React.CSSProperties = {
    fontSize: 'clamp(1rem, 2vw, 1.5rem)',
    opacity: 0.9,
    marginBottom: '3rem',
    letterSpacing: '0.1em',
    textTransform: 'uppercase'
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: 'clamp(0.875rem, 1.5vw, 1.25rem)',
    maxWidth: '600px',
    marginBottom: '2rem',
    lineHeight: 1.6,
    opacity: 0.8
  };

  const buttonStyle: React.CSSProperties = {
    padding: '1rem 2rem',
    fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
    backgroundColor: '#00ff9d',
    color: '#000',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    display: 'inline-block'
  };

  const buttonHoverStyle: React.CSSProperties = {
    backgroundColor: '#00cc7d',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(0,255,157,0.3)'
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>{title}</h1>
      <h2 style={subtitleStyle}>{subtitle}</h2>
      <p style={studioNameStyle}>{studioName}</p>
      <p style={descriptionStyle}>{description}</p>
      <a
        href={youtubeUrl.url}
        target="_blank"
        rel="noopener noreferrer"
        style={buttonStyle}
        onMouseOver={(e) => {
          Object.assign(e.currentTarget.style, buttonHoverStyle);
        }}
        onMouseOut={(e) => {
          Object.assign(e.currentTarget.style, buttonStyle);
        }}>
        WATCH ON YOUTUBE
      </a>
    </div>
  );
} 