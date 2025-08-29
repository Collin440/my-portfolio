"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Particles() {
  const pointsRef = useRef<THREE.Points>(null);

  // Animate rotation
  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0005;
    }
  });

  const count = 5000;
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 10;
  }

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]} // ✅ fixed: pass as args
        />
      </bufferGeometry>
      <pointsMaterial color="#00ffff" size={0.02} />
    </points>
  );
}
