import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

const TiltImage = ({ src, alt }) => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const mouseX = useSpring(x, { stiffness: 150, damping: 20 })
    const mouseY = useSpring(y, { stiffness: 150, damping: 20 })

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15])
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15])

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const width = rect.width
        const height = rect.height
        const mouseXFromCenter = e.clientX - rect.left - width / 2
        const mouseYFromCenter = e.clientY - rect.top - height / 2
        x.set(mouseXFromCenter / width)
        y.set(mouseYFromCenter / height)
    }

    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
    }

    return (
        <motion.div
            style={{
                perspective: 1000,
                width: '100%',
                height: '100%',
                cursor: 'pointer'
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                style={{
                    width: '100%',
                    height: '100%',
                    rotateX: rotateX,
                    rotateY: rotateY,
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                    background: 'white'
                }}
            >
                <motion.img
                    src={src}
                    alt={alt}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        scale: 1.1 // Slightly zoomed to allow parallax movement if we wanted, or just coverage
                    }}
                />
                {/* Gloss Effect */}
                <motion.div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.4) 45%, rgba(255,255,255,0.2) 50%, transparent 54%)',
                        zIndex: 10,
                        opacity: 0.5,
                        pointerEvents: 'none',
                        mixBlendMode: 'overlay'
                    }}
                />
            </motion.div>
        </motion.div>
    )
}

export const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    }

    return (
        <motion.div
            variants={containerVariants}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: -50 }}
            style={{
                padding: '2rem 5% 5rem',
                color: 'var(--color-text)',
                maxWidth: '1400px',
                margin: '0 auto',
                pointerEvents: 'auto',
                position: 'relative' // Needed for relative positioning of content over absolute background
            }}
        >
            {/* Header Section */}
            <motion.div variants={itemVariants} style={{ marginBottom: '4rem', textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <h1 style={{ fontSize: '3.5rem', marginBottom: '0.5rem' }}>
                    SUJAL <span className="text-gradient">INDUSTRIES</span>
                </h1>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '400', color: '#000000', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                    "Defining Excellence in Manufacturing and Coating Since 2008"
                </h3>
                <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', maxWidth: '800px', margin: '0 auto' }}>
                    Leading the way in condenser manufacturing and industrial coating solutions.
                </p>
            </motion.div>

            {/* Main Content Grid */}
            <div style={{ display: 'grid', gap: '3rem' }}>

                {/* History & Facility */}
                <motion.div
                    className="glass-panel"
                    variants={itemVariants}
                    whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                    style={{ padding: '3rem' }}
                >
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Our Legacy</h2>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Established in 2008 by <strong>Mr. Gopal Kale</strong>, Sujal Industries was built on a simple premise: industrial excellence should feel personal. What began as a vision for quality has grown into a robust <strong>40,000 sq. ft. manufacturing facility</strong>, where heavy machinery meets meticulous craftsmanship.
                    </p>
                    <p>
                        We specialize in the critical components that keep households running smoothly: high-performance condensers and durable CED coating. While our technology is advanced, our philosophy remains grounded. We don't just manufacture parts to meet specifications; we craft reliability to ensure comfort in every home our products reach.
                    </p>
                </motion.div>

                {/* Vision & Mission Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                    {/* Vision */}
                    <motion.div
                        className="glass-panel"
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        style={{ padding: '2.5rem', background: 'rgba(255,255,255,0.03)' }}
                    >
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-secondary)' }}>Our Vision</h3>
                        <p>
                            To redefine the manufacturing landscape by proving that industrial precision and social responsibility go hand in hand. We aim to be the preferred global partner for brands that value quality as much as they value integrity.
                        </p>
                    </motion.div>

                    {/* Mission */}
                    <motion.div
                        className="glass-panel"
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        style={{ padding: '2.5rem', background: 'rgba(255,255,255,0.03)' }}
                    >
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-secondary)' }}>Our Mission</h3>
                        <p>
                            We merge youthful creativity with advanced technology to surpass both explicit and implicit customer expectations, ensuring excellence in our products and services.
                        </p>
                    </motion.div>
                </div>

                {/* Quality Policy */}
                <motion.div
                    className="glass-panel"
                    variants={itemVariants}
                    whileHover={{ x: 10 }} // Subtle shift right
                    style={{ padding: '3rem', borderLeft: '4px solid var(--color-primary)' }}
                >
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--color-text)' }}>Quality Policy</h2>
                    <p style={{ fontSize: '1.2rem' }}>
                        Committed to customer satisfaction through quality, timely delivery, and competitive prices. Achieving this requires continuous improvement in our QMS with our team.
                    </p>
                </motion.div>

                {/* Team Section */}
                <motion.div
                    className="glass-panel"
                    variants={itemVariants}
                    style={{ padding: '2rem' }}
                >
                    <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--color-primary)' }}>Our Professionals</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        <div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-text)' }}>Empowered Experts</h3>
                            <p style={{ marginBottom: '1rem' }}>
                                Empowered by a group of committed experts, we strive to manufacture top-tier refrigerator equipment. The collective efforts of our team have played a pivotal role in sustaining the confidence of our clients.
                            </p>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-text)' }}>Specialized Skills</h3>
                            <p>
                                Our team comprises highly skilled professionals who bring extensive experience and specialization in their respective domains. Working collaboratively, they ensure the seamless and continuous operation of the organization.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Team Image Section */}
                <motion.div
                    variants={itemVariants}
                    style={{ padding: '1rem' }}
                >
                    <div style={{ height: '500px', width: '100%', marginBottom: '2rem', perspective: '1000px' }}>
                        <TiltImage
                            src="/images/team.jpg"
                            alt="Sujal Industries Team"
                        />
                    </div>
                    <div style={{
                        textAlign: 'center',
                        padding: '1rem'
                    }}>
                        <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>The Force Behind Our Success</h3>
                        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)' }}>Dedicated to precision and quality in every component we manufacture.</p>
                    </div>
                </motion.div>

            </div>
        </motion.div>
    )
}
