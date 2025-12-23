import { motion, useInView, animate, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Stage, OrbitControls } from '@react-three/drei'
import { CondenserModel } from '../components/CondenserModel'
import { SpringModel } from '../components/SpringModel'

const Counter = ({ value, duration = 2 }) => {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true })

    useEffect(() => {
        if (inView) {
            const controls = animate(0, value, {
                duration: duration,
                ease: "easeOut",
                onUpdate: (latest) => {
                    if (ref.current) {
                        ref.current.textContent = Math.floor(latest) + "+"
                    }
                }
            })
            return () => controls.stop()
        }
    }, [inView, value, duration])

    return <span ref={ref}>0+</span>
}

export const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const slides = [
        { type: 'image', src: '/images/carousel_1.jpg' },
        { type: 'image', src: '/images/carousel_2.jpg' },
        { type: 'image', src: '/images/carousel_3.jpg' },
        { type: 'image', src: '/images/carousel_4.jpg' },
        { type: 'image', src: '/images/carousel_5.jpg' },
        { type: 'image', src: '/images/carousel_6.jpg' },
        { type: 'image', src: '/images/carousel_7.jpg' },
        { type: 'image', src: '/images/carousel_8.jpg' },
        { type: 'image', src: '/images/carousel_9.jpg' },
        { type: 'image', src: '/images/carousel_10.jpg' },
        { type: 'image', src: '/images/carousel_11.jpg' }
    ]

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 3500)
        return () => clearTimeout(timer)
    }, [currentSlide, slides.length]) // Reset timer on any slide change

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
                position: 'relative',
                zIndex: 10,
                padding: '4rem 2rem',
                color: 'var(--color-text)',
            }}
        >





            {/* Hero Section */}
            <section style={{
                minHeight: '80vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '0 1rem', // Standardized padding
                position: 'relative',
                overflow: 'hidden', // Ensure slides don't overflow
                background: '#000'
            }}>
                {/* Carousel Background */}
                <AnimatePresence>
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.0, ease: "easeInOut" }}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            zIndex: 0
                        }}
                    >
                        {slides[currentSlide].type === 'image' ? (
                            <img
                                src={slides[currentSlide].src}
                                alt="Slide"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    objectPosition: 'center',
                                    filter: 'brightness(0.7)' // Slight dim for text readability
                                }}
                            />
                        ) : (
                            <div style={{
                                width: '100%',
                                height: '100%',
                                background: slides[currentSlide].bg || '#000',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <img
                                    src={slides[currentSlide].src}
                                    alt="Product"
                                    style={{
                                        maxWidth: '80%',
                                        maxHeight: '80%',
                                        objectFit: 'contain',
                                        filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.3))'
                                    }}
                                />
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>

                {/* Enhanced Gradient Overlay - polished look on all devices */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: `
                        linear-gradient(90deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%),
                        linear-gradient(180deg, rgba(0,0,0,0.1) 0%, transparent 20%, transparent 80%, rgba(0,0,0,0.3) 100%)
                    `,
                    zIndex: 1
                }} />

                <div style={{
                    position: 'relative',
                    zIndex: 2,
                    maxWidth: '1400px', // Standardized max-width
                    width: '100%',
                    margin: '0 auto',
                    pointerEvents: 'auto' // Enable interaction for content
                }}>



                    {/* EXPLORE US Button - at top */}
                    <div style={{ marginTop: '1rem', marginBottom: '1rem', pointerEvents: 'auto' }}>
                        <Link to="/who-we-are" style={{ pointerEvents: 'auto', textDecoration: 'none' }}>
                            <button style={{
                                padding: '1rem 2rem',
                                background: 'transparent',
                                border: '1px solid var(--color-primary)',
                                color: 'var(--color-primary)',
                                width: 'fit-content',
                                fontSize: '1rem',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}>
                                EXPLORE US <span style={{ fontSize: '1.2rem' }}>→</span>
                            </button>
                        </Link>
                    </div>
                    <p style={{
                        maxWidth: '500px',
                        marginBottom: '2rem',
                        color: 'rgba(255,255,255,0.9)',
                        pointerEvents: 'auto'
                    }}>
                        World-class manufacturing of WOT condensers and CED Coating.
                        Experience the future of industrial coating.
                    </p>
                </div>
            </section>

            <section style={{
                padding: '5rem 2rem', // Standardized padding
            }}>




                <div style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '20px',
                    padding: '2rem',
                    maxWidth: '1400px', // Standardized max-width
                    margin: '0 auto',
                    pointerEvents: 'auto' // Enable interaction for content
                }}>


                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }}>
                        {/* Introduction */}
                        <div>

                            <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '700' }}>Welcome to Sujal Industries</h3>
                            <p style={{ marginBottom: '1.5rem' }}>
                                We stand as the leading manufacturer of wire on tube condensers, playing a pivotal role in providing cutting-edge Wire on Tube Condensers to our esteemed clients. Our production process incorporates the latest mechanisms and advanced technologies.
                            </p>
                            <p>
                                Distinguished from traditional condensers in the market, our offered range boasts numerous advantages. With an emphasis on excellent quality and application-specific design, our condensers feature a large surface area, ensuring high efficiency. Furthermore, their compact body enhances practicality.
                            </p>
                        </div>

                        {/* Company Stats */}
                        <div className="company-stats" style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                            gap: '1rem',
                            padding: '2.5rem',
                            background: 'linear-gradient(135deg, #ffffff 0%, #f0f4f8 100%)',
                            borderRadius: '20px',
                            boxShadow: '0 15px 35px rgba(0,0,0,0.08)',
                            border: '1px solid rgba(255,255,255,0.8)',
                            textAlign: 'center',
                            marginTop: '2rem'
                        }}>
                            {[
                                { number: 18, label: 'Years Experience' },
                                { number: 135, label: 'Products' },
                                { number: 120, label: 'Happy Clients' },
                                { number: 5, label: 'Business Verticals' }
                            ].map((stat, index) => (
                                <div key={index} style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    padding: '0.5rem'
                                }}>
                                    <h4 className="stat-number" style={{
                                        fontSize: '3.5rem',
                                        background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        marginBottom: '0.5rem',
                                        fontFamily: 'var(--font-display)',
                                        fontWeight: '800',
                                        lineHeight: 1
                                    }}>
                                        <Counter value={stat.number} />
                                    </h4>
                                    <p style={{
                                        fontSize: '1rem',
                                        fontWeight: '600',
                                        color: '#555',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1.5px',
                                        marginTop: '0.5rem'
                                    }}>
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Clients Marquee - Full width on mobile via CSS */}
                        <div className="clients-marquee" style={{
                            border: '1px solid rgba(0,0,0,0.1)',
                            borderRadius: '16px',
                            padding: '2rem',
                            backgroundColor: 'white',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                            marginTop: '3rem',
                            overflow: 'hidden'
                        }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--color-secondary)' }}>Trusted by Industry Leaders</h3>

                            <div style={{ display: 'flex', overflow: 'hidden', maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
                                <motion.div
                                    style={{ display: 'flex', gap: '4rem', whiteSpace: 'nowrap' }}
                                    animate={{ x: ['0%', '-50%'] }}
                                    transition={{ repeat: Infinity, ease: 'linear', duration: 50 }}
                                >
                                    {[
                                        { name: 'Endurance', logo: '/images/logos/endurance.jpeg' },
                                        { name: 'Royal Enfield', logo: '/images/logos/royal_enfield.png' },
                                        { name: 'TVS', logo: '/images/logos/tvs.jpeg' },
                                        { name: 'Stumpp Schuele', logo: '/images/logos/stumppschuele.jpg' },
                                        { name: 'Helical Springs', logo: '/images/logos/helical.png' },
                                        { name: 'Sangram Auto', logo: '/images/logos/sangram.jpg' },
                                        { name: 'Liebherr', logo: '/images/logos/liebherr.jpeg' },
                                        { name: 'Western', logo: '/images/logos/western.jpeg' },
                                        { name: 'Blue Star', logo: '/images/logos/bluestar.png' },
                                        { name: 'Voltas', logo: '/images/logos/voltas.png' },
                                        { name: 'Rockwell Industries', logo: '/images/logos/rockwellpvt.png' },
                                        { name: 'Virtuoso Optoelectronics', logo: '/images/logos/virtuoso.png' },
                                        { name: 'Neutronics', logo: '/images/logos/neutronics.png' },
                                        { name: 'Haier', logo: '/images/logos/haier.png' },
                                        { name: 'Saptagiri Auto', logo: '/images/logos/saptagiri.jpg' },

                                        // Duplicate for seamless loop
                                        { name: 'Endurance', logo: '/images/logos/endurance.jpeg' },
                                        { name: 'Royal Enfield', logo: '/images/logos/royal_enfield.png' },
                                        { name: 'TVS', logo: '/images/logos/tvs.jpeg' },
                                        { name: 'Stumpp Schuele', logo: '/images/logos/stumppschuele.jpg' },
                                        { name: 'Helical Springs', logo: '/images/logos/helical.png' },
                                        { name: 'Sangram Auto', logo: '/images/logos/sangram.jpg' },
                                        { name: 'Liebherr', logo: '/images/logos/liebherr.jpeg' },
                                        { name: 'Western', logo: '/images/logos/western.jpeg' },
                                        { name: 'Blue Star', logo: '/images/logos/bluestar.png' },
                                        { name: 'Voltas', logo: '/images/logos/voltas.png' },
                                        { name: 'Rockwell Industries', logo: '/images/logos/rockwellpvt.png' },
                                        { name: 'Virtuoso Optoelectronics', logo: '/images/logos/virtuoso.png' },
                                        { name: 'Neutronics', logo: '/images/logos/neutronics.png' },
                                        { name: 'Haier', logo: '/images/logos/haier.png' },
                                        { name: 'Saptagiri Auto', logo: '/images/logos/saptagiri.jpg' },

                                    ].map((client, index) => (
                                        <div key={index} className="client-card" style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            minWidth: '350px', // Increased width
                                            opacity: 0.9,
                                            transition: 'opacity 0.3s, transform 0.3s',
                                            cursor: 'pointer',
                                            gap: '2rem' // Increased gap
                                        }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.opacity = 1
                                                e.currentTarget.style.transform = 'scale(1.05)'
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.opacity = 0.9
                                                e.currentTarget.style.transform = 'scale(1)'
                                            }}
                                        >
                                            <div className="client-logo-container" style={{
                                                height: '220px', // Increased height
                                                width: '100%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                padding: '2rem', // Increased padding
                                                background: 'white',
                                                borderRadius: '16px', // Slightly larger radius
                                                boxShadow: '0 8px 25px rgba(0,0,0,0.08)' // Enhanced shadow
                                            }}>
                                                <img
                                                    src={client.logo}
                                                    alt={client.name}
                                                    className="client-logo"
                                                    loading="lazy"
                                                    style={{
                                                        maxHeight: '100%',
                                                        maxWidth: '100%',
                                                        objectFit: 'contain',
                                                        filter: 'brightness(1.1)',
                                                        transition: 'transform 0.3s'
                                                    }}
                                                />
                                            </div>
                                            <span style={{
                                                fontSize: '1.6rem', // Increased font size
                                                color: 'var(--color-text)',
                                                fontWeight: 'bold',
                                                letterSpacing: '0.5px',
                                                textAlign: 'center'
                                            }}>{client.name}</span>
                                        </div>
                                    ))}
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Director's Message Section */}
            <section style={{
                padding: '3rem 2rem', // Reduced padding
                backgroundColor: '#f9f9f9',
                borderTop: '1px solid rgba(0,0,0,0.1)'
            }}>
                <div className="glass-panel" style={{
                    maxWidth: '1000px', // Reduced max-width from 1400px
                    margin: '0 auto',
                    padding: '0',
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    overflow: 'hidden',
                    pointerEvents: 'auto' // Enable interaction for content
                }}>
                    {/* Image Side - Now First (Left) */}
                    <div style={{ flex: '1 1 250px', minHeight: '250px' }}>
                        <img
                            src="/images/director.jpg"
                            alt="Mr. Gopal Kale"
                            loading="lazy"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>

                    {/* Content Side - Now Second (Right) */}
                    <div style={{ flex: '2 1 300px', padding: '2rem' }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--color-secondary)' }}>Director's Message</h2>

                        <div style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--color-text-muted)' }}>
                            <p style={{ marginBottom: '1rem' }}>
                                "When I founded Sujal Industries in 2008, my goal was simple yet ambitious — to build a company rooted in precision, integrity, and innovation. From a humble beginning to our current 40,000 sq. ft. advanced manufacturing facility, the journey has been driven by unwavering passion and the trust of our valued customers.
                            </p>
                            <p style={{ marginBottom: '1rem' }}>
                                Over the years, we have mastered the art and engineering of deep freezer condensers, producing world-class 1–6 row (100–600 litre) WTO condensers that power reliability across industries. Alongside this, our excellence in epoxy CED coating and our state-of-the-art German-technology Wagon-R powder coating plant have made Sujal Industries a preferred partner for leading automobile giants and appliance manufacturers.
                            </p>
                            <p style={{ marginBottom: '1rem' }}>
                                At Sujal Industries, we believe that quality is not just a benchmark — it is a promise we deliver every single day. Our team, our technology, and our values drive us to continuously innovate and push boundaries.
                            </p>
                            <p style={{ marginBottom: '1.5rem' }}>
                                As we move forward, we remain committed to serving our clients with transparency, timely delivery, and exceptional quality. Together, we aim to shape a future where Sujal Industries stands as a trusted leader in both condenser manufacturing and advanced coating solutions.
                            </p>
                        </div>

                        <div style={{ marginTop: '1rem' }}>
                            <h4 style={{ fontSize: '1.2rem', color: 'var(--color-primary)', marginBottom: '0.2rem' }}>Mr. Gopal Kale</h4>
                            <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Managing Director, Sujal Industries</span>
                        </div>

                        <div style={{ marginTop: '1rem' }}>
                            <img src="/images/signature.png" alt="Signature" style={{ height: '40px', opacity: 0.7, display: 'none' }} />
                            {/* Placeholder for signature if available later */}
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    )
}
