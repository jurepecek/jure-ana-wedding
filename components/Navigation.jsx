import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <nav style={{
            padding: '1rem 2rem',
            background: 'var(--color-bg)',
            color: 'var(--color-primary)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'sticky',
            top: 0,
            zIndex: 100,
            boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
        }}>
            <div style={{ fontWeight: 700, fontSize: '1.2rem', fontFamily: 'var(--font-heading)' }}>
                <Link to="/">N & N</Link>
            </div>
            <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/story">Our Story</Link></li>
                <li><Link to="/rsvp">RSVP</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation
