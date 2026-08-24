import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FolderGit2, 
  Github, 
  ExternalLink, 
  Layers, 
  ArrowUpRight, 
  X, 
  Globe, 
  GraduationCap, 
  Eye,
  Info,
  Maximize2,
  LayoutDashboard,
  ShoppingCart,
  Bot
} from 'lucide-react';
import { PROJECTS_DATA, PERSONAL_INFO } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { containerVariants, headerVariants, cardVariants, itemVariants } from '../lib/animation';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI / Python':
        return <Bot className="w-3.5 h-3.5 text-emerald-400" />;
      case 'Dashboard / Web Application':
      case 'Web Application / Dashboard':
        return <LayoutDashboard className="w-3.5 h-3.5 text-indigo-400" />;
      case 'Web Application':
        return <ShoppingCart className="w-3.5 h-3.5 text-cyan-400" />;
      case 'Education / Productivity':
        return <GraduationCap className="w-3.5 h-3.5 text-violet-400" />;
      case 'Web Project':
        return <Globe className="w-3.5 h-3.5 text-teal-400" />;
      default:
        return <Layers className="w-3.5 h-3.5 text-cyan-400" />;
    }
  };

  const getCategoryBadgeClass = (category: string) => {
    switch (category) {
      case 'AI / Python':
        return 'bg-emerald-950/70 border-emerald-500/40 text-emerald-300';
      case 'Dashboard / Web Application':
      case 'Web Application / Dashboard':
        return 'bg-indigo-950/70 border-indigo-500/40 text-indigo-300';
      case 'Web Application':
        return 'bg-cyan-950/70 border-cyan-500/40 text-cyan-300';
      case 'Education / Productivity':
        return 'bg-violet-950/70 border-violet-500/40 text-violet-300';
      case 'Web Project':
        return 'bg-teal-950/70 border-teal-500/40 text-teal-300';
      default:
        return 'bg-zinc-800 border-zinc-700 text-zinc-300';
    }
  };

  const getCardGlowClass = (category: string) => {
    switch (category) {
      case 'AI / Python':
        return 'hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.12)]';
      case 'Dashboard / Web Application':
      case 'Web Application / Dashboard':
        return 'hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.12)]';
      case 'Web Application':
        return 'hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.12)]';
      case 'Education / Productivity':
        return 'hover:border-violet-500/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.12)]';
      case 'Web Project':
        return 'hover:border-teal-500/50 hover:shadow-[0_0_30px_rgba(20,184,166,0.12)]';
      default:
        return 'hover:border-zinc-700';
    }
  };

  // Aesthetic Visual Mockup Placeholder Generator for all 5 projects
  const renderCardMockup = (project: ProjectItem) => {
    if (project.imageUrl) {
      return (
        <div className="relative w-full h-44 sm:h-48 overflow-hidden bg-zinc-950">
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      );
    }

    switch (project.id) {
      case 'golf-charity':
        return (
          <div className="relative w-full h-44 sm:h-48 overflow-hidden bg-gradient-to-br from-[#071817] via-[#0d2726] to-[#041212] p-4 flex flex-col justify-between border-b border-zinc-800/80">
            <div className="flex items-center justify-between pb-2 border-b border-teal-900/40">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-teal-400" />
                <div className="w-2 h-2 rounded-full bg-teal-400/50" />
                <div className="w-2 h-2 rounded-full bg-teal-400/30" />
              </div>
              <div className="text-[10px] font-mono text-teal-300/80 px-2 py-0.5 rounded bg-teal-950/60 border border-teal-800/40">
                charity-initiative
              </div>
            </div>
            <div className="my-auto text-center space-y-1.5">
              <div className="inline-flex p-3 rounded-2xl bg-teal-500/15 border border-teal-500/30 text-teal-400 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(20,184,166,0.2)]">
                <Globe className="w-6 h-6" />
              </div>
              <p className="text-xs font-mono text-teal-200/90 font-medium">Charitable Initiative Web Project</p>
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 pt-1">
              <span>Web Project</span>
              <span className="text-teal-400">View Project →</span>
            </div>
          </div>
        );

      case 'paper-builder':
        return (
          <div className="relative w-full h-44 sm:h-48 overflow-hidden bg-gradient-to-br from-[#180f26] via-[#24153b] to-[#0f091a] p-4 flex flex-col justify-between border-b border-zinc-800/80">
            <div className="flex items-center justify-between pb-2 border-b border-violet-900/40">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-violet-400" />
                <div className="w-2 h-2 rounded-full bg-violet-400/50" />
                <div className="w-2 h-2 rounded-full bg-violet-400/30" />
              </div>
              <div className="text-[10px] font-mono text-violet-300/80 px-2 py-0.5 rounded bg-violet-950/60 border border-violet-800/40">
                question-paper.build
              </div>
            </div>
            <div className="my-auto text-center space-y-1.5">
              <div className="inline-flex p-3 rounded-2xl bg-violet-500/15 border border-violet-500/30 text-violet-400 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(139,92,246,0.2)]">
                <GraduationCap className="w-6 h-6" />
              </div>
              <p className="text-xs font-mono text-violet-200/90 font-medium">Structured Paper Preparation</p>
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 pt-1">
              <span>Education / Productivity</span>
              <span className="text-violet-400">View Project →</span>
            </div>
          </div>
        );

      case 'ai-resume-generator':
        return (
          <div className="relative w-full h-44 sm:h-48 overflow-hidden bg-gradient-to-br from-[#061a12] via-[#0d261b] to-[#04120c] p-4 flex flex-col justify-between border-b border-zinc-800/80">
            <div className="flex items-center justify-between pb-2 border-b border-emerald-900/40">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <div className="w-2 h-2 rounded-full bg-emerald-400/50" />
                <div className="w-2 h-2 rounded-full bg-emerald-400/30" />
              </div>
              <div className="text-[10px] font-mono text-emerald-300/80 px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/40">
                python + gemini api
              </div>
            </div>
            <div className="my-auto text-center space-y-1.5">
              <div className="inline-flex p-3 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                <Bot className="w-6 h-6" />
              </div>
              <p className="text-xs font-mono text-emerald-200/90 font-medium">Structured JSON &amp; Portfolio Builder</p>
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 pt-1">
              <span>AI / Python</span>
              <span className="text-emerald-400">View Project →</span>
            </div>
          </div>
        );

      case 'cartshare':
        return (
          <div className="relative w-full h-44 sm:h-48 overflow-hidden bg-gradient-to-br from-[#061821] via-[#0b2430] to-[#041117] p-4 flex flex-col justify-between border-b border-zinc-800/80">
            <div className="flex items-center justify-between pb-2 border-b border-cyan-900/40">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
                <div className="w-2 h-2 rounded-full bg-cyan-400/50" />
                <div className="w-2 h-2 rounded-full bg-cyan-400/30" />
              </div>
              <div className="text-[10px] font-mono text-cyan-300/80 px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/40">
                cart-management
              </div>
            </div>
            <div className="my-auto text-center space-y-1.5">
              <div className="inline-flex p-3 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                <ShoppingCart className="w-6 h-6" />
              </div>
              <p className="text-xs font-mono text-cyan-200/90 font-medium">Shared Shopping Data Interface</p>
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 pt-1">
              <span>Web Application</span>
              <span className="text-cyan-400">View Project →</span>
            </div>
          </div>
        );

      case 'sales-dashboard':
      default:
        return (
          <div className="relative w-full h-44 sm:h-48 overflow-hidden bg-gradient-to-br from-[#0e1026] via-[#161938] to-[#0a0c1a] p-4 flex flex-col justify-between border-b border-zinc-800/80">
            <div className="flex items-center justify-between pb-2 border-b border-indigo-900/40">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-indigo-400" />
                <div className="w-2 h-2 rounded-full bg-indigo-400/50" />
                <div className="w-2 h-2 rounded-full bg-indigo-400/30" />
              </div>
              <div className="text-[10px] font-mono text-indigo-300/80 px-2 py-0.5 rounded bg-indigo-950/60 border border-indigo-800/40">
                dashboard.view
              </div>
            </div>
            <div className="my-auto text-center space-y-1.5">
              <div className="inline-flex p-3 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 text-indigo-400 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(99,102,241,0.2)]">
                <LayoutDashboard className="w-6 h-6" />
              </div>
              <p className="text-xs font-mono text-indigo-200/90 font-medium">Sales Data &amp; Visualizations</p>
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 pt-1">
              <span>Dashboard / Web Application</span>
              <span className="text-indigo-400">View Project →</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="projects" className="py-24 relative border-t border-zinc-800/60 bg-zinc-950/40">
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
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>05. PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Software Projects &amp; <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-rose-400 bg-clip-text text-transparent">
              Development Builds
            </span>
          </h2>
          <p className="mt-3 text-zinc-400 text-base sm:text-lg">
            Practical software projects built around emergency safety, AI assistance, web dashboards, productivity, and web applications.
          </p>
        </motion.div>

        {/* Projects Grid: Staggered with exactly the 7 real projects in order */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          custom={{ stagger: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PROJECTS_DATA.map((project, index) => {
            const isTopProminent = index < 3; // First 3 projects have subtle prominent treatment
            return (
              <motion.div 
                key={project.id}
                variants={cardVariants}
                id={`project-card-${project.id}`}
                className={`group rounded-3xl bg-zinc-900/70 border ${isTopProminent ? 'border-zinc-700/80 shadow-lg' : 'border-zinc-800/90'} ${getCardGlowClass(project.category)} transition-all duration-300 backdrop-blur-md overflow-hidden flex flex-col justify-between`}
              >
                <div>
                  {/* Mockup / Image Preview Area (Clickable to view details) */}
                  <div 
                    onClick={() => setSelectedProject(project)}
                    className="cursor-pointer relative overflow-hidden"
                    title={`Click to view detailed information for ${project.title}`}
                  >
                    {renderCardMockup(project)}
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-mono text-white backdrop-blur-[2px]">
                      <Eye className="w-4 h-4 text-cyan-400" />
                      <span>View Project Details</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-4">
                    
                    {/* Category Pill */}
                    <div className="flex items-center justify-between gap-2">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-mono font-medium ${getCategoryBadgeClass(project.category)}`}>
                        {getCategoryIcon(project.category)}
                        <span>{project.category}</span>
                      </span>

                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="text-zinc-500 hover:text-cyan-300 transition-colors p-1"
                        aria-label={`Expand details for ${project.title}`}
                        title="View Details"
                      >
                        <Maximize2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Project Name */}
                    <h3 
                      onClick={() => setSelectedProject(project)}
                      className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors cursor-pointer"
                    >
                      {project.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-sm text-zinc-400 leading-relaxed line-clamp-3">
                      {project.shortDescription}
                    </p>

                    {/* Technology Tags (Displayed only when known) */}
                    {project.technologies && project.technologies.length > 0 && (
                      <div className="pt-2 flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span 
                            key={tech}
                            className="px-2.5 py-0.5 rounded-md bg-zinc-800/80 border border-zinc-700/60 text-zinc-300 font-mono text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between gap-3">
                    
                    {/* View Details CTA Button */}
                    <button
                      id={`view-btn-${project.id}`}
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 font-mono transition-colors cursor-pointer"
                    >
                      <span>View Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    {/* GitHub & Live Demo: Rendered only when a real URL exists */}
                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-zinc-300 hover:text-white bg-zinc-800 hover:bg-zinc-700 rounded-lg border border-zinc-700 transition-all text-xs cursor-pointer"
                          aria-label={`${project.title} GitHub Repository`}
                          title="GitHub Repository"
                        >
                          <Github className="w-3.5 h-3.5" />
                        </a>
                      )}

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-cyan-300 hover:text-white bg-cyan-950/70 hover:bg-cyan-900 rounded-lg border border-cyan-500/40 transition-all text-xs cursor-pointer"
                          aria-label={`${project.title} Live Demo`}
                          title="Live Demo"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>

                  </div>
                </div>

              </motion.div>
            );
          })}
        </motion.div>

        {/* Centralized Data Notice */}
        <motion.div 
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 text-xs text-zinc-400 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2.5">
            <Info className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>
              All 7 projects are centrally configured in <code className="text-cyan-300 font-mono">src/data/portfolioData.ts</code> for seamless editing of screenshots, technologies, repository URLs, and live demos.
            </span>
          </div>
          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-cyan-400 hover:text-cyan-300 font-mono text-[11px] inline-flex items-center gap-1"
          >
            <span>namishyadav on GitHub</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </motion.div>

      </div>

      {/* ========================================================================= */}
      {/* Interactive Project Detail Modal */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            id="project-detail-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelectedProject(null);
            }}
          >
            <motion.div 
              id="project-detail-modal-dialog"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-2xl bg-[#0e1422] border border-zinc-700/80 rounded-3xl shadow-2xl overflow-hidden my-8"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-project-title"
            >
              {/* Modal Header Bar */}
              <div className="px-6 py-4 bg-zinc-900/90 border-b border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-mono font-medium ${getCategoryBadgeClass(selectedProject.category)}`}>
                    {getCategoryIcon(selectedProject.category)}
                    <span>{selectedProject.category}</span>
                  </span>
                </div>

                <button
                  id="close-project-modal-btn"
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close project modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Preview Area */}
              <div className="bg-zinc-950">
                {renderCardMockup(selectedProject)}
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6">
                
                {/* Project Title & Category */}
                <div>
                  <h3 id="modal-project-title" className="text-2xl sm:text-3xl font-extrabold text-white">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400 mt-1">
                    Category: {selectedProject.category}
                  </p>
                </div>

                {/* Detailed Description */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">Description</h4>
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                    {selectedProject.detailedDescription}
                  </p>
                </div>

                {/* Technologies (Only shown when known) */}
                {selectedProject.technologies && selectedProject.technologies.length > 0 && (
                  <div className="space-y-2 pt-2">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">Known Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 rounded-lg bg-zinc-800/80 border border-zinc-700/70 text-zinc-200 font-mono text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Modal Action Buttons: Only show when URLs exist */}
                <div className="pt-6 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-4">
                  
                  <div className="flex items-center gap-3">
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-semibold border border-zinc-700 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>View GitHub Repository</span>
                      </a>
                    )}

                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-zinc-950 text-xs font-semibold transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Open Live Project</span>
                      </a>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="text-xs text-zinc-400 hover:text-white font-mono transition-colors ml-auto cursor-pointer"
                  >
                    Close (Esc)
                  </button>

                </div>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
