import React, { useRef,useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { AnimationMixer, LoopRepeat } from "three";

export function RotateAnimation(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("./rotate.glb");
  const { actions } = useAnimations(animations, group);


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
          <group
            name="2d608fdf438140528168b691e5ff3c48fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="rotate">
                  <group name="quan" rotation={[Math.PI, 0, 0]} scale={0.05}>
                    <mesh
                      name="quan_rotate_t_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.quan_rotate_t_0.geometry}
                      material={materials.rotate_t}
                    />
                  </group>
                  <group
                    name="locator1"
                    position={[0.477, 5.456, 5.952]}
                    rotation={[-1.483, 0.087, 1.563]}
                  >
                    <group name="yuan_1" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group
                    name="locator2"
                    position={[0.861, 4.883, 5.885]}
                    rotation={[-1.394, 0.172, 1.54]}
                  >
                    <group name="yuan_1_1" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_1.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group
                    name="locator3"
                    position={[1.151, 4.297, 5.773]}
                    rotation={[-1.3, 0.253, 1.502]}
                  >
                    <group name="yuan_1_2" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_2.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group
                    name="locator4"
                    position={[1.351, 3.712, 5.617]}
                    rotation={[-1.201, 0.327, 1.447]}
                  >
                    <group name="yuan_1_3" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_3"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_3.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group
                    name="locator5"
                    position={[1.465, 3.142, 5.418]}
                    rotation={[-1.096, 0.393, 1.376]}
                  >
                    <group name="yuan_1_4" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_4"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_4.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group
                    name="locator6"
                    position={[1.502, 2.601, 5.178]}
                    rotation={[-0.983, 0.448, 1.29]}
                  >
                    <group name="yuan_1_5" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_5"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_5.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group
                    name="locator7"
                    position={[1.47, 2.099, 4.898]}
                    rotation={[-0.864, 0.489, 1.189]}
                  >
                    <group name="yuan_1_6" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_6"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_6.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group
                    name="locator8"
                    position={[1.38, 1.645, 4.581]}
                    rotation={[-0.74, 0.515, 1.076]}
                  >
                    <group name="yuan_1_7" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_7"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_7.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group
                    name="locator9"
                    position={[1.246, 1.246, 4.229]}
                    rotation={[-0.615, Math.PI / 6, 0.955]}
                  >
                    <group name="yuan_1_8" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_8"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_8.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group
                    name="locator10"
                    position={[1.079, 0.905, 3.845]}
                    rotation={[-0.495, 0.515, 0.831]}
                  >
                    <group name="yuan_1_9" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_9"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_9.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group
                    name="locator11"
                    position={[0.893, 0.625, 3.431]}
                    rotation={[-0.382, 0.489, 0.707]}
                  >
                    <group name="yuan_1_10" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_10"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_10.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group
                    name="locator12"
                    position={[0.7, 0.404, 2.991]}
                    rotation={[-0.281, 0.448, 0.588]}
                  >
                    <group name="yuan_1_11" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_11"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_11.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group
                    name="locator13"
                    position={[0.513, 0.239, 2.529]}
                    rotation={[-0.195, 0.393, 0.475]}
                  >
                    <group name="yuan_1_12" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_12"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_12.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group
                    name="locator14"
                    position={[0.343, 0.125, 2.047]}
                    rotation={[-0.124, 0.327, 0.37]}
                  >
                    <group name="yuan_1_13" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_13"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_13.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group
                    name="locator15"
                    position={[0.2, 0.054, 1.549]}
                    rotation={[-0.069, 0.253, 0.271]}
                  >
                    <group name="yuan_1_14" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_14"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_14.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group
                    name="locator16"
                    position={[0.092, 0.016, 1.039]}
                    rotation={[-0.031, 0.172, 0.177]}
                  >
                    <group name="yuan_1_15" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_15"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_15.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group
                    name="locator17"
                    position={[0.024, 0.002, 0.522]}
                    rotation={[-0.008, 0.087, 0.088]}
                  >
                    <group name="yuan_1_16" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_16"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_16.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group name="locator18">
                    <group name="yuan_1_17" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_17"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_17.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group
                    name="locator19"
                    position={[-5.456, 0.477, 5.952]}
                    rotation={[-0.783, -1.447, 2.354]}
                  >
                    <group name="yuan_1_18" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_18"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_18.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group
                    name="locator20"
                    position={[-4.883, 0.861, 5.885]}
                    rotation={[-0.778, -1.325, 2.349]}
                  >
                    <group name="yuan_1_19" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_19"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_19.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group
                    name="locator21"
                    position={[-4.297, 1.151, 5.773]}
                    rotation={[-0.768, -1.203, 2.339]}
                  >
                    <group name="yuan_1_20" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_20"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_20.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group
                    name="locator22"
                    position={[-3.712, 1.351, 5.617]}
                    rotation={[-0.754, -1.082, 2.325]}
                  >
                    <group name="yuan_1_21" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_21"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_21.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group
                    name="locator23"
                    position={[-3.142, 1.465, 5.418]}
                    rotation={[-0.736, -0.964, 2.307]}
                  >
                    <group name="yuan_1_22" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_22"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_22.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group
                    name="locator24"
                    position={[-2.601, 1.502, 5.178]}
                    rotation={[-0.714, -0.848, 2.285]}
                  >
                    <group name="yuan_1_23" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_23"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_23.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group
                    name="locator25"
                    position={[-2.099, 1.47, 4.898]}
                    rotation={[-0.686, -0.736, 2.257]}
                  >
                    <group name="yuan_1_24" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_24"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_24.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group
                    name="locator26"
                    position={[-1.645, 1.38, 4.581]}
                    rotation={[-0.654, -0.627, 2.224]}
                  >
                    <group name="yuan_1_25" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_25"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_25.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group
                    name="locator27"
                    position={[-1.246, 1.246, 4.229]}
                    rotation={[-0.615, -Math.PI / 6, 2.186]}
                  >
                    <group name="yuan_1_26" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_26"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_26.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group
                    name="locator28"
                    position={[-0.905, 1.079, 3.845]}
                    rotation={[-0.571, -0.426, 2.142]}
                  >
                    <group name="yuan_1_27" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_27"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_27.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group
                    name="locator29"
                    position={[-0.625, 0.893, 3.431]}
                    rotation={[-0.521, -0.335, 2.092]}
                  >
                    <group name="yuan_1_28" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_28"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_28.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group
                    name="locator30"
                    position={[-0.404, 0.7, 2.991]}
                    rotation={[-0.464, -0.253, 2.034]}
                  >
                    <group name="yuan_1_29" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_29"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_29.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group
                    name="locator31"
                    position={[-0.239, 0.513, 2.529]}
                    rotation={[-0.4, -0.18, 1.971]}
                  >
                    <group name="yuan_1_30" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_30"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_30.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group
                    name="locator32"
                    position={[-0.125, 0.343, 2.047]}
                    rotation={[-0.33, -0.117, 1.9]}
                  >
                    <group name="yuan_1_31" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_31"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_31.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group
                    name="locator33"
                    position={[-0.054, 0.2, 1.549]}
                    rotation={[-0.253, -0.067, 1.824]}
                  >
                    <group name="yuan_1_32" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_32"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_32.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group
                    name="locator34"
                    position={[-0.016, 0.092, 1.039]}
                    rotation={[-0.172, -0.03, 1.743]}
                  >
                    <group name="yuan_1_33" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_33"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_33.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group
                    name="locator35"
                    position={[-0.002, 0.024, 0.522]}
                    rotation={[-0.087, -0.008, 1.658]}
                  >
                    <group name="yuan_1_34" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_34"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_34.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group name="locator36" rotation={[0, 0, Math.PI / 2]}>
                    <group name="yuan_1_35" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_35"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_35.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group
                    name="locator37"
                    position={[-0.477, -5.456, 5.952]}
                    rotation={[1.483, -0.087, -1.578]}
                  >
                    <group name="yuan_1_36" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_36"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_36.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group
                    name="locator38"
                    position={[-0.861, -4.883, 5.885]}
                    rotation={[1.394, -0.172, -1.601]}
                  >
                    <group name="yuan_1_37" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_37"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_37.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group
                    name="locator39"
                    position={[-1.151, -4.297, 5.773]}
                    rotation={[1.3, -0.253, -1.64]}
                  >
                    <group name="yuan_1_38" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_38"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_38.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group
                    name="locator40"
                    position={[-1.351, -3.712, 5.617]}
                    rotation={[1.201, -0.327, -1.695]}
                  >
                    <group name="yuan_1_39" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_39"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_39.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group
                    name="locator41"
                    position={[-1.465, -3.142, 5.418]}
                    rotation={[1.096, -0.393, -1.765]}
                  >
                    <group name="yuan_1_40" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_40"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_40.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group
                    name="locator42"
                    position={[-1.502, -2.601, 5.178]}
                    rotation={[0.983, -0.448, -1.852]}
                  >
                    <group name="yuan_1_41" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_41"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_41.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group
                    name="locator43"
                    position={[-1.47, -2.099, 4.898]}
                    rotation={[0.864, -0.489, -1.953]}
                  >
                    <group name="yuan_1_42" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_42"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_42.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group
                    name="locator44"
                    position={[-1.38, -1.645, 4.581]}
                    rotation={[0.74, -0.515, -2.065]}
                  >
                    <group name="yuan_1_43" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_43"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_43.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group
                    name="locator45"
                    position={[-1.246, -1.246, 4.229]}
                    rotation={[0.615, -Math.PI / 6, -2.186]}
                  >
                    <group name="yuan_1_44" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_44"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_44.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group
                    name="locator46"
                    position={[-1.079, -0.905, 3.845]}
                    rotation={[0.495, -0.515, -2.311]}
                  >
                    <group name="yuan_1_45" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_45"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_45.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group
                    name="locator47"
                    position={[-0.893, -0.625, 3.431]}
                    rotation={[0.382, -0.489, -2.434]}
                  >
                    <group name="yuan_1_46" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_46"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_46.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group
                    name="locator48"
                    position={[-0.7, -0.404, 2.991]}
                    rotation={[0.281, -0.448, -2.554]}
                  >
                    <group name="yuan_1_47" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_47"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_47.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group
                    name="locator49"
                    position={[-0.513, -0.239, 2.529]}
                    rotation={[0.195, -0.393, -2.666]}
                  >
                    <group name="yuan_1_48" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_48"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_48.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group
                    name="locator50"
                    position={[-0.343, -0.125, 2.047]}
                    rotation={[0.124, -0.327, -2.772]}
                  >
                    <group name="yuan_1_49" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_49"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_49.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group
                    name="locator51"
                    position={[-0.2, -0.054, 1.549]}
                    rotation={[0.069, -0.253, -2.871]}
                  >
                    <group name="yuan_1_50" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_50"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_50.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group
                    name="locator52"
                    position={[-0.092, -0.016, 1.039]}
                    rotation={[0.031, -0.172, -2.964]}
                  >
                    <group name="yuan_1_51" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_51"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_51.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group
                    name="locator53"
                    position={[-0.024, -0.002, 0.522]}
                    rotation={[0.008, -0.087, -3.054]}
                  >
                    <group name="yuan_1_52" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_52"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_52.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group name="locator54" rotation={[0, 0, Math.PI]}>
                    <group name="yuan_1_53" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_53"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_53.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group
                    name="locator55"
                    position={[5.456, -0.477, 5.952]}
                    rotation={[0.783, 1.447, -0.787]}
                  >
                    <group name="yuan_1_54" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_54"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_54.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group
                    name="locator56"
                    position={[4.883, -0.861, 5.885]}
                    rotation={[0.778, 1.325, -0.793]}
                  >
                    <group name="yuan_1_55" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_55"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_55.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group
                    name="locator57"
                    position={[4.297, -1.151, 5.773]}
                    rotation={[0.768, 1.203, -0.803]}
                  >
                    <group name="yuan_1_56" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_56"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_56.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group
                    name="locator58"
                    position={[3.712, -1.351, 5.617]}
                    rotation={[0.754, 1.082, -0.816]}
                  >
                    <group name="yuan_1_57" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_57"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_57.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group
                    name="locator59"
                    position={[3.142, -1.465, 5.418]}
                    rotation={[0.736, 0.964, -0.835]}
                  >
                    <group name="yuan_1_58" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_58"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_58.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group
                    name="locator60"
                    position={[2.601, -1.502, 5.178]}
                    rotation={[0.714, 0.848, -0.857]}
                  >
                    <group name="yuan_1_59" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_59"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_59.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group
                    name="locator61"
                    position={[2.099, -1.47, 4.898]}
                    rotation={[0.686, 0.736, -0.884]}
                  >
                    <group name="yuan_1_60" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_60"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_60.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group
                    name="locator62"
                    position={[1.645, -1.38, 4.581]}
                    rotation={[0.654, 0.627, -0.917]}
                  >
                    <group name="yuan_1_61" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_61"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_61.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group
                    name="locator63"
                    position={[1.246, -1.246, 4.229]}
                    rotation={[0.615, Math.PI / 6, -0.955]}
                  >
                    <group name="yuan_1_62" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_62"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_62.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group
                    name="locator64"
                    position={[0.905, -1.079, 3.845]}
                    rotation={[0.571, 0.426, -1]}
                  >
                    <group name="yuan_1_63" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_63"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_63.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group
                    name="locator65"
                    position={[0.625, -0.893, 3.431]}
                    rotation={[0.521, 0.335, -1.05]}
                  >
                    <group name="yuan_1_64" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_64"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_64.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group
                    name="locator66"
                    position={[0.404, -0.7, 2.991]}
                    rotation={[0.464, 0.253, -1.107]}
                  >
                    <group name="yuan_1_65" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_65"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_65.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group
                    name="locator67"
                    position={[0.239, -0.513, 2.529]}
                    rotation={[0.4, 0.18, -1.171]}
                  >
                    <group name="yuan_1_66" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_66"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_66.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group
                    name="locator68"
                    position={[0.125, -0.343, 2.047]}
                    rotation={[0.33, 0.117, -1.241]}
                  >
                    <group name="yuan_1_67" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_67"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_67.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group
                    name="locator69"
                    position={[0.054, -0.2, 1.549]}
                    rotation={[0.253, 0.067, -1.318]}
                  >
                    <group name="yuan_1_68" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_68"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_68.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group
                    name="locator70"
                    position={[0.016, -0.092, 1.039]}
                    rotation={[0.172, 0.03, -1.399]}
                  >
                    <group name="yuan_1_69" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_69"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_69.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group
                    name="locator71"
                    position={[0.002, -0.024, 0.522]}
                    rotation={[0.087, 0.008, -1.484]}
                  >
                    <group name="yuan_1_70" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_70"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_70.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                  <group name="locator72" rotation={[0, 0, -Math.PI / 2]}>
                    <group name="yuan_1_71" position={[5.986, -0.008, -0.012]}>
                      <mesh
                        name="yuan_1_rotate_t_0_71"
                        castShadow
                        receiveShadow
                        geometry={nodes.yuan_1_rotate_t_0_71.geometry}
                        material={materials.rotate_t}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/rotate.glb");
