import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Chatbot.css'

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm here to help you with portfolio design questions. Ask me about pricing, timelines, or requirements!",
      sender: 'bot'
    }
  ])
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage = { text: input, sender: 'user' }
    setMessages([...messages, userMessage])
    setInput('')

    // Simulate bot response
    setTimeout(() => {
      const responses = {
        'pricing': 'Our pricing starts at ₹2000 for basic portfolios, ₹2500 for advanced portfolios, and ₹3000+ for customized portfolios. Check our Pricing page for details!',
        'timeline': 'Portfolio projects typically take 5-7 business days. Complex projects may take 10-14 days.',
        'requirements': 'Just share your resume, work samples, and any design preferences. We handle the rest!',
        'website': 'Yes! We create custom websites for companies, stores, and multi-purpose projects. Visit our Services page!',
      }

      let response = "I can help with pricing, timelines, requirements, or custom websites. What would you like to know?"
      
      const lowerInput = input.toLowerCase()
      for (const [key, value] of Object.entries(responses)) {
        if (lowerInput.includes(key)) {
          response = value
          break
        }
      }

      setMessages(prev => [...prev, { text: response, sender: 'bot' }])
    }, 1000)
  }

  return (
    <>
      <motion.button
        className="chatbot-button"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ 
          boxShadow: isOpen 
            ? '0 0 20px rgba(255, 255, 255, 0.5)' 
            : '0 0 10px rgba(255, 255, 255, 0.3)' 
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
        {!isOpen && <span className="chatbot-pulse"></span>}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chatbot-window"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <div className="chatbot-header">
              <div className="chatbot-header-info">
                <div className="chatbot-avatar"></div>
                <div>
                  <h3>WebNICHE Assistant</h3>
                  <p>Online • Usually replies instantly</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="chatbot-close">
                ×
              </button>
            </div>

            <div className="chatbot-messages">
              {messages.map((msg, idx) => (
                <div key={idx} className={`message ${msg.sender}`}>
                  {msg.sender === 'bot' && <div className="message-avatar"></div>}
                  <div className="message-content">{msg.text}</div>
                </div>
              ))}
            </div>

            <div className="chatbot-input-container">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="chatbot-input"
              />
              <button onClick={handleSend} className="chatbot-send">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Chatbot

