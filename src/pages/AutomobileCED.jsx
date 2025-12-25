import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useStore } from '../store'
import { Link } from 'react-router-dom'
import { useGLTF } from '@react-three/drei'

// Preload 3D models immediately when this page loads
useGLTF.preload('/models/spring-draco.glb')

const products = [
    { id: 'spring', name: 'Vehicle Suspensions', image: '/images/spring.png', hasSimulation: true },
    { id: 'suspension_covers', name: 'Suspension Covers', image: '/images/heat_sink-removebg.png', hasSimulation: false },
    { id: 'solar_ext', name: 'Extending Suspensions', image: '/images/Solar_Extension_Suspension-removebg.png', hasSimulation: false },
    { id: 'steering_yoke', name: 'Steering Lower Yoke Assembly', image: '/images/Streeing_Lower_Yoke_assembly_-removebg.png', hasSimulation: false },
    { id: 'small_auto', name: 'Two wheeler side stand assembly', image: '/images/Small_automobile_parts_-removebg.png', hasSimulation: false },
    { id: 'heavy_susp', name: 'Heavy Duty Vehicle Suspension', image: '/images/Heavy_Duty_Suspensions-removebg.png', hasSimulation: false },
    { id: 'susp_2_3', name: '2&3 Wheeler Suspensions', image: '/images/TWO_Wheeler_Suspensions-removebg.png', hasSimulation: false },
]

export const AutomobileCED = () => {
    const { activeProduct, setActiveProduct } = useStore()

    // Reset active product when leaving the page
    useEffect(() => {
        return () => setActiveProduct(null)
    }, [setActiveProduct])

    // Prevent page zoom when 3D simulation is active (only ctrl+scroll, not touch)
    useEffect(() => {
        const selectedProd = products.find(p => p.name === activeProduct)
        if (!selectedProd?.hasSimulation) return

        const preventZoom = (e) => {
            if (e.ctrlKey) e.preventDefault() // Only prevent ctrl+scroll zoom
        }

        window.addEventListener('wheel', preventZoom, { passive: false })

        return () => {
            window.removeEventListener('wheel', preventZoom)
        }
    }, [activeProduct])

    const selectedProduct = products.find(p => p.name === activeProduct)

    // Gallery images mapping
    const galleryImages = {
        'Extending Suspensions': [
            '/images/Solar Extension Suspension.jpeg',
            '/images/Solar Expansion Suspension.jpeg'
        ]
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ padding: '4rem 10%', color: 'var(--color-text)', position: 'relative', minHeight: '100vh', pointerEvents: 'auto' }}
        >
            {(!selectedProduct || selectedProduct.hasSimulation) && (
                <Link to="/products" style={{
                    display: 'inline-block',
                    marginBottom: '2rem',
                    color: 'var(--color-primary)',
                    textDecoration: 'none',
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    pointerEvents: 'auto',
                    position: 'relative',
                    zIndex: 30
                }}>
                    ← Back to Products
                </Link>
            )}

            <AnimatePresence>
                {!activeProduct ? (
                    <div
                        key="grid"
                        style={{ pointerEvents: 'none' }}
                    >
                        <h2 style={{ fontSize: '3rem', marginBottom: '2rem', textAlign: 'center' }}>Automobile CED Products</h2>
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
                                            loading="eager"
                                            decoding="async"
                                            fetchpriority="high"
                                            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                        />
                                    </div>
                                    <h3 style={{ fontSize: '1.2rem' }}>{product.name}</h3>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--color-primary)', marginTop: '0.5rem' }}>
                                        {product.hasSimulation ? 'View 3D Simulation' : 'View Photos'}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : selectedProduct?.hasSimulation ? (
                    // SIMULATION PRODUCTS - with animation (same layout as Refrigeration)
                    <motion.div
                        key="simulation-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
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
                            alignItems: 'flex-start', // Left-aligned on desktop like Condenser
                            padding: '1rem',
                            paddingLeft: window.innerWidth > 768 ? '2rem' : '1rem' // More padding on desktop
                        }}
                        className="product-simulation-overlay is-simulation"
                    >
                        {/* Content Card for Simulation - Left-aligned on desktop like Condenser */}
                        <div className="glass-panel" style={{
                            padding: '1.5rem',
                            maxWidth: 'min(500px, 95vw)',
                            width: window.innerWidth > 768 ? 'auto' : '100%', // Auto width on desktop
                            marginBottom: '1rem',
                            background: 'rgba(255, 255, 255, 0.9)',
                            backdropFilter: 'blur(10px)',
                            borderRadius: '16px',
                            pointerEvents: 'auto',
                            maxHeight: '40vh',
                            overflowY: 'auto'
                        }}>
                            <h2 style={{ fontSize: '1.8rem', color: 'var(--color-secondary)', marginBottom: '0.5rem' }}>
                                {activeProduct}
                            </h2>
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
                ) : (
                    // IMAGE PRODUCTS - NO ANIMATION, instant display
                    <div
                        key="image-overlay"
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
                            paddingTop: '120px', // More space to clear navbar
                            pointerEvents: 'none',
                            background: 'rgba(255,255,255,0.98)'
                        }}
                        className="product-simulation-overlay"
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
                            {/* Show single main image */}
                            <div style={{
                                maxHeight: '75vh',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
                                background: 'white'
                            }}>
                                <img
                                    src={(galleryImages[selectedProduct?.name] || [selectedProduct.image])[0]}
                                    alt={selectedProduct.name}
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
                )}
            </AnimatePresence>
        </motion.div>
    )
}
