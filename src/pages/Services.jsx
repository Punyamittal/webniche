import { motion } from 'framer-motion'
import DatabaseWithRestApi from '../components/ui/database-with-rest-api'
import { RadialIntro } from '../components/ui/radial-intro'
import './Services.css'

const Services = () => {
  const serviceTypes = [
    {
      title: 'Corporate Websites',
      icon: '🏢',
      description: 'Professional websites for businesses and organizations',
      features: [
        'Custom branding integration',
        'Multi-page architecture',
        'Team member profiles',
        'Service showcases',
        'Contact forms & integrations',
        'SEO optimization'
      ],
      style: 'corporate'
    },
    {
      title: 'E-commerce Stores',
      icon: '🛒',
      description: 'Full-featured online stores with shopping cart functionality',
      features: [
        'Product catalog management',
        'Shopping cart & checkout',
        'Payment gateway integration',
        'Inventory management',
        'Order tracking system',
        'Customer accounts'
      ],
      style: 'ecommerce'
    },
    {
      title: 'SaaS Landing Pages',
      icon: '🚀',
      description: 'High-converting landing pages for SaaS products',
      features: [
        'Feature showcases',
        'Pricing tables',
        'Testimonial sections',
        'CTA optimization',
        'Analytics integration',
        'A/B testing ready'
      ],
      style: 'saas'
    },
    {
      title: 'Multi-Purpose Projects',
      icon: '🎯',
      description: 'Complex websites combining multiple functionalities',
      features: [
        'Custom CMS development',
        'User authentication',
        'Database integration',
        'API connections',
        'Third-party integrations',
        'Scalable architecture'
      ],
      style: 'multipurpose'
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We discuss your goals, target audience, and requirements'
    },
    {
      step: '02',
      title: 'Design',
      description: 'Our team creates custom designs aligned with your brand'
    },
    {
      step: '03',
      title: 'Development',
      description: 'We build your website with modern technologies and best practices'
    },
    {
      step: '04',
      title: 'Launch',
      description: 'We deploy your site and ensure everything works perfectly'
    }
  ]

  return (
    <div className="services-page">
      <section className="services-hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="services-title">
            Services for <span className="highlight">Companies</span>
          </h1>
          <p className="services-subtitle">
            We create custom websites for businesses, stores, and multi-purpose projects
          </p>
        </motion.div>
      </section>

      <section className="services-section">
        <div className="container">
          <div className="services-grid">
            {serviceTypes.map((service, idx) => (
              <motion.div
                key={idx}
                className="service-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                
                <div className="service-features">
                  <ul>
                    {service.features.map((feature, i) => (
                      <li key={i}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="service-button">Learn More</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* API & Database Section */}
      <section className="api-database-section">
        <div className="container">
          <motion.div
            className="api-database-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="api-database-text">
              <motion.h2
                className="section-title"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Advanced <span className="highlight">API Integration</span>
              </motion.h2>
              <motion.p
                className="api-description"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                We build robust REST APIs and database integrations for your projects.
                Connect your frontend with powerful backends, manage data efficiently,
                and scale your applications seamlessly.
              </motion.p>
              <motion.div
                className="api-features"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="api-feature-item">
                  <div className="api-feature-icon">🔌</div>
                  <div>
                    <h4>REST API Development</h4>
                    <p>Custom RESTful APIs with proper endpoints and documentation</p>
                  </div>
                </div>
                <div className="api-feature-item">
                  <div className="api-feature-icon">🗄️</div>
                  <div>
                    <h4>Database Integration</h4>
                    <p>Seamless database connections and optimized queries</p>
                  </div>
                </div>
                <div className="api-feature-item">
                  <div className="api-feature-icon">⚡</div>
                  <div>
                    <h4>Real-time Updates</h4>
                    <p>Live data synchronization and real-time features</p>
                  </div>
                </div>
                <div className="api-feature-item">
                  <div className="api-feature-icon">🔒</div>
                  <div>
                    <h4>Secure & Scalable</h4>
                    <p>Enterprise-grade security and scalable architecture</p>
                  </div>
                </div>
              </motion.div>
            </div>
            <motion.div
              className="api-database-visual"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <DatabaseWithRestApi
                title="Custom REST API Integration"
                circleText="API"
                badgeTexts={{
                  first: "GET",
                  second: "POST",
                  third: "PUT",
                  fourth: "DELETE"
                }}
                buttonTexts={{
                  first: "PortfolioCraft",
                  second: "v2.0"
                }}
                lightColor="#6729FF"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="dashboard-preview-section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Corporate Dashboard Style
          </motion.h2>
          
          <motion.div
            className="dashboard-preview"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="dashboard-header">
              <div className="dashboard-nav">
                <span className="nav-item active">Dashboard</span>
                <span className="nav-item">Analytics</span>
                <span className="nav-item">Settings</span>
              </div>
              <div className="dashboard-user">
                <div className="user-avatar"></div>
                <span>Admin</span>
              </div>
            </div>
            
            <div className="dashboard-content">
              <div className="dashboard-stats">
                <div className="stat-card-dashboard">
                  <div className="stat-icon">📊</div>
                  <div className="stat-info">
                    <div className="stat-value-dashboard">$41,200</div>
                    <div className="stat-label-dashboard">Revenue</div>
                  </div>
                </div>
                <div className="stat-card-dashboard">
                  <div className="stat-icon">👥</div>
                  <div className="stat-info">
                    <div className="stat-value-dashboard">1,234</div>
                    <div className="stat-label-dashboard">Users</div>
                  </div>
                </div>
                <div className="stat-card-dashboard">
                  <div className="stat-icon">📈</div>
                  <div className="stat-info">
                    <div className="stat-value-dashboard">+12.5%</div>
                    <div className="stat-label-dashboard">Growth</div>
                  </div>
                </div>
              </div>
              
              <div className="dashboard-chart">
                <div className="chart-header">
                  <h3>Performance Overview</h3>
                  <div className="chart-controls">
                    <button className="chart-btn active">1M</button>
                    <button className="chart-btn">6M</button>
                    <button className="chart-btn">1Y</button>
                  </div>
                </div>
                <div className="chart-area">
                  <div className="chart-bars-dashboard">
                    {[65, 80, 55, 90, 75, 85, 70, 95, 60, 88, 72, 92].map((height, i) => (
                      <div key={i} className="chart-bar-dashboard" style={{ height: `${height}%` }}></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="technologies-services-section">
        <div className="container">
          <motion.div
            className="technologies-services-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Tools & <span className="highlight">Frameworks</span>
            </motion.h2>
            <motion.p
              className="technologies-services-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              We leverage cutting-edge technologies to build modern, scalable solutions
            </motion.p>
            <motion.div
              className="radial-intro-container-services"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <RadialIntro
                orbitItems={[
                  { id: 1, name: 'React', src: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=400&fit=crop' },
                  { id: 2, name: 'Vue.js', src: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=400&fit=crop' },
                  { id: 3, name: 'Angular', src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=400&fit=crop' },
                  { id: 4, name: 'Node.js', src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=400&fit=crop' },
                  { id: 5, name: 'Python', src: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=400&fit=crop' },
                  { id: 6, name: 'MongoDB', src: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=400&h=400&fit=crop' },
                  { id: 7, name: 'PostgreSQL', src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=400&fit=crop' },
                  { id: 8, name: 'AWS', src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=400&fit=crop' }
                ]}
                stageSize={400}
                imageSize={70}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Process
          </motion.h2>
          
          <div className="process-grid">
            {process.map((item, idx) => (
              <motion.div
                key={idx}
                className="process-card"
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
              >
                <div className="process-step">{item.step}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services

