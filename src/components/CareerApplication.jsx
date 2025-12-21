import React, { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { motion } from 'framer-motion'
import { FaCheckCircle, FaHome, FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const CareerApplication = ({ jobTitle }) => {
    const [state, handleSubmit] = useForm("mjknoozw")

    if (state.succeeded) {
        return (
            <div className="glass-panel" style={{ padding: '4rem 2rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                    <FaCheckCircle style={{ fontSize: '5rem', color: '#4CAF50', marginBottom: '1.5rem' }} />
                </motion.div>

                <h3 style={{ fontSize: '2.5rem', color: 'var(--color-text)', marginBottom: '1rem' }}>Application Sent!</h3>
                <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', marginBottom: '2rem', lineHeight: '1.6' }}>
                    Thank you for applying for the <strong>{jobTitle}</strong> position.<br />
                    We have received your details and resume link. We will review your application and get back to you shortly.
                </p>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
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
                        fontWeight: 'bold'
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
                        fontWeight: 'bold'
                    }}>
                        Explore Products <FaArrowRight />
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="glass-panel" style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--color-secondary)' }}>Apply for {jobTitle}</h3>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <input type="hidden" name="_subject" value={`New Job Application: ${jobTitle}`} />

                <div>
                    <label htmlFor="name" style={{ color: 'var(--color-text-muted)', display: 'block', marginBottom: '0.5rem' }}>Full Name</label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        style={{ width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.1)', color: 'var(--color-text)', borderRadius: '4px' }}
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                        <label htmlFor="email" style={{ color: 'var(--color-text-muted)', display: 'block', marginBottom: '0.5rem' }}>Email Address</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            required
                            style={{ width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.1)', color: 'var(--color-text)', borderRadius: '4px' }}
                        />
                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>
                    <div>
                        <label htmlFor="phone" style={{ color: 'var(--color-text-muted)', display: 'block', marginBottom: '0.5rem' }}>Phone Number</label>
                        <input
                            id="phone"
                            type="tel"
                            name="phone"
                            required
                            style={{ width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.1)', color: 'var(--color-text)', borderRadius: '4px' }}
                        />
                        <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                    </div>
                </div>

                <div>
                    <label htmlFor="message" style={{ color: 'var(--color-text-muted)', display: 'block', marginBottom: '0.5rem' }}>Why join us ?</label>
                    <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        style={{ width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.1)', color: 'var(--color-text)', borderRadius: '4px' }}
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                <div>
                    <label htmlFor="resume_link" style={{ color: 'var(--color-text-muted)', display: 'block', marginBottom: '0.5rem' }}>Resume Link (Google Drive / LinkedIn)</label>
                    <input
                        id="resume_link"
                        type="url"
                        name="resume_link"
                        required
                        placeholder="Paste the link to your resume here..."
                        style={{ width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.1)', color: 'var(--color-text)', borderRadius: '4px' }}
                    />
                    <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>
                        *Please ensure the link is accessible (e.g., "Anyone with the link" for Google Drive).
                    </p>
                    <ValidationError prefix="Resume Link" field="resume_link" errors={state.errors} />
                </div>

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
                    {state.submitting ? 'Sending...' : 'Send Application'}
                </button>

                {state.errors && state.errors.length > 0 && (
                    <p style={{ color: '#ff4444', marginTop: '1rem' }}>
                        Error submitting form. Please check your details.
                    </p>
                )}
            </form>
        </div>
    )
}
