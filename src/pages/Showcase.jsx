import { useState } from 'react'
import { motion } from 'framer-motion'
import { RadialIntro } from '../components/ui/radial-intro'
import MagicBento from '../components/ui/magic-bento'
import { TestimonialModal } from '../components/ui/testimonial-modal'
import ColorBends from '../components/ui/color-bends'
import './Showcase.css'

const Showcase = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const testimonials = {
    Designer: {
      name: 'Sarah Chen',
      role: 'Graphic Designer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      quote: 'PortfolioCraft transformed my online presence! The design perfectly captures my creative style and has helped me land several new clients.',
      rating: 5
    },
    Developer: {
      name: 'Alex Rodriguez',
      role: 'Full Stack Developer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      quote: 'As a developer, I needed a portfolio that showcases my technical skills. PortfolioCraft delivered exactly what I needed with a modern, professional design.',
      rating: 5
    },
    Photographer: {
      name: 'Emma Thompson',
      role: 'Professional Photographer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      quote: 'The portfolio they created for me is stunning! It beautifully displays my photography work and has significantly increased my bookings.',
      rating: 5
    },
    Artist: {
      name: 'Marcus Johnson',
      role: 'Digital Artist',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      quote: 'I\'m amazed by the quality and attention to detail. The portfolio truly represents my artistic vision and has opened many opportunities.',
      rating: 5
    },
    Writer: {
      name: 'David Park',
      role: 'Content Writer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      quote: 'The clean, minimal design perfectly showcases my writing portfolio. It\'s professional, easy to navigate, and has impressed all my clients.',
      rating: 5
    },
    Entrepreneur: {
      name: 'Lisa Anderson',
      role: 'Startup Founder',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
      quote: 'PortfolioCraft helped me create a professional online presence for my startup. The design is modern, engaging, and perfectly represents our brand.',
      rating: 5
    },
    Consultant: {
      name: 'James Wilson',
      role: 'Business Consultant',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
      quote: 'The portfolio they built for me is exceptional. It\'s professional, easy to use, and has helped me attract high-value clients.',
      rating: 5
    },
    Freelancer: {
      name: 'Maria Garcia',
      role: 'Freelance Designer',
      image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=400&fit=crop',
      quote: 'As a freelancer, having a standout portfolio is crucial. PortfolioCraft created something truly special that sets me apart from the competition.',
      rating: 5
    }
  }

  const handleItemClick = (item) => {
    const testimonial = testimonials[item.name]
    if (testimonial) {
      setSelectedTestimonial({
        ...testimonial,
        name: testimonial.name,
        role: testimonial.role
      })
      setIsModalOpen(true)
    }
  }

  const projects = [
    {
      id: 1,
      title: 'Creative Designer Portfolio',
      category: 'Professional',
      style: 'Bold & Playful',
      colors: ['#FFE043', '#6729FF', '#FF6B9D'],
      image: 'designer',
      description: 'Vibrant, colorful portfolio for a graphic designer'
    },
    {
      id: 2,
      title: 'Corporate Executive Profile',
      category: 'Business',
      style: 'Sleek Dashboard',
      colors: ['#4ECDC4', '#141414', '#FFFFFF'],
      image: 'corporate',
      description: 'Clean, professional dashboard-style portfolio'
    },
    {
      id: 3,
      title: 'Student Developer Portfolio',
      category: 'Student',
      style: 'Dark Futuristic',
      colors: ['#6729FF', '#141414', '#00FFFF'],
      image: 'developer',
      description: 'Modern dark theme with neon accents'
    },
    {
      id: 4,
      title: 'Photographer Showcase',
      category: 'Creative',
      style: 'Minimal Brand',
      colors: ['#FFFFFF', '#141414', '#ACACAF'],
      image: 'photographer',
      description: 'Clean, minimal design focusing on visuals'
    },
    {
      id: 5,
      title: 'E-commerce Store',
      category: 'Business',
      style: 'Bold & Playful',
      colors: ['#FFE043', '#FF6B35', '#4ECDC4'],
      image: 'store',
      description: 'Colorful, engaging online store design'
    },
    {
      id: 6,
      title: 'SaaS Landing Page',
      category: 'Business',
      style: 'Sleek Dashboard',
      colors: ['#6729FF', '#4ECDC4', '#FFFFFF'],
      image: 'saas',
      description: 'Professional SaaS product landing page'
    }
  ]

  return (
    <div className="showcase-page">
      <section className="showcase-hero">
        <div className="showcase-hero-background">
          <ColorBends
            colors={["#ff5c7a", "#8a5cff", "#00ffd1"]}
            rotation={30}
            speed={0.3}
            scale={1.2}
            frequency={1.4}
            warpStrength={1.2}
            mouseInfluence={0.8}
            parallax={0.6}
            noise={0.08}
            transparent
          />
        </div>
        <motion.div
          className="showcase-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="showcase-title">
            Our <span className="highlight">Work</span>
          </h1>
          <p className="showcase-subtitle">
            Explore our portfolio of stunning designs across different styles and industries
          </p>
        </motion.div>
      </section>

      <section className="projects-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="magic-bento-wrapper"
          >
            <MagicBento
              textAutoHide={true}
              enableStars={true}
              enableSpotlight={true}
              enableBorderGlow={true}
              enableTilt={true}
              enableMagnetism={true}
              clickEffect={true}
              spotlightRadius={300}
              particleCount={12}
              glowColor="103, 41, 255"
              cards={projects.map(project => ({
                color: '#060010',
                title: project.title,
                description: project.description,
                label: project.category
              }))}
            />
          </motion.div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="clients-section">
        <div className="container">
          <motion.div
            className="clients-content"
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
              Trusted by <span className="highlight">Creators</span>
            </motion.h2>
            <motion.p
              className="clients-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              We've helped hundreds of professionals showcase their work
            </motion.p>
            <motion.div
              className="radial-intro-container"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <RadialIntro
                orbitItems={[
                  { id: 1, name: 'Designer', src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop' },
                  { id: 2, name: 'Developer', src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop' },
                  { id: 3, name: 'Photographer', src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop' },
                  { id: 4, name: 'Artist', src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop' },
                  { id: 5, name: 'Writer', src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop' },
                  { id: 6, name: 'Entrepreneur', src: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop' },
                  { id: 7, name: 'Consultant', src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop' },
                  { id: 8, name: 'Freelancer', src: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=400&fit=crop' }
                ]}
                stageSize={380}
                imageSize={65}
                onItemClick={handleItemClick}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Style Showcase */}
      <section className="styles-showcase">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Design Styles We Master
          </motion.h2>
          
          <div className="styles-grid">
            {[
              {
                name: 'Bold & Playful',
                desc: 'Vibrant colors, oversized typography, fun elements',
                example: 'Wellvo-style snack brand UI'
              },
              {
                name: 'Sleek Corporate',
                desc: 'Clean grids, card layouts, professional tone',
                example: 'Finor financial dashboard style'
              },
              {
                name: 'Dark Futuristic',
                desc: 'Neon glows, gradients, depth & 3D effects',
                example: 'Crypto trading platform aesthetic'
              },
              {
                name: 'Minimal Brand',
                desc: 'Logo mockups, color palettes, white space',
                example: 'Minot brand kit layout'
              },
              {
                name: 'Premium 3D Art',
                desc: 'Striking 3D shapes, soft lighting, rich gradients',
                example: 'Simon Sparks portfolio style'
              }
            ].map((style, idx) => (
              <motion.div
                key={idx}
                className="style-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <h3>{style.name}</h3>
                <p>{style.desc}</p>
                <span className="style-example">{style.example}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Modal */}
      <TestimonialModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        testimonial={selectedTestimonial}
      />
    </div>
  )
}

export default Showcase

