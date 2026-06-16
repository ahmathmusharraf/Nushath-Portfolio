import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Briefcase, GraduationCap, Calendar, ArrowUpRight, ExternalLink, ShieldCheck, Sparkles, Cpu, Award, ChevronLeft, ChevronRight } from "lucide-react";
import { EXPERIENCES, EDUCATIONS } from "../data";

export default function Experience() {
  const [activeTab, setActiveTab] = useState<"experience" | "education">("experience");
  const [selectedExpId, setSelectedExpId] = useState<string>("exp-1");
  const [selectedEduId, setSelectedEduId] = useState<string>("edu-1");
  const switcherRef = useRef<HTMLDivElement>(null);

  // Fetch current datasets
  const currentExp = EXPERIENCES.find((e) => e.id === selectedExpId) || EXPERIENCES[0];
  const currentEdu = EDUCATIONS.find((e) => e.id === selectedEduId) || EDUCATIONS[0];

  const scrollSwitcher = (direction: "left" | "right") => {
    if (switcherRef.current) {
      const scrollAmount = 140;
      switcherRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  const handlePrevItem = () => {
    if (activeTab === "experience") {
      const idx = EXPERIENCES.findIndex((e) => e.id === selectedExpId);
      if (idx > 0) {
        setSelectedExpId(EXPERIENCES[idx - 1].id);
      } else {
        setSelectedExpId(EXPERIENCES[EXPERIENCES.length - 1].id);
      }
    } else {
      const idx = EDUCATIONS.findIndex((e) => e.id === selectedEduId);
      if (idx > 0) {
        setSelectedEduId(EDUCATIONS[idx - 1].id);
      } else {
        setSelectedEduId(EDUCATIONS[EDUCATIONS.length - 1].id);
      }
    }
  };

  const handleNextItem = () => {
    if (activeTab === "experience") {
      const idx = EXPERIENCES.findIndex((e) => e.id === selectedExpId);
      if (idx < EXPERIENCES.length - 1) {
        setSelectedExpId(EXPERIENCES[idx + 1].id);
      } else {
        setSelectedExpId(EXPERIENCES[0].id);
      }
    } else {
      const idx = EDUCATIONS.findIndex((e) => e.id === selectedEduId);
      if (idx < EDUCATIONS.length - 1) {
        setSelectedEduId(EDUCATIONS[idx + 1].id);
      } else {
        setSelectedEduId(EDUCATIONS[0].id);
      }
    }
  };

  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const offset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="experience"
      className="relative flex items-center justify-center overflow-hidden bg-[#030303] text-white py-10 lg:py-16 border-t border-white/5"
    >
      {/* Background Dots & Spotlights */}
      <div className="absolute inset-0 z-0 bg-dots opacity-20 pointer-events-none" />
      <div className="absolute left-[-10%] top-[40%] w-[300px] h-[300px] rounded-full bg-[#d4af37]/3 blur-[100px] pointer-events-none" />
      <div className="absolute right-[-10%] bottom-[10%] w-[250px] h-[250px] rounded-full bg-blue-900/5 blur-[90px] pointer-events-none" />

      {/* Main Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col justify-center space-y-4 lg:space-y-6"
      >
        
        {/* Compact Segment Title on Mobile / Standard on Desktop */}
        <div className="flex items-center justify-between border-b border-white/5 pb-2">
          <div className="text-left">
            <span className="font-mono text-[8px] sm:text-[10px] tracking-widest text-[#d4af37] uppercase">TRACK RECORD // VERIFIED</span>
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-display font-extrabold tracking-tight text-white mt-0.5">
              Experience & Education
            </h2>
          </div>
          <div className="flex items-center space-x-1.5 px-2 py-0.5 rounded-full bg-white/[0.02] border border-white/5 font-mono text-[8px] text-gray-500">
            <ShieldCheck size={9} className="text-[#d4af37]" />
            <span>03 // ACADEMIC & TENURE</span>
          </div>
        </div>

        {/* Master Section Toggle (Experience vs Education) */}
        <div className="flex justify-center w-full">
          <div className="inline-flex p-1 rounded-full bg-stone-900/95 border border-white/5 w-full max-w-md shadow-inner">
            <button
              id="tab-toggle-proc-experience"
              onClick={() => setActiveTab("experience")}
              className={`flex-1 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer ${
                activeTab === "experience"
                  ? "bg-[#d4af37] text-black shadow-md"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Briefcase size={12} />
              <span>Professional</span>
            </button>
            <button
              id="tab-toggle-acad-education"
              onClick={() => setActiveTab("education")}
              className={`flex-1 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer ${
                activeTab === "education"
                  ? "bg-[#d4af37] text-black shadow-md"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <GraduationCap size={12} />
              <span>Academic</span>
            </button>
          </div>
        </div>

        {/* Content Console Card */}
        <div className="flex-1 my-auto max-w-5xl mx-auto w-full rounded-2xl border border-white/5 bg-stone-900/20 backdrop-blur-md overflow-hidden shadow-2xl flex flex-col justify-between h-[58dvh] sm:h-[62dvh] lg:h-auto min-h-[340px] lg:min-h-0">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 h-full lg:divide-x lg:divide-white/5">
            
            {/* COLUMN A (1/3 Width on desktop): Entities Switcher with Mobile Scroll Buttons */}
            <div className="lg:col-span-4 relative bg-black/10 flex flex-col justify-start shrink-0 border-b border-white/5 lg:border-b-0 overflow-hidden">
              
              {/* Scroll Left Helper Button (Mobile only) */}
              <div className="lg:hidden absolute left-1.5 top-1/2 -translate-y-1/2 z-20">
                <button
                  onClick={() => scrollSwitcher("left")}
                  className="p-1.5 rounded-full bg-[#0d0d0f]/90 border border-white/10 text-[#d4af37] shadow-md active:scale-90 transition-all duration-200 flex items-center justify-center cursor-pointer hover:bg-[#d4af37]/20"
                  aria-label="Scroll Left"
                >
                  <ChevronLeft size={12} />
                </button>
              </div>

              {/* Scroll Right Helper Button (Mobile only) */}
              <div className="lg:hidden absolute right-1.5 top-1/2 -translate-y-1/2 z-20">
                <button
                  onClick={() => scrollSwitcher("right")}
                  className="p-1.5 rounded-full bg-[#0d0d0f]/90 border border-white/10 text-[#d4af37] shadow-md active:scale-90 transition-all duration-200 flex items-center justify-center cursor-pointer hover:bg-[#d4af37]/20"
                  aria-label="Scroll Right"
                >
                  <ChevronRight size={12} />
                </button>
              </div>

              {/* Actual switcher track */}
              <div
                ref={switcherRef}
                className="flex flex-row lg:flex-col justify-start gap-2 overflow-x-auto lg:overflow-x-visible scrollbar-none lg:space-y-2.5 p-2.5 sm:p-4 px-8 lg:px-4 w-full"
              >
                
                {activeTab === "experience" ? (
                  EXPERIENCES.map((exp) => {
                    const isSel = exp.id === selectedExpId;
                    return (
                      <button
                        key={exp.id}
                        onClick={() => setSelectedExpId(exp.id)}
                        className={`text-left p-2.5 rounded-lg border transition-all duration-300 flex items-center justify-between relative group cursor-pointer shrink-0 min-w-[200px] lg:w-full lg:min-w-0 ${
                          isSel
                            ? "bg-gradient-to-r from-[#d4af37]/10 to-[#d4af37]/5 border-[#d4af37]/35 text-[#d4af37]"
                            : "bg-white/[0.01] hover:bg-white/[0.04] border-white/5 text-gray-400 hover:text-white"
                        }`}
                      >
                        <div className="flex items-center space-x-2.5 truncate">
                          <span className={`p-1.5 rounded-md ${isSel ? "bg-[#d4af37]/15 text-[#d4af37]" : "bg-white/5 text-gray-500"}`}>
                            <Briefcase size={12} />
                          </span>
                          <div className="truncate">
                            <p className="font-display font-bold text-xs sm:text-[13px] leading-tight truncate">{exp.role}</p>
                            <p className="font-mono text-[9px] text-gray-500 leading-none mt-0.5">{exp.company}</p>
                          </div>
                        </div>
                        <span className="font-mono text-[8px] text-gray-500 hidden sm:block lg:group-hover:translate-x-0.5 transition-transform">
                          {isSel ? "●" : "→"}
                        </span>
                      </button>
                    );
                  })
                ) : (
                  EDUCATIONS.map((edu) => {
                    const isSel = edu.id === selectedEduId;
                    return (
                      <button
                        key={edu.id}
                        onClick={() => setSelectedEduId(edu.id)}
                        className={`text-left p-2.5 rounded-lg border transition-all duration-300 flex items-center justify-between relative group cursor-pointer shrink-0 min-w-[210px] lg:w-full lg:min-w-0 ${
                          isSel
                            ? "bg-gradient-to-r from-[#d4af37]/10 to-[#d4af37]/5 border-[#d4af37]/35 text-[#d4af37]"
                            : "bg-white/[0.01] hover:bg-white/[0.04] border-white/5 text-gray-400 hover:text-white"
                        }`}
                      >
                        <div className="flex items-center space-x-2.5 truncate">
                          <span className={`p-1.5 rounded-md ${isSel ? "bg-[#d4af37]/15 text-[#d4af37]" : "bg-white/5 text-gray-500"}`}>
                            <GraduationCap size={12} />
                          </span>
                          <div className="truncate">
                            <p className="font-display font-bold text-xs sm:text-[13px] leading-tight truncate">{edu.degree.split(" (")[0]}</p>
                            <p className="font-mono text-[9px] text-gray-500 leading-none mt-0.5">{edu.school.split(" UK")[0]}</p>
                          </div>
                        </div>
                        <span className="font-mono text-[8px] text-gray-500 hidden sm:block">
                          {isSel ? "●" : "→"}
                        </span>
                      </button>
                    );
                  })
                )}

                {/* Founder values capsule (Only visible on Desktop lg to fill left rail beautifully) */}
                <div className="hidden lg:block pt-4 mt-auto border-t border-white/5 text-left">
                  <div className="flex items-center space-x-1.5 text-[9px] font-mono text-[#d4af37] font-semibold tracking-wider mb-1.5 uppercase">
                    <Award size={10} />
                    <span>Dual Blueprints</span>
                  </div>
                  <p className="text-[10px] text-gray-500 leading-relaxed font-sans">
                    Theoretical frameworks are validated by software; simultaneously, product models fail without systematic corporate metrics.
                  </p>
                </div>

              </div>
            </div>

            {/* COLUMN B (2/3 Width on desktop): Interactive Detail Display */}
            <div className="lg:col-span-8 p-4 sm:p-5 flex flex-col justify-between overflow-hidden relative">

              <AnimatePresence mode="wait">
                {activeTab === "experience" ? (
                  <motion.div
                    key={`exp-${selectedExpId}`}
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -8 }}
                    transition={{ duration: 0.25 }}
                    className="flex flex-col justify-between h-full space-y-3 sm:space-y-4"
                  >
                    {/* Header Details */}
                    <div className="text-left space-y-1.5">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-display font-extrabold text-[15px] sm:text-lg text-white">
                            {currentExp.role}
                          </h3>
                          <span className="text-gray-600 font-mono text-xs">@</span>
                          {currentExp.companyUrl ? (
                            <a
                              href={currentExp.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center space-x-1 text-xs font-mono font-medium text-[#d4af37] hover:underline"
                            >
                              <span>{currentExp.company}</span>
                              <ExternalLink size={10} />
                            </a>
                          ) : (
                            <span className="text-xs font-mono font-medium text-gray-300">{currentExp.company}</span>
                          )}
                        </div>
                        
                        <div className="inline-flex items-center space-x-1 px-2 py-0.5 rounded bg-white/5 border border-white/5 text-gray-400 font-mono text-[9px]">
                          <Calendar size={10} className="text-[#d4af37] mr-0.5" />
                          <span>{currentExp.period}</span>
                        </div>
                      </div>
                      
                      <p className="text-xs text-gray-400 font-sans leading-relaxed">
                        {currentExp.description}
                      </p>
                    </div>

                    {/* BULLET RESPONSIBILITIES LIST with compact scrollbar bounds */}
                    <div className="flex-1 overflow-y-auto pr-1 text-left space-y-2 max-h-[120px] sm:max-h-[160px] md:max-h-none scrollbar-none">
                      <span className="block text-[8.5px] font-mono text-gray-500 tracking-wider uppercase mb-1">Key Operational Impact:</span>
                      <ul className="space-y-1.5 sm:space-y-2">
                        {currentExp.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-start text-[10.5px] sm:text-xs text-gray-300 leading-normal font-sans">
                            <span className="text-[#d4af37] mr-1.5 text-xs select-none mt-0.5">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills badge bar */}
                    <div className="pt-2 border-t border-white/5 flex flex-wrap gap-1 md:gap-1.5 justify-start">
                      {currentExp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[9px] font-mono px-2 py-0.5 rounded bg-stone-900 text-gray-300 border border-white/5"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Mobile Quick Switcher Row */}
                    <div className="lg:hidden pt-2.5 flex items-center justify-between border-t border-white/5 mt-auto">
                      <span className="text-[9px] font-mono text-gray-500 uppercase tracking-wider">
                        {EXPERIENCES.findIndex(e => e.id === selectedExpId) + 1} / {EXPERIENCES.length} ROLE
                      </span>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={handlePrevItem}
                          className="px-2.5 py-1 flex items-center space-x-1 rounded-md bg-stone-900 hover:bg-stone-800 border border-white/10 text-[#d4af37] text-[10px] font-mono cursor-pointer active:scale-95 transition-all"
                        >
                          <ChevronLeft size={10} />
                          <span>PREV</span>
                        </button>
                        <button
                          onClick={handleNextItem}
                          className="px-2.5 py-1 flex items-center space-x-1 rounded-md bg-stone-900 hover:bg-stone-800 border border-white/10 text-[#d4af37] text-[10px] font-mono cursor-pointer active:scale-95 transition-all"
                        >
                          <span>NEXT</span>
                          <ChevronRight size={10} />
                        </button>
                      </div>
                    </div>

                  </motion.div>
                ) : (
                  <motion.div
                    key={`edu-${selectedEduId}`}
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -8 }}
                    transition={{ duration: 0.25 }}
                    className="flex flex-col justify-between h-full space-y-3 sm:space-y-4"
                  >
                    {/* Header academic */}
                    <div className="text-left space-y-1.5">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <div className="flex items-center space-x-1.5">
                          <h3 className="font-display font-extrabold text-[15px] sm:text-base md:text-lg text-[#d4af37]">
                            {currentEdu.degree}
                          </h3>
                        </div>
                        
                        <div className="inline-flex items-center space-x-1 px-2 py-0.5 rounded bg-white/5 border border-white/5 text-gray-400 font-mono text-[9px]">
                          <Calendar size={10} className="text-[#d4af37]" />
                          <span>{currentEdu.period}</span>
                        </div>
                      </div>

                      <div className="text-[11px] font-mono text-gray-300 flex items-center space-x-1.5">
                        <Cpu size={10} className="text-blue-400" />
                        <span>{currentEdu.school}</span>
                      </div>
                      
                      <p className="text-xs text-gray-400 font-sans leading-relaxed">
                        {currentEdu.description}
                      </p>
                    </div>

                    {/* Academic syllabus list */}
                    <div className="flex-1 overflow-y-auto pr-1 text-left space-y-2 max-h-[120px] sm:max-h-[160px] md:max-h-none scrollbar-none">
                      <span className="block text-[8.5px] font-mono text-gray-500 tracking-wider uppercase mb-1">Focus & Specialized Core Areas:</span>
                      <ul className="space-y-1.5">
                        {currentEdu.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-[10.5px] sm:text-xs text-gray-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]/45 mr-1" />
                            <span className="font-sans">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Foot note badge */}
                    <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-gray-500">
                      <span>Verification Status: Active</span>
                      <span>Graduated & Accredited</span>
                    </div>

                    {/* Mobile Quick Switcher Row */}
                    <div className="lg:hidden pt-2.5 flex items-center justify-between border-t border-white/5 mt-auto">
                      <span className="text-[9px] font-mono text-gray-500 uppercase tracking-wider">
                        {EDUCATIONS.findIndex(e => e.id === selectedEduId) + 1} / {EDUCATIONS.length} DEGREE
                      </span>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={handlePrevItem}
                          className="px-2.5 py-1 flex items-center space-x-1 rounded-md bg-stone-900 hover:bg-stone-800 border border-white/10 text-[#d4af37] text-[10px] font-mono cursor-pointer active:scale-95 transition-all"
                        >
                          <ChevronLeft size={10} />
                          <span>PREV</span>
                        </button>
                        <button
                          onClick={handleNextItem}
                          className="px-2.5 py-1 flex items-center space-x-1 rounded-md bg-stone-900 hover:bg-stone-800 border border-white/10 text-[#d4af37] text-[10px] font-mono cursor-pointer active:scale-95 transition-all"
                        >
                          <span>NEXT</span>
                          <ChevronRight size={10} />
                        </button>
                      </div>
                    </div>

                  </motion.div>
                )}
              </AnimatePresence>

            </div>

          </div>

        </div>

        {/* Dynamic Link Banner to initiate proposal flow */}
        <div className="text-center pt-1 flex items-center justify-between text-[8px] sm:text-[9.5px] font-mono text-gray-500 max-w-4xl mx-auto w-full">
          <div className="flex items-center space-x-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse" />
            <span>DIRECT CHANNEL OPERATIONAL</span>
          </div>
          <button
            id="btn-trigger-secure-connection-proposal"
            onClick={handleScrollToContact}
            className="text-[#d4af37] hover:underline flex items-center space-x-1 uppercase font-semibold cursor-pointer"
          >
            <span>Request Venture Consultation</span>
            <ArrowUpRight size={10} />
          </button>
        </div>

      </motion.div>
    </section>
  );
}
