import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import { Terminal, Lightbulb, BarChart3, Star, Sparkles, Sliders, ShieldAlert, Award, Compass } from "lucide-react";
import { SKILL_CATEGORIES } from "../data";

interface SkillBarProps {
  key?: string;
  name: string;
  level: number;
  delay: number;
}

function SkillPercentBar({ name, level, delay }: SkillBarProps) {
  const barRef = useRef(null);
  const isInView = useInView(barRef, { once: true, amount: 0.1 });
  const [currentPercent, setCurrentPercent] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = level;
      const duration = 1200; // ms
      const incrementTime = Math.max(Math.floor(duration / end), 12);
      
      const timer = setInterval(() => {
        start += 1;
        if (start >= end) {
          setCurrentPercent(end);
          clearInterval(timer);
        } else {
          setCurrentPercent(start);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, level]);

  return (
    <div className="space-y-1 sm:space-y-1.5 text-left" ref={barRef}>
      <div className="flex justify-between items-center text-[10px] sm:text-xs">
        <span className="font-sans font-semibold text-gray-200 tracking-wide truncate pr-2">
          {name}
        </span>
        <span className="font-mono text-[#d4af37] font-bold shrink-0">{currentPercent}%</span>
      </div>
      
      {/* Track and Level slider bar */}
      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden relative border border-white/5">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: delay, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-[#d4af37] via-amber-500 to-amber-300 relative"
        >
          {/* subtle moving shine on level bar */}
          <span className="absolute inset-x-0 bottom-0 top-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
        </motion.div>
      </div>
    </div>
  );
}

export default function Skills() {
  const [selectedCat, setSelectedCat] = useState<string>("tech");

  const activeCategory = SKILL_CATEGORIES.find((cat) => cat.id === selectedCat) || SKILL_CATEGORIES[0];

  const getCategoryHeaderIcon = (id: string, size = 16) => {
    switch (id) {
      case "tech":
        return <Terminal className="text-blue-400" size={size} />;
      case "business":
        return <BarChart3 className="text-purple-400" size={size} />;
      case "professional":
        return <Lightbulb className="text-[#d4af37]" size={size} />;
      default:
        return <Star className="text-[#d4af37]" size={size} />;
    }
  };

  const getCategoryThemeClass = (id: string) => {
    switch (id) {
      case "tech":
        return "border-blue-500/20 bg-blue-500/[0.01]";
      case "business":
        return "border-purple-500/20 bg-purple-500/[0.01]";
      default:
        return "border-amber-500/20 bg-amber-500/[0.01]";
    }
  };

  return (
    <section
      id="skills"
      className="relative lg:min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#0a0a0c] text-white py-10 lg:py-24 border-t border-white/5"
    >
      {/* Background Dots & Spotlight overlay */}
      <div className="absolute inset-0 z-0 bg-dots opacity-20 pointer-events-none" />
      <div className="absolute left-[-5%] bottom-[-5%] w-[350px] h-[350px] bg-[#d4af37]/3 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute right-[-10%] top-[-5%] w-[300px] h-[300px] bg-amber-900/5 rounded-full blur-[100px] pointer-events-none" />

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
            <span className="font-mono text-[8px] sm:text-[10px] tracking-widest text-[#d4af37] uppercase">OPERATIONAL CAPABILITIES</span>
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-display font-extrabold tracking-tight mt-0.5 text-white">
              Professional Skills
            </h2>
          </div>
          <div className="flex items-center space-x-1.5 px-2 py-0.5 rounded-full bg-white/[0.02] border border-white/5 font-mono text-[8px] text-gray-500">
            <Compass size={9} className="text-[#d4af37] animate-spin-slow" />
            <span>05 // INTELLECT MATRIX</span>
          </div>
        </div>

        {/* Dynamic Category Switcher (Horizontal rail optimized for high-density touch targets) */}
        <div className="flex justify-center w-full">
          <div className="inline-flex p-1 rounded-full bg-stone-900/95 border border-white/5 w-full max-w-lg shadow-inner">
            {SKILL_CATEGORIES.map((cat) => {
              const isSel = cat.id === selectedCat;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCat(cat.id)}
                  className={`flex-1 py-1.5 sm:py-2 rounded-full text-[9px] sm:text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center space-x-1.5 cursor-pointer truncate ${
                    isSel
                      ? "bg-[#d4af37] text-black shadow-md font-extrabold"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {getCategoryHeaderIcon(cat.id, 11)}
                  <span className="truncate">{cat.title.split(" ")[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Master Active Content Card Engine */}
        <div className="flex-1 my-auto max-w-4xl mx-auto w-full h-[58dvh] sm:h-[62dvh] lg:h-auto min-h-[340px] lg:min-h-0 flex flex-col justify-between">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 h-full gap-4 lg:gap-8 items-stretch">
            
            {/* Left Console: Key details & Strategy metrics (4 cols on lg, hidden/very compact on mobile) */}
            <div className="lg:col-span-4 rounded-xl border border-white/5 bg-stone-900/10 p-4 flex flex-col justify-between text-left h-full hidden lg:flex">
              <div>
                <div className="flex items-center space-x-2 pb-2.5 border-b border-white/5 mb-3.5">
                  <span className="p-1 rounded bg-[#d4af37]/10 text-[#d4af37] border border-white/5">
                    <Award size={13} />
                  </span>
                  <span className="text-[10px] font-mono tracking-widest text-[#d4af37] uppercase font-bold">EXECUTIVE DECREE</span>
                </div>

                <p className="font-serif italic text-xs text-gray-300 leading-relaxed mb-4">
                  "Skill alignment must span technology, market growth, and core process execution. There are no voids between software and operations."
                </p>

                <div className="space-y-2.5 pt-2">
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span className="text-[10px] font-mono text-gray-400">Verifiably Accredited Stacks</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span className="text-[10px] font-mono text-gray-400">Continuous Pipeline Iteration</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    <span className="text-[10px] font-mono text-gray-400">Multidimensional Leadership</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 text-[9px] font-mono text-gray-500">
                <span>INTELLECTUAL MODEL v2.01</span>
              </div>
            </div>

            {/* Right Interactive Dashboard Sheet (8 cols on lg, full width on MD/mobile) */}
            <div className="lg:col-span-8 flex flex-col justify-between p-4 sm:p-5 rounded-xl border border-white/5 bg-stone-900/20 backdrop-blur-md relative overflow-hidden h-full">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedCat}
                  initial={{ opacity: 0, x: 6 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -6 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col justify-between h-full space-y-3.5"
                >
                  
                  {/* Category description banner inside card */}
                  <div className="flex items-center justify-between pb-2 border-b border-white/5 bg-black/10 -mx-4 px-4 sm:-mx-5 sm:px-5 -mt-4 sm:-mt-5 pt-3 sm:pt-4">
                    <div className="flex items-center space-x-2">
                      <span className="p-1 rounded bg-white/5">
                        {getCategoryHeaderIcon(activeCategory.id, 12)}
                      </span>
                      <span className="font-display font-extrabold text-[#d4af37] text-xs sm:text-sm">
                        {activeCategory.title}
                      </span>
                    </div>
                    <span className="flex items-center space-x-1 font-mono text-[7.5px] text-gray-500 tracking-wider">
                      <Sparkles size={9} className="text-[#d4af37] animate-pulse" />
                      <span>SECURE CRITERIA</span>
                    </span>
                  </div>

                  {/* HIGH DENSITY PROGRESS BARS ENGINE */}
                  <div className="flex-1 overflow-y-auto space-y-3 sm:space-y-4 py-2 pr-1 text-left scrollbar-none max-h-[220px] sm:max-h-[300px] md:max-h-none">
                    {activeCategory.skills.map((skill, idx) => (
                      <SkillPercentBar
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        delay={idx * 0.08}
                      />
                    ))}
                  </div>

                  {/* Micro footer summary */}
                  <div className="flex items-center justify-between pt-2.5 border-t border-white/5 text-[9px] font-mono text-gray-500 mt-auto">
                    <span>ACCURACY CERTIFIED</span>
                    <span className="text-[#d4af37] font-semibold">ACTIVE EXECUTION</span>
                  </div>

                </motion.div>
              </AnimatePresence>

            </div>

          </div>

        </div>

        {/* Informative Grid Row Footer (Compacted beautifully) */}
        <div className="text-center w-full">
          <p className="text-[8.5px] sm:text-[9.5px] leading-relaxed text-gray-500 max-w-2xl mx-auto font-sans font-light">
            "Continuous technological research and strategic planning are core principles. All competencies are backed by actual business deliverables, real platform designs, and robust corporate integrations."
          </p>
        </div>

      </motion.div>
    </section>
  );
}
