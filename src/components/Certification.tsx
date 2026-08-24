import React from 'react';
import { motion } from 'motion/react';
import { 
  Award, 
  Cloud, 
  ShieldCheck, 
  CheckCircle2, 
  Lock, 
  Layers
} from 'lucide-react';
import { CERTIFICATION_DATA } from '../data/portfolioData';
import { containerVariants, itemVariants, headerVariants, cardVariants } from '../lib/animation';

export const Certification: React.FC = () => {
  return (
    <section id="certification" className="py-24 relative border-t border-zinc-800/60 bg-zinc-950/40">
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
            <Award className="w-3.5 h-3.5" />
            <span>03. PROFESSIONAL CERTIFICATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Industry Recognized <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-sky-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Cloud Credential
            </span>
          </h2>
          <p className="mt-3 text-zinc-400 text-base sm:text-lg">
            Demonstrating foundational mastery of cloud architecture, compute resources, and enterprise governance principles.
          </p>
        </motion.div>

        {/* Certification Hero Card */}
        <motion.div 
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-3xl bg-gradient-to-br from-zinc-900 via-[#0d1424] to-zinc-900 border border-sky-500/30 p-8 sm:p-10 shadow-2xl backdrop-blur-xl overflow-hidden group">
            
            {/* Ambient Azure Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-sky-500/15 transition-all duration-500" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              
              {/* Header with Microsoft & Azure Badges */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-zinc-800/80">
                
                <div className="flex items-center gap-5">
                  
                  {/* Azure Microsoft Icon Box */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-500/20 to-blue-600/30 border border-sky-400/40 flex items-center justify-center text-sky-400 shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-transform shrink-0">
                    <Cloud className="w-9 h-9 text-sky-400" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400">
                        {CERTIFICATION_DATA.issuer}
                      </span>
                      <span className="text-zinc-600">•</span>
                      <span className="text-xs font-mono text-zinc-400">
                        Exam {CERTIFICATION_DATA.badgeCode}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      {CERTIFICATION_DATA.name}
                    </h3>
                  </div>

                </div>

                <div className="flex sm:flex-col items-center sm:items-end justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xs font-mono font-medium shadow-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Certified</span>
                  </span>
                  <span className="text-[11px] font-mono text-zinc-500">
                    Official Microsoft Credential
                  </span>
                </div>

              </div>

              {/* Description */}
              <div className="py-6">
                <p className="text-base text-zinc-300 leading-relaxed">
                  {CERTIFICATION_DATA.description}
                </p>
              </div>

              {/* Topics Validated Grid */}
              <div className="pt-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-4 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-sky-400" />
                  <span>Key Competencies Validated</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {CERTIFICATION_DATA.topicsCovered.map((topic, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-sky-500/30 transition-all text-sm text-zinc-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Summary note */}
              <div className="mt-8 pt-6 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-zinc-500" />
                  <span>Demonstrated foundation in modern enterprise cloud platforms</span>
                </div>
                <div className="font-mono text-sky-400 text-[11px]">
                  AZ-900 • Microsoft Cloud Ecosystem
                </div>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
