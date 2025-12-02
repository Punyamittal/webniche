import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { PlusIcon, ShieldCheckIcon } from 'lucide-react'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { BorderTrail } from '../components/ui/border-trail'
import DecryptedText from '../components/ui/DecryptedText'
import { cn } from '../lib/utils'
import './Pricing.css'

const Pricing = () => {
  const plans = [
    {
      name: 'Basic Portfolio',
      price: 2000,
      originalPrice: null,
      discount: null,
      description: 'Perfect for students and beginners. Clean, professional portfolio website.',
      buttonText: 'Get Started',
      buttonVariant: 'outline' as const,
      popular: false,
      features: [
        'Responsive design',
        'Up to 5 sections',
        'Contact form',
        'Social media links',
        'Basic customization',
        '5-7 days delivery'
      ]
    },
    {
      name: 'Advanced Portfolio',
      price: 2500,
      originalPrice: 3000,
      discount: '17% off',
      description: 'Themed or similar premium designs. Eye-catching and modern.',
      buttonText: 'Get Started Now',
      buttonVariant: 'default' as const,
      popular: true,
      features: [
        'Premium theme designs',
        'Unlimited sections',
        'Advanced animations',
        'Video/image galleries',
        'Interactive elements',
        '5-7 days delivery'
      ]
    },
    {
      name: 'Customized Portfolio',
      price: 3000,
      originalPrice: null,
      discount: null,
      description: 'Full customization with chat box, email integrations, and more.',
      buttonText: 'Get Started',
      buttonVariant: 'outline' as const,
      popular: false,
      features: [
        'Chat box integration',
        'Email link-ups',
        'Custom features',
        'API integrations',
        'Priority support',
        '7-10 days delivery'
      ]
    }
  ]

  const faqs = [
    {
      question: 'Can I upgrade my plan later?',
      answer: 'Yes! You can upgrade to a higher plan at any time. We\'ll apply your previous payment as credit.'
    },
    {
      question: 'Do you provide hosting?',
      answer: 'Hosting is not included, but we can help you set up hosting on platforms like Vercel, Netlify, or your preferred provider.'
    },
    {
      question: 'What if I need changes after delivery?',
      answer: 'Each plan includes revision rounds. Additional changes can be made through our support system or by upgrading your plan.'
    },
    {
      question: 'How long does it take?',
      answer: 'Basic Portfolio: 5-7 days, Advanced Portfolio: 5-7 days, Customized Portfolio: 7-10 days. We deliver fast without compromising on quality!'
    },
    {
      question: 'Do you offer payment plans?',
      answer: 'Yes! We offer flexible payment plans for Business plans. Contact us to discuss options.'
    },
    {
      question: 'Can I see examples before ordering?',
      answer: 'Absolutely! Check our Showcase page to see live sample portfolios. You can also view: newstempport.netlify.app, aasthahere.netlify.app, and tumharichawal.netlify.app'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept various payment methods. Contact us at 8929266960 or 9899727395 to discuss payment options that work best for you.'
    },
    {
      question: 'Do you provide hosting and domain?',
      answer: 'Hosting is not included in the base price, but we can help you set up free hosting on platforms like Netlify. Domain purchase (if needed) is separate and we can guide you through it.'
    }
  ]

  return (
    <div className="pricing-page">
      {/* 3D Background Effect - Temporarily disabled for debugging */}
      {/* <div className="pricing-background-effect">
        <Suspense fallback={null}>
          <FluidGlass 
            mode="lens"
            lensProps={{
              scale: 0.25,
              ior: 1.15,
              thickness: 5,
              chromaticAberration: 0.1,
              anisotropy: 0.01
            }}
          />
        </Suspense>
      </div> */}
      
      <section className="pricing-hero-section">
        <div className="pricing-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="pricing-header"
          >
            <div className="pricing-badge-wrapper">
              <div className="pricing-badge">Pricing</div>
            </div>
            <h1 className="pricing-main-title">
              Affordable Portfolio Websites
            </h1>
            <p className="pricing-description">
              Get a professional, beautiful portfolio website at unbeatable prices. Starting from just ₹2000, 
              we create stunning portfolios that help you stand out and land opportunities.
            </p>
          </motion.div>

          <div className="pricing-cards-wrapper">
            <div
              className={cn(
                'pricing-grid-background',
                'pointer-events-none absolute inset-0 size-full',
                'bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)]',
                'bg-[size:32px_32px]',
                '[mask-image:radial-gradient(ellipse_at_center,var(--background)_10%,transparent)]',
              )}
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="pricing-cards-container"
            >
              <div className="pricing-cards-grid">
                {plans.map((plan, index) => (
                  <div
                    key={plan.name}
                    className={cn(
                      'pricing-card-modern',
                      plan.popular && 'pricing-card-popular'
                    )}
                  >
                    {index === 0 && (
                      <>
                        <PlusIcon className="pricing-corner-icon pricing-corner-top-left" />
                        <PlusIcon className="pricing-corner-icon pricing-corner-top-right" />
                        <PlusIcon className="pricing-corner-icon pricing-corner-bottom-left" />
                        <PlusIcon className="pricing-corner-icon pricing-corner-bottom-right" />
                      </>
                    )}

                    {plan.popular && (
                      <BorderTrail
                        style={{
                          boxShadow:
                            '0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)',
                        }}
                        size={100}
                      />
                    )}

                    <div className="pricing-card-content">
                      <div className="pricing-card-header-modern">
                        <div className="pricing-card-title-row">
                          <h3 className="pricing-card-title">{plan.name}</h3>
                          <div className="pricing-discount-badge-wrapper">
                            {plan.originalPrice && (
                              <span className="pricing-original-price">₹{plan.originalPrice.toLocaleString('en-IN')}</span>
                            )}
                            <Badge variant={plan.popular ? 'default' : 'secondary'}>
                              {plan.discount}
                            </Badge>
                          </div>
                        </div>
                        <p className="pricing-card-subtitle">{plan.description}</p>
                      </div>

                      <div className="pricing-card-price-section">
                        <div className="pricing-price-display">
                          <span className="pricing-currency">₹</span>
                          <span className="pricing-amount-large">{plan.price.toLocaleString('en-IN')}</span>
                          <span className="pricing-period">/one-time</span>
                        </div>
                        {plan.features && (
                          <ul className="pricing-features-list">
                            {plan.features.map((feature, idx) => (
                              <li key={idx}>✓ {feature}</li>
                            ))}
                          </ul>
                        )}
                        <Button className="pricing-cta-button" variant={plan.buttonVariant} asChild>
                          <Link to="/contact">{plan.buttonText}</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pricing-footer-note">
                <ShieldCheckIcon className="pricing-shield-icon" />
                <span>Access to all features with no hidden fees</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pricing-faq-section">
        <div className="container">
          <motion.h2
            className="faq-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <DecryptedText
              text="Frequently Asked Questions"
              animateOn="view"
              revealDirection="center"
              speed={80}
              maxIterations={15}
            />
          </motion.h2>
          
          <div className="faq-grid">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                className="faq-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Pricing
