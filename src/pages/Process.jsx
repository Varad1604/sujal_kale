import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

export const Process = () => {
    const [activeProcess, setActiveProcess] = useState(null)

    // Lock body scroll when overlay is active
    useEffect(() => {
        if (activeProcess) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => { document.body.style.overflow = 'unset' }
    }, [activeProcess])

    return (
        <motion.div
            style={{ padding: '4rem 5%', color: 'var(--color-text)', position: 'relative', minHeight: '100vh' }}
        >
            {/* Back Process Link is now inside the overlay for better UX on mobile */
                activeProcess && !['CED Coating', 'Condenser Manufacturing'].includes(activeProcess) && (
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

            {/* AnimatePresence removed for stability debugging */}
            {!activeProcess ? (
                <div
                    key="grid"
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
                                gap: '1rem',
                                height: '100%' // Ensure full height for alignment
                            }}
                            onClick={() => setActiveProcess('CED Coating')}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            <div style={{ fontSize: '4rem', fontWeight: 'bold', color: 'var(--color-secondary)', opacity: 0.5 }}>01</div>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>CED Coating</h3>
                            <p>Cathodic Electro-Deposition provides a uniform, corrosion-resistant base coat, reaching even the most complex recesses.</p>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-primary)', marginTop: 'auto', fontWeight: 'bold' }}>
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
                                gap: '1rem',
                                height: '100%' // Ensure full height for alignment
                            }}
                            onClick={() => setActiveProcess('Condenser Manufacturing')}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            <div style={{ fontSize: '4rem', fontWeight: 'bold', color: 'var(--color-secondary)', opacity: 0.5 }}>02</div>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Condenser Manufacturing</h3>
                            <p>Precision engineering of 1-6 row WTO condensers using advanced mechanisms ensuring high efficiency.</p>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-primary)', marginTop: 'auto', fontWeight: 'bold' }}>
                                View Process Details
                            </p>
                        </div>
                    </div>
                </div>
            ) : activeProcess === 'CED Coating' ? (
                <div
                    key="overlay"
                    className="ced-overlay"
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: 99999, // Guaranteed on top
                        pointerEvents: 'auto',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        background: '#ffffff', // Solid white to hide background content as requested
                        padding: '1rem',
                        paddingTop: '2rem',
                        overflowY: 'auto'
                    }}
                >
                    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
                        {/* Section 1: Simulation */}
                        <div className="glass-panel" style={{
                            padding: '3rem',
                            maxWidth: '900px',
                            width: '100%',
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
                            borderRadius: '16px'
                        }}>
                            <div style={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginBottom: '1rem'
                            }}>
                                <button
                                    onClick={() => setActiveProcess(null)}
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        color: 'var(--color-primary)',
                                        fontSize: '1rem',
                                        fontWeight: 'bold',
                                        cursor: 'pointer',
                                        padding: 0,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem'
                                    }}
                                >
                                    ← Back
                                </button>
                                <button
                                    onClick={() => setActiveProcess(null)}
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        fontSize: '1.5rem',
                                        cursor: 'pointer',
                                        color: 'var(--color-text)'
                                    }}
                                >
                                    ✕
                                </button>
                            </div>

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
                                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                minHeight: '200px', // Ensure height even if image fails
                                background: '#f0f0f0' // Placeholder background
                            }}>
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    poster="/images/hero_slide_1.jpg"
                                    style={{ width: '100%', display: 'block', objectFit: 'cover' }}
                                >
                                    <source src="/models/CED.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>

                        {/* Section 2: Process Highlights (Bigger) */}
                        <div className="glass-panel" style={{
                            padding: '4rem',
                            maxWidth: '900px', // Reduced width for vertical layout
                            width: '100%',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
                            borderRadius: '16px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '3rem'
                        }}>
                            <div style={{
                                width: '100%',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                                height: 'auto',
                                maxHeight: '400px',
                                minHeight: '200px'
                            }}>
                                <img
                                    src="/images/transporter.jpeg"
                                    alt="CED Coating Process Detail"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                            <div style={{ width: '100%' }}>
                                <h3 style={{
                                    fontSize: '2.5rem',
                                    color: 'var(--color-secondary)',
                                    marginBottom: '2rem',
                                    textAlign: 'center'
                                }}>
                                    Process Highlights
                                </h3>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '1.5rem',
                                    maxWidth: '800px',
                                    margin: '0 auto'
                                }}>
                                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>
                                        <span style={{ color: 'var(--color-primary)', fontSize: '1.5rem' }}>•</span>
                                        <span>Fully automated SCADA and PLC controlled CED line.</span>
                                    </li>
                                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>
                                        <span style={{ color: 'var(--color-primary)', fontSize: '1.5rem' }}>•</span>
                                        <span>A unique in-house procedure that can be customized according to customer's requirements.</span>
                                    </li>
                                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>
                                        <span style={{ color: 'var(--color-primary)', fontSize: '1.5rem' }}>•</span>
                                        <span>Two automated transformers: zero Human intervention; delivering highest precision.</span>
                                    </li>
                                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>
                                        <span style={{ color: 'var(--color-primary)', fontSize: '1.5rem' }}>•</span>
                                        <span>State of the art laboratory: With inhouse SST (Salt Spray Testing) and humidity chamber.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            ) : activeProcess === 'Condenser Manufacturing' ? (
                <div
                    key="overlay-condenser"
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: 99999, // Guaranteed on top
                        pointerEvents: 'auto', // Enable scrolling on the overlay
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'flex-start', // Align to top to prevent clipping
                        background: '#ffffff',
                        padding: '1rem',
                        paddingTop: '2rem', // Reduced padding as we now cover the navbar
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
                        <div style={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '1rem'
                        }}>
                            <button
                                onClick={() => setActiveProcess(null)}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    color: 'var(--color-primary)',
                                    fontSize: '1rem',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    padding: 0,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}
                            >
                                ← Back
                            </button>
                            <button
                                onClick={() => setActiveProcess(null)}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    fontSize: '1.5rem',
                                    cursor: 'pointer',
                                    color: 'var(--color-text)'
                                }}
                            >
                                ✕
                            </button>
                        </div>

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
                </div>
            ) : null}
        </motion.div>
    )
}
