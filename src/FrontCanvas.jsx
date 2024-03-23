import React from 'react';

import { Canvas } from '@react-three/fiber'

import { Environment, PerspectiveCamera, SpotLight } from "@react-three/drei";
import { RotateAnimation } from './GlbComponent/RotateAnimation';
import { QuantamCube } from './GlbComponent/QuantamCube';
 
import { Torus } from './Torus';
import { Sprnil } from './Sprnil';
 
 
 

function FrontCanvas() {
  return (
    <div>

      <Canvas style={{ height: "100vh", width: "100vw", backgroundColor: "trasparent", }}>

        <directionalLight intensity={100} position={[0, 2, -1]} />
        <directionalLight intensity={100} position={[0, -2, -1]} />

        <directionalLight intensity={100} position={[2, 0, 0]} />
        <directionalLight intensity={100} position={[-2, 0, 0]} />

{/* <CircleScene /> */}
        <Environment preset='city' />
        {/* <Torus  position={[0, 0, -1]}/> */}
 <QuantamCube />

 <Sprnil position={[0, -2 , -4]} />




 

      </Canvas>



    </div>
  )
}

export default FrontCanvas