import { ContainerScroll } from '../components/ui/container-scroll-animation'
import { Carousel } from '../components/ui/carousel'
import { NeonOrbs } from '../components/ui/neon-orbs'
import './Templates.css'

const Templates = () => {
  const templates = [
    {
      id: 'playful',
      name: 'Playful & Colorful',
      images: [
        'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=1400&h=720&fit=crop&q=80',
        'https://images.unsplash.com/photo-1557683316-973673baf926?w=1400&h=720&fit=crop&q=80',
        'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1400&h=720&fit=crop&q=80',
        'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=1400&h=720&fit=crop&q=80'
      ],
      title: 'Playful & Colorful',
      subtitle: 'Bright, energetic designs perfect for creative portfolios'
    },
    {
      id: 'corporate',
      name: 'Corporate',
      images: [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&h=720&fit=crop&q=80',
        'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1400&h=720&fit=crop&q=80',
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1400&h=720&fit=crop&q=80',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&h=720&fit=crop&q=80'
      ],
      title: 'Sleek Corporate',
      subtitle: 'Professional and clean layouts for business portfolios'
    },
    {
      id: 'futuristic',
      name: 'Futuristic',
      images: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&h=720&fit=crop&q=80',
        'https://images.unsplash.com/photo-1557683311-eac922347aa1?w=1400&h=720&fit=crop&q=80',
        'https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?w=1400&h=720&fit=crop&q=80',
        'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=1400&h=720&fit=crop&q=80'
      ],
      title: 'Dark Futuristic',
      subtitle: 'Modern dark themes with neon accents and 3D effects'
    },
    {
      id: 'minimal',
      name: 'Minimal',
      images: [
        'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1400&h=720&fit=crop&q=80',
        'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1400&h=720&fit=crop&q=80',
        'https://images.unsplash.com/photo-1557682260-96773eb01377?w=1400&h=720&fit=crop&q=80',
        'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=1400&h=720&fit=crop&q=80'
      ],
      title: 'Minimal Brand',
      subtitle: 'Clean, focused designs emphasizing content and brand'
    }
  ]

  return (
    <div className="templates-page">
      {/* Hero Section with Neon Orbs */}
      <section className="templates-hero-section">
        <div className="templates-hero">
          <NeonOrbs 
            title="PORTFOLIO TEMPLATES"
            subtitle="Choose Your Perfect Design"
            className="min-h-[90vh] md:min-h-screen"
          />
        </div>
      </section>
      
      {/* Templates Grid */}
      {templates.map((template) => (
        <div key={template.id} className="flex flex-col overflow-hidden">
          <ContainerScroll
            titleComponent={
              <>
                <h1 className="text-4xl font-semibold text-white">
                  {template.name} <br />
                  <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                    Template
                  </span>
                </h1>
              </>
            }
          >
            <Carousel
              images={template.images}
              autoPlay={true}
              autoPlayInterval={4000}
              showControls={true}
              showDots={true}
            />
          </ContainerScroll>
        </div>
      ))}
    </div>
  )
}

export default Templates
