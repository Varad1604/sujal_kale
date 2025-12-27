import { motion } from 'framer-motion'
import { FaDownload, FaPlay } from 'react-icons/fa'

export const OurFacility = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
                color: 'var(--color-text)',
                pointerEvents: 'auto',
                padding: '0 5% 5rem'
            }}
        >
            {/* Hero Section */}
            <section style={{ padding: '5rem 0', textAlign: 'center' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                    <span className="text-gradient">Our Facility</span>
                </h1>
                <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--color-text-muted)', fontSize: '1.2rem' }}>
                    Explore our world-class manufacturing facilities, advanced machinery, and the dedicated team that powers Sujal Industries.
                </p>
            </section>

            {/* Video Showcase */}
            <section style={{ marginBottom: '5rem' }}>
                <div className="glass-panel" style={{ padding: '1rem', overflow: 'hidden' }}>
                    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, background: 'black', borderRadius: '8px' }}>
                        {/* Placeholder for Video - Replace iframe src with actual video */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            color: 'rgba(255,255,255,0.5)'
                        }}>
                            <FaPlay size={50} style={{ marginBottom: '1rem' }} />
                            <span>Corporate Video / Factory Tour</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Image Gallery */}
            <section style={{ marginBottom: '5rem' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--color-secondary)' }}>Gallery</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '1.5rem'
                }}>
                    {[
                        { src: "/images/lab_chemical.jpg", alt: "Chemical Testing & Analysis" },
                        { src: "/images/lab_oven.jpg", alt: "Thermal Testing Oven" },
                        { src: "/images/lab_precision.png", alt: "Precision Measurement Instruments" },
                        { src: "/images/lab_saltspray.jpg", alt: "Salt Spray Testing" },
                        { src: "/images/transporter.jpeg", alt: "Material Transporter" }
                    ].map((image, index) => (
                        <div key={index} className="glass-panel" style={{ padding: '0.5rem', transition: 'transform 0.3s', cursor: 'pointer' }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '4px' }}
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* Brochures & Downloads */}
            <section>
                <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--color-secondary)' }}>Downloads</h2>
                <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                    {[
                        { title: 'Company Profile', size: '2.5 MB' },
                        { title: 'Product Catalog 2024', size: '5.1 MB' },
                        { title: 'Technical Specifications', size: '1.8 MB' }
                    ].map((doc, index) => (
                        <div key={index} className="glass-panel" style={{
                            padding: '2rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            minWidth: '280px',
                            cursor: 'pointer',
                            transition: 'background 0.3s'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                        >
                            <div style={{
                                width: '50px',
                                height: '50px',
                                background: 'var(--color-primary)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'black'
                            }}>
                                <FaDownload />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>{doc.title}</h3>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>PDF • {doc.size}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </motion.div>
    )
}
