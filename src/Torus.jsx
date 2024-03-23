import React, { useRef } from 'react'
import { useGLTF, Text, MeshTransmissionMaterial } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'

import { useControls } from 'leva'


export function Torus(props) {
  const mesh = useRef();
  const { nodes, materials } = useGLTF('./torus.glb')
  const { viewport } = useThree();
  const fontProps = { fontSize: 0.9, letterSpacing: 0.25, lineHeight: 1, font: "./fonts/Foremost-Regular.otf" }

  const materialProps = useControls({


    /* Thickness (refraction), default: 0 */
    thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },

    /* Roughness (blur), default: 0 */
    roughness: { value: 0, min: 0, max: 1, step: 0.01 },

    transmission: { value: 1, min: 0, max: 1, step: 0.1 },

    ior: { value: 1.2, min: 0, max: 3, step: 0.1 },

    /* Chromatic aberration, default: 0.03 */
    chromaticAberration: { value: 0.02, min: 0, max: 1, },

    /** Render the backside of the material (more cost, better results), default: false */
    backside: { value: true },

    /* Anisotropy, default: 0.1 */
    anisotropicBlur: { value: 0.2, min: 0, max: 3, step: 0.5 },
    /* Distortion, default: 0 */
    distortion: { value: 0.2, min: 0, max: 3, step: 0.5 },
    /* Distortion scale, default: 0.5 */
    distortionScale: { value: 0.2, min: 0, max: 3, step: 0.5 },
    /* Temporal distortion (speed of movement), default: 0.0 */



  })



  useFrame(() => {
    mesh.current.rotation.x += 0.02
  })

  return (
    <group {...props} dispose={null} scale={viewport.width / 6}>


      <mesh ref={mesh}
        castShadow
        receiveShadow
        geometry={nodes.Torus.geometry}
        material={materials.Material}
      >
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
      <Text position={[0, 0, -2]}  {...fontProps}  >Creative Design</Text>

    </group>
  )
}

useGLTF.preload('./torus.glb')
