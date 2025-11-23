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
              for students, creators, and working professionals.
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
            Why Choose PortfolioCraft?
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
                desc: 'Your portfolio ready in 5-7 business days',
                month: 'SPEED',
                date: '02'
              },
              {
                icon: '💰',
                title: 'Affordable Rates',
                desc: 'Starting at $299 for students and professionals',
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
              { number: '98%', label: 'Client Satisfaction' },
              { number: '5-7', label: 'Days Delivery' },
              { number: '24/7', label: 'Support Available' }
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
    </div>
  )
}

export default Home

