import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Navbar.css'

const Navbar = () => {
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'HOME' },
    { path: '/showcase', label: 'SHOWCASE' },
    { path: '/templates', label: 'TEMPLATES' },
    { path: '/pricing', label: 'PRICING' },
    { path: '/services', label: 'SERVICES' },
    { path: '/contact', label: 'CONTACT' },
  ]

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        <Link to="/" className="logo">
          <div className="logo-icon">
            <div className="logo-dots">
              <span></span><span></span><span></span>
              <span></span><span></span><span></span>
            </div>
          </div>
          <span className="logo-text">PortfolioCraft</span>
        </Link>
        
        <div className="nav-links">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar

