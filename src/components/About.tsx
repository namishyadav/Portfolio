import React from 'react';
import { motion } from 'motion/react';
import { 
  User, 
  BrainCircuit, 
  Sparkles, 
  CheckCircle2, 
  Rocket, 
  GraduationCap
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { containerVariants, itemVariants, headerVariants, cardVariants } from '../lib/animation';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative border-t border-zinc-800/60 bg-zinc-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-3">
            <User className="w-3.5 h-3.5" />
            <span>01. ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Building Strong Foundations in <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Computer Science &amp; AI
            </span>
          </h2>
          <p className="mt-3 text-zinc-400 text-base sm:text-lg">
            A dedicated engineering student combining core programming discipline with practical software development.
          </p>
        </motion.div>

        {/* Content Grid with Staggered Entrance */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          custom={{ stagger: 0.12 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
        >
          
          {/* Main Narrative Column */}
          <motion.div variants={itemVariants} className="lg:col-span-7 space-y-6">
            <div className="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-sm space-y-5 text-zinc-300 leading-relaxed text-base">
              
              <p className="text-white font-medium text-lg leading-relaxed">
                {PERSONAL_INFO.aboutParagraphs[0]}
              </p>

              <p>
                {PERSONAL_INFO.aboutParagraphs[1]}
              </p>

              <p>
                {PERSONAL_INFO.aboutParagraphs[2]}
              </p>

              {/* Verified Key Focus Points */}
              <div className="pt-4 border-t border-zinc-800 space-y-3">
                <h4 className="text-xs uppercase tracking-wider font-mono text-zinc-400">Core Pillars</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-1 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-zinc-200">Algorithmic Thinking</p>
                      <p className="text-xs text-zinc-400">Solid comprehension in C &amp; Python</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 mt-1 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-zinc-200">AI &amp; ML Fundamentals</p>
                      <p className="text-xs text-zinc-400">Specialized degree curriculum focus</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-zinc-200">Web Basics</p>
                      <p className="text-xs text-zinc-400">Structured HTML, CSS &amp; JavaScript</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 mt-1 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-zinc-200">Modern Tooling</p>
                      <p className="text-xs text-zinc-400">Git version control &amp; Cloud basics</p>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </motion.div>

          {/* Key Facts / Metric Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            
            {/* Card 1: University */}
            <motion.div variants={cardVariants} className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-cyan-500/30 transition-all group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-zinc-400">Current University</p>
                  <h3 className="text-lg font-bold text-white">GLA University</h3>
                  <p className="text-xs text-cyan-400">B.Tech Computer Science Engineering</p>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Specialization */}
            <motion.div variants={cardVariants} className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-indigo-500/30 transition-all group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-105 transition-transform">
                  <BrainCircuit className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-zinc-400">Specialization</p>
                  <h3 className="text-lg font-bold text-white">AI &amp; Machine Learning</h3>
                  <p className="text-xs text-indigo-400">Specialized B.Tech Track</p>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Cloud Credential */}
            <motion.div variants={cardVariants} className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-sky-500/30 transition-all group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-zinc-400">Certification</p>
                  <h3 className="text-lg font-bold text-white">Microsoft Azure AZ-900</h3>
                  <p className="text-xs text-sky-400">Azure Fundamentals Certified</p>
                </div>
              </div>
            </motion.div>

            {/* Card 4: Mindset */}
            <motion.div variants={cardVariants} className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-emerald-500/30 transition-all group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                  <Rocket className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-zinc-400">Objective</p>
                  <h3 className="text-lg font-bold text-white">Hands-on Software</h3>
                  <p className="text-xs text-emerald-400">Continuous Practical Growth</p>
                </div>
              </div>
            </motion.div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};
