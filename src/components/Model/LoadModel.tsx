'use client'

import React, { useRef } from 'react'
import { Mesh } from 'three'
import { OBJLoader } from 'three/examples/jsm/Addons.js'
import { MTLLoader } from 'three/examples/jsm/Addons.js'
import { useLoader } from '@react-three/fiber'

export default function Load() {
  const materials = useLoader(MTLLoader, '/models/Rhaqim.mtl')
  const obj = useLoader(OBJLoader, '/models/Rhaqim.obj', loader => {
    materials.preload()
    loader.setMaterials(materials)
  })

  const ref = useRef<Mesh>(null)

  return (
    <mesh ref={ref} position={[0, 0, 0]} scale={[2, 2, 2]}>
      <primitive object={obj} />
    </mesh>
  )
}
