import { Canvas } from '@react-three/fiber'
import { Experience } from './Experience'
import { Suspense } from 'react'

export const CanvasContainer = () => {
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
            <Canvas
                shadows
                camera={{ position: [0, 0, 5], fov: 30 }}
                dpr={[1, 2]} // Optimization for high-DPI screens
                eventSource={document.getElementById('main-content') || document.body}
                eventPrefix="client"
            >
                {/* <color attach="background" args={['#0a0a0a']} /> Removed for transparent background */}
                <Suspense fallback={null}>
                    <Experience />
                </Suspense>
            </Canvas>
        </div>
    )
}
