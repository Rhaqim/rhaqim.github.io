'use client'

import React from 'react'

import { Canvas } from '@react-three/fiber'
// import { OrbitControls } from '@react-three/drei'

import GLBModel from './GLBModel'

const LogoModel = () => {
  return (
    <Canvas camera={{ position: [5, 0, 5] }} >
      {/* <OrbitControls /> */}
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <GLBModel />
    </Canvas>
  )
}

export default LogoModel
