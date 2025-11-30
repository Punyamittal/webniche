import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ScrollExpandMedia from '../components/ui/scroll-expansion-hero'
import { Card3D } from '../components/ui/3d-card'
import { Counter } from '../components/ui/counter'
import { Palette, Zap, IndianRupee, Rocket, Target, Sparkles } from 'lucide-react'
import knightVideo from '../assets/Knight_Video_Generation.mp4'
import forestVideo from '../assets/Video_Generation_with_Forest_Background.mp4'
import './Home.css'

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section - Scroll Expansion with Shader Background */}
      <ScrollExpandMedia
        mediaType="video"
        mediaSrc={knightVideo}
        expandedMediaSrc={forestVideo}
        useShaderBackground={true}
        title="Custom Portfolios Designed to Make You Stand Out"
        date="Professional Portfolio Services"
        scrollToExpand="Scroll to explore"
        textBlend={false}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Professional, Aesthetic & Affordable
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl mb-8 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Starting from just ₹2000! Perfect for students, creators, and professionals.
            We create stunning portfolio websites that showcase your work and help you stand out.
          </motion.p>
          <motion.div 
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link to="/contact" className="px-8 py-3 bg-white hover:bg-gray-100 text-black rounded-lg font-semibold transition-colors">
              Start Your Portfolio
            </Link>
            <Link to="/showcase" className="px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-lg font-semibold transition-colors">
              View Live Samples
            </Link>
          </motion.div>
        </div>
      </ScrollExpandMedia>

      {/* Modern Wavy Curve Partition */}
      <div className="wavy-partition">
        <svg className="wavy-svg" viewBox="0 0 1440 200" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0a0a0a" />
              <stop offset="50%" stopColor="#141414" />
              <stop offset="100%" stopColor="#141414" />
            </linearGradient>
          </defs>
          <path d="M0,200 Q180,140 360,160 T720,150 T1080,160 T1440,140 L1440,200 L0,200 Z" fill="url(#waveGradient1)"></path>
        </svg>
        <svg className="wavy-svg wavy-svg-2" viewBox="0 0 1440 200" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#000000" />
              <stop offset="50%" stopColor="#1a1a1a" />
              <stop offset="100%" stopColor="#141414" />
            </linearGradient>
          </defs>
          <path d="M0,200 Q240,130 480,155 T960,145 T1440,150 L1440,200 L0,200 Z" fill="url(#waveGradient2)"></path>
        </svg>
      </div>

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
                icon: Palette,
                title: 'Multiple Design Styles',
                desc: 'From bold & playful to sleek corporate dashboards',
                month: 'STYLE',
                date: '01'
              },
              {
                icon: Zap,
                title: 'Fast Turnaround',
                desc: 'Your portfolio ready in 5-7 business days. Quick delivery, great quality!',
                month: 'SPEED',
                date: '02'
              },
              {
                icon: IndianRupee,
                title: 'Affordable Rates',
                desc: 'Starting at just ₹2000! Best prices in the market',
                month: 'VALUE',
                date: '03'
              },
              {
                icon: Rocket,
                title: 'Fully Responsive',
                desc: 'Perfect on desktop, tablet, and mobile devices',
                month: 'RESP',
                date: '04'
              },
              {
                icon: Target,
                title: 'Custom Solutions',
                desc: 'Tailored to your unique needs and brand',
                month: 'CUSTOM',
                date: '05'
              },
              {
                icon: Sparkles,
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
                  icon={feature.icon}
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
      <section className="pricing-highlights-section" style={{ position: 'relative', zIndex: 100 }}>
        <div className="container">
          <h2 className="section-title">
            Simple, Transparent Pricing
          </h2>
          
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
                desc: 'Themed premium designs',
                features: ['Premium Themes', 'Advanced Animations', 'Interactive Elements', '5-7 Days Delivery']
              },
              {
                name: 'Customized Portfolio',
                price: '₹3000+',
                desc: 'Full customization with chat & email',
                features: ['Chat Box', 'Email Integration', 'Custom Features', '7-10 Days Delivery']
              }
            ].map((plan, idx) => (
              <div
                key={idx}
                className="pricing-highlight-card"
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
              </div>
            ))}
          </div>

          <div className="contact-info-box">
            <p>
              <strong>Ready to get started?</strong> Call or WhatsApp us at{' '}
              <a href="tel:+918929266960" style={{ color: 'var(--primary-yellow)', textDecoration: 'none' }}>+91 8929266960</a>{' '}
              
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

