import { motion } from 'framer-motion'
import { FaYoutube, FaInstagram, FaLinkedin, FaCheckCircle } from 'react-icons/fa'
import { useForm, ValidationError } from '@formspree/react'

const ContactForm = () => {
    const [state, handleSubmit] = useForm("mjknoozw")

    if (state.succeeded) {
        return (
            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                    <FaCheckCircle style={{ fontSize: '4rem', color: '#4CAF50', marginBottom: '1rem' }} />
                </motion.div>
                <h3 style={{ fontSize: '1.8rem', color: 'var(--color-text)', marginBottom: '0.5rem' }}>Message Sent!</h3>
                <p style={{ color: 'var(--color-text-muted)' }}>We'll get back to you soon.</p>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input type="hidden" name="_subject" value="New Contact Inquiry" />

            <input
                id="name"
                type="text"
                name="name"
                placeholder="Your Name"
                aria-label="Your Name"
                required
                style={{
                    padding: '1rem',
                    background: 'rgba(0,0,0,0.05)',
                    border: '1px solid rgba(0,0,0,0.1)',
                    color: 'var(--color-text)',
                    borderRadius: '4px'
                }}
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />

            <input
                id="email"
                type="email"
                name="email"
                placeholder="Your Email"
                aria-label="Your Email"
                required
                style={{
                    padding: '1rem',
                    background: 'rgba(0,0,0,0.05)',
                    border: '1px solid rgba(0,0,0,0.1)',
                    color: 'var(--color-text)',
                    borderRadius: '4px'
                }}
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />

            <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                aria-label="Your Message"
                rows="5"
                required
                style={{
                    padding: '1rem',
                    background: 'rgba(0,0,0,0.05)',
                    border: '1px solid rgba(0,0,0,0.1)',
                    color: 'var(--color-text)',
                    borderRadius: '4px'
                }}
            ></textarea>
            <ValidationError prefix="Message" field="message" errors={state.errors} />

            <button type="submit" disabled={state.submitting} style={{
                padding: '1rem',
                background: 'var(--color-primary)',
                border: 'none',
                color: 'black',
                fontWeight: 'bold',
                marginTop: '1rem',
                cursor: state.submitting ? 'not-allowed' : 'pointer',
                fontSize: '1.1rem',
                borderRadius: '4px',
                opacity: state.submitting ? 0.7 : 1
            }}>
                {state.submitting ? 'Sending...' : 'Send Message'}
            </button>
        </form>
    )
}

export const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            style={{
                minHeight: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '2rem 1rem', // Reduced padding for mobile
                marginTop: '4rem',
                pointerEvents: 'auto'
            }}
        >
            <div className="glass-panel" style={{
                padding: '3rem',
                width: '100%',
                maxWidth: '1200px',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '2rem',
                alignItems: 'start'
            }}>
                {/* Contact Form Section */}
                <div style={{ flex: '1 1 300px' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--color-text)' }}>Get in Touch</h2>
                    <ContactForm />
                </div>

                {/* Contact Info & Map Section */}
                <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '2rem', color: 'var(--color-text)' }}>

                    {/* Contact Details */}
                    <div>
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Contact Information</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                <strong style={{ color: 'var(--color-text-muted)', display: 'block', marginBottom: '0.25rem' }}>Address</strong>
                                <p>Gut No. 48, Plot No.5, Near “E” Sector,<br />Ranjangaon (SP) MIDC Area Waluj,<br />Chhatrapati Sambhajinagar 431136</p>
                            </div>
                            <div>
                                <strong style={{ color: 'var(--color-text-muted)', display: 'block', marginBottom: '0.25rem' }}>Phone</strong>
                                <p>+91-901-104-7273</p>
                                <p>+91-901-104-7258</p>
                            </div>
                            <div>
                                <strong style={{ color: 'var(--color-text-muted)', display: 'block', marginBottom: '0.25rem' }}>Email</strong>
                                <p>sujalindustries.work@gmail.com</p>
                                <p>gopalkale@sujalappliances.co.in</p>
                            </div>
                            <div>
                                <strong style={{ color: 'var(--color-text-muted)', display: 'block', marginBottom: '0.5rem' }}>Follow Us</strong>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <a href="https://youtube.com/@sujalindustries?si=Yjiw8EH6IgU6V6Fg" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text)', fontSize: '1.5rem', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = '#FF0000'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-text)'}>
                                        <FaYoutube />
                                    </a>
                                    <a href="https://www.instagram.com/sujalindustries?igsh=M3EzaWlnMmdyd3B4&utm_source=qr" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text)', fontSize: '1.5rem', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = '#E1306C'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-text)'}>
                                        <FaInstagram />
                                    </a>
                                    <a href="#" style={{ color: 'var(--color-text)', fontSize: '1.5rem', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = '#0077B5'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-text)'}>
                                        <FaLinkedin />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Google Map */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div style={{
                            width: '100%',
                            height: '300px',
                            borderRadius: '8px',
                            overflow: 'hidden',
                            border: '1px solid rgba(255,255,255,0.1)'
                        }}>
                            <iframe
                                width="100%"
                                height="100%"
                                id="gmap_canvas"
                                src="https://maps.google.com/maps?q=Sujal+Industries+Waluj+Chhatrapati+Sambhajinagar&t=&z=14&ie=UTF8&iwloc=&output=embed"
                                frameBorder="0"
                                scrolling="no"
                                marginHeight="0"
                                marginWidth="0"
                                style={{ border: 0 }}
                                title="Sujal Industries Location"
                            ></iframe>
                        </div>
                        <a
                            href="https://www.google.com/maps/dir/?api=1&destination=Sujal+Industries+Waluj+Chhatrapati+Sambhajinagar"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                padding: '0.75rem 1.5rem',
                                background: 'var(--color-primary)',
                                color: 'black',
                                fontWeight: 'bold',
                                textDecoration: 'none',
                                borderRadius: '4px',
                                textAlign: 'center',
                                alignSelf: 'start',
                                display: 'inline-block',
                                fontSize: '0.9rem'
                            }}
                        >
                            Show me the path
                        </a>
                    </div>

                </div>
            </div>
        </motion.div>
    )
}
