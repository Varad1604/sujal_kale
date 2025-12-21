import { Canvas } from '@react-three/fiber'
import { Experience } from './Experience'
import { Suspense } from 'react'

export const CanvasContainer = () => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
            pointerEvents: 'none' // Allow scroll/touch to pass through to page
        }}>
            <Canvas
                shadows
                camera={{ position: [0, 0, 5], fov: 30 }}
                dpr={[1, 2]}
                eventSource={document.getElementById('main-content') || document.body}
                eventPrefix="client"
                style={{ pointerEvents: 'auto' }} // Canvas itself captures events for 3D interaction
            >
                <Suspense fallback={null}>
                    <Experience />
                </Suspense>
            </Canvas>
        </div>
    )
}
