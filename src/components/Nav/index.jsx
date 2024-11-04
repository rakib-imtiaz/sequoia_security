import { useState, useEffect } from 'react'
import { Menu, Search, Shield, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ThemeToggle } from '../ui/theme-toggle'

const navigationItems = [
  {
    name: 'ABOUT US',
    href: '/about-us',
    submenu: [
      { name: 'Why Sequoia', href: '/about-us/why-sequoia' },
      { name: 'Leadership & People', href: '/about-us/leadership-and-people' },
      { name: 'Our Care Culture', href: '/about-us/our-care-culture' },
      { name: 'Our Companies', href: '/about-us/our-companies' },
      { name: 'Sequoia Cares', href: '/about-us/sequoia-cares' },
      { name: 'Careers', href: '/about-us/careers' },
    ]
  },
  {
    name: 'SECURITY SERVICES',
    href: '/security-services',
    submenu: [
      { name: 'Guard Services', href: '/security-services/guard-services' },
      { name: 'Mobile Patrol', href: '/security-services/mobile-patrol' },
      { name: 'Loss Prevention', href: '/security-services/loss-prevention' },
      { name: 'Event Security', href: '/security-services/event-security' },
      { name: 'Operations Centers', href: '/security-services/operations-centers' },
    ]
  },
  {
    name: 'INDUSTRIES',
    href: '/industries',
    submenu: [
      { name: 'Aviation', href: '/industries/aviation' },
      { name: 'Government & Infrastructure', href: '/industries/government-and-infrastructure' },
      { name: 'Healthcare', href: '/industries/healthcare' },
      { name: 'Industrial Security', href: '/industries/industrial-security' },
      { name: 'Office & Commercial', href: '/industries/office-and-commercial' },
      { name: 'Post Secondary', href: '/industries/post-secondary' },
      { name: 'Retail & Shopping Malls', href: '/industries/retail-and-shopping-malls' },
      { name: 'Warehouse & Distribution', href: '/industries/warehouse-and-distribution' },
    ]
  },
  {
    name: 'RESOURCES',
    href: '/resources',
    submenu: [
      { name: 'Blog', href: '/blog' },
      { name: 'Podcast', href: '/podcast' },
      { name: 'Locations', href: '/locations' },
    ]
  }
]

const Nav = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeMenu, setActiveMenu] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#000000]/90 backdrop-blur-md' : 'bg-[#000000]'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <Shield className="w-6 h-6 text-[#00A19B]" />
            </div>
            <div className="flex items-center">
              <span className="text-2xl font-bold tracking-wider text-[#707070]">
                SEQUOIA
              </span>
              <span className="text-2xl font-bold tracking-wider text-[#00A19B] ml-2">
                SECURITY
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigationItems.map((item) => (
              <div 
                key={item.name}
                className="relative group"
                onMouseEnter={() => setActiveMenu(item.name)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button className="flex items-center gap-1 text-[#E0E0E0] hover:text-[#00A19B] transition-colors py-8">
                  <span className="text-sm tracking-wider font-medium">{item.name}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                    activeMenu === item.name ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {/* Dropdown Menu */}
                {activeMenu === item.name && (
                  <div className="absolute top-full left-0 w-64 pt-2">
                    <div className="bg-[#000000] border border-[#00A19B]/20 rounded-lg shadow-lg p-2">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-[#E0E0E0] hover:bg-[#00A19B]/10 hover:text-[#00A19B] rounded-md transition-colors"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Search and Mobile Menu */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="text-[#E0E0E0] hover:text-[#00A19B]"
            >
              <Search className="w-5 h-5" />
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden text-[#E0E0E0] hover:text-[#00A19B]">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#000000] border-[#00A19B]/20">
                <nav className="flex flex-col gap-4 mt-8">
                  {navigationItems.map((item) => (
                    <div key={item.name} className="space-y-2">
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-[#E0E0E0] hover:text-[#00A19B] hover:bg-[#00A19B]/10"
                      >
                        {item.name}
                      </Button>
                      <div className="pl-4 space-y-1">
                        {item.submenu.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-[#707070] hover:text-[#00A19B] transition-colors"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Nav