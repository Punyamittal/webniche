import CardNav from './CardNav'
import logo from '../assets/logo.svg'
import './Navbar.css'

const Navbar = () => {
  const items = [
    {
      label: 'Explore',
      bgColor: '#0D0716',
      textColor: '#fff',
      links: [
        { label: 'Templates', href: '/templates', ariaLabel: 'View Templates' },
        { label: 'Showcase', href: '/showcase', ariaLabel: 'View Showcase' },
        { label: 'Services', href: '/services', ariaLabel: 'View Services' }
      ]
    },
    {
      label: 'Pricing & Contact',
      bgColor: '#170D27',
      textColor: '#fff',
      links: [
        { label: 'Compare', href: '/pricing', ariaLabel: 'Compare Pricing' },
        { label: 'Support', href: '/contact', ariaLabel: 'Get Support' }
      ]
    }
  ]

  return (
    <CardNav
      logo={logo}
      logoAlt="WebNICHE Logo"
      items={items}
      baseColor="#fff"
      menuColor="#000"
      buttonBgColor="#111"
      buttonTextColor="#fff"
      ease="power3.out"
      ctaLink="/contact"
      ctaText="Get Started"
    />
  )
}

export default Navbar

