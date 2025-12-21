import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useStore } from '../store'
import { Link } from 'react-router-dom'
import { useGLTF } from '@react-three/drei'

// Preload 3D models immediately when this page loads
useGLTF.preload('/models/Ced Coated 9-draco.glb')
useGLTF.preload('/models/Ced Coated 2-draco.glb')

const products = [
    { id: 'condenser', name: '5 row condenser', image: '/images/5 row condenser.jpeg' },
    { id: 'domestic-condenser', name: '2 row condenser', image: '/images/2 row condenser.jpeg' }, // Using placeholder image for now
    { id: '1-6-row-condenser', name: '1 to 6 Row Condenser', image: '/images/1 to 6 row condesner.jpg', isStatic: true },
]

export const Refrigeration = () => {
    const { activeProduct, setActiveProduct } = useStore()
    const activeProductData = products.find(p => p.name === activeProduct)

    // Reset active product when leaving the page
    useEffect(() => {
        return () => setActiveProduct(null)
    }, [setActiveProduct])

    // Prevent Page Zoom on Wheel only when 3D simulation is active (not static images)
    useEffect(() => {
        const isSimulation = activeProduct && !activeProductData?.isStatic

        const preventZoom = (e) => {
            if (e.ctrlKey) e.preventDefault() // Only prevent ctrl+scroll zoom
        }

        if (isSimulation) {
            window.addEventListener('wheel', preventZoom, { passive: false })
        }

        return () => {
            window.removeEventListener('wheel', preventZoom)
        }
    }, [activeProduct, activeProductData])
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ padding: '4rem 10%', color: 'var(--color-text)', pointerEvents: 'none' }}
        >
            <Link to="/products" style={{
                display: 'inline-block',
                marginBottom: '2rem',
                color: 'var(--color-primary)',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                pointerEvents: 'auto'
            }}>
                ← Back to Products
            </Link>

            <AnimatePresence>
                {!activeProduct ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{ pointerEvents: 'none' }}
                    >
                        <h2 style={{ fontSize: '3rem', marginBottom: '2rem', textAlign: 'center' }}>Refrigeration Products</h2>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                            gap: '2rem'
                        }}>
                            {products.map((product) => (
                                <div
                                    key={product.id}
                                    className="glass-panel"
                                    style={{
                                        padding: '1rem',
                                        cursor: 'pointer',
                                        transition: 'transform 0.3s',
                                        textAlign: 'center',
                                        pointerEvents: 'auto'
                                    }}
                                    onClick={() => setActiveProduct(product.name)}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                >
                                    <div style={{
                                        height: '200px',
                                        overflow: 'hidden',
                                        borderRadius: '8px',
                                        marginBottom: '1rem',
                                        background: '#b8d4e8' // Sky blue background
                                    }}>
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                        />
                                    </div>
                                    <h3 style={{ fontSize: '1.2rem' }}>{product.name}</h3>
                                    {!product.isStatic && (
                                        <p style={{ fontSize: '0.9rem', color: 'var(--color-primary)', marginTop: '0.5rem' }}>View 3D Simulation</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ) : activeProductData?.isStatic ? (
                    // STATIC IMAGE PRODUCTS - same style as AutomobileCED
                    <div
                        key="static-image-overlay"
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            zIndex: 105,
                            paddingTop: '120px',
                            pointerEvents: 'none',
                            background: 'rgba(255,255,255,0.98)'
                        }}
                    >
                        {/* Header Bar with Back to Gallery */}
                        <div
                            style={{
                                width: '100%',
                                maxWidth: '1200px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '1rem 2rem',
                                pointerEvents: 'auto'
                            }}
                        >
                            <button
                                onClick={() => setActiveProduct(null)}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    color: 'var(--color-primary)',
                                    fontSize: '1.1rem',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    padding: 0,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}
                            >
                                ← Back to Gallery
                            </button>

                            <button
                                onClick={() => setActiveProduct(null)}
                                style={{
                                    background: 'var(--color-primary)',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '50%',
                                    width: '40px',
                                    height: '40px',
                                    fontSize: '1.2rem',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
                                }}
                            >
                                ✕
                            </button>
                        </div>

                        {/* Image Container */}
                        <div
                            style={{
                                flex: 1,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '100%',
                                maxWidth: '900px',
                                padding: '1rem',
                                pointerEvents: 'auto'
                            }}
                        >
                            <div style={{
                                maxHeight: '75vh',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
                                background: 'white'
                            }}>
                                <img
                                    src={activeProductData.image}
                                    alt={activeProductData.name}
                                    style={{
                                        maxWidth: '100%',
                                        maxHeight: '75vh',
                                        objectFit: 'contain',
                                        display: 'block'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                ) : (
                    // 3D SIMULATION PRODUCTS
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            zIndex: 20,
                            pointerEvents: 'none',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                            alignItems: 'stretch',
                            padding: '1rem'
                        }}
                    >
                        <div className="glass-panel" style={{
                            padding: '1.5rem',
                            maxWidth: 'min(500px, 95vw)',
                            width: '100%',
                            marginBottom: '1rem',
                            background: 'rgba(255, 255, 255, 0.9)',
                            backdropFilter: 'blur(10px)',
                            borderRadius: '16px',
                            pointerEvents: 'auto',
                            maxHeight: '40vh',
                            overflowY: 'auto'
                        }}>
                            <h2 style={{ fontSize: '1.8rem', color: 'var(--color-secondary)', marginBottom: '0.5rem' }}>{activeProduct}</h2>
                            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
                                High-fidelity simulation of the manufacturing process.
                            </p>
                            <div style={{ marginBottom: '1rem', fontSize: '0.9rem', color: 'var(--color-primary)' }}>
                                <p>• Rotate to inspect</p>
                                <p>• Scroll to zoom</p>
                            </div>
                            <button
                                onClick={() => setActiveProduct(null)}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    color: 'var(--color-primary)',
                                    fontSize: '1rem',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    padding: 0
                                }}
                            >
                                ← Back to Gallery
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div >
    )
}
