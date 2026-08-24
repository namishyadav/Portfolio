import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Reveal button once scrolled past hero section (~450px)
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    // Check initial scroll on mount
    toggleVisibility();

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      id="back-to-top-btn"
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top of page"
      className={`fixed bottom-6 right-6 z-40 p-3 rounded-2xl bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/80 hover:border-cyan-500/50 text-zinc-400 hover:text-cyan-300 shadow-xl shadow-black/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.25)] backdrop-blur-md transition-all duration-300 flex items-center justify-center group ${
        isVisible 
          ? 'opacity-100 translate-y-0 pointer-events-auto' 
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      title="Back to Top"
    >
      <ArrowUp className="w-4 h-4 transition-transform duration-200 group-hover:-translate-y-0.5" />
    </button>
  );
};
