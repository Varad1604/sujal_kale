import { Canvas } from '@react-three/fiber'
import { Experience } from './Experience'
import { Suspense } from 'react'

// Loading spinner component for 3D models
const LoadingSpinner = () => (
    <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
        zIndex: 10
    }}>
        <div style={{
            width: '50px',
            height: '50px',
            border: '4px solid #e0e0e0',
            borderTop: '4px solid var(--color-primary, #f5a623)',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
        }} />
        <style>{`
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `}</style>
        <p style={{ color: '#666', fontSize: '0.9rem' }}>Loading 3D Model...</p>
    </div>
)

export const CanvasContainer = () => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
            pointerEvents: 'none'
        }}>
            {/* Loading indicator shown while 3D loads */}
            <Suspense fallback={<LoadingSpinner />}>
                <Canvas
                    shadows
                    camera={{ position: [0, 0, 5], fov: 30 }}
                    dpr={[1, 2]}
                    eventSource={document.getElementById('main-content') || document.body}
                    eventPrefix="client"
                    style={{ pointerEvents: 'auto' }}
                >
                    <Experience />
                </Canvas>
            </Suspense>
        </div>
    )
}
