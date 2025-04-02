import { Box, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import React, { useRef, Suspense } from 'react';
import * as THREE from 'three';

interface BlockProps {
  /** @description id: gs1rn5jmxfvpxptx | type: string | visible: true */
  title?: string;
  /** @description id: 9ajrz12ik7esfk1z | type: string | visible: true */
  description?: string;
  /** @description id: 3ckcfvf6b7zyskk8 | type: color | visible: true */
  backgroundColor?: string;
  /** @description id: 4f49q5uidkcp5ak4 | type: number | visible: true */
  worldSize?: number;
  /** @description id: bl0rimfebwbencoj | type: decimal | visible: true */
  rotationSpeed?: number;
}

function World({ size = 5, rotationSpeed = 0.5 }: { size?: number; rotationSpeed?: number }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += rotationSpeed * 0.01;
    }
  });

  const blocks = [];
  for (let x = -size; x <= size; x++) {
    for (let z = -size; z <= size; z++) {
      // Create a random height for each column
      const height = Math.floor(Math.random() * 3) + 1;
      for (let y = 0; y < height; y++) {
        blocks.push(
          <Box
            key={`${x}-${y}-${z}`}
            position={[x, y - height / 2, z]}
            args={[0.9, 0.9, 0.9]}
            castShadow
            receiveShadow
          >
            <meshStandardMaterial
              color={y === height - 1 ? '#4CAF50' : y === 0 ? '#795548' : '#8D6E63'}
              roughness={0.8}
              metalness={0.2}
            />
          </Box>
        );
      }
    }
  }

  return (
    <group ref={groupRef}>
      {blocks}
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
    </group>
  );
}

function LoadingFallback() {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100%',
      color: '#fff'
    }}>
      Loading 3D World...
    </div>
  );
}

export default function MinecraftWorld({
  title = 'My World',
  description = 'Explore this amazing 3D world',
  backgroundColor = '#1a1a1a',
  worldSize = 5,
  rotationSpeed = 0.5,
}: BlockProps) {
  return (
    <div style={{ width: '100%', height: '400px', background: backgroundColor }}>
      <div style={{ padding: '20px', color: '#fff' }}>
        <h2 style={{ margin: '0 0 10px 0' }}>{title}</h2>
        <p style={{ margin: 0 }}>{description}</p>
      </div>
      <div style={{ height: 'calc(100% - 100px)' }}>
        <Canvas shadows camera={{ position: [10, 10, 10], fov: 45 }}>
          <Suspense fallback={null}>
            <PerspectiveCamera makeDefault position={[10, 10, 10]} />
            <OrbitControls
              enablePan={false}
              minDistance={5}
              maxDistance={20}
              minPolarAngle={Math.PI / 4}
              maxPolarAngle={Math.PI / 2}
            />
            <World size={worldSize} rotationSpeed={rotationSpeed} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
} 