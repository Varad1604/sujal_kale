import React, { useMemo } from 'react';
import { useGLTF, Center } from '@react-three/drei';
import * as THREE from 'three';

export function DomesticCondenserModel(props) {
    const { scene } = useGLTF('/models/two_reoz-condensor.glb');

    // Use original materials from the GLB
    // useMemo(() => {
    //     scene.traverse((child) => {
    //         if (child.isMesh) {
    //             child.material = new THREE.MeshStandardMaterial({
    //                 color: "#1a1a1a", // Black powder coat
    //                 metalness: 0.6,
    //                 roughness: 0.4
    //             });
    //         }
    //     });
    // }, [scene]);

    return (
        <Center>
            <primitive object={scene} {...props} />
        </Center>
    );
}

// Preload the model
useGLTF.preload('/models/two_reoz-condensor.glb');
