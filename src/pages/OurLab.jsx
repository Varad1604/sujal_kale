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
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
                        <FaMicroscope size={40} color="var(--color-primary)" style={{ marginBottom: '1.5rem' }} />
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Material Analysis</h3>
                        <p style={{ color: 'var(--color-text-muted)' }}>Spectroscopic analysis to verify raw material composition and integrity before manufacturing begins.</p>
                    </div>

                    <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
                        <FaFlask size={40} color="var(--color-primary)" style={{ marginBottom: '1.5rem' }} />
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Salt Spray Test</h3>
                        <p style={{ color: 'var(--color-text-muted)' }}>Accelerated corrosion testing to ensure our CED coating provides maximum durability in harsh environments.</p>
                    </div>

                    <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
                        <FaCheckCircle size={40} color="var(--color-primary)" style={{ marginBottom: '1.5rem' }} />
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Tensile Testing</h3>
                        <p style={{ color: 'var(--color-text-muted)' }}>Verifying the mechanical strength and elasticity of components to ensure robust performance.</p>
                    </div>
                </div>
            </section>

            {/* Lab Facilities Overview */}
            <section>
                <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--color-secondary)', textAlign: 'center' }}>Lab Facilities Overview</h2>
                <div className="glass-panel" style={{ padding: '1rem', overflow: 'hidden' }}>
                    <img
                        src="/images/lab_facilities_overview.jpg"
                        alt="Sujal Industries Lab Facilities: Chemical Testing, Salt Spray, Precision Measurement, and Thermal Testing"
                        style={{
                            width: '100%',
                            height: 'auto',
                            display: 'block',
                            borderRadius: '8px',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                        }}
                    />
                </div>
            </section>
        </motion.div>
    )
}
