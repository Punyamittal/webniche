import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import './testimonial-modal.css'

interface Testimonial {
  name: string
  role: string
  image: string
  quote: string
  rating?: number
}

interface TestimonialModalProps {
  isOpen: boolean
  onClose: () => void
  testimonial: Testimonial | null
}

export const TestimonialModal: React.FC<TestimonialModalProps> = ({
  isOpen,
  onClose,
  testimonial
}) => {
  if (!testimonial) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="testimonial-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="testimonial-modal-content"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <button className="testimonial-modal-close" onClick={onClose}>
              <X size={24} />
            </button>
            
            <div className="testimonial-modal-body">
              <div className="testimonial-avatar">
                <img src={testimonial.image} alt={testimonial.name} />
              </div>
              
              <div className="testimonial-info">
                <h3 className="testimonial-name">{testimonial.name}</h3>
                <p className="testimonial-role">{testimonial.role}</p>
              </div>
              
              {testimonial.rating && (
                <div className="testimonial-rating">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={i < testimonial.rating! ? 'star filled' : 'star'}
                    >
                      ★
                    </span>
                  ))}
                </div>
              )}
              
              <blockquote className="testimonial-quote">
                "{testimonial.quote}"
              </blockquote>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default TestimonialModal

