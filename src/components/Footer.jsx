import { FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useStore } from '../store'

export const Footer = () => {
    const { activeProduct } = useStore()

    // Self-destruct: Do not render if a 3D product is active
    if (activeProduct) return null

    return (
        <footer style={{
            background: 'var(--color-bg)',
            borderTop: '1px solid rgba(0,0,0,0.1)',
            padding: '3rem 5% 1rem',
            color: 'var(--color-text)',
            pointerEvents: 'auto',
            position: 'relative',
            zIndex: 10
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '2rem',
                marginBottom: '2rem'
            }}>
                {/* Brand & Social */}
                <div>
                    <img src="/images/logo_removebg.png" alt="Sujal Industries Logo" style={{ height: '80px', marginBottom: '1rem', objectFit: 'contain' }} />
                    <h3 style={{ fontSize: '1.8rem', fontWeight: '800', letterSpacing: '2px', marginBottom: '1rem' }}>
                        SUJAL <span className="text-gold">INDUSTRIES</span>
                    </h3>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <a href="https://youtube.com/@sujalindustries?si=Yjiw8EH6IgU6V6Fg" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text)', fontSize: '1.4rem', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = '#FF0000'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-text)'}>
                            <FaYoutube />
                        </a>
                        <a href="https://www.instagram.com/sujalindustries?igsh=M3EzaWlnMmdyd3B4&utm_source=qr" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text)', fontSize: '1.4rem', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = '#E1306C'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-text)'}>
                            <FaInstagram />
                        </a>
                        <a href="#" style={{ color: 'var(--color-text)', fontSize: '1.4rem', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = '#0077B5'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-text)'}>
                            <FaLinkedin />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 style={{ fontSize: '1.1rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>Quick Links</h4>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <li><Link to="/" onClick={() => window.scrollTo(0, 0)} style={{ textDecoration: 'none', color: 'var(--color-text-muted)', fontSize: '0.95rem', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-text-muted)'}>Home</Link></li>
                        <li><Link to="/who-we-are" onClick={() => window.scrollTo(0, 0)} style={{ textDecoration: 'none', color: 'var(--color-text-muted)', fontSize: '0.95rem', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-text-muted)'}>Who We Are</Link></li>
                        <li><Link to="/products" onClick={() => window.scrollTo(0, 0)} style={{ textDecoration: 'none', color: 'var(--color-text-muted)', fontSize: '0.95rem', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-text-muted)'}>Products</Link></li>
                        <li><Link to="/our-facility" onClick={() => window.scrollTo(0, 0)} style={{ textDecoration: 'none', color: 'var(--color-text-muted)', fontSize: '0.95rem', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-text-muted)'}>Our Facility</Link></li>
                        <li><Link to="/contact" onClick={() => window.scrollTo(0, 0)} style={{ textDecoration: 'none', color: 'var(--color-text-muted)', fontSize: '0.95rem', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-text-muted)'}>Contact</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 style={{ fontSize: '1.1rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>Contact Info</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                        <div>
                            <strong style={{ display: 'block', color: 'var(--color-text)', fontSize: '0.9rem', marginBottom: '0.2rem' }}>Address</strong>
                            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.5', fontSize: '0.9rem' }}>
                                Gut No. 48, Plot No.5, Near “E” Sector,<br />
                                Ranjangaon (SP) MIDC Area Waluj,<br />
                                Chhatrapati Sambhajinagar 431136
                            </p>
                        </div>
                        <div>
                            <strong style={{ display: 'block', color: 'var(--color-text)', fontSize: '0.9rem', marginBottom: '0.2rem' }}>Phone</strong>
                            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>+91-901-104-7273</p>
                        </div>
                        <div>
                            <strong style={{ display: 'block', color: 'var(--color-text)', fontSize: '0.9rem', marginBottom: '0.2rem' }}>Email</strong>
                            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>sujalindustries.work@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(0,0,0,0.05)',
                textAlign: 'center',
                color: 'var(--color-text-muted)',
                fontSize: '0.85rem'
            }}>
                <p>&copy; {new Date().getFullYear()} Sujal Industries. All rights reserved.</p>
            </div>
        </footer>
    )
}
