import { motion, AnimatePresence } from 'framer-motion'
import { useStore } from '../store'

const Section = ({ children, ...props }) => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: true }}
            style={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '0 10%',
                ...props.style
            }}
            {...props}
        >
            {children}
        </motion.section>
    )
}

export const Overlay = () => {
    const { activeProduct, setActiveProduct } = useStore()

    return (
        <div style={{ position: 'relative', zIndex: 1, color: 'var(--color-text)' }}>
            <header style={{
                padding: '2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 10,
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)',
                pointerEvents: 'auto'
            }}>
                <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>SUJAL <span className="text-gold">INDUSTRIES</span></h1>
                <nav>
                    <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
                        {['About', 'Products', 'Process', 'Contact'].map((item) => (
                            <li key={item}>
                                <a href={`#${item.toLowerCase()}`} style={{
                                    color: 'var(--color-text)',
                                    textDecoration: 'none',
                                    textTransform: 'uppercase',
                                    fontSize: '0.9rem',
                                    letterSpacing: '1px'
                                }}>
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>

            <AnimatePresence>
                {!activeProduct && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{ pointerEvents: 'auto' }}
                    >
                        <Section>
                            <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 0.9, marginBottom: '1rem' }}>
                                PRECISION <br />
                                <span className="text-gradient">ENGINEERING</span>
                            </h1>
                            <p style={{ maxWidth: '500px', fontSize: '1.2rem', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
                                World-class manufacturing of condensers and AC units.
                                Experience the future of industrial coating.
                            </p>
                            <button style={{
                                padding: '1rem 2rem',
                                background: 'transparent',
                                border: '1px solid var(--color-primary)',
                                color: 'var(--color-primary)',
                                width: 'fit-content',
                                fontSize: '1rem'
                            }}>
                                Explore Infrastructure
                            </button>
                        </Section>

                        <Section id="about">
                            <div className="glass-panel" style={{ padding: '3rem', maxWidth: '800px' }}>
                                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Infrastructure</h2>
                                <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#ccc' }}>
                                    Based in Chhatrapati Sambhajinagar, our state-of-the-art facility is equipped with advanced
                                    CED and Powder Coating lines. We combine rugged industrial capability with precision technology
                                    to deliver superior durability and finish for automotive and appliance components.
                                </p>
                            </div>
                        </Section>

                        <Section id="products" style={{ alignItems: 'flex-end', textAlign: 'right' }}>
                            <div className="glass-panel" style={{ padding: '3rem', maxWidth: '600px' }}>
                                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Our Products</h2>
                                <p style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>Click to view details</p>
                                <ul style={{ listStyle: 'none', fontSize: '1.2rem', lineHeight: 2 }}>
                                    {['AC Condensers', 'Evaporator Coils', 'Automotive Chassis', 'Industrial Enclosures'].map((item) => (
                                        <li
                                            key={item}
                                            onClick={() => setActiveProduct(item)}
                                            style={{ cursor: 'pointer', transition: 'color 0.3s' }}
                                            onMouseEnter={(e) => e.target.style.color = 'var(--color-secondary)'}
                                            onMouseLeave={(e) => e.target.style.color = 'white'}
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Section>

                        <Section id="contact">
                            <div className="glass-panel" style={{ padding: '3rem', width: '100%', maxWidth: '500px', margin: '0 auto' }}>
                                <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>Contact Us</h2>
                                <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    <input type="text" placeholder="Name" style={{ padding: '1rem', background: 'rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.1)', color: 'var(--color-text)' }} />
                                    <input type="email" placeholder="Email" style={{ padding: '1rem', background: 'rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.1)', color: 'var(--color-text)' }} />
                                    <textarea placeholder="Message" rows={4} style={{ padding: '1rem', background: 'rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.1)', color: 'var(--color-text)' }}></textarea>
                                    <button style={{
                                        padding: '1rem',
                                        background: 'var(--color-primary)',
                                        border: 'none',
                                        color: 'black',
                                        fontWeight: 'bold',
                                        marginTop: '1rem'
                                    }}>
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </Section>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {activeProduct && (
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
                            pointerEvents: 'auto',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                            padding: '4rem'
                        }}
                    >
                        <div className="glass-panel" style={{ padding: '2rem', maxWidth: '500px' }}>
                            <h2 style={{ fontSize: '3rem', color: 'var(--color-secondary)', marginBottom: '1rem' }}>{activeProduct}</h2>
                            <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
                                High-fidelity simulation of the manufacturing process.
                                Observing precision engineering and coating application.
                            </p>
                            <button
                                onClick={() => setActiveProduct(null)}
                                style={{
                                    padding: '1rem 2rem',
                                    background: 'white',
                                    color: 'black',
                                    border: 'none',
                                    fontWeight: 'bold'
                                }}
                            >
                                Back to Overview
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
