import { motion } from 'framer-motion'
import { FaMicroscope, FaCheckCircle, FaFlask } from 'react-icons/fa'

export const OurLab = () => {
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
                    <span className="text-gradient">Our Quality Lab</span>
                </h1>
                <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--color-text-muted)', fontSize: '1.2rem' }}>
                    Ensuring excellence through rigorous testing. Our state-of-the-art laboratory guarantees that every component meets global standards.
                </p>
            </section>

            {/* Capabilities Grid */}
            <section style={{ marginBottom: '5rem' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '3rem', textAlign: 'center', color: 'var(--color-secondary)' }}>Testing Capabilities</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '2rem'
                }}>
                    {/* Chemical Testing */}
                    <div
                        className="glass-panel"
                        style={{ padding: '0', overflow: 'hidden', textAlign: 'left', transition: 'transform 0.3s, background 0.3s' }}
                        onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)'; }}
                    >
                        <img
                            src="/images/lab_chemical.jpg"
                            alt="Chemical Testing & Analysis Laboratory"
                            style={{ width: '100%', aspectRatio: '16/10', objectFit: 'cover' }}
                        />
                        <div style={{ padding: '2rem' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Chemical Testing & Analysis Laboratory</h3>
                            <p style={{ color: 'var(--color-text-muted)' }}>Spectroscopic analysis to verify raw material composition and integrity before manufacturing begins.</p>
                        </div>
                    </div>

                    {/* Salt Spray */}
                    <div
                        className="glass-panel"
                        style={{ padding: '0', overflow: 'hidden', textAlign: 'left', transition: 'transform 0.3s, background 0.3s' }}
                        onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)'; }}
                    >
                        <img
                            src="/images/lab_saltspray.jpg"
                            alt="Salt Spray & Corrosion Testing Facility"
                            style={{ width: '100%', aspectRatio: '16/10', objectFit: 'cover' }}
                        />
                        <div style={{ padding: '2rem' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Salt Spray & Corrosion Testing Facility</h3>
                            <p style={{ color: 'var(--color-text-muted)' }}>Accelerated corrosion testing to ensure our CED coating provides maximum durability in harsh environments.</p>
                        </div>
                    </div>

                    {/* Precision Measurement */}
                    <div
                        className="glass-panel"
                        style={{ padding: '0', overflow: 'hidden', textAlign: 'left', transition: 'transform 0.3s, background 0.3s' }}
                        onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)'; }}
                    >
                        <img
                            src="/images/lab_precision.png"
                            alt="Precision Measurement & Inspection Instruments"
                            style={{ width: '100%', aspectRatio: '16/10', objectFit: 'cover' }}
                        />
                        <div style={{ padding: '2rem' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Precision Measurement & Inspection Instruments</h3>
                            <p style={{ color: 'var(--color-text-muted)' }}>Verifying the mechanical strength and elasticity of components to ensure robust performance.</p>
                        </div>
                    </div>

                    {/* Hot Air Oven */}
                    <div
                        className="glass-panel"
                        style={{ padding: '0', overflow: 'hidden', textAlign: 'left', transition: 'transform 0.3s, background 0.3s' }}
                        onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)'; }}
                    >
                        <img
                            src="/images/lab_oven.jpg"
                            alt="Hot Air Oven & Thermal Testing Area"
                            style={{ width: '100%', aspectRatio: '16/10', objectFit: 'cover' }}
                        />
                        <div style={{ padding: '2rem' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Hot Air Oven & Thermal Testing Area</h3>
                            <p style={{ color: 'var(--color-text-muted)' }}>State-of-the-art thermal testing facility to test components under extreme temperatures ensuring reliability.</p>
                        </div>
                    </div>
                </div>
            </section>


        </motion.div>
    )
}
