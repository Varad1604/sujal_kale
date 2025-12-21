import { motion } from 'framer-motion'

export const BackgroundOrbs = () => {
    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: 'hidden',
            zIndex: 0,
            pointerEvents: 'none'
        }}>
            {/* Orb 1 - Top Left - Primary Color */}
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                style={{
                    position: 'absolute',
                    top: '-10%',
                    left: '-10%',
                    width: '600px',
                    height: '600px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(255, 177, 98, 0.15) 0%, rgba(255,255,255,0) 70%)',
                    filter: 'blur(60px)',
                }}
            />

            {/* Orb 2 - Bottom Right - Warm/Secondary */}
            <motion.div
                animate={{
                    x: [0, -100, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.3, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                }}
                style={{
                    position: 'absolute',
                    bottom: '-10%',
                    right: '-5%',
                    width: '700px',
                    height: '700px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(255, 140, 0, 0.1) 0%, rgba(255,255,255,0) 70%)',
                    filter: 'blur(80px)',
                }}
            />

            {/* Orb 3 - Center/Random - Floating */}
            <motion.div
                animate={{
                    x: [-50, 50, -50],
                    y: [-50, 50, -50],
                    opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{
                    position: 'absolute',
                    top: '40%',
                    left: '30%',
                    width: '400px',
                    height: '400px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(255, 177, 98, 0.08) 0%, rgba(255,255,255,0) 70%)',
                    filter: 'blur(50px)',
                }}
            />
        </div>
    )
}
