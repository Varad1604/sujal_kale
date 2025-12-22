import React from 'react';
import { motion } from 'framer-motion';

export const SonyIntro = () => {
    const tagline = "Process Powers Us. Quality Defines Us.";

    // Split tagline into characters for typewriter effect
    const characters = tagline.split('');

    return (
        <motion.div
            className="sony-intro-overlay"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                background: 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
                zIndex: 99999,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden'
            }}
        >
            {/* Animated Background Particles */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{
                        x: (i % 2 === 0 ? -200 : 200) * (i + 1) * 0.5,
                        y: (i % 3 === 0 ? -150 : 150) * (i + 1) * 0.3,
                        opacity: 0,
                        scale: 0
                    }}
                    animate={{
                        x: 0,
                        y: 0,
                        opacity: [0, 0.3, 0],
                        scale: [0, 1.5, 0]
                    }}
                    transition={{
                        duration: 1.2,
                        delay: i * 0.05,
                        ease: "easeOut"
                    }}
                    style={{
                        position: 'absolute',
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, var(--color-primary, #FFB162) 0%, transparent 70%)',
                        pointerEvents: 'none'
                    }}
                />
            ))}

            {/* Main Logo Container with Assembly Effect */}
            <motion.div
                style={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1.5rem'
                }}
            >
                {/* Logo with Assembly Animation */}
                <motion.div
                    style={{ position: 'relative', overflow: 'hidden' }}
                >
                    <motion.img
                        src="/images/logo_removebg.png"
                        alt="Sujal Industries"
                        initial={{
                            scale: 0.3,
                            opacity: 0,
                            rotateY: 90
                        }}
                        animate={{
                            scale: 1,
                            opacity: 1,
                            rotateY: 0
                        }}
                        transition={{
                            duration: 0.8,
                            ease: [0.25, 0.46, 0.45, 0.94]
                        }}
                        style={{
                            width: 'min(280px, 70vw)',
                            height: 'auto',
                            objectFit: 'contain'
                        }}
                    />
                    {/* Shine Sweep Effect */}
                    <motion.div
                        initial={{ x: '-150%' }}
                        animate={{ x: '250%' }}
                        transition={{
                            delay: 0.7,
                            duration: 0.6,
                            ease: [0.25, 0.46, 0.45, 0.94]
                        }}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '60%',
                            height: '100%',
                            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)',
                            transform: 'skewX(-20deg)',
                            pointerEvents: 'none'
                        }}
                    />
                </motion.div>

                {/* Animated Underline */}
                <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{
                        delay: 0.6,
                        duration: 0.4,
                        ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    style={{
                        width: '80px',
                        height: '3px',
                        background: 'linear-gradient(90deg, var(--color-primary, #FFB162), #FF8C00)',
                        borderRadius: '2px',
                        transformOrigin: 'center'
                    }}
                />

                {/* Typewriter Tagline */}
                <motion.div
                    style={{
                        fontSize: '1rem',
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        color: '#333',
                        fontWeight: '700',
                        fontFamily: "'Rajdhani', sans-serif",
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        maxWidth: '400px'
                    }}
                >
                    {characters.map((char, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 1.0 + index * 0.04,
                                duration: 0.15,
                                ease: "easeOut"
                            }}
                            style={{
                                display: 'inline-block',
                                whiteSpace: char === ' ' ? 'pre' : 'normal'
                            }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </motion.div>
            </motion.div>

            {/* Loading Progress Bar */}
            <motion.div
                style={{
                    position: 'absolute',
                    bottom: '50px',
                    width: '150px',
                    height: '3px',
                    background: 'rgba(0,0,0,0.08)',
                    borderRadius: '2px',
                    overflow: 'hidden'
                }}
            >
                <motion.div
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{
                        duration: 1.5,
                        ease: "easeInOut",
                        delay: 0.2
                    }}
                    style={{
                        height: '100%',
                        background: 'linear-gradient(90deg, var(--color-primary, #FFB162), #FF8C00)',
                        borderRadius: '2px'
                    }}
                />
            </motion.div>
        </motion.div>
    );
};
