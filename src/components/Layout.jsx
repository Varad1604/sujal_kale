import React, { useState, useEffect } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import { CanvasContainer } from './CanvasContainer'
import { Footer } from './Footer'
import { FaBars, FaTimes } from 'react-icons/fa'
import { AnimatePresence, motion } from 'framer-motion'
import { useStore } from '../store'



const NavItem = ({ item, mobile = false, onClick }) => {
    const location = useLocation()
    const [isHovered, setIsHovered] = React.useState(false)
    const isActive = location.pathname === item.path || (item.subItems && location.pathname.startsWith(item.path))

    if (mobile) {
        return (
            <li style={{ width: '100%' }}>
                <Link
                    to={item.path}
                    onClick={onClick}
                    style={{
                        display: 'block',
                        padding: '1rem',
                        color: isActive ? 'var(--color-primary)' : 'var(--color-text)',
                        textDecoration: 'none',
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                        borderBottom: '1px solid rgba(0,0,0,0.05)'
                    }}
                >
                    {item.label}
                </Link>
                {item.subItems && (
                    <div style={{ paddingLeft: '1.5rem' }}>
                        {item.subItems.map(sub => (
                            <Link
                                key={sub.label}
                                to={sub.path}
                                onClick={onClick}
                                style={{
                                    display: 'block',
                                    padding: '0.8rem',
                                    color: 'var(--color-text-muted)',
                                    textDecoration: 'none',
                                    fontSize: '1rem'
                                }}
                            >
                                {sub.label}
                            </Link>
                        ))}
                    </div>
                )}
            </li>
        )
    }

    return (
        <li
            style={{ position: 'relative' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Link to={item.path} style={{
                color: isActive ? 'var(--color-primary)' : 'var(--color-text)',
                textDecoration: 'none',
                textTransform: 'uppercase',
                fontSize: '0.9rem',
                letterSpacing: '1px',
                transition: 'color 0.3s',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 0'
            }}>
                <motion.span
                    style={{ position: 'relative' }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {item.label}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: isActive || isHovered ? 1 : 0 }}
                        transition={{ duration: 0.2 }}
                        style={{
                            position: 'absolute',
                            bottom: '-2px',
                            left: 0,
                            right: 0,
                            height: '2px',
                            background: 'var(--color-primary)',
                            originX: 0.5
                        }}
                    />
                </motion.span>
            </Link>

            {item.subItems && isHovered && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    style={{
                        position: 'absolute',
                        top: '100%',
                        left: item.label === 'Contact' ? 'auto' : 0,
                        right: item.label === 'Contact' ? 0 : 'auto',
                        paddingTop: '1rem', // Creates a bridge for the mouse
                        minWidth: '150px',
                        display: 'flex',
                        flexDirection: 'column',
                        zIndex: 20
                    }}
                >
                    <div style={{
                        background: 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(0, 0, 0, 0.1)',
                        borderRadius: '8px',
                        padding: '0.5rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.5rem',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                    }}>
                        {item.subItems.map((subItem) => (
                            <Link
                                key={subItem.label}
                                to={subItem.path}
                                style={{
                                    color: location.pathname === subItem.path ? 'var(--color-primary)' : 'var(--color-text)',
                                    textDecoration: 'none',
                                    padding: '0.75rem 1rem',
                                    fontSize: '0.9rem',
                                    transition: 'background 0.3s, color 0.3s',
                                    borderRadius: '4px',
                                    whiteSpace: 'nowrap',
                                    textTransform: 'none',
                                    fontWeight: location.pathname === subItem.path ? 'bold' : 'normal'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'rgba(0, 0, 0, 0.05)'
                                    e.currentTarget.style.color = 'var(--color-primary)'
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'transparent'
                                    e.currentTarget.style.color = location.pathname === subItem.path ? 'var(--color-primary)' : 'var(--color-text)'
                                }}
                            >
                                {subItem.label}
                            </Link>
                        ))}
                    </div>
                </motion.div>
            )}
        </li>
    )
}

// ... existing imports

import { SonyIntro } from './SonyIntro'

// ... existing imports

