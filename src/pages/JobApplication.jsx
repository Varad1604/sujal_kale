import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CareerApplication } from '../components/CareerApplication'
import { FaArrowLeft } from 'react-icons/fa'

const jobTitles = {
    'mechanical-engineers': 'Mechanical Engineers',
    'chemical-engineers': 'Chemical Engineers',
    'automobile-rd': 'Automobile R&D',
    'appliances': 'Appliances Division',
    'marketing': 'Marketing Executive',
    'hr': 'Human Resources (HR)'
}

export const JobApplication = () => {
    const { jobId } = useParams()
    const title = jobTitles[jobId] || 'Job Application'

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ padding: '4rem 10%', color: 'var(--color-text)', pointerEvents: 'auto' }}
        >
            <Link to="/careers" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)', textDecoration: 'none', marginBottom: '2rem' }}>
                <FaArrowLeft /> Back to Careers
            </Link>

            <CareerApplication jobTitle={title} />
        </motion.div>
    )
}
