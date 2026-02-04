import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
// Placeholder imports for now
const Story = () => <div className="section"><h2>Our Story</h2><p>Coming soon...</p></div>
const RSVP = () => <div className="section"><h2>RSVP</h2><p>Coming soon...</p></div>

function App() {
    return (
        <Router>
            <div className="app-container">
                {/* Navigation will go here */}
                <nav style={{ padding: '1rem', background: 'var(--color-primary)', color: 'white' }}>
                    Navigation Placeholder
                </nav>
                <Routes>
                    <Route path="/" element={<Hero />} />
                    <Route path="/story" element={<Story />} />
                    <Route path="/rsvp" element={<RSVP />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