export const Layout = () => {
    const location = useLocation()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    // Always show intro on load
    const [showIntro, setShowIntro] = useState(true)

    const { activeProduct } = useStore() // Get activeProduct to detect simulation mode

    // Products that have 3D simulations (immersive mode)
    const simulationProducts = ['5 row condenser', 'Industrial Spring', '2 row condenser']
    const isImmersiveMode = activeProduct && simulationProducts.includes(activeProduct)

    // Intro Timing Logic
    useEffect(() => {
        if (!showIntro) return

        const timer = setTimeout(() => {
            setShowIntro(false)
        }, 3300) // Tagline finishes at ~2.5s, extra 0.8s to read
        return () => clearTimeout(timer)
    }, [showIntro])

    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'Who We Are', path: '/about' },
        {
            label: 'Products',
            path: '/products'
        },
        { label: 'Process', path: '/process' },
        {
            label: 'Our Facility',
            path: '/our-facility',
            subItems: [
                { label: 'Our Lab', path: '/our-lab' }
            ]
        },
        {
            label: 'Contact',
            path: '/contact',
            subItems: [
                { label: 'Enquiry', path: '/contact' },
                { label: 'Careers', path: '/careers' }
            ]
        }
    ]

    return (
        <div style={{ width: '100%', minHeight: '100vh', position: 'relative' }}>

            <AnimatePresence mode="wait">
                {showIntro && <SonyIntro key="sony-intro" />}
            </AnimatePresence>

            {/* 3D Background - ONLY when 3D simulation is actively being viewed */}
            {isImmersiveMode && <CanvasContainer />}

            {/* Navigation Bar - Hidden during immersive simulation mode */}
            <header style={{
                padding: '1.5rem 2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 100,
                background: 'rgba(255, 255, 255, 0.9)', // White background
                backdropFilter: 'blur(10px)',
                boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                pointerEvents: isImmersiveMode ? 'none' : 'auto',
                opacity: isImmersiveMode ? 0 : 1,
                transform: isImmersiveMode ? 'translateY(-100%)' : 'translateY(0)',
                transition: 'opacity 0.3s ease, transform 0.3s ease'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Link to="/" onClick={() => window.scrollTo(0, 0)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>

                        {/* Target Position for Logo */}
                        <img src="/images/logo_removebg.png" alt="Sujal Industries Logo" className="header-logo-img" />

                        <div>
                            <h1 className="header-title">SUJAL <span className="text-gold">INDUSTRIES</span></h1>
                            <div className="header-tagline-container">
                                <span className="header-tagline">Process Powers Us.Quality Defines Us.</span>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Desktop Nav */}
                <nav className="desktop-nav">
                    <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
                        {navItems.map((item) => (
                            <NavItem
                                key={item.label}
                                item={item}
                                onClick={() => {
                                    window.scrollTo(0, 0)
                                }}
                            />
                        ))}
                    </ul>
                </nav>

                {/* Mobile Nav Button */}
                <button
                    className="mobile-nav-btn"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    style={{
                        background: 'none',
                        border: 'none',
                        fontSize: '1.5rem',
                        color: 'var(--color-primary)', // Changed to primary color for visibility
                        padding: '0.5rem',
                        zIndex: 101
                    }}
                >
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            style={{
                                position: 'fixed',
                                top: '80px', // Below header
                                left: 0,
                                width: '100%',
                                height: 'calc(100vh - 80px)',
                                background: 'rgba(255, 255, 255, 0.98)',
                                backdropFilter: 'blur(10px)',
                                padding: '2rem',
                                display: 'flex',
                                flexDirection: 'column',
                                zIndex: 99,
                                overflowY: 'auto'
                            }}
                        >
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {navItems.map((item) => (
                                    <NavItem
                                        key={item.label}
                                        item={item}
                                        mobile={true}
                                        onClick={() => {
                                            setIsMobileMenuOpen(false)
                                            window.scrollTo(0, 0)
                                        }}
                                    />
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            {/* Page Content */}
            <main
                id="main-content"
                style={{
                    position: 'relative',
                    zIndex: 1,
                    minHeight: '100vh', // Ensure it covers screen
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                {location.pathname !== '/' && <div className="header-spacer" style={{ height: '140px' }} />} {/* Spacer for fixed header, hidden on Home */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ flex: 1 }}>
                        <Outlet />
                    </div>
                </div>
                {/* Show Footer on all pages except Contact (Footer self-hides for 3D models) */}
                {location.pathname !== '/contact' && <Footer />}
            </main>
        </div>
    )
}
