import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, Heart, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer id="main-footer" className="py-12 border-t border-zinc-800/80 bg-[#060910] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-800/80">
          
          {/* Branding / Monogram */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-mono font-bold text-xs">
              NY
            </div>
            <div>
              <p className="text-sm font-semibold text-white">{PERSONAL_INFO.name}</p>
              <p className="text-xs text-zinc-500 font-mono">CSE Student • {PERSONAL_INFO.college}</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              id="footer-github-link"
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 rounded-lg transition-colors"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              id="footer-linkedin-link"
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-zinc-400 hover:text-cyan-300 bg-zinc-900 border border-zinc-800 rounded-lg transition-colors"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              id="footer-email-link"
              href={PERSONAL_INFO.socials.email}
              className="p-2 text-zinc-400 hover:text-cyan-300 bg-zinc-900 border border-zinc-800 rounded-lg transition-colors"
              aria-label="Send Email"
              title="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              id="footer-scroll-top-btn"
              type="button"
              onClick={scrollToTop}
              className="p-2 text-zinc-400 hover:text-cyan-300 bg-zinc-900 border border-zinc-800 hover:border-cyan-500/40 rounded-lg transition-all ml-2"
              aria-label="Scroll to top"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
          <p>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5">
            <span>Specialization in AI &amp; Machine Learning</span>
            <span className="text-zinc-700">•</span>
            <span className="text-cyan-400">GLA University</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
