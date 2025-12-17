import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket, Instagram, Github, Linkedin } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Updated order: Início, Links, Serviços, Sobre
  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Links', href: '#links' },
    { name: 'Serviços', href: '#services' },
    { name: 'Sobre', href: '#about' },
  ];

  return (
    <>
      {/* Floating Navbar Container - Wider and Taller */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isScrolled ? 'pt-4' : 'pt-6'
        }`}
      >
        <div
          className={`
            relative flex items-center justify-between px-6 md:px-8
            w-[95%] max-w-7xl h-20 md:h-24
            rounded-full transition-all duration-500 border
            ${
              isScrolled
                ? 'bg-white/90 backdrop-blur-2xl border-white/60 shadow-2xl shadow-indigo-900/10'
                : 'bg-white/70 backdrop-blur-xl border-white/50 shadow-xl shadow-black/5'
            }
          `}
        >
          {/* Logo Section - Left Aligned */}
          <a href="#home" className="flex items-center gap-3 group cursor-pointer z-10">
            <div className="relative w-12 h-12 flex items-center justify-center bg-gray-900 text-white rounded-full font-display font-bold text-lg shadow-xl overflow-hidden group-hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 via-purple-600 to-indigo-600 opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">GM</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-gray-900 text-lg leading-none hidden sm:block group-hover:text-indigo-600 transition-colors">
                Gabriel Mota
              </span>
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-medium hidden sm:block">
               CEO
              </span>
            </div>
          </a>

          {/* Desktop Navigation - Absolutely Centered */}
          <div className="hidden lg:flex items-center gap-2 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-5 py-2.5 rounded-full text-sm font-medium text-gray-600 hover:text-indigo-600 hover:bg-white hover:shadow-md transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Actions - Right Aligned */}
          <div className="flex items-center gap-4 pl-4 md:pl-0 z-10">
            
            {/* CTA Button */}
            <a
              href="https://wa.me/5511954802686"
              target="_blank"
              rel="noreferrer"
              className="hidden md:flex items-center gap-3 px-8 py-3.5 bg-gray-900 text-white rounded-full font-bold text-sm shadow-xl shadow-indigo-600/20 hover:shadow-indigo-600/40 hover:-translate-y-1 hover:scale-105 transition-all duration-300 overflow-hidden relative group ring-4 ring-indigo-500/10"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center gap-2.5">
                Solicitar Orçamento 
                <Rocket size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-12 h-12 flex items-center justify-center rounded-full bg-white text-gray-900 hover:bg-gray-50 transition-colors shadow-md border border-gray-100"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div
        className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-3xl transition-all duration-500 lg:hidden flex flex-col items-center justify-center space-y-8 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button 
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-gray-900 hover:bg-gray-200 transition-colors"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col items-center space-y-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-3xl font-display font-bold text-gray-900 hover:text-indigo-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex gap-8 mt-10">
           <a href="https://github.com/gpm0x" target="_blank" rel="noreferrer" className="p-4 bg-gray-100 rounded-full text-gray-700 hover:scale-110 transition-transform">
             <Github size={28} />
           </a>
           <a href="https://www.linkedin.com/in/gabriel-mota-5a0a80353" target="_blank" rel="noreferrer" className="p-4 bg-blue-50 rounded-full text-blue-600 hover:scale-110 transition-transform">
             <Linkedin size={28} />
           </a>
           <a href="https://www.instagram.com/devgabriux/" target="_blank" rel="noreferrer" className="p-4 bg-pink-50 rounded-full text-pink-600 hover:scale-110 transition-transform">
             <Instagram size={28} />
           </a>
        </div>
        
        {/* Mobile CTA */}
        <a
          href="https://wa.me/5511954802686"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 px-10 py-5 bg-gray-900 text-white rounded-full font-bold text-xl shadow-2xl shadow-indigo-500/30 active:scale-95 transition-transform overflow-hidden relative group mt-8"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 opacity-90"></div>
          <span className="relative z-10 flex items-center gap-3">
            Solicitar Orçamento <Rocket size={24} />
          </span>
        </a>
      </div>
    </>
  );
};

export default Navbar;