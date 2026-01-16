"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  
  const particlesCount = 2000;
  
  const positions = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.02;
      ref.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#6366f1"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

function FloatingShapes() {
  const meshRef = useRef<THREE.Mesh>(null);
  const mesh2Ref = useRef<THREE.Mesh>(null);
  const mesh3Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.1;
      meshRef.current.rotation.y = t * 0.15;
      meshRef.current.position.y = Math.sin(t * 0.5) * 0.3;
    }
    
    if (mesh2Ref.current) {
      mesh2Ref.current.rotation.x = t * 0.12;
      mesh2Ref.current.rotation.z = t * 0.1;
      mesh2Ref.current.position.y = Math.sin(t * 0.4 + 1) * 0.2;
    }
    
    if (mesh3Ref.current) {
      mesh3Ref.current.rotation.y = t * 0.08;
      mesh3Ref.current.rotation.z = t * 0.12;
      mesh3Ref.current.position.y = Math.sin(t * 0.6 + 2) * 0.25;
    }
  });

  return (
    <>
      <mesh ref={meshRef} position={[-2, 0, -2]}>
        <icosahedronGeometry args={[0.5, 0]} />
        <meshBasicMaterial color="#6366f1" wireframe transparent opacity={0.3} />
      </mesh>
      
      <mesh ref={mesh2Ref} position={[2.5, 1, -3]}>
        <octahedronGeometry args={[0.4, 0]} />
        <meshBasicMaterial color="#8b5cf6" wireframe transparent opacity={0.25} />
      </mesh>
      
      <mesh ref={mesh3Ref} position={[1, -1.5, -2.5]}>
        <torusGeometry args={[0.3, 0.1, 8, 16]} />
        <meshBasicMaterial color="#a855f7" wireframe transparent opacity={0.2} />
      </mesh>
    </>
  );
}

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
      >
        <ParticleField />
        <FloatingShapes />
      </Canvas>
    </div>
  );
}
