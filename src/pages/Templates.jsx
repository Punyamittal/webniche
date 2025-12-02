import { ArtificialHero } from '../components/ui/artificial-hero'
import { FullScreenScrollFX } from '../components/ui/full-screen-scroll-fx'
import ImageAutoSlider from '../components/ui/image-auto-slider'
import './Templates.css'

const Templates = () => {
  const sections = [
    {
      id: 'playful',
      leftLabel: 'Playful',
      title: 'Colorful',
      rightLabel: 'Creative',
      background: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=1920&h=1080&fit=crop&q=80',
    },
    {
      id: 'corporate',
      leftLabel: 'Corporate',
      title: 'Professional',
      rightLabel: 'Business',
      background: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop&q=80',
    },
    {
      id: 'futuristic',
      leftLabel: 'Futuristic',
      title: 'Modern',
      rightLabel: 'Dark',
      background: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop&q=80',
    },
    {
      id: 'minimal',
      leftLabel: 'Minimal',
      title: 'Clean',
      rightLabel: 'Simple',
      background: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1920&h=1080&fit=crop&q=80',
    }
  ]

  return (
    <div className="templates-page">
      {/* Hero Section with Artificial Hero */}
      <section className="templates-hero-section">
        <ArtificialHero 
          title="TEMPLATES"
          leftText="In creativity\nis where\nideas take form"
          rightText="In design\nwe find\ntrue expression"
          bottomText="Portfolio Templates by WebNICHE"
          showNav={false}
        />
      </section>

      {/* First Image Auto Slider - Right to Left (ABOVE FullScreenScrollFX) */}
      <div className="templates-slider-section templates-slider-above">
        <ImageAutoSlider direction="right" speed={20} className="my-12" />
      </div>
      
      {/* Full Screen Scroll FX */}
      <div className="templates-fx-wrapper">
        <FullScreenScrollFX
        sections={sections}
        header={<><div>Portfolio</div><div>Templates</div></>}
        footer={<div>Choose Your Style</div>}
        showProgress={true}
        durations={{ change: 0.7, snap: 800 }}
        colors={{
          text: "rgba(255, 255, 255, 0.95)",
          overlay: "rgba(0, 0, 0, 0.5)",
          pageBg: "#0a0a0a",
          stageBg: "#000000",
        }}
      />
      </div>

      {/* Second Image Auto Slider - Left to Right (BELOW FullScreenScrollFX) */}
      <div className="templates-slider-section templates-slider-below">
        <ImageAutoSlider direction="left" speed={20} className="my-12" />
      </div>
    </div>
  )
}

export default Templates
