import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Briefcase, Code, TrendingUp, Users, Target, Compass, Sparkles } from "lucide-react";
import { STATS } from "../data";

interface CounterProps {
  to: number;
  suffix: string;
}

function StatsCounter({ to, suffix }: CounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const isInView = useInView(elementRef, { once: true, amount: 0.1 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = to;
    if (start === end) return;

    const totalDuration = 1500; // ms
    const incrementTime = Math.max(Math.floor(totalDuration / end), 15);
    
    const timer = setInterval(() => {
      start += Math.ceil((end - start) / 8);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, to]);

  return (
    <span ref={elementRef} className="font-display text-lg sm:text-2xl lg:text-4xl font-extrabold text-[#d4af37] tracking-tight">
      {count}{suffix}
    </span>
  );
}

export default function About() {
  const [activeTab, setActiveTab] = useState("all");

  const bioSlices = [
    {
      id: "all",
      title: "Executive",
      tagline: "Multidisciplinary technical & growth leader.",
      quote: "Blending technical systems development with systematic business models structures capital.",
      paragraphs: [
        "Nushath Nisardeen is a premium software engineer and business strategist operating between complex technical systems architecture and global commercial expansion.",
        "She does not simply construct enterprise software; she builds architectures ready for immediate booking distribution scale, international travel regulations, and precise venture economics."
      ]
    },
    {
      id: "engineering",
      title: "Software Eng",
      tagline: "Robust, scalable, defensive codebases.",
      quote: "Systems must be elegant, modular, error-resilient, and scaled to sustain continuous operations.",
      paragraphs: [
        "Specialized in modern API design, cloud-native deployments, and server architecture with a focused academic training (B.Sc in Software Engineering).",
        "Her structural layouts emphasize clean database patterns, defensive data caching flows, and secure infrastructure. She ensures code remains highly performant Under peak load."
      ]
    },
    {
      id: "business",
      title: "Business Strat",
      tagline: "Corporate governance & market economics.",
      quote: "Strategic management turns technical engines into premium institutional value.",
      paragraphs: [
        "Backed by a Bachelor of Business in Management, Nushath coordinates market expansions, joint-venture formations, and process automations.",
        "Her approach fuses engineering goals with core business parameters, assuring cross-regional corporate viability and continuous enterprise growth."
      ]
    }
  ];

  const getStatIcon = (id: string, size = 16) => {
    switch (id) {
      case "experience":
        return <Briefcase className="text-blue-400" size={size} />;
      case "projects":
        return <Code className="text-purple-400" size={size} />;
      case "businesses":
        return <TrendingUp className="text-emerald-400" size={size} />;
      case "connections":
        return <Users className="text-[#d4af37]" size={size} />;
      default:
        return <Target className="text-indigo-400" size={size} />;
    }
  };

  return (
    <section
      id="about"
      className="relative flex items-center justify-center overflow-hidden bg-[#0a0a0c] text-white py-10 lg:py-16 border-t border-white/5"
    >
      {/* Background Dots & Glow */}
      <div className="absolute inset-0 z-0 bg-dots opacity-20 pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[300px] h-[300px] bg-[#d4af37]/3 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col justify-center space-y-4 lg:space-y-10"
      >
        
        {/* Head Block - Ultra Compact on Mobile */}
        <div className="flex items-center justify-between border-b border-white/5 pb-2">
          <div className="text-left">
            <span className="font-mono text-[8px] sm:text-[10px] tracking-widest text-[#d4af37] uppercase">BIOGRAPHY // PROFILE</span>
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-display font-extrabold tracking-tight text-white mt-0.5">
              About Me
            </h2>
          </div>
          <div className="flex items-center space-x-1.5 px-2 py-0.5 rounded-full bg-white/[0.02] border border-white/5 font-mono text-[8px] text-gray-500">
            <Compass size={9} className="text-emerald-400 animate-spin-slow" />
            <span>02 // GLOBAL PORTFOLIO</span>
          </div>
        </div>

        {/* Content Layout Grid (Combines narrative and stats compactly) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 lg:gap-12 items-start my-auto">
          
          {/* Left Column (Biography Console - Columns 7) */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-3 sm:space-y-4 lg:space-y-6 text-left">
            
            {/* Horizontal Mini-Segment Indicators */}
            <div className="flex border-b border-white/5 pb-px space-x-1 sm:space-x-3 overflow-x-auto scrollbar-none">
              {bioSlices.map((slice) => (
                <button
                  key={slice.id}
                  onClick={() => setActiveTab(slice.id)}
                  className={`pb-2 px-2 text-[9.5px] sm:text-[11px] lg:text-xs font-semibold border-b-2 transition-all shrink-0 cursor-pointer ${
                    activeTab === slice.id
                      ? "border-[#d4af37] text-[#d4af37]"
                      : "border-transparent text-gray-400 hover:text-white"
                  }`}
                >
                  {slice.title}
                </button>
              ))}
            </div>

            {/* Selected segment contents */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-2 lg:space-y-4"
            >
              <p className="text-[10px] sm:text-xs text-[#d4af37] font-mono uppercase tracking-wider">
                💡 {bioSlices.find(s => s.id === activeTab)?.tagline}
              </p>

              {/* Quote Block - Compact format */}
              <div className="pl-3.5 border-l border-[#d4af37]/40 py-0.5 bg-white/[0.01]">
                <p className="font-serif italic text-xs lg:text-[13px] text-gray-300 leading-normal">
                  "{bioSlices.find(s => s.id === activeTab)?.quote}"
                </p>
              </div>

              {/* Summary narrative */}
              <div className="space-y-2">
                {bioSlices.find(s => s.id === activeTab)?.paragraphs.map((p, idx) => (
                  <p key={idx} className="text-gray-400 text-[10.5px] sm:text-xs lg:text-[14px] leading-relaxed font-sans font-light">
                    {p}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* Strategic Vision (Hidden on very small mobile to prioritize one-view bounds, visible on sm+) */}
            <div className="hidden sm:flex items-center space-x-3.5 p-3 rounded-lg bg-white/[0.01] border border-white/5 relative overflow-hidden">
              <span className="p-1.5 rounded bg-emerald-500/10 text-emerald-400 flex-shrink-0">
                <Sparkles size={11} className="animate-pulse" />
              </span>
              <div className="text-left">
                <h4 className="text-[10px] uppercase font-bold text-gray-200 tracking-wider">Strategic Mission</h4>
                <p className="text-[10px] text-gray-400 leading-relaxed mt-0.5">
                  "Leadership is combining technological foresight with capital governance to build operations that sustain global enterprise requirements."
                </p>
              </div>
            </div>

          </div>

          {/* Right Column (Statistics Layout Grid) */}
          {/* Mobile representation: Side-by-side micro panels to occupy zero vertical height. Tablet/Desktop: Grid */}
          <div className="lg:col-span-5 w-full">
            
            {/* Desktop Grid Layout (Full vertical metric keys) */}
            <div className="hidden sm:grid sm:grid-cols-2 gap-3 lg:gap-4 lg:pl-4">
              {STATS.map((stat) => (
                <div
                  key={stat.id}
                  className="rounded-xl p-3.5 border border-white/5 bg-white/[0.01] hover:border-[#d4af37]/20 transition-all duration-300 flex flex-col justify-between min-h-[110px] lg:min-h-[145px] relative group text-left"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="p-1 rounded bg-white/5 text-[#d4af37] border border-white/5">
                      {getStatIcon(stat.id, 14)}
                    </span>
                    <span className="text-[7.5px] font-mono tracking-wider text-gray-500 uppercase">SYS KEY</span>
                  </div>
                  <div>
                    <StatsCounter to={stat.value} suffix={stat.suffix} />
                    <p className="text-[10px] lg:text-xs font-bold text-gray-200 tracking-wide mt-0.5">{stat.label}</p>
                    <p className="text-[8px] lg:text-[10px] text-gray-500 mt-0.5 leading-snug">{stat.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Layout: Horizontal High-Density Bar (Optimized for One-View constraint) */}
            <div className="grid grid-cols-4 gap-1.5 sm:hidden w-full pb-1">
              {STATS.map((stat) => (
                <div
                  key={stat.id}
                  className="rounded-lg p-2 border border-white/5 bg-stone-900/30 flex flex-col justify-between h-[85px] text-left"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[#d4af37]">
                      {getStatIcon(stat.id, 11)}
                    </span>
                    <span className="text-[6.5px] font-mono text-gray-600 font-bold">METRIC</span>
                  </div>
                  <div className="mt-1">
                    <p className="text-[13px] font-display font-extrabold text-[#d4af37] leading-none mb-0.5">
                      {stat.value}{stat.suffix}
                    </p>
                    <p className="text-[7.5px] font-bold text-gray-300 font-sans leading-none truncate">{stat.label.split(" ")[0]}</p>
                    <p className="text-[6.5px] text-gray-500 font-sans leading-none truncate mt-0.5">{stat.description.split(" ")[0]} {stat.description.split(" ")[1] || ""}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* Global verified message banner of executive desk (Slightly smaller, fits within layout depth beautifully) */}
        <div className="text-center">
          <p className="text-[8.5px] font-mono text-gray-500 tracking-widest uppercase">
            🛡️ ACCREDITED STRATEGIC RECORDS REGISTERED // EST. 2022
          </p>
        </div>

      </motion.div>
    </section>
  );
}
