import React, { useRef,useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { AnimationMixer, LoopRepeat } from "three";

export function Placid(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./placid.glb')
  const { actions } = useAnimations(animations, group)


  useEffect(() => {
    const mixer = new AnimationMixer(group.current);
    // Find the animation action by name or index
    const animationAction = mixer.clipAction(animations[0]); // Replace with the correct animation index or name
    // Set the desired loop behavior
    animationAction.loop = LoopRepeat;
    // Play the animation
    animationAction.play();

    const animate = () => {
      mixer.update(0.015); // Adjust the animation speed here
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      mixer.stopAllAction();
    };
  }, [animations]);


  
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Sphere_0">
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials['Material.001']}
                />
              </group>
              <group name="Sphere001_1" scale={0.897}>
                <mesh
                  name="Object_6"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6.geometry}
                  material={materials['Material.001']}
                />
              </group>
              <group name="Sphere002_2" scale={0.797}>
                <mesh
                  name="Object_8"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_8.geometry}
                  material={materials['Material.001']}
                />
              </group>
              <group name="Sphere003_3" scale={0.696}>
                <mesh
                  name="Object_10"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_10.geometry}
                  material={materials['Material.001']}
                />
              </group>
              <group name="Sphere004_4" scale={0.603}>
                <mesh
                  name="Object_12"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_12.geometry}
                  material={materials['Material.001']}
                />
              </group>
              <group name="Sphere005_5" scale={0.5}>
                <mesh
                  name="Object_14"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_14.geometry}
                  material={materials['Material.001']}
                />
              </group>
              <group name="Circle_7" rotation={[0.615, -Math.PI / 6, -0.615]} scale={1.941}>
                <group name="Sphere006_6" scale={0.528}>
                  <mesh
                    name="Object_17"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_17.geometry}
                    material={materials['Material.002']}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./placid.glb')