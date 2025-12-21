import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export const Products = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
                padding: '4rem 5%',
                color: 'var(--color-text)',
                minHeight: '80vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                pointerEvents: 'auto'
            }}
        >
            <h2 style={{ fontSize: '3rem', marginBottom: '4rem', textAlign: 'center' }}>Our Product Categories</h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '3rem',
                maxWidth: '1200px',
                margin: '0 auto',
                width: '100%'
            }}>
                {/* Automobile CED Card */}
                <Link to="/products/automobile-ced" style={{ textDecoration: 'none' }}>
                    <div
                        className="glass-panel"
                        style={{
                            padding: '3rem',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            transition: 'transform 0.3s, background 0.3s',
                            textAlign: 'center'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.05)'
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)'
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
                        }}
                    >
                        <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--color-secondary)' }}>Automobile CED</h3>
                        <p>
                            Explore our range of automotive components treated with advanced Cathodic Electro Deposition for superior durability.
                        </p>
                    </div>
                </Link>

                {/* Refrigeration Card */}
                <Link to="/products/refrigeration" style={{ textDecoration: 'none' }}>
                    <div
                        className="glass-panel"
                        style={{
                            padding: '3rem',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            transition: 'transform 0.3s, background 0.3s',
                            textAlign: 'center'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.05)'
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)'
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
                        }}
                    >
                        <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--color-secondary)' }}>Refrigeration</h3>
                        <p>
                            Discover our high-efficiency refrigeration components designed for optimal performance and reliability.
                        </p>
                    </div>
                </Link>
            </div>
        </motion.div>
    )
}
