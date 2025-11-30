import { useState } from 'react'
import { motion } from 'framer-motion'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
    files: null
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value, files } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: files ? files : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        budget: '',
        message: '',
        files: null
      })
    }, 3000)
  }

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="contact-title">
            Get <span className="highlight">Started</span>
          </h1>
          <p className="contact-subtitle">
            Ready to create your custom portfolio? Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </motion.div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>Let's Work Together</h2>
              <p className="info-description">
                We're here to help bring your vision to life. Whether you're a student, professional, or business owner, we have the perfect solution for you.
              </p>

              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon">📧</div>
                  <div>
                    <h3>Contact Us</h3>
                    <p>Reach out via phone or WhatsApp for fastest response!</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">📱</div>
                  <div>
                    <h3>Phone</h3>
                    <p>
                      <a href="tel:+918929266960" style={{ color: 'inherit', textDecoration: 'none' }}>+91 8929266960</a>
                      <br />
                      
                    </p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">⏰</div>
                  <div>
                    <h3>Response Time</h3>
                    <p>Within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <a href="#" className="social-link">LinkedIn</a>
                <a href="#" className="social-link">Twitter</a>
                <a href="#" className="social-link">Instagram</a>
              </div>
            </motion.div>

            <motion.div
              className="contact-form-container"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 9876543210"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="service">Service Type *</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="basic">Basic Portfolio - ₹2000</option>
                      <option value="advanced">Advanced Portfolio (Netflix-themed) - ₹2500</option>
                      <option value="customized">Customized Portfolio (with chat, email) - ₹3000+</option>
                      <option value="other">Other / Custom Requirements</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="budget">Budget Range *</label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select budget range</option>
                    <option value="basic">₹2000 - Basic Portfolio</option>
                    <option value="advanced">₹2500 - Advanced Portfolio</option>
                    <option value="customized">₹3000+ - Customized Portfolio</option>
                    <option value="custom">Custom Quote</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Project Details *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Tell us about your project, requirements, timeline, and any specific design preferences..."
                  ></textarea>
                </div>

                <div className="form-group">
                  <label htmlFor="files" className="file-label">
                    Upload Files (Resume, Portfolio Samples, etc.)
                  </label>
                  <div className="file-upload">
                    <input
                      type="file"
                      id="files"
                      name="files"
                      onChange={handleChange}
                      multiple
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    />
                    <div className="file-upload-text">
                      <span>📎</span>
                      <span>Click to upload or drag and drop</span>
                    </div>
                  </div>
                </div>

                {submitted && (
                  <motion.div
                    className="success-message"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    ✓ Thank you! We'll get back to you soon.
                  </motion.div>
                )}

                <button type="submit" className="submit-button">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

