import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tentang Kami', href: '#tentang' },
    { name: 'Layanan', href: '#layanan' },
    { name: 'Produk', href: '#produk' },
    { name: 'Portofolio', href: '#portofolio' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-primary/95 backdrop-blur-md border-b border-border-subtle h-[72px]' : 'bg-transparent h-[96px]'} flex items-center`}>
      <div className="w-full max-w-7xl mx-auto px-5 md:px-12 lg:px-20 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-9 h-9 bg-accent rounded-sm flex items-center justify-center font-display font-bold text-xl text-white">
            CB
          </div>
          <div className="font-heading font-bold text-lg leading-tight uppercase tracking-wide">
            Chriselindo <br/>
            <span className="text-accent text-[11px] tracking-widest font-display">Baswara Nusantara</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="font-body font-medium text-sm text-steel hover:text-white transition-colors relative group">
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
          <Button variant="primary" className="!py-2.5 !px-6 text-sm">Hubungi Kami</Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-primary-mid border-b border-border-subtle p-5 flex flex-col gap-4 md:hidden shadow-2xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-body font-medium text-lg text-white border-b border-border-subtle pb-3"
            >
              {link.name}
            </a>
          ))}
          <Button variant="primary" className="mt-2 text-sm w-full">Hubungi Kami</Button>
        </div>
      )}
    </nav>
  );
}
