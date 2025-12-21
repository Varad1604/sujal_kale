import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaBriefcase, FaArrowRight } from 'react-icons/fa'

const jobs = [
    { id: 'mechanical-engineers', title: 'Mechanical Engineers', type: 'Engineering', location: 'Chhatrapati Sambhajinagar' },
    { id: 'chemical-engineers', title: 'Chemical Engineers', type: 'Engineering', location: 'Chhatrapati Sambhajinagar' },
    { id: 'automobile-rd', title: 'Automobile R&D', type: 'Research & Development', location: 'Chhatrapati Sambhajinagar' },
    { id: 'appliances', title: 'Appliances Division', type: 'Manufacturing', location: 'Chhatrapati Sambhajinagar' },
    { id: 'marketing', title: 'Marketing Executive', type: 'Sales & Marketing', location: 'Remote / On-site' },
    { id: 'hr', title: 'Human Resources (HR)', type: 'Management', location: 'Chhatrapati Sambhajinagar' },
]

export const Careers = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ padding: '4rem 10%', color: 'var(--color-text)', pointerEvents: 'auto' }}
        >
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Join Our <span className="text-gradient">Team</span></h2>
                <p style={{ maxWidth: '600px', margin: '0 auto' }}>
                    Build the future of industrial manufacturing with Sujal Industries. We are looking for passionate individuals to join our growing family.
                </p>
            </div>

            <div style={{ display: 'grid', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
                {jobs.map((job) => (
                    <Link to={`/careers/${job.id}`} key={job.id} style={{ textDecoration: 'none' }}>
                        <motion.div
                            className="glass-panel"
                            whileHover={{ scale: 1.02, backgroundColor: 'rgba(0,0,0,0.03)' }}
                            style={{
                                padding: '2rem',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                cursor: 'pointer',
                                border: '1px solid rgba(0,0,0,0.1)'
                            }}
                        >
                            <div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-text)' }}>{job.title}</h3>
                                <div style={{ display: 'flex', gap: '1.5rem', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><FaBriefcase /> {job.type}</span>
                                    <span>{job.location}</span>
                                </div>
                            </div>
                            <div style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                background: 'rgba(0,0,0,0.05)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--color-primary)'
                            }}>
                                <FaArrowRight />
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </motion.div>
    )
}
