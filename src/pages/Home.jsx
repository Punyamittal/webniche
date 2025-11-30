import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ShaderAnimation } from '../components/ui/shader-animation'
import { RadialIntro } from '../components/ui/radial-intro'
import { Card3D } from '../components/ui/3d-card'
import { Counter } from '../components/ui/counter'
import './Home.css'

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section - Shader Animation Background */}
      <section className="hero-section">
        <div className="hero-shader-container">
          <ShaderAnimation />
        </div>
        
        <div className="hero-content-overlay">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Custom Portfolios
              <br />
              <span className="gradient-text">Designed to Make</span>
              <br />
              You Stand Out
            </motion.h1>
            
            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Professional, aesthetic and affordable portfolio websites
              <br />
              Starting from just ₹2000! Perfect for students, creators, and professionals.
            </motion.p>
            
            <motion.div
              className="hero-cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link to="/contact" className="cta-button primary">
                Start Your Portfolio
              </Link>
              <Link to="/showcase" className="cta-button secondary">
                View Live Samples
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section - 3D Cards */}
      <section className="features-section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Choose WebNICHE?
          </motion.h2>
          
          <div className="features-3d-grid">
            {[
              {
                icon: '🎨',
                title: 'Multiple Design Styles',
                desc: 'From bold & playful to sleek corporate dashboards',
                month: 'STYLE',
                date: '01'
              },
              {
                icon: '⚡',
                title: 'Fast Turnaround',
                desc: 'Your portfolio ready in 5-7 business days. Quick delivery, great quality!',
                month: 'SPEED',
                date: '02'
              },
              {
                icon: '💰',
                title: 'Affordable Rates',
                desc: 'Starting at just ₹2000! Best prices in the market',
                month: 'VALUE',
                date: '03'
              },
              {
                icon: '🚀',
                title: 'Fully Responsive',
                desc: 'Perfect on desktop, tablet, and mobile devices',
                month: 'RESP',
                date: '04'
              },
              {
                icon: '🎯',
                title: 'Custom Solutions',
                desc: 'Tailored to your unique needs and brand',
                month: 'CUSTOM',
                date: '05'
              },
              {
                icon: '✨',
                title: 'Modern UI/UX',
                desc: 'Cutting-edge design that impresses employers',
                month: 'MODERN',
                date: '06'
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
              >
                <Card3D
                  title={feature.title}
                  content={feature.desc}
                  month={feature.month}
                  date={feature.date}
                  seeMoreText="Learn More"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-dragon-background"></div>
        <div className="container">
          <div className="stats-grid">
            {[
              { number: '₹2000', label: 'Starting Price' },
              { number: '5-7', label: 'Days Delivery' },
              { number: '100%', label: 'Satisfaction Guaranteed' }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="stat-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="stat-number">
                  <Counter value={stat.number} />
                </div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Highlights Section */}
      <section className="pricing-highlights-section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Simple, Transparent Pricing
          </motion.h2>
          
          <div className="pricing-highlights-grid">
            {[
              {
                name: 'Basic Portfolio',
                price: '₹2000',
                desc: 'Perfect for students and beginners',
                features: ['Responsive Design', 'Up to 5 Sections', 'Contact Form', '5-7 Days Delivery']
              },
              {
                name: 'Advanced Portfolio',
                price: '₹2500',
                desc: 'Netflix-themed premium designs',
                features: ['Premium Themes', 'Advanced Animations', 'Interactive Elements', '5-7 Days Delivery']
              },
              {
                name: 'Customized Portfolio',
                price: '₹3000+',
                desc: 'Full customization with chat & email',
                features: ['Chat Box', 'Email Integration', 'Custom Features', '7-10 Days Delivery']
              }
            ].map((plan, idx) => (
              <motion.div
                key={idx}
                className="pricing-highlight-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
              >
                <h3>{plan.name}</h3>
                <div className="pricing-highlight-price">{plan.price}</div>
                <p className="pricing-highlight-desc">{plan.desc}</p>
                <ul className="pricing-highlight-features">
                  {plan.features.map((feature, i) => (
                    <li key={i}>✓ {feature}</li>
                  ))}
                </ul>
                <Link to="/contact" className="pricing-highlight-cta">
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="contact-info-box"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <p>
              <strong>Ready to get started?</strong> Call or WhatsApp us at{' '}
              <a href="tel:+918929266960" style={{ color: 'var(--primary-yellow)', textDecoration: 'none' }}>+91 8929266960</a>{' '}
              
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home

