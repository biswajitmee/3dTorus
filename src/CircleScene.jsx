import React, { useRef, useState } from 'react';
import { Canvas, useFrame,  } from '@react-three/fiber';
import { Icosahedron,MeshTransmissionMaterial,Environment } from '@react-three/drei';
import * as THREE from 'three';
import { useControls } from 'leva'

function CircleScene() {
  const meshRef = useRef();
  const [spheres, setSpheres] = useState([]);


  const materialProps = useControls({ 
    /* Thickness (refraction), default: 0 */
    thickness: {value :0.2, min:0, max:3, step:0.05},
  
    /* Roughness (blur), default: 0 */
    roughness: {value :0, min:0, max:1, step:0.01},
  
    transmission:  {value :1, min:0, max:1, step:0.1},
  
    ior: {value :1.2, min:0, max:3, step:0.1},
   
    /* Chromatic aberration, default: 0.03 */
    chromaticAberration: {value :0.02, min:0, max:1,  },
   
   /** Render the backside of the material (more cost, better results), default: false */
   backside: {value :true},
  
    /* Anisotropy, default: 0.1 */
    anisotropicBlur: {value :0.2, min:0, max:3, step:0.5},
    /* Distortion, default: 0 */
    distortion: {value :0.2, min:0, max:3, step:0.5},
    /* Distortion scale, default: 0.5 */
    distortionScale: {value :0.2, min:0, max:3, step:0.5},
    /* Temporal distortion (speed of movement), default: 0.0 */
   
    
  
  })
  
  
  const pointer = new THREE.Vector2();
  const raycaster = new THREE.Raycaster();
  const threshold = 0.1;
  const pointSize = 0.05;

  const generatePoint = (position) => {
    return (
      <mesh key={position.toArray().join('_')}>
        <sphereGeometry args={[0.75, 52, 52]} />
        <meshBasicMaterial color={0xff0000} />
        <primitive position={position} />
      </mesh>
    );
  };

  const onPointerMove = (event) => {
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
  };

  const CustomFrameUpdater = ({ meshRef }) => {
    useFrame(({ clock, camera, scene }) => {
      camera.applyMatrix4(new THREE.Matrix4().makeRotationY(0.005));
      camera.updateMatrixWorld();



      
      raycaster.setFromCamera(pointer, camera);
      const intersections = raycaster.intersectObject(meshRef.current, false);
      const intersection = intersections.length > 0 ? intersections[0] : null;

      if (intersection && Math.random() > 0.58) {
        const newSpheres = [...spheres];
        newSpheres.push(intersection.point.clone());
        setSpheres(newSpheres.slice(-40)); // Keep only the last 40 spheres
      }
    });
    return null;
  };

  return (
    <Canvas >

      <ambientLight />
  
      <Icosahedron args={[2.5, 1]} >
       
      <mesh  ref={meshRef} >
      <CustomFrameUpdater meshRef={meshRef} />
      <MeshTransmissionMaterial {...materialProps} />
      </mesh>
 
      </Icosahedron>
     

      <Environment preset='city' />

       
    </Canvas>
  );
}

export default CircleScene;
