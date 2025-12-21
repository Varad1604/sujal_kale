import React, { useMemo } from 'react';
import { useGLTF, Center } from '@react-three/drei';

export function SpringModel({ modelPath = '/models/spring-draco.glb', ...props }) {
    const { scene } = useGLTF(modelPath);

    const clonedScene = useMemo(() => {
        const clone = scene.clone();
        return clone;
    }, [scene]);

    return (
        <Center top>
            <primitive object={clonedScene} {...props} />
        </Center>
    );
}

useGLTF.preload('/models/spring-draco.glb');
