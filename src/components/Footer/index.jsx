import { Shield } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about-us" },
        { name: "Careers", href: "/careers" },
        { name: "Our Companies", href: "/our-companies" },
        { name: "Locations", href: "/locations" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Security Guards", href: "/services/security-guards" },
        { name: "Mobile Patrol", href: "/services/mobile-patrol" },
        { name: "Loss Prevention", href: "/services/loss-prevention" },
        { name: "Special Events", href: "/services/special-events" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "/blog" },
        { name: "Podcast", href: "/podcast" },
        { name: "News", href: "/news" },
        { name: "Contact", href: "/contact" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms of Service", href: "/terms-of-service" },
        { name: "Accessibility Policy", href: "/accessibility-policy" },
        { name: "Cookie Policy", href: "/cookie-policy" }
      ]
    }
  ]

  return (
    <footer className="bg-[#0A192F] dark:bg-black text-[rgb(var(--foreground))] transition-colors duration-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-4">
              <Shield className="w-8 h-8 text-[#00A19B]" />
              <div>
                <span className="text-xl font-bold">SEQUOIA</span>
                <span className="text-xl font-bold text-[#00A19B] ml-2">SECURITY</span>
              </div>
            </a>
            <p className="text-gray-400 text-sm">
              Professional security solutions for a safer tomorrow.
            </p>
          </div>

          {/* Footer Links */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-lg font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-[#00A19B] transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Sequoia Security. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="/privacy-policy" className="text-gray-400 hover:text-[#00A19B] text-sm">
                Privacy Policy
              </a>
              <a href="/accessibility-policy" className="text-gray-400 hover:text-[#00A19B] text-sm">
                Accessibility Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-[#00A19B] text-sm">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 