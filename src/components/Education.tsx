import React from 'react';
import { motion } from 'motion/react';
import { 
  GraduationCap, 
  Sparkles,
  Building2,
  Award
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { containerVariants, itemVariants, headerVariants, cardVariants } from '../lib/animation';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative border-t border-zinc-800/60 bg-zinc-950/30">
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
            <GraduationCap className="w-3.5 h-3.5" />
            <span>02. EDUCATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Academic Background
          </h2>
          <p className="mt-3 text-zinc-400 text-base sm:text-lg">
            Foundational academic qualifications and formal engineering education.
          </p>
        </motion.div>

        {/* Education Grid: GLA University on left/top, 10th and 12th cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          custom={{ stagger: 0.12 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
        >
          
          {/* GLA University Main Card */}
          <motion.div variants={itemVariants} className="lg:col-span-7 flex flex-col">
            <div 
              id="education-university-card"
              className="h-full rounded-3xl bg-gradient-to-b from-zinc-900/90 to-zinc-900/60 border border-cyan-500/30 p-8 sm:p-10 shadow-xl backdrop-blur-md relative overflow-hidden flex flex-col justify-between"
            >
              {/* Subtle ambient corner light */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
                    Higher Education
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    GLA University
                  </h3>
                  <p className="text-lg sm:text-xl font-medium text-zinc-200">
                    B.Tech — Computer Science Engineering
                  </p>
                </div>

                {/* Specialization Box */}
                <div className="p-4 sm:p-5 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 space-y-1.5">
                  <div className="flex items-center gap-2 text-indigo-300 text-xs font-mono font-medium uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Specialization</span>
                  </div>
                  <p className="text-base sm:text-lg font-semibold text-white">
                    Artificial Intelligence &amp; Machine Learning
                  </p>
                </div>
              </div>

              {/* Clean bottom note */}
              <div className="pt-6 mt-6 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-500">
                <span>Computer Science &amp; Engineering</span>
                <span className="text-cyan-400">AI &amp; ML</span>
              </div>
            </div>
          </motion.div>

          {/* Academic Performance Cards: 10th and 12th */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            
            {/* 12th Class Card */}
            <motion.div 
              variants={cardVariants}
              id="education-12th-card"
              className="rounded-3xl bg-zinc-900/80 border border-zinc-800/90 hover:border-cyan-500/40 p-7 sm:p-8 backdrop-blur-md transition-all duration-300 relative overflow-hidden flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-medium">
                  Senior Secondary
                </span>
                <div className="w-8 h-8 rounded-xl bg-zinc-800/60 border border-zinc-700/60 flex items-center justify-center text-zinc-400 group-hover:text-cyan-300 transition-colors">
                  <Award className="w-4 h-4" />
                </div>
              </div>

              <div className="my-4">
                <p className="text-sm sm:text-base font-medium text-zinc-300 mb-1">
                  12th
                </p>
                <div className="text-4xl sm:text-5xl font-extrabold font-mono text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                  92%
                </div>
              </div>

              <div className="pt-3 border-t border-zinc-800/60 flex items-center justify-between text-xs font-mono text-zinc-500">
                <span>12th Class</span>
                <span className="text-zinc-400">92%</span>
              </div>
            </motion.div>

            {/* 10th Class Card */}
            <motion.div 
              variants={cardVariants}
              id="education-10th-card"
              className="rounded-3xl bg-zinc-900/80 border border-zinc-800/90 hover:border-cyan-500/40 p-7 sm:p-8 backdrop-blur-md transition-all duration-300 relative overflow-hidden flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-medium">
                  Secondary School
                </span>
                <div className="w-8 h-8 rounded-xl bg-zinc-800/60 border border-zinc-700/60 flex items-center justify-center text-zinc-400 group-hover:text-cyan-300 transition-colors">
                  <Award className="w-4 h-4" />
                </div>
              </div>

              <div className="my-4">
                <p className="text-sm sm:text-base font-medium text-zinc-300 mb-1">
                  10th
                </p>
                <div className="text-4xl sm:text-5xl font-extrabold font-mono text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                  82%
                </div>
              </div>

              <div className="pt-3 border-t border-zinc-800/60 flex items-center justify-between text-xs font-mono text-zinc-500">
                <span>10th Class</span>
                <span className="text-zinc-400">82%</span>
              </div>
            </motion.div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};
