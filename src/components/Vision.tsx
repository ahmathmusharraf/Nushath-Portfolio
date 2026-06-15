import React from "react";
import { motion } from "motion/react";
import { Compass, Sparkles, Quote } from "lucide-react";
import { VISION } from "../data";

export default function Vision() {
  return (
    <section
      id="vision"
      className="relative py-12 sm:py-14 bg-[#030303] dark:bg-[#030303] light:bg-white text-white dark:text-white light:text-black overflow-hidden border-t border-white/5"
    >
      <div className="absolute inset-0 z-0 bg-dots opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[150px] bg-[#d4af37]/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl border border-[#d4af37]/20 bg-gradient-to-r from-white/[0.01] to-[#d4af37]/[0.02] p-6 sm:p-8 hover:border-[#d4af37]/35 transition-all duration-300"
        >
          {/* Decorative Sparkle corner badge */}
          <span className="absolute top-4 right-4 text-[#d4af37]/30">
            <Sparkles size={14} className="animate-pulse" />
          </span>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-10">
            {/* Identity & Core Label */}
            <div className="flex-shrink-0 space-y-1.5 text-left md:max-w-[260px]">
              <div className="flex items-center space-x-1.5">
                <span className="p-1 rounded-md bg-[#d4af37]/10 text-[#d4af37]">
                  <Compass size={12} className="animate-spin-slow" />
                </span>
                <span className="font-mono text-[9px] tracking-widest text-[#d4af37] uppercase">CORE OUTLOOK</span>
              </div>
              <h3 className="font-display font-extrabold text-lg sm:text-xl text-white dark:text-white light:text-gray-900 tracking-tight leading-snug">
                {VISION.title}
              </h3>
              <p className="font-mono text-[9px] text-gray-500 uppercase tracking-widest">
                Nushath Nisardeen
              </p>
            </div>

            {/* Accent divider line on desktop */}
            <div className="hidden md:block h-12 w-[1px] bg-gradient-to-b from-transparent via-[#d4af37]/20 to-transparent" />

            {/* Elegant compact quote */}
            <div className="flex-1 text-left relative">
              <Quote className="text-[#d4af37]/10 absolute -top-3 -left-3 w-8 h-8 rotate-180" />
              <p className="relative pl-5 font-serif italic text-sm sm:text-base text-gray-200 dark:text-gray-200 light:text-gray-800 leading-relaxed">
                "{VISION.mission}"
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
