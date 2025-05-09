import React from 'react';

export interface BlockProps {
  /** @description id: xk47p2jmab93qrst | type: color | visible: true */
  backgroundColor?: string;
  /** @description id: ps91m5jnvc82zxdr | type: string | visible: true */
  sectionTitle?: string;
  /** @description id: qt73k8hpfd65vekl | type: url | visible: true */
  sectionLink?: {
    text?: string;
    url?: string;
  };
  /** @description id: vx84n9josj72udxc | type: json | visible: true */
  mainArticle?: {
    /** @description id: zb92c5lqhj47kedr | type: string | visible: true */
    title?: string;
    /** @description id: wt63h8ikpj54rdem | type: string | visible: true */
    author?: string;
    /** @description id: gp45j2kmtu78iqlx | type: string | visible: true */
    date?: string;
    /** @description id: hr72k9jmtu36fpqz | type: string | visible: true */
    imageUrl?: string;
  };
  /** @description id: sz37p9klxc64qevm | type: array | visible: true */
  relatedArticles?: Array<{
    /** @description id: ab83c4lmnp56xevs | type: string | visible: true */
    title?: string;
    /** @description id: cd94f5hmrs67zevt | type: string | visible: true */
    authors?: string;
    /** @description id: ef15g6hntu78ievq | type: string | visible: true */
    date?: string;
    /** @description id: gh26h7ijvw89kewm | type: string | visible: true */
    commentCount?: string;
  }>;
}

export default function BlockComponent({
  backgroundColor = 'rgba(246, 207, 235, 0.9)',
  sectionTitle = 'ENTERTAINMENT',
  sectionLink = { text: 'SEE ALL ENTERTAINMENT', url: '#' },
  mainArticle = {
    title: 'Photo Mode is my new gaming obsession',
    author: 'ASH PARRISH',
    date: 'MAR 22',
    imageUrl: 'https://example.com/image.jpg',
  },
  relatedArticles = [
    {
      title: '7 cool indie games from GDC 2025',
      authors: 'JAY PETERS and ANDREW WEBSTER',
      date: 'MAR 22',
    },
    {
      title: 'Severance brought everything together in its season 2 finale',
      authors: 'ANDREW WEBSTER',
      date: 'MAR 21',
      commentCount: '63',
    },
  ],
}: BlockProps) {
  // Styles
  const containerStyle = {
    position: 'relative' as const,
    display: 'flex',
    flexDirection: 'column' as const,
    borderRadius: '16px',
    overflow: 'hidden',
    backgroundColor,
    width: '100%',
    maxWidth: '800px',
    fontFamily: 'sans-serif',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const verticalTitleContainerStyle = {
    position: 'absolute' as const,
    left: '0',
    top: '0',
    height: '100%',
    width: '100%',
    zIndex: 1,
    overflow: 'hidden',
    pointerEvents: 'none' as const,
  };

  const verticalTitleStyle = {
    position: 'absolute' as const,
    left: '10px',
    bottom: '300px',
    transform: 'rotate(-90deg)',
    transformOrigin: 'left bottom',
    whiteSpace: 'nowrap' as const,
    fontFamily: '"Arial Black", Gadget, sans-serif',
    fontSize: '140px',
    fontWeight: '900',
    color: 'rgba(0, 0, 0, 0.06)',
    letterSpacing: '-5px',
    userSelect: 'none' as const,
    pointerEvents: 'none' as const,
    paddingBottom: '5px',
  };

  const contentContainerStyle = {
    position: 'relative' as const,
    zIndex: 2,
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 24px',
  };

  const sectionTitleStyle = {
    fontSize: '14px',
    fontWeight: '600',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.5px',
  };

  const sectionLinkStyle = {
    color: '#000',
    fontSize: '14px',
    textDecoration: 'none',
    fontWeight: '600',
  };

  const mainArticleStyle = {
    padding: '0 24px',
  };

  const mainTitleStyle = {
    fontSize: '40px',
    fontWeight: '900',
    lineHeight: '1.1',
    letterSpacing: '-0.5px',
    margin: '10px 0 16px',
    fontFamily: '"Arial Black", Gadget, sans-serif',
  };

  const authorDateStyle = {
    fontSize: '14px',
    margin: '0 0 16px',
  };

  const imageStyle = {
    width: '100%',
    borderRadius: '8px',
    marginBottom: '20px',
    maxHeight: '400px',
    objectFit: 'cover' as const,
  };

  const relatedArticlesStyle = {
    padding: '0 24px 24px',
  };

  const relatedArticleItemStyle = {
    marginBottom: '20px',
    padding: '16px 0',
    borderTop: '1px solid rgba(0, 0, 0, 0.1)',
  };

  const relatedTitleStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '8px',
  };

  const relatedInfoStyle = {
    fontSize: '14px',
    color: '#333',
    display: 'flex',
    gap: '8px',
  };

  const commentCountStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const bulletPointStyle = {
    display: 'inline-block',
    margin: '0 4px',
    fontSize: '14px',
  };

  return (
    <div style={containerStyle}>
      {/* Vertical Title Background */}
      <div style={verticalTitleContainerStyle}>
        <div style={verticalTitleStyle}>{sectionTitle}</div>
      </div>

      {/* Content Container */}
      <div style={contentContainerStyle}>
        {/* Header Section */}
        <div style={headerStyle}>
          <div style={sectionTitleStyle}>{sectionTitle}</div>
          <a href={sectionLink?.url} style={sectionLinkStyle}>
            {sectionLink?.text}
          </a>
        </div>

        {/* Main Article */}
        <div style={mainArticleStyle}>
          <h2 style={mainTitleStyle}>{mainArticle?.title}</h2>
          <div style={authorDateStyle}>
            {mainArticle?.author} <span style={bulletPointStyle}>•</span> {mainArticle?.date}
          </div>
          <img 
            src={mainArticle?.imageUrl} 
            alt={mainArticle?.title} 
            style={imageStyle} 
          />
        </div>

        {/* Related Articles */}
        <div style={relatedArticlesStyle}>
          {relatedArticles?.map((article, index) => (
            <div key={index} style={relatedArticleItemStyle}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                <div style={{ width: '8px', height: '8px', backgroundColor: '#6200ea', borderRadius: '50%', marginRight: '12px' }}></div>
                <div style={relatedTitleStyle}>{article.title}</div>
              </div>
              <div style={relatedInfoStyle}>
                <span>{article.authors}</span>
                <span style={bulletPointStyle}>•</span>
                <span>{article.date}</span>
                {article.commentCount && (
                  <>
                    <span style={bulletPointStyle}>|</span>
                    <span style={commentCountStyle}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="#555" style={{ marginRight: '4px' }}>
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
                      </svg>
                      {article.commentCount}
                    </span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 