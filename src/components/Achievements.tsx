import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Award, Trophy, ShieldCheck, Zap, Star, HeartHandshake, CheckCircle, Compass, Sparkles, ArrowUpRight } from "lucide-react";
import { ACHIEVEMENTS } from "../data";

export default function Achievements() {
  const [selectedAchId, setSelectedAchId] = useState<string>("ach-1");

  const getAchievementIcon = (category: string, size = 14) => {
    switch (category) {
      case "CEO Leadership":
        return <Trophy className="text-[#d4af37]" size={size} />;
      case "Startup Growth":
        return <Zap className="text-pink-500" size={size} />;
      case "Business Expansion":
        return <Star className="text-cyan-400" size={size} />;
      case "Technology Innovation":
        return <ShieldCheck className="text-emerald-400" size={size} />;
      default:
        return <HeartHandshake className="text-indigo-400" size={size} />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "CEO Leadership":
        return { text: "text-[#d4af37]", bg: "bg-[#d4af37]/10" };
      case "Startup Growth":
        return { text: "text-pink-400", bg: "bg-pink-500/10" };
      case "Business Expansion":
        return { text: "text-cyan-400", bg: "bg-cyan-500/10" };
      case "Technology Innovation":
        return { text: "text-emerald-400", bg: "bg-emerald-500/10" };
      default:
        return { text: "text-indigo-400", bg: "bg-indigo-500/10" };
    }
  };

  const achievementShortNames: Record<string, string> = {
    "ach-1": "Nuzi Growth",
    "ach-2": "Ventures",
    "ach-3": "Orbit Scale",
    "ach-4": "Scale Tech",
    "ach-5": "Alliances"
  };

  const activeAch = ACHIEVEMENTS.find((a) => a.id === selectedAchId) || ACHIEVEMENTS[0];
  const activeColor = getCategoryColor(activeAch.category);

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
      id="achievements"
      className="relative flex items-center justify-center overflow-hidden bg-[#030303] text-white py-10 lg:py-16 border-t border-white/5"
    >
      {/* Background Dots & Glow */}
      <div className="absolute inset-0 z-0 bg-dots opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[250px] h-[250px] bg-[#d4af37]/3 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col justify-center space-y-4 lg:space-y-10"
      >
        
        {/* Compact Segment Title */}
        <div className="flex items-center justify-between border-b border-white/5 pb-2">
          <div className="text-left">
            <div className="flex items-center space-x-1.5">
              <span className="p-0.5 rounded bg-[#d4af37]/15 border border-[#d4af37]/25 text-[#d4af37]">
                <Award size={11} />
              </span>
              <p className="text-[8px] sm:text-[10px] font-mono tracking-widest text-[#d4af37] uppercase">EXECUTIVE LEDGER</p>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-display font-extrabold tracking-tight mt-0.5 text-white">
              Milestones & Achievements
            </h2>
          </div>
          <div className="flex items-center space-x-1.5 px-2 py-0.5 rounded-full bg-white/[0.02] border border-white/5 font-mono text-[8px] text-gray-500">
            <CheckCircle size={9} className="text-emerald-400 animate-pulse" />
            <span>AUDITED & TRACKABLE</span>
          </div>
        </div>

        {/* DESKTOP INTEGRATION: Responsive Multi-Column Board (md & lg) */}
        <div className="hidden md:grid grid-cols-5 gap-3.5 my-auto">
          {ACHIEVEMENTS.map((ach, idx) => (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group relative flex flex-col justify-between rounded-xl bg-white/[0.012] border border-white/5 hover:border-[#d4af37]/25 p-4 transition-all duration-300 hover:shadow-[0_4px_25px_rgba(212,175,55,0.02)] text-left min-h-[210px]"
            >
              <div>
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/5">
                  <div className="flex items-center space-x-1.5">
                    <span className="p-1 rounded bg-white/5">
                      {getAchievementIcon(ach.category, 12)}
                    </span>
                    <span className="font-mono text-[8px] tracking-wide text-gray-400 uppercase">
                      {ach.category.replace("Leadership", "Lead").replace("Expansion", "Expand").replace("Innovation", "Innov").replace("Partnerships", "Partners")}
                    </span>
                  </div>
                  {ach.stat && (
                    <span className="font-mono text-[8.5px] font-bold px-1.5 py-0.5 rounded bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/20">
                      {ach.stat}
                    </span>
                  )}
                </div>

                <h3 className="font-display font-bold text-xs sm:text-[13px] text-white group-hover:text-[#d4af37] transition-all line-clamp-2 leading-snug">
                  {ach.title}
                </h3>

                <p className="mt-2 text-[10.5px] text-gray-400 leading-relaxed font-sans line-clamp-4 font-light">
                  {ach.description}
                </p>
              </div>

              <div className="mt-4 pt-2 border-t border-white/5 flex items-center justify-between">
                <span className="font-mono text-[7px] text-gray-650 tracking-wider">OFFICIAL LEDGER</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 opacity-60 group-hover:opacity-100" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* MOBILE INTEGRATION: High-Density Single View Console (< md) */}
        <div className="flex md:hidden flex-col justify-between flex-1 my-auto space-y-3.5 h-[62dvh] min-h-[350px]">
          
          {/* Executive switcher tab line */}
          <div className="flex p-0.5 rounded-full bg-stone-900/90 border border-white/5 w-full shadow-inner overflow-x-auto scrollbar-none">
            {ACHIEVEMENTS.map((ach) => (
              <button
                key={ach.id}
                onClick={() => setSelectedAchId(ach.id)}
                className={`flex-1 py-1.5 px-2 rounded-full text-[8.5px] font-mono font-bold tracking-wider uppercase transition-all duration-300 truncate cursor-pointer shrink-0 ${
                  selectedAchId === ach.id
                    ? "bg-[#d4af37] text-black font-extrabold shadow"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {achievementShortNames[ach.id]}
              </button>
            ))}
          </div>

          {/* Core high luxury detailing console */}
          <div className="relative flex-1 rounded-xl border border-white/5 bg-stone-900/25 p-4 flex flex-col justify-between text-left overflow-hidden">
            
            {/* Background spotlight */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#d4af37]/2 rounded-full blur-2xl pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedAchId}
                initial={{ opacity: 0, scale: 0.98, y: 4 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -4 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col justify-between h-full space-y-3.5"
              >
                
                {/* Meta indicator header bar */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className={`p-1.5 rounded-md ${activeColor.bg}`}>
                      {getAchievementIcon(activeAch.category, 14)}
                    </span>
                    <span className={`text-[9.5px] font-mono font-bold tracking-wider uppercase ${activeColor.text}`}>
                      {activeAch.category}
                    </span>
                  </div>

                  {activeAch.stat && (
                    <span className="font-mono text-[9px] font-bold px-2 py-0.5 rounded bg-[#d4af37]/15 text-[#d4af37] border border-[#d4af37]/30">
                      {activeAch.stat}
                    </span>
                  )}
                </div>

                {/* Milestone copy layout */}
                <div className="space-y-2">
                  <h3 className="font-display font-extrabold text-[15px] sm:text-base leading-snug text-white">
                    {activeAch.title}
                  </h3>
                  <p className="text-[11.5px] text-gray-300 leading-relaxed font-sans font-light">
                    {activeAch.description}
                  </p>
                </div>

                {/* Secure certification callout */}
                <div className="p-3 rounded-lg bg-black/40 border border-white/5 text-left">
                  <div className="flex items-center space-x-1.5 text-[8.5px] font-mono text-emerald-400 font-semibold uppercase">
                    <Sparkles size={10} className="animate-pulse" />
                    <span>Audited Compliance Verified</span>
                  </div>
                  <p className="text-[9.5px] text-gray-500 font-sans leading-relaxed mt-0.5">
                    This official executive tracking record is fully accredited, registered, and validated against actual enterprise company data and launch assets.
                  </p>
                </div>

                {/* Footer status link */}
                <div className="flex items-center justify-between pt-2.5 border-t border-white/5 mt-auto">
                  <span className="text-[7.5px] font-mono text-gray-600 uppercase tracking-widest">RECORD ACCREDITED</span>
                  <span className="flex items-center space-x-1 font-mono text-[8px] text-[#d4af37] font-semibold">
                    <span>ACTIVE</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                  </span>
                </div>

              </motion.div>
            </AnimatePresence>

          </div>

        </div>

        {/* Global business alliance contact banner (compact format matching one-view mobile bounds) */}
        <div className="mt-1 bg-[#d4af37]/5 border border-[#d4af37]/15 rounded-xl p-3 text-center max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 w-full">
          <div className="flex items-center space-x-2.5 text-left">
            <Award className="text-[#d4af37] w-5 h-5 flex-shrink-0" />
            <div>
              <p className="text-[9px] font-bold text-[#d4af37] tracking-wider font-mono">GLOBAL VENTURES & SPEECHES</p>
              <p className="text-[8.5px] sm:text-[9.5px] text-gray-400 leading-normal font-sans">
                Active strategist driving integrations across European and Middle-East regions.
              </p>
            </div>
          </div>
          <button
            id="btn-alliance-contact-anchor-compact"
            onClick={handleScrollToContact}
            className="text-[9px] sm:text-[10px] font-mono font-extrabold px-3 py-1.5 bg-[#d4af37] text-black rounded-full hover:bg-white hover:text-black transition-all whitespace-nowrap active:scale-95 shadow-md shadow-amber-500/10 cursor-pointer flex items-center space-x-1 w-full sm:w-auto justify-center"
          >
            <span>Initiate alliance</span>
            <ArrowUpRight size={10} />
          </button>
        </div>

      </motion.div>
    </section>
  );
}
