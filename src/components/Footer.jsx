import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-waves">
        <svg className="wave" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 C300,100 600,20 900,60 C1050,80 1125,50 1200,60 L1200,120 L0,120 Z" fill="currentColor"></path>
        </svg>
        <svg className="wave wave-2" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,80 C300,40 600,100 900,80 C1050,70 1125,90 1200,80 L1200,120 L0,120 Z" fill="currentColor"></path>
        </svg>
        <svg className="wave wave-3" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,70 C300,90 600,50 900,70 C1050,60 1125,80 1200,70 L1200,120 L0,120 Z" fill="currentColor"></path>
        </svg>
      </div>
      
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-column">
              <h3 className="footer-title">WebNICHE</h3>
              <p className="footer-description">
                Professional portfolio websites designed to make you stand out.
              </p>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/showcase">Showcase</Link></li>
                <li><Link to="/templates">Templates</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-heading">Services</h4>
              <ul className="footer-links">
                <li><Link to="/services">Our Services</Link></li>
                <li><Link to="/contact">Get Started</Link></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-heading">Contact</h4>
              <ul className="footer-links">
                <li><Link to="/contact">Contact Us</Link></li>
                <li><a href="mailto:info@WebNICHE.com">info@WebNICHE.com</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} WebNICHE. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

