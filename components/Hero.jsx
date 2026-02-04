import { motion } from 'framer-motion'
import floral from '../assets/floral.png'

const Hero = () => {
    return (
        <section className="hero" style={{
            minHeight: '90vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--color-bg)',
            position: 'relative',
            overflow: 'hidden',
            textAlign: 'center',
            color: 'var(--color-primary)'
        }}>
            {/* Floral Accents */}
            <img src={floral} alt="" style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '300px',
                maxWidth: '50vw',
                transform: 'rotate(0deg)',
                opacity: 0.9
            }} />
            <img src={floral} alt="" style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: '300px',
                maxWidth: '50vw',
                transform: 'rotate(180deg)',
                opacity: 0.9
            }} />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                style={{ zIndex: 1, padding: '2rem' }}
            >
                <div>
                    <h2 style={{
                        fontFamily: 'var(--font-body)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.2rem',
                        fontSize: '1rem',
                        marginBottom: '1rem'
                    }}>The Wedding Of</h2>

                    <h1 style={{
                        fontSize: 'clamp(3rem, 8vw, 6rem)',
                        marginBottom: '1rem',
                        lineHeight: 1.1
                    }}>Name <span style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-heading)' }}>&</span> Name</h1>

                    <p style={{
                        fontSize: '1.5rem',
                        fontStyle: 'italic',
                        marginTop: '2rem'
                    }}>October 24, 2026 • Vienna, Austria</p>

                    <p style={{
                        fontSize: '1rem',
                        marginTop: '1rem',
                        color: '#666'
                    }}>
                        (Placeholder Data - Edit in Hero.jsx)
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            marginTop: '3rem',
                            padding: '1rem 3rem',
                            fontSize: '1.1rem',
                            backgroundColor: 'var(--color-primary)',
                            color: 'white',
                            border: 'none',
                            borderRadius: 'var(--radius-sm)',
                            cursor: 'pointer',
                            fontFamily: 'var(--font-body)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1rem'
                        }}
                    >
                        RSVP Now
                    </motion.button>
                </div>
            </motion.div>
        </section>
    )
}

export default Hero
