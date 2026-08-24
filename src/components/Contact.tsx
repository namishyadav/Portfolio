import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Send, 
  Github, 
  Linkedin, 
  Copy, 
  Check, 
  MessageSquare, 
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { containerVariants, itemVariants, headerVariants, cardVariants } from '../lib/animation';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct mailto link with encoded parameters
    const subjectLine = encodeURIComponent(formData.subject || `Portfolio Inquiry from ${formData.name}`);
    const bodyContent = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${subjectLine}&body=${bodyContent}`;
    
    // Trigger user email client
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative border-t border-zinc-800/60">
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
            <Mail className="w-3.5 h-3.5" />
            <span>06. GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Connect &amp; <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Start a Conversation
            </span>
          </h2>
          <p className="mt-3 text-zinc-400 text-base sm:text-lg">
            I am always open to discussing new projects, software development opportunities, AI/ML explorations, and tech collaborations.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          custom={{ stagger: 0.12 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
        >
          
          {/* Left Column: Direct Contact & Socials */}
          <motion.div variants={itemVariants} className="lg:col-span-5 space-y-6">
            
            {/* Primary Contact Card */}
            <div className="p-8 rounded-2xl bg-zinc-900/70 border border-zinc-800/90 backdrop-blur-md space-y-6">
              
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">Direct Contact</span>
                <h3 className="text-2xl font-bold text-white">{PERSONAL_INFO.name}</h3>
                <p className="text-xs text-zinc-400">Computer Science Engineering Student • GLA University</p>
              </div>

              {/* Email Box */}
              <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 space-y-3">
                <div className="flex items-center justify-between text-xs text-zinc-400">
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-cyan-400" />
                    Official Email
                  </span>
                  <span className="font-mono text-[11px] text-emerald-400">Primary Channel</span>
                </div>

                <div className="flex items-center justify-between gap-2">
                  <a 
                    id="contact-email-link"
                    href={PERSONAL_INFO.socials.email}
                    className="font-mono text-sm sm:text-base text-zinc-200 hover:text-cyan-300 transition-colors break-all"
                  >
                    {PERSONAL_INFO.email}
                  </a>

                  <button
                    id="contact-copy-email-btn"
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white border border-zinc-700 transition-all shrink-0 cursor-pointer"
                    title="Copy Email"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Social Channels */}
              <div className="space-y-3">
                <h4 className="text-xs uppercase font-mono tracking-wider text-zinc-400">Social Profiles</h4>

                {/* GitHub Button */}
                <a
                  id="contact-github-btn"
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-zinc-950/60 hover:bg-zinc-800/80 border border-zinc-800 hover:border-zinc-700 transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-200 group-hover:text-white">
                      <Github className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">GitHub</p>
                      <p className="text-xs text-zinc-400 font-mono">github.com/namishyadav</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* LinkedIn Button */}
                <a
                  id="contact-linkedin-btn"
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-zinc-950/60 hover:bg-zinc-800/80 border border-zinc-800 hover:border-cyan-500/40 transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-950/40 border border-blue-500/30 flex items-center justify-center text-cyan-400 group-hover:text-cyan-300">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">LinkedIn</p>
                      <p className="text-xs text-zinc-400 font-mono">linkedin.com/in/namishyadav</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

              </div>

            </div>
          </motion.div>

          {/* Right Column: Interactive Contact Form */}
          <motion.div variants={itemVariants} className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-zinc-900/60 border border-zinc-800/90 backdrop-blur-md relative">
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-cyan-400" />
                  <span>Send a Direct Message</span>
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Fill out the form below to quickly reach out via email.
                </p>
              </div>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 flex items-center gap-3 text-emerald-300 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <p className="font-semibold">Message prepared!</p>
                    <p className="text-xs text-emerald-400/90">Your email client has been opened with your pre-filled inquiry.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-wider text-zinc-300">
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950/80 border border-zinc-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm text-white placeholder-zinc-600 outline-none transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-wider text-zinc-300">
                      Your Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950/80 border border-zinc-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm text-white placeholder-zinc-600 outline-none transition-all"
                    />
                  </div>

                </div>

                {/* Subject Input */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-subject" className="block text-xs font-mono uppercase tracking-wider text-zinc-300">
                    Subject / Topic
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    placeholder="e.g. Internship Opportunity / Project Collaboration"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950/80 border border-zinc-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm text-white placeholder-zinc-600 outline-none transition-all"
                  />
                </div>

                {/* Message Input */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-wider text-zinc-300">
                    Your Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Type your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950/80 border border-zinc-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm text-white placeholder-zinc-600 outline-none transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  id="contact-submit-btn"
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-semibold text-sm transition-all duration-200 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-[11px] text-center text-zinc-400">
                  Sends directly to <span className="font-mono text-zinc-300">{PERSONAL_INFO.email}</span>
                </p>

              </form>

            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};
