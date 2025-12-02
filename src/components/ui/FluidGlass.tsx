/* eslint-disable react/no-unknown-property */

import * as THREE from 'three';
import { useRef, useState, useEffect } from 'react';
import { Canvas, createPortal, useFrame, useThree } from '@react-three/fiber';
import {
  useFBO,
  MeshTransmissionMaterial,
  Text
} from '@react-three/drei';
import { easing } from 'maath';

interface FluidGlassProps {
  mode?: 'lens' | 'bar' | 'cube';
  lensProps?: Record<string, any>;
  barProps?: Record<string, any>;
  cubeProps?: Record<string, any>;
}

export default function FluidGlass({ 
  mode = 'lens', 
  lensProps = {}, 
  barProps = {}, 
  cubeProps = {} 
}: FluidGlassProps) {
  const modeProps = mode === 'bar' ? barProps : mode === 'cube' ? cubeProps : lensProps;

  return (
    <Canvas camera={{ position: [0, 0, 20], fov: 15 }} gl={{ alpha: true }}>
      <SimpleLens mode={mode} modeProps={modeProps} />
    </Canvas>
  );
}

function SimpleLens({ mode, modeProps = {} }: { mode: string; modeProps?: Record<string, any> }) {
  const ref = useRef<THREE.Mesh>(null);
  const buffer = useFBO();
  const { viewport: vp } = useThree();
  const [scene] = useState(() => new THREE.Scene());
  
  // Create geometry based on mode
  const geometry = useRef<THREE.BufferGeometry>(
    mode === 'cube' 
      ? new THREE.BoxGeometry(2, 2, 2)
      : mode === 'bar'
      ? new THREE.BoxGeometry(4, 0.5, 0.5)
      : new THREE.CylinderGeometry(1, 1, 0.5, 32)
  ).current;

  useFrame((state, delta) => {
    if (!ref.current) return;
    
    const { gl, viewport, pointer, camera } = state;
    const v = viewport.getCurrentViewport(camera, [0, 0, 15]);
    
    // Follow pointer for lens and cube, lock to bottom for bar
    const destX = mode === 'bar' ? 0 : (pointer.x * v.width) / 2;
    const destY = mode === 'bar' ? -v.height / 2 + 0.2 : (pointer.y * v.height) / 2;

    easing.damp3(ref.current.position, [destX, destY, 15], 0.15, delta);
    
    const scale = modeProps.scale ?? 0.15;
    ref.current.scale.setScalar(scale);

    gl.setRenderTarget(buffer);
    gl.render(scene, camera);
    gl.setRenderTarget(null);
    
    // Dark background matching site theme
    gl.setClearColor(0x141414, 1);
  });

  const { 
    ior = 1.15, 
    thickness = 5, 
    anisotropy = 0.01, 
    chromaticAberration = 0.1,
    scale = 0.15
  } = modeProps;

  return (
    <>
      {createPortal(
        <Text
          position={[0, 0, 12]}
          fontSize={0.4}
          letterSpacing={-0.05}
          outlineWidth={0}
          outlineBlur="20%"
          outlineColor="#000"
          outlineOpacity={0.5}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          WebNICHE
        </Text>,
        scene
      )}
      <mesh scale={[vp.width, vp.height, 1]}>
        <planeGeometry />
        <meshBasicMaterial map={buffer.texture} transparent />
      </mesh>
      <mesh 
        ref={ref} 
        scale={scale} 
        rotation-x={mode === 'bar' ? 0 : Math.PI / 2} 
        geometry={geometry}
      >
        <MeshTransmissionMaterial
          buffer={buffer.texture}
          ior={ior}
          thickness={thickness}
          anisotropy={anisotropy}
          chromaticAberration={chromaticAberration}
          transmission={1}
          roughness={0}
          color="#ffffff"
          attenuationColor="#ffffff"
          attenuationDistance={0.25}
        />
      </mesh>
    </>
  );
}
