import { ContainerScroll } from '../components/ui/container-scroll-animation'
import './Templates.css'

const Templates = () => {
  const templates = [
    {
      id: 'playful',
      name: 'Playful & Colorful',
      image: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=1400&h=720&fit=crop&q=80',
      title: 'Playful & Colorful',
      subtitle: 'Bright, energetic designs perfect for creative portfolios'
    },
    {
      id: 'corporate',
      name: 'Corporate',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&h=720&fit=crop&q=80',
      title: 'Sleek Corporate',
      subtitle: 'Professional and clean layouts for business portfolios'
    },
    {
      id: 'futuristic',
      name: 'Futuristic',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&h=720&fit=crop&q=80',
      title: 'Dark Futuristic',
      subtitle: 'Modern dark themes with neon accents and 3D effects'
    },
    {
      id: 'minimal',
      name: 'Minimal',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1400&h=720&fit=crop&q=80',
      title: 'Minimal Brand',
      subtitle: 'Clean, focused designs emphasizing content and brand'
    }
  ]

  return (
    <div className="templates-page">
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
            <img
              src={template.image}
              alt={`${template.name} template preview`}
              className="mx-auto rounded-2xl object-cover h-full object-left-top w-full"
              draggable={false}
            />
          </ContainerScroll>
        </div>
      ))}
    </div>
  )
}

export default Templates
