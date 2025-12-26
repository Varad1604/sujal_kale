import { FaWhatsapp } from 'react-icons/fa'

export const WhatsAppButton = () => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

    return (
        <a
            href="https://wa.me/919011047273"
            target="_blank"
            rel="noopener noreferrer"
            style={{
                position: 'fixed',
                bottom: isMobile ? '1rem' : '2rem',
                right: isMobile ? '1rem' : '2rem',
                backgroundColor: 'var(--color-primary)', // Theme color (Burning Flame / Gold)
                color: '#000', // Black text for better contrast on light orange
                padding: isMobile ? '0.6rem 1.2rem' : '0.8rem 1.5rem',
                borderRadius: '50px', // Pill shape
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem',
                textDecoration: 'none',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                zIndex: 1000,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                fontWeight: '600',
                fontFamily: 'var(--font-body)',
                border: 'none',
                cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)'
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)'
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)'
            }}
        >
            <FaWhatsapp size={24} />
            <span style={{ fontSize: '1rem' }}>How can I help you?</span>
        </a>
    )
}
