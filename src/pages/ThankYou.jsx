import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaCheckCircle, FaHome, FaArrowRight } from 'react-icons/fa'

export const ThankYou = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '2rem',
                marginTop: '4rem'
            }}
        >
            <div className="glass-panel" style={{
                padding: '4rem 2rem',
                maxWidth: '600px',
                width: '100%',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '2rem'
            }}>
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
                >
                    <FaCheckCircle style={{ fontSize: '5rem', color: '#4CAF50' }} />
                </motion.div>

                <div>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-text)' }}>Thank You!</h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                        Your submission has been received successfully. <br />
                        Our team will review your details and get back to you shortly.
                    </p>
                </div>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '1rem' }}>
                    <Link to="/" style={{
                        padding: '1rem 2rem',
                        background: 'rgba(255,255,255,0.1)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        color: 'var(--color-text)',
                        textDecoration: 'none',
                        borderRadius: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontWeight: 'bold',
                        transition: 'all 0.3s'
                    }}>
                        <FaHome /> Back to Home
                    </Link>
                    <Link to="/products" style={{
                        padding: '1rem 2rem',
                        background: 'var(--color-primary)',
                        color: 'black',
                        textDecoration: 'none',
                        borderRadius: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontWeight: 'bold',
                        transition: 'all 0.3s'
                    }}>
                        Explore Products <FaArrowRight />
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}
