import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Mail, 
  Github, 
  Linkedin, 
  Check, 
  Copy,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  heroContainerVariants,
  heroHeadingVariants,
  heroSubtitleVariants,
  itemVariants,
} from '../lib/animation';

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] pt-32 pb-20 flex items-center overflow-hidden"
    >
      {/* Subtle Background Radial Glow — enhanced for asymmetric feel */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_25%_-10%,rgba(6,182,212,0.14),transparent)] pointer-events-none" />
      <div className="absolute top-1/3 left-[20%] -translate-y-1/2 w-[500px] h-[300px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <motion.div 
          variants={heroContainerVariants}
          initial="hidden"
          animate="visible"
          custom={{ stagger: 0.14, delay: 0.15 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center"
        >
          
          {/* Left Column: Main Hero Content — Asymmetric, left-aligned */}
          <div className="lg:col-span-8 space-y-7 text-left">
            
            {/* Status Pill Badge */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.12)] backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
                </span>
                <span>B.Tech CSE</span>
                <span className="text-zinc-600">•</span>
                <span>GLA University</span>
                <span className="text-zinc-600">•</span>
                <span className="text-indigo-300">AI/ML Specialization</span>
              </div>
            </motion.div>

            {/* Main Name Heading — Premium blur-to-sharp animation */}
            <motion.div variants={heroHeadingVariants} className="space-y-3">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
                {PERSONAL_INFO.name}
              </h1>
            </motion.div>

            {/* Gradient Subtitle */}
            <motion.div variants={heroSubtitleVariants}>
              <p className="text-xl sm:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-zinc-200 tracking-tight">
                B.Tech CSE Student • AI/ML Enthusiast
              </p>
            </motion.div>

            {/* Short Confident Intro */}
            <motion.div variants={itemVariants} className="space-y-3 text-zinc-300 max-w-2xl text-base sm:text-lg leading-relaxed">
              <p className="text-zinc-200 font-medium">
                Computer Science Engineering student at GLA University, focused on building practical software projects and exploring Artificial Intelligence &amp; Machine Learning.
              </p>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                I enjoy turning ideas into working projects, strengthening my programming fundamentals, and continuously learning through hands-on development.
              </p>
            </motion.div>

            {/* Call To Action Buttons — Enhanced hover animations */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2">
              <a
                id="hero-view-projects-btn"
                href="#projects"
                onClick={(e) => handleScrollTo(e, 'projects')}
                className="hero-btn-primary inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-semibold text-sm shadow-lg shadow-cyan-500/20 cursor-pointer"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 btn-arrow" />
              </a>

              <a
                id="hero-get-in-touch-btn"
                href="#contact"
                onClick={(e) => handleScrollTo(e, 'contact')}
                className="hero-btn-secondary inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-900/90 text-zinc-200 hover:text-white font-semibold text-sm border border-zinc-700/80 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Get In Touch</span>
              </a>

              {/* Quick Copy Email Button */}
              <button
                id="hero-copy-email-btn"
                onClick={handleCopyEmail}
                type="button"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-zinc-900/50 hover:bg-zinc-800/80 text-zinc-400 hover:text-zinc-200 text-xs font-mono border border-zinc-800 transition-all duration-300 cursor-pointer"
                title="Copy Email Address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>{PERSONAL_INFO.email}</span>
                  </>
                )}
              </button>
            </motion.div>

            {/* Social Links Row — Enhanced hover effects */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 pt-3 text-sm text-zinc-400">
              <span className="text-xs uppercase tracking-wider font-mono text-zinc-500 mr-1">Profiles:</span>
              
              <a
                id="hero-github-link"
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-hero flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900/70 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white text-xs"
                title="GitHub: namishyadav"
              >
                <Github className="w-4 h-4 text-cyan-400" />
                <span className="font-mono">GitHub</span>
              </a>

              <a
                id="hero-linkedin-link"
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-hero flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900/70 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-cyan-300 text-xs"
                title="LinkedIn: namishyadav"
              >
                <Linkedin className="w-4 h-4 text-indigo-400" />
                <span className="font-mono">LinkedIn</span>
              </a>
            </motion.div>

          </div>

          {/* Right Column: Intentional Negative Space */}
          {/* The right side is intentionally empty — asymmetric composition */}
          <div className="lg:col-span-4 hidden lg:block" aria-hidden="true" />

        </motion.div>
      </div>
    </section>
  );
};
