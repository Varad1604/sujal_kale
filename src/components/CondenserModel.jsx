import React, { useRef } from 'react';
import { useGLTF, Stage, OrbitControls, Center } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';

export function CondenserModel({ modelPath, ...props }) {
    const { scene } = useGLTF(modelPath);

    // Clone and apply black material to match photos
    const clonedScene = React.useMemo(() => {
        const clone = scene.clone();
        // clone.traverse((child) => {
        //     if (child.isMesh) {
        //         child.material = new THREE.MeshStandardMaterial({
        //             color: "#1a1a1a", // Black powder coat
        //             metalness: 0.6,
        //             roughness: 0.4
        //         });
        //     }
        // });
        return clone;
    }, [scene]);

    return <primitive object={clonedScene} {...props} />;
}

export default function CondenserViewer() {
    return (
        <div style={{ width: '100%', height: '500px', background: '#1a1a1a' }}>
            <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
                <Stage environment="city" intensity={0.6}>
                    <CondenserModel modelPath="/models/Condensor_coil_LHS.glb" position={[-1, 0, 0]} />
                    <CondenserModel modelPath="/models/Condensor_coil_RHS.glb" position={[1, 0, 0]} />
                </Stage>
                <OrbitControls makeDefault />
            </Canvas>
        </div>
    );
}

// Preload the models
useGLTF.preload('/models/Condensor_coil_LHS.glb');
useGLTF.preload('/models/Condensor_coil_RHS.glb');
