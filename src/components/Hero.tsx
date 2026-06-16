import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Linkedin, ArrowUpRight, ChevronDown, Cpu, TrendingUp, Sparkles, Award, MapPin } from "lucide-react";
import { PERSONAL_INFO } from "../data";

export default function Hero() {
  const [timeStr, setTimeStr] = useState("09:00:00 AM");

  useEffect(() => {
    const updateTime = () => {
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Colombo",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setTimeStr(formatter.format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const triggerScroll = () => {
    const nextSection = document.getElementById("about");
    if (nextSection) {
      const offset = 80;
      const elementPosition = nextSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="home"
      className="relative lg:min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#030303] text-white pt-28 pb-10 lg:py-24"
    >
      {/* Background radial spotlights & architectural grid lines */}
      <div className="absolute inset-0 z-0 bg-dots opacity-30" />
      
      {/* Structural Accent Lines for Editorial Luxury Look */}
      <div className="absolute top-0 left-12 bottom-0 w-[1px] bg-white/[0.03] hidden lg:block" />
      <div className="absolute top-0 left-1/2 bottom-0 w-[1px] bg-white/[0.02] hidden lg:block" />
      <div className="absolute top-1/3 left-0 right-0 h-[1px] bg-white/[0.03] hidden lg:block" />

      {/* Deep luxurious color gradients in background */}
      <div className="absolute top-[5%] left-[-5%] w-[45%] h-[45%] rounded-full bg-rose-900/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[5%] right-[-5%] w-[45%] h-[45%] rounded-full bg-indigo-900/15 blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] left-[25%] w-[250px] h-[250px] bg-[#d4af37]/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col justify-center space-y-6 lg:space-y-12">
        
        {/* Spacer to push content to middle on mobile */}
        <div className="hidden lg:block lg:h-4" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-16 items-center my-auto">
          
          {/* Main Copy Area & Integrated Mobile Avatar */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-4 sm:space-y-5 lg:space-y-6 text-left relative">
            
            {/* Mobile Header: Mini profile capsule & Colombo time (Only visible on Mobile/Tablet < lg) */}
            <div className="flex lg:hidden items-center justify-between w-full pb-3 border-b border-white/5">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full ring-2 ring-[#d4af37]/35 p-0.5 bg-stone-950 flex-shrink-0 relative">
                  <img
                    src={PERSONAL_INFO.avatar}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full rounded-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute bottom-0 right-0 block h-2 w-2 rounded-full bg-emerald-500 ring-1 ring-black animate-pulse" />
                </div>
                <div>
                  <h4 className="font-display font-extrabold text-[#d4af37] text-xs">
                    {PERSONAL_INFO.name}
                  </h4>
                  <div className="flex items-center space-x-1 text-[8px] font-mono text-gray-400">
                    <MapPin size={8} className="text-rose-400" />
                    <span>HQ // Colombo</span>
                  </div>
                </div>
              </div>

              {/* Live Desk Clock Specially Placed */}
              <div className="text-right">
                <span className="block text-[7px] font-mono text-gray-500 tracking-wider uppercase">DESK TIME</span>
                <span className="text-[10px] font-mono text-emerald-400 font-bold">{timeStr}</span>
              </div>
            </div>

            {/* Elegant Minimal Badge (Large Screens Only) */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="hidden lg:inline-flex items-center space-x-2.5 px-3 py-1 rounded-full bg-stone-900/80 border border-stone-800 text-[#d4af37] text-[10px] sm:text-xs tracking-wider uppercase font-mono shadow-inner"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for International Ventures & Alliances</span>
            </motion.div>

            {/* Typography Stack */}
            <div className="space-y-2 sm:space-y-4 w-full">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="space-y-0.5 sm:space-y-1"
              >
                <div className="flex items-center space-x-2">
                  <span className="h-[1px] w-4 lg:w-6 bg-[#d4af37]/60" />
                  <p className="text-[8px] sm:text-[10px] font-mono tracking-widest text-[#d4af37] uppercase">EXECUTING REGIONAL IMPACT</p>
                </div>
                <h1 className="font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5.5rem] tracking-tight leading-none text-white">
                  {PERSONAL_INFO.name}
                </h1>
              </motion.div>

              {/* Roles Spotlight Layout with subtle borders */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.25 }}
                className="flex flex-wrap gap-1 sm:gap-2 pt-0.5"
              >
                <span className="px-2 py-0.5 text-[8px] sm:text-[10px] lg:text-xs font-mono font-medium rounded border border-[#d4af37]/35 bg-[#d4af37]/5 text-[#d4af37] shadow-inner">
                  Software Engineer
                </span>
                <span className="px-2 py-0.5 text-[8px] sm:text-[10px] lg:text-xs font-mono font-medium rounded border border-white/10 bg-white/5 text-gray-300">
                  Business Strategist
                </span>
                <span className="px-2 py-0.5 text-[8px] sm:text-[10px] lg:text-xs font-mono font-medium rounded border border-white/10 bg-white/5 text-gray-300">
                  Entrepreneur
                </span>
                <span className="px-2 py-0.5 text-[8px] sm:text-[10px] lg:text-xs font-mono font-medium rounded border border-[#d4af37]/35 bg-[#d4af37]/5 text-[#d4af37] shadow-inner">
                  CEO
                </span>
              </motion.div>
            </div>

            {/* Structured Pitch Block */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="text-gray-300 text-xs sm:text-sm lg:text-base leading-relaxed max-w-2xl font-sans font-light line-clamp-3 sm:line-clamp-none"
            >
              {PERSONAL_INFO.introduction}
            </motion.p>

            {/* Pillars Interactive Matrix */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.45 }}
              className="grid grid-cols-3 gap-2 sm:gap-3 w-full max-w-2xl pt-1 pb-2 sm:pt-2 sm:pb-4"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2.5 p-2 rounded-lg bg-white/[0.012] border border-white/5 hover:border-[#d4af37]/25 hover:bg-stone-900/30 transition-all duration-300 group">
                <div className="p-1 rounded bg-[#d4af37]/10 text-[#d4af37] group-hover:scale-105 transition-transform flex-shrink-0">
                  <Cpu size={11} className="sm:w-3.5 sm:h-3.5" />
                </div>
                <div className="text-left">
                  <p className="text-[7.5px] sm:text-[9.5px] font-bold tracking-wider text-gray-200 group-hover:text-[#d4af37] transition-all line-clamp-1">SYSTEM DESIGN</p>
                  <p className="text-[6.5px] sm:text-[8px] text-gray-500 font-mono">Scalable Stacks</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2.5 p-2 rounded-lg bg-white/[0.012] border border-white/5 hover:border-[#d4af37]/25 hover:bg-stone-900/30 transition-all duration-300 group">
                <div className="p-1 rounded bg-[#d4af37]/10 text-[#d4af37] group-hover:scale-105 transition-transform flex-shrink-0">
                  <TrendingUp size={11} className="sm:w-3.5 sm:h-3.5" />
                </div>
                <div className="text-left">
                  <p className="text-[7.5px] sm:text-[9.5px] font-bold tracking-wider text-gray-200 group-hover:text-[#d4af37] transition-all line-clamp-1">GROWTH</p>
                  <p className="text-[6.5px] sm:text-[8px] text-gray-500 font-mono">Market Ventures</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2.5 p-2 rounded-lg bg-white/[0.012] border border-white/5 hover:border-[#d4af37]/25 hover:bg-stone-900/30 transition-all duration-300 group">
                <div className="p-1 rounded bg-[#d4af37]/10 text-[#d4af37] group-hover:scale-105 transition-transform flex-shrink-0">
                  <Award size={11} className="sm:w-3.5 sm:h-3.5" />
                </div>
                <div className="text-left">
                  <p className="text-[7.5px] sm:text-[9.5px] font-bold tracking-wider text-gray-200 group-hover:text-[#d4af37] transition-all line-clamp-1">STRATEGY</p>
                  <p className="text-[6.5px] sm:text-[8px] text-gray-500 font-mono">Roadmap Vision</p>
                </div>
              </div>
            </motion.div>

            {/* Interaction Layer (CTAs) */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="flex items-center space-x-2 sm:space-x-3.5 pt-1 w-full"
            >
              <button
                id="btn-view-portfolio-new"
                onClick={triggerScroll}
                className="group flex items-center justify-center space-x-1.5 px-4 sm:px-6 py-2.5 rounded-full bg-white text-black font-bold text-[10px] sm:text-xs uppercase tracking-wider transition-all duration-300 hover:bg-[#d4af37] hover:shadow-[0_4px_15px_rgba(212,175,55,0.25)] active:scale-95 cursor-pointer flex-1 sm:flex-initial"
              >
                <span>View Portfolio</span>
                <span className="transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
              </button>

              <a
                id="btn-linkedin-connect-new"
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center space-x-1.5 px-4 sm:px-6 py-2.5 rounded-full bg-slate-950 border border-white/10 hover:border-[#d4af37]/45 text-gray-300 hover:text-white font-bold text-[10px] sm:text-xs uppercase tracking-wider transition-all duration-300 active:scale-95 shadow-lg shadow-black/40 flex-1 sm:flex-initial"
              >
                <Linkedin size={11} className="text-[#d4af37] sm:w-3.5 sm:h-3.5" />
                <span>LinkedIn</span>
                <ArrowUpRight size={10} className="opacity-60 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:w-3 sm:h-3" />
              </a>
            </motion.div>

          </div>

          {/* Majestic Standalone Portrait Console (Desktop Only - lg columns 5) */}
          <div className="hidden lg:flex lg:col-span-5 justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative relative-group"
            >
              {/* Refined Shadow Spotlights behind profile */}
              <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-[#d4af37]/30 to-rose-950/20 opacity-60 blur-xl pointer-events-none group-hover:opacity-100 transition duration-1000" />

              {/* Unique Double Grid Frame Plate */}
              <div className="relative w-[310px] h-[390px] xl:w-[350px] xl:h-[440px] rounded-2xl bg-black/40 p-3 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-md">
                
                {/* Embedded Avatar */}
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#101016]">
                  
                  <img
                    id="hero-executive-avatar"
                    src={PERSONAL_INFO.avatar}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover object-top transition duration-700 hover:scale-103"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=640";
                    }}
                  />

                  {/* Gradient shadow mask overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                  {/* Dynamic Status / Location Ribbon */}
                  <div className="absolute top-3 left-3 px-2 py-1 rounded bg-[#0a0a0f]/85 border border-white/10 backdrop-blur-sm flex items-center space-x-1.5 pointer-events-none">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    <span className="font-mono text-[8px] tracking-widest text-[#d4af37] uppercase flex items-center">
                      <MapPin size={8} className="mr-0.5 text-rose-400" />
                      HQ Desk / Colombo
                    </span>
                  </div>

                  {/* High luxury geometric coordinate label box inside portrait */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 p-3 rounded-lg bg-[#0e0e14]/90 border border-white/10 backdrop-blur-md flex items-center justify-between">
                    <div>
                      <div className="flex items-center space-x-1.5">
                        <Sparkles size={10} className="text-[#d4af37] animate-pulse" />
                        <h4 className="font-display font-bold text-[11px] text-white">Nushath Nisardeen</h4>
                      </div>
                      <p className="text-[8px] font-mono text-gray-400 mt-0.5">Software Engineer & CEO // Colombo</p>
                    </div>

                    <div className="text-right flex flex-col items-end">
                      <span className="text-[7.5px] font-mono text-gray-500 tracking-widest uppercase">REGIONAL TIME</span>
                      <span className="text-[9px] font-mono text-[#d4af37] font-semibold">{timeStr}</span>
                    </div>
                  </div>

                </div>

                {/* Technical Corner Brackets */}
                <span className="absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 border-[#d4af37]/45" />
                <span className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-[#d4af37]/45" />
                <span className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-[#d4af37]/45" />
                <span className="absolute bottom-4 right-4 w-3 h-3 border-b-2 border-r-2 border-[#d4af37]/45" />

              </div>
            </motion.div>
          </div>

        </div>

        {/* Scenic Explorer Anchor Scroll Indicator */}
        <div className="flex justify-center pb-2 pt-1">
          <motion.button
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            onClick={triggerScroll}
            className="flex flex-col items-center space-y-0.5 group cursor-pointer focus:outline-none"
          >
            <span className="font-mono text-[7px] sm:text-[8px] tracking-widest text-gray-500 group-hover:text-[#d4af37] transition-all">DISCOVER PLATFORM CONSOLE</span>
            <ChevronDown size={11} className="text-[#d4af37]" />
          </motion.button>
        </div>

      </div>
    </section>
  );
}
