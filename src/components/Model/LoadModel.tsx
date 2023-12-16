'use client'

import React from 'react'
import { OBJLoader } from 'three/examples/jsm/Addons.js'
import { MTLLoader } from 'three/examples/jsm/Addons.js'
import { useLoader } from '@react-three/fiber'

export default function Load() {
  const materials = useLoader(MTLLoader, '/models/Rhaqim.mtl')
  const obj = useLoader(OBJLoader, '/models/Rhaqim.obj', loader => {
    materials.preload()
    loader.setMaterials(materials)
  })
  return <primitive object={obj} />
}
