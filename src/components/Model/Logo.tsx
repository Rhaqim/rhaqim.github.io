'use client'

import React, { useRef } from 'react'
import { Mesh } from 'three'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import Load from './LoadModel'

const LogoModel = () => {
  const modelRef = useRef<Mesh>(null)

  return (
    <Canvas camera={{ position: [5, 0, 5] }} className="bg-black h-screen">
      <OrbitControls />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <mesh ref={modelRef} position={[0, 0, 0]} scale={[2, 2, 2]}>
        <Load />
      </mesh>
    </Canvas>
  )
}

export default LogoModel
