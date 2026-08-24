import React from 'react';
import { BackgroundEffect } from './components/BackgroundEffect';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Certification } from './components/Certification';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#090D16] text-zinc-100 selection:bg-cyan-500/20 selection:text-cyan-200">
      {/* Ambient background glows and grid */}
      <BackgroundEffect />

      {/* Floating Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content" className="relative z-10 flex flex-col">
        <Hero />
        <About />
        <Education />
        <Certification />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Smooth Scroll Back to Top Button */}
      <BackToTop />
    </div>
  );
}
