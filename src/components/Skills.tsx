import React from 'react';
import { motion } from 'motion/react';
import { 
  Code, 
  Cpu, 
  FileCode2, 
  Layout, 
  Palette, 
  Code2, 
  GitBranch, 
  Check
} from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';
import { containerVariants, itemVariants, headerVariants, cardVariants } from '../lib/animation';

export const Skills: React.FC = () => {
  // Map icon strings to Lucide components
  const renderIcon = (name: string) => {
    switch (name) {
      case 'C':
        return <Cpu className="w-6 h-6 text-cyan-400" />;
      case 'Python':
        return <FileCode2 className="w-6 h-6 text-amber-400" />;
      case 'HTML':
        return <Layout className="w-6 h-6 text-orange-400" />;
      case 'CSS':
        return <Palette className="w-6 h-6 text-sky-400" />;
      case 'JavaScript':
        return <Code2 className="w-6 h-6 text-yellow-400" />;
      case 'Git':
        return <GitBranch className="w-6 h-6 text-rose-400" />;
      default:
        return <Code className="w-6 h-6 text-cyan-400" />;
    }
  };

  const getAccentBorder = (name: string) => {
    switch (name) {
      case 'C':
        return 'group-hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]';
      case 'Python':
        return 'group-hover:border-amber-500/50 hover:shadow-[0_0_20px_rgba(245,158,11,0.15)]';
      case 'HTML':
        return 'group-hover:border-orange-500/50 hover:shadow-[0_0_20px_rgba(249,115,22,0.15)]';
      case 'CSS':
        return 'group-hover:border-sky-500/50 hover:shadow-[0_0_20px_rgba(14,165,233,0.15)]';
      case 'JavaScript':
        return 'group-hover:border-yellow-500/50 hover:shadow-[0_0_20px_rgba(234,179,8,0.15)]';
      case 'Git':
        return 'group-hover:border-rose-500/50 hover:shadow-[0_0_20px_rgba(244,63,94,0.15)]';
      default:
        return 'group-hover:border-cyan-500/50';
    }
  };

  return (
    <section id="skills" className="py-24 relative border-t border-zinc-800/60">
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
            <Code className="w-3.5 h-3.5" />
            <span>04. TECHNICAL SKILLS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Core Programming &amp; <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Technical Stack
            </span>
          </h2>
          <p className="mt-3 text-zinc-400 text-base sm:text-lg">
            Practical programming competencies focusing on algorithmic foundations, clean web markup, dynamic scripting, and version management.
          </p>
        </motion.div>

        {/* Categories Bar */}
        <motion.div 
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-wrap gap-2.5 mb-10 text-xs font-mono"
        >
          <span className="px-3.5 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            Core Languages: C, Python
          </span>
          <span className="px-3.5 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-yellow-400" />
            Web Technologies: HTML, CSS, JavaScript
          </span>
          <span className="px-3.5 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-rose-400" />
            Version Control: Git
          </span>
        </motion.div>

        {/* Skills Cards Grid - Staggered */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          custom={{ stagger: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SKILLS_DATA.map((skill) => (
            <motion.div 
              key={skill.name}
              variants={cardVariants}
              id={`skill-card-${skill.name.toLowerCase()}`}
              className={`group p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/90 ${getAccentBorder(skill.name)} transition-all duration-300 backdrop-blur-sm relative flex flex-col justify-between`}
            >
              <div>
                {/* Header with Icon & Category */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {renderIcon(skill.name)}
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 px-2.5 py-1 rounded-md bg-zinc-800/50 border border-zinc-700/40">
                    {skill.category}
                  </span>
                </div>

                {/* Skill Name & Tagline */}
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {skill.name}
                </h3>
                <p className="text-xs font-mono text-cyan-400/90 mt-1 mb-3">
                  {skill.tagline}
                </p>

                {/* Description */}
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              {/* Bottom Feature Pill */}
              <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-cyan-400" />
                  Active Skillset
                </span>
                <span className="font-mono text-[11px] text-zinc-400">
                  Practiced
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
