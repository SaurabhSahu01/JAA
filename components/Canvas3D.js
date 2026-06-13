'use client';

import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Image, Preload } from '@react-three/drei';

function Scene() {
  const groupRef = useRef();

  useFrame((state) => {
    // Parallax mouse effect - interactive rotation
    if (groupRef.current) {
      groupRef.current.rotation.y = (state.mouse.x * 0.4);
      groupRef.current.rotation.x = (state.mouse.y * -0.4);
    }
  });

  // Aspect ratio of nehru_statue.png is 860/2066 ~ 0.416
  const scaleHeight = 5.5;
  const scaleWidth = scaleHeight * 0.416;

  return (
    <group ref={groupRef}>
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 10, 5]} intensity={2.0} />
      
      <Image 
        url="/jnu/nehru_statue.png" 
        scale={[scaleWidth, scaleHeight]} 
        position={[0, 0, 0]} 
        transparent 
        alt="Pt. Jawaharlal Nehru Statue"
      />
    </group>
  );
}

export default function Canvas3D({ className = '' }) {
  return (
    <div className={`w-full h-[400px] md:h-[500px] relative cursor-grab active:cursor-grabbing ${className}`}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }} gl={{ alpha: true }}>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
}
