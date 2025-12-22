import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

export const Process = () => {
    const [activeProcess, setActiveProcess] = useState(null)

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ padding: '4rem 5%', color: 'var(--color-text)', position: 'relative', minHeight: '100vh' }}
        >
            {activeProcess && (
                <Link to="/process" onClick={() => setActiveProcess(null)} style={{
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
                    ← Back to Process
                </Link>
            )}

            <AnimatePresence mode="wait">
                {!activeProcess ? (
                    <motion.div
                        key="grid"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{ pointerEvents: 'auto', maxWidth: '1000px', margin: '0 auto' }}
                    >
                        <h2 style={{ fontSize: '3rem', marginBottom: '3rem', textAlign: 'center' }}>Manufacturing Process</h2>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', justifyContent: 'center' }}>
                            <div
                                className="glass-panel"
                                style={{
                                    padding: '2rem',
                                    cursor: 'pointer',
                                    transition: 'transform 0.3s',
                                    textAlign: 'center',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '1rem'
                                }}
                                onClick={() => setActiveProcess('CED Coating')}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            >
                                <div style={{ fontSize: '4rem', fontWeight: 'bold', color: 'var(--color-secondary)', opacity: 0.5 }}>01</div>
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>CED Coating</h3>
                                <p>Cathodic Electro-Deposition provides a uniform, corrosion-resistant base coat, reaching even the most complex recesses.</p>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-primary)', marginTop: '0.5rem', fontWeight: 'bold' }}>
                                    View 3D Simulation
                                </p>
                            </div>

                            <div
                                className="glass-panel"
                                style={{
                                    padding: '2rem',
                                    cursor: 'pointer',
                                    transition: 'transform 0.3s',
                                    textAlign: 'center',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '1rem'
                                }}
                                onClick={() => setActiveProcess('Condenser Manufacturing')}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            >
                                <div style={{ fontSize: '4rem', fontWeight: 'bold', color: 'var(--color-secondary)', opacity: 0.5 }}>02</div>
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Condenser Manufacturing</h3>
                                <p>Precision engineering of 1-6 row WTO condensers using advanced mechanisms ensuring high efficiency.</p>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-primary)', marginTop: '0.5rem', fontWeight: 'bold' }}>
                                    View Process Details
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ) : activeProcess === 'CED Coating' ? (
                    <motion.div
                        key="overlay"
                        className="ced-overlay"
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
                            pointerEvents: 'auto',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            background: 'rgba(255,255,255,0.95)',
                            padding: '1rem',
                            paddingTop: '8rem'
                        }}
                    >
                        <div className="glass-panel" style={{
                            padding: '3rem',
                            maxWidth: '900px',
                            width: '100%',
                            margin: '2rem auto', // Center vertically if space allows, adding margin for scroll
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
                            borderRadius: '16px'
                        }}>
                            <button
                                onClick={() => setActiveProcess(null)}
                                style={{
                                    position: 'absolute',
                                    top: '1rem',
                                    right: '1rem',
                                    background: 'none',
                                    border: 'none',
                                    fontSize: '1.5rem',
                                    cursor: 'pointer',
                                    color: 'var(--color-text)'
                                }}
                            >
                                ✕
                            </button>

                            <h2 style={{
                                fontSize: '3rem',
                                color: 'var(--color-secondary)',
                                marginBottom: '0.5rem'
                            }}>
                                CED Coating
                            </h2>
                            <p style={{
                                fontSize: '1.1rem',
                                marginBottom: '2rem',
                                color: 'var(--color-text-muted)',
                                lineHeight: '1.4',
                                textAlign: 'center',
                                maxWidth: '600px'
                            }}>
                                High-fidelity simulation of the manufacturing process. Observing precision engineering and coating application.
                            </p>

                            <div style={{
                                width: '100%',
                                maxWidth: '800px',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                            }}>
                                <img src="/models/ced_animation_final.gif" alt="CED Coating Process 3D Visualization" style={{ width: '100%', display: 'block' }} />
                            </div>
                        </div>
                    </motion.div>
                ) : activeProcess === 'Condenser Manufacturing' ? (
                    <motion.div
                        key="overlay-condenser"
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
                            pointerEvents: 'auto', // Enable scrolling on the overlay
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'flex-start', // Align to top to prevent clipping
                            background: 'rgba(255,255,255,0.95)',
                            padding: '1rem',
                            paddingTop: '8rem', // Increased top padding to clear the navbar
                            overflowY: 'auto' // Allow container to scroll
                        }}
                    >
                        <div className="glass-panel" style={{
                            padding: '3rem',
                            maxWidth: '900px',
                            width: '100%',
                            margin: '2rem auto', // Center vertically if space allows, adding margin for scroll
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
                            borderRadius: '16px'
                        }}>
                            <button
                                onClick={() => setActiveProcess(null)}
                                style={{
                                    position: 'absolute',
                                    top: '1rem',
                                    right: '1rem',
                                    background: 'none',
                                    border: 'none',
                                    fontSize: '1.5rem',
                                    cursor: 'pointer',
                                    color: 'var(--color-text)'
                                }}
                            >
                                ✕
                            </button>

                            <h2 style={{
                                fontSize: '3rem',
                                color: 'var(--color-secondary)',
                                marginBottom: '0.5rem'
                            }}>
                                Condenser Manufacturing
                            </h2>
                            <p style={{
                                fontSize: '1.1rem',
                                marginBottom: '2rem',
                                color: 'var(--color-text-muted)',
                                lineHeight: '1.4',
                                textAlign: 'center',
                                maxWidth: '800px'
                            }}>
                                Our condenser manufacturing process combines automated precision with rigorous quality control. We specialize in producing 1–6 row (100–600 litre) WTO condensers that are designed for maximum heat dissipation and durability.
                            </p>

                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                                gap: '2rem',
                                width: '100%',
                                marginTop: '2rem'
                            }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    <div style={{
                                        width: '100%',
                                        borderRadius: '12px',
                                        overflow: 'hidden',
                                        boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                                        height: '250px'
                                    }}>
                                        <img src="/images/5 row condenser.jpeg" alt="5 row condenser" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                    <h4 style={{ fontSize: '1.2rem', textAlign: 'center', color: 'var(--color-secondary)' }}>Quality Coils</h4>
                                    <p style={{ fontSize: '0.9rem', textAlign: 'center', color: 'var(--color-text-muted)' }}>High-grade materials ensuring longevity and efficiency.</p>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    <div style={{
                                        width: '100%',
                                        borderRadius: '12px',
                                        overflow: 'hidden',
                                        boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                                        height: '250px',
                                        background: '#f0f0f0',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        {/* Placeholder or reused image until specific one provided */}
                                        <img src="/images/wire_rack.png" alt="Assembly Process" style={{ maxWidth: '80%', maxHeight: '80%', objectFit: 'contain' }} />
                                    </div>
                                    <h4 style={{ fontSize: '1.2rem', textAlign: 'center', color: 'var(--color-secondary)' }}>Precision Assembly</h4>
                                    <p style={{ fontSize: '0.9rem', textAlign: 'center', color: 'var(--color-text-muted)' }}>Advanced assembly lines for accurate and consistent production.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </motion.div>
    )
}
