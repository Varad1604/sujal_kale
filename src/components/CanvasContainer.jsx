import { Canvas } from '@react-three/fiber'
import { Experience } from './Experience'
import { useRef, Suspense } from 'react'

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

export const CanvasContainer = ({ visible }) => {
    const containerRef = useRef()
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

    return (
        <div
            ref={containerRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: visible ? 10 : 0,
                pointerEvents: visible ? 'auto' : 'none',
                opacity: visible ? 1 : 0,
                visibility: visible ? 'visible' : 'hidden',
                transition: 'opacity 0.5s ease, visibility 0.5s'
            }}
        >
            {/* Loading indicator shown while 3D loads */}
            <Suspense fallback={<LoadingSpinner />}>
                <Canvas
                    shadows={!isMobile} // Disable shadows on mobile for better performance
                    camera={{ position: [0, 0, 5], fov: 30 }}
                    dpr={isMobile ? [1, 1] : [1, 2]} // Reduce pixel ratio on mobile
                    eventSource={containerRef}
                    eventPrefix="client"
                    frameloop={visible ? 'always' : 'never'} // CRITICAL: Stop rendering loop when hidden
                    performance={{ min: 0.5 }}
                    gl={{
                        antialias: !isMobile,
                        powerPreference: "high-performance",
                        alpha: true
                    }}
                    style={{ pointerEvents: visible ? 'auto' : 'none' }}
                >
                    <Experience />
                </Canvas>
            </Suspense>
        </div>
    )
}
