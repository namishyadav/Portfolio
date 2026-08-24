import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { NAV_ITEMS, PERSONAL_INFO } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy logic
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const sectionTop = sectionEl.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isScrolled 
          ? 'bg-[#090D16]/85 backdrop-blur-md border-b border-zinc-800/80 shadow-lg shadow-black/20 py-3.5' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Monogram */}
          <a 
            id="nav-logo"
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 rounded-lg p-1"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-300 font-mono font-bold text-sm group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.35)] transition-all duration-300">
              NY
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-zinc-100 group-hover:text-white transition-colors duration-300 text-sm sm:text-base tracking-tight">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[11px] text-zinc-400 font-mono hidden sm:inline-block">
                GLA University • CSE
              </span>
            </div>
          </a>

          {/* Desktop Nav Links — Enhanced with smooth indicator */}
          <nav className="hidden lg:flex items-center gap-1 bg-zinc-900/60 border border-zinc-800/80 rounded-full px-4 py-1.5 backdrop-blur-md">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.href}
                  id={`nav-link-${sectionId}`}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`nav-link-pill px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-300 ${
                    isActive 
                      ? 'text-cyan-300 bg-cyan-950/50 border border-cyan-500/30 shadow-[0_0_12px_rgba(6,182,212,0.15)]' 
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50 border border-transparent'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs & Socials */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="nav-github-link"
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/70 border border-zinc-800/60 rounded-lg transition-all duration-300"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              id="nav-linkedin-link"
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-zinc-400 hover:text-cyan-300 hover:bg-zinc-800/70 border border-zinc-800/60 rounded-lg transition-all duration-300"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              id="nav-contact-cta"
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500/20 via-indigo-500/20 to-cyan-500/20 hover:from-cyan-500/30 hover:to-indigo-500/30 text-cyan-300 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 shadow-sm group"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            id="mobile-menu-button"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-lg text-zinc-400 hover:text-white bg-zinc-900/80 border border-zinc-800 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div 
          id="mobile-nav-menu"
          className="lg:hidden mt-2 mx-4 p-4 rounded-2xl bg-zinc-900/95 border border-zinc-800 backdrop-blur-xl shadow-2xl space-y-3"
        >
          <div className="flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.href}
                  id={`mobile-nav-${sectionId}`}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 flex items-center justify-between ${
                    isActive 
                      ? 'bg-cyan-950/60 text-cyan-300 border border-cyan-500/30' 
                      : 'text-zinc-300 hover:bg-zinc-800/60 hover:text-white border border-transparent'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-zinc-400 hover:text-white bg-zinc-800/50 rounded-lg border border-zinc-700/50 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-zinc-400 hover:text-cyan-300 bg-zinc-800/50 rounded-lg border border-zinc-700/50 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.socials.email}
                className="p-2 text-zinc-400 hover:text-cyan-300 bg-zinc-800/50 rounded-lg border border-zinc-700/50 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="text-xs font-semibold px-4 py-2 rounded-lg bg-cyan-500 text-zinc-950 hover:bg-cyan-400 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
