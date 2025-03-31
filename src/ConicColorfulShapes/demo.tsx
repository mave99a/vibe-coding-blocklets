import React from 'react';
import ConicColorfulShapes from './index';

/**
 * This is a demo component that showcases the ConicColorfulShapes component
 * with different configurations.
 */
export default function ConicColorfulShapesDemo() {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      {/* Using default configuration */}
      <ConicColorfulShapes />
      
      {/* 
        You can uncomment and customize the configurations below to see different variations
      */}
      
      {/*
      <ConicColorfulShapes 
        gridRows={12}
        gridColumns={1}
        containerSize="80vmin"
        multiCount={70}
        colors={[
          { colorHex: '#ff5e5e' },
          { colorHex: '#5eff5e' },
          { colorHex: '#5e5eff' },
          { colorHex: '#ffff5e' }
        ]}
        backgroundColor="#121212"
        containerBackgroundColor="#2d2d2d"
      />
      */}
      
      {/*
      <ConicColorfulShapes 
        gridRows={3}
        gridColumns={3}
        containerSize="60vmin"
        multiCount={30}
        colors={[
          { colorHex: '#ff00ff' },
          { colorHex: '#00ffff' },
          { colorHex: '#ffff00' }
        ]}
        backgroundColor="#f0f0f0"
        containerBackgroundColor="#333333"
      />
      */}
    </div>
  );
} 