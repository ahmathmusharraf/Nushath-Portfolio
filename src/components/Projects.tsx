import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Code2, ExternalLink, Sparkles, Server, ShoppingCart, TrendingUp, Layers, Cpu, Compass, Globe } from "lucide-react";
import { PROJECTS } from "../data";

export default function Projects() {
  const [activeProjId, setActiveProjId] = useState<string>("proj-1");

  const getCategoryTheme = (category: string) => {
    switch (category) {
      case "Fintech Systems":
        return {
          icon: <TrendingUp className="text-[#d4af37]" size={14} />,
          bg: "bg-[#d4af37]/5",
          border: "border-[#d4af37]/20 hover:border-[#d4af37]/50",
          text: "text-[#d4af37]"
        };
      case "Enterprise SaaS":
        return {
          icon: <ShoppingCart className="text-[#3b82f6]" size={14} />,
          bg: "bg-[#3b82f6]/5",
          border: "border-[#3b82f6]/20 hover:border-[#3b82f6]/50",
          text: "text-[#3b82f6]"
        };
      case "Travel Tech":
        return {
          icon: <Globe className="text-emerald-400" size={14} />,
          bg: "bg-emerald-500/5",
          border: "border-emerald-500/20 hover:border-emerald-500/50",
          text: "text-emerald-400"
        };
      case "Logistics Tech":
        return {
          icon: <Server className="text-purple-400" size={14} />,
          bg: "bg-purple-500/5",
          border: "border-purple-500/20 hover:border-purple-500/50",
          text: "text-purple-400"
        };
      default:
        return {
          icon: <Layers className="text-gray-400" size={14} />,
          bg: "bg-white/5",
          border: "border-white/10 hover:border-white/30",
          text: "text-gray-300"
        };
    }
  };

  const projectShortNames: Record<string, string> = {
    "proj-1": "KALI Gilt",
    "proj-2": "Nuzi SaaS",
    "proj-3": "Orbit Ticket"
  };

  const activeProj = PROJECTS.find((p) => p.id === activeProjId) || PROJECTS[0];
  const activeTheme = getCategoryTheme(activeProj.category);

  return (
    <section
      id="projects"
      className="relative flex items-center justify-center overflow-hidden bg-[#030303] text-white py-10 lg:py-16 border-t border-white/5"
    >
      {/* Background Micro Details for Premium Feel */}
      <div className="absolute inset-0 z-0 bg-dots opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-gradient-to-r from-blue-950/10 to-[#d4af37]/5 rounded-full blur-[90px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col justify-center space-y-4 lg:space-y-10"
      >
        
        {/* Compact Title block */}
        <div className="flex items-center justify-between border-b border-white/5 pb-2">
          <div className="text-left">
            <div className="flex items-center space-x-1.5">
              <span className="p-1 rounded bg-[#d4af37]/10 border border-[#d4af37]/20 text-[#d4af37]">
                <Cpu size={10} className="animate-pulse" />
              </span>
              <p className="text-[8px] sm:text-[10px] font-mono tracking-widest text-[#d4af37] uppercase">DEPLOYED SYSTEMS</p>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-display font-extrabold tracking-tight mt-0.5 text-white">
              Tech Architectures
            </h2>
          </div>
          <div className="flex items-center space-x-1.5 px-2 py-0.5 rounded-full bg-white/[0.02] border border-white/5 font-mono text-[8px] text-gray-500">
            <Compass size={9} className="text-[#d4af37] animate-spin-slow" />
            <span>04 // PORTFOLIO ENTITIES</span>
          </div>
        </div>

        {/* DESKTOP VIEW LAYOUT: 3-Card Bento-Grid (MD & LG and above) */}
        <div className="hidden md:grid grid-cols-3 gap-5 my-auto">
          {PROJECTS.map((project, idx) => {
            const theme = getCategoryTheme(project.category);
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group relative flex flex-col justify-between rounded-xl border p-5 transition-all duration-300 ${
                  project.featured 
                    ? "bg-[#d4af37]/[0.02] border-[#d4af37]/25 hover:border-[#d4af37]/40" 
                    : "bg-white/[0.01] border-white/5 hover:border-white/20"
                } shadow-sm text-left`}
              >
                {/* Active connection light indicator */}
                <span className="absolute top-3 right-3 flex h-1.5 w-1.5">
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${project.featured ? "bg-[#d4af37]" : "bg-emerald-400"}`}></span>
                  <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${project.featured ? "bg-[#d4af37]" : "bg-emerald-400"}`}></span>
                </span>

                {/* Upper Content */}
                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <span className={`p-1 rounded-md ${theme.bg} border border-white/5`}>
                      {theme.icon}
                    </span>
                    <span className="text-[9px] font-mono tracking-wider text-gray-400 uppercase">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base text-white group-hover:text-[#d4af37] transition-colors duration-200 line-clamp-1">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-xs text-gray-400 line-clamp-2 leading-relaxed h-[36px]">
                    {project.description}
                  </p>

                  <div className="mt-3 pt-3 border-t border-white/5">
                    <span className="text-[9px] font-mono text-[#d4af37] uppercase tracking-wider block mb-1">Architecture Summary</span>
                    <p className="text-[11px] text-gray-500 line-clamp-3 leading-normal h-[54px]">
                      {project.longDescription}
                    </p>
                  </div>
                </div>

                {/* Footer Section */}
                <div className="mt-4 pt-4 border-t border-white/5">
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1 mb-4 h-[24px] overflow-hidden">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-gray-400 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="text-[9px] font-mono px-1.5 py-0.5 text-[#d4af37]">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Tiny Interactive Launch Button */}
                  <div className="flex items-center justify-between">
                    <span className="text-[8px] font-mono text-gray-650 uppercase tracking-widest">PROD DEPLOYED</span>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-[11px] font-mono font-semibold text-[#d4af37] hover:text-white transition-all"
                    >
                      <span>Launch Site</span>
                      <ExternalLink size={10} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* MOBILE VIEW LAYOUT: High-Density Single View Console (Small Screens) */}
        <div className="flex md:hidden flex-col justify-between flex-1 my-auto space-y-3 h-[62dvh] min-h-[350px]">
          
          {/* High luxury segmented switcher tab header */}
          <div className="flex p-0.5 rounded-full bg-stone-900/90 border border-white/5 w-full shadow-inner">
            {PROJECTS.map((proj) => (
              <button
                key={proj.id}
                onClick={() => setActiveProjId(proj.id)}
                className={`flex-1 py-1 px-1.5 rounded-full text-[9px] font-mono font-bold tracking-wider uppercase transition-all duration-300 truncate cursor-pointer ${
                  activeProjId === proj.id
                    ? "bg-[#d4af37] text-black font-semibold shadow"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {projectShortNames[proj.id]}
              </button>
            ))}
          </div>

          {/* Core Interactive Card Container */}
          <div className="relative flex-1 rounded-xl border border-white/5 bg-stone-900/25 p-4 flex flex-col justify-between text-left overflow-hidden">
            
            {/* Ambient category badge background spotlight */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#d4af37]/2 rounded-full blur-2xl pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeProjId}
                initial={{ opacity: 0, scale: 0.98, y: 4 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -4 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col justify-between h-full space-y-2.5"
              >
                
                {/* Category header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className={`p-1.5 rounded-md ${activeTheme.bg} border border-white/5`}>
                      {activeTheme.icon}
                    </span>
                    <span className="text-[9px] font-mono tracking-wider text-[#d4af37] uppercase font-bold">
                      {activeProj.category}
                    </span>
                  </div>

                  {/* Operational indicator */}
                  <span className="flex items-center space-x-1 px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono text-[7px] border border-emerald-500/10">
                    <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                    <span>SECURE PROD</span>
                  </span>
                </div>

                {/* Titles & main summaries */}
                <div className="space-y-1.5">
                  <h3 className="font-display font-extrabold text-[15px] sm:text-base leading-tight text-white">
                    {activeProj.title}
                  </h3>
                  <p className="text-[11px] text-gray-300 leading-relaxed font-sans line-clamp-3">
                    {activeProj.description}
                  </p>
                </div>

                {/* Engineering architecture subpanel */}
                <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 flex-1 overflow-y-auto max-h-[110px] scrollbar-none text-left">
                  <span className="block text-[8px] font-mono text-gray-500 tracking-wider uppercase mb-1">Architecture Blueprint</span>
                  <p className="text-[10.5px] text-gray-400 leading-relaxed font-sans font-light">
                    {activeProj.longDescription}
                  </p>
                </div>

                {/* Tech Stack Horizontal Carousel */}
                <div className="space-y-1">
                  <span className="block text-[7.5px] font-mono text-gray-500 tracking-wider uppercase">Engineered Stacks</span>
                  <div className="flex flex-wrap gap-1">
                    {activeProj.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-gray-300 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Launch and indicators */}
                <div className="flex items-center justify-between pt-2.5 border-t border-white/5 mt-auto">
                  <span className="text-[7.5px] font-mono text-gray-600 uppercase tracking-widest">AUTHORIZED LINK ACTIVE</span>
                  <a
                    id={`btn-launch-${activeProjId}-mobile`}
                    href={activeProj.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-full bg-white text-black hover:bg-[#d4af37] transition-all font-mono font-bold text-[10px]"
                  >
                    <span>Launch Deployment</span>
                    <ExternalLink size={9} />
                  </a>
                </div>

              </motion.div>
            </AnimatePresence>

          </div>

        </div>

        {/* NDA Footer Message (Compact) */}
        <div className="text-center w-full">
          <p className="text-[8.5px] font-mono text-gray-500 border border-white/5 bg-white/[0.01] rounded-lg py-1.5 px-4 shadow-inner max-w-xl mx-auto">
            🛡️ ARCHITECTURAL INTELLECTUAL PROPERTY PROTECTED BY GLOBAL NDA.
          </p>
        </div>

      </motion.div>
    </section>
  );
}
