import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles } from "lucide-react";
import { PERSONAL_INFO } from "../data";

export default function Loader({ onFinish }: { onFinish: () => void }) {
  const [percent, setPercent] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [loadingFinished, setLoadingFinished] = useState(false);

  const loadingPhrases = [
    "Compiling Core Systems...",
    "Harmonizing Technology & Strategy...",
    "Aligning Global Logistical Assets...",
    "Structuring Headless Transactions...",
    "Completing Digital Launch..."
  ];

  useEffect(() => {
    // Progress counter interval
    const duration = 2000; // 2 seconds loader
    const intervalTime = 20; 
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setPercent((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    // Text transition interval
    const textTimer = setInterval(() => {
      setTextIndex((prev) => (prev < loadingPhrases.length - 1 ? prev + 1 : prev));
    }, duration / loadingPhrases.length);

    // Fade out entire screen
    const finishTimer = setTimeout(() => {
      setLoadingFinished(true);
      // Wait for exit animations before finishing
      setTimeout(() => {
        onFinish();
      }, 800);
    }, duration + 200);

    return () => {
      clearInterval(timer);
      clearInterval(textTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <AnimatePresence>
      {!loadingFinished && (
        <motion.div
          id="web-loader-container"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#030303] text-white overflow-hidden pointer-events-auto"
        >
          {/* Subtle abstract background textures */}
          <div className="absolute inset-0 bg-dots opacity-15 pointer-events-none" />
          <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-[#d4af37]/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-indigo-950/20 rounded-full blur-[120px] pointer-events-none" />

          {/* Core Content Box */}
          <div className="relative z-10 flex flex-col items-center max-w-sm w-full px-6 text-center">
            
            {/* Animated Royal Initials Icon */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative mb-8"
            >
              <div className="w-20 h-20 rounded-full border border-[#d4af37]/40 overflow-hidden flex items-center justify-center relative bg-[#0d0d12] shadow-[0_0_30px_rgba(212,175,55,0.15)] flex-shrink-0">
                <img
                  src={PERSONAL_INFO.avatar}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover object-top z-10"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120";
                  }}
                />
                
                {/* Orbital particles */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                  className="absolute inset-[2px] rounded-full border border-dashed border-white/10 z-20 pointer-events-none"
                />
              </div>
              <motion.div
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute -top-1 -right-1 text-[#d4af37] p-0.5 rounded-full bg-[#030303] border border-[#d4af37]/35"
              >
                <Sparkles size={10} />
              </motion.div>
            </motion.div>

            {/* Corporate Name Block */}
            <motion.div
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-1.5"
            >
              <h1 className="font-display font-bold text-lg tracking-widest text-[#d4af37] uppercase">
                NUSHATH NISARDEEN
              </h1>
              <p className="text-[10px] font-mono tracking-[0.25em] text-gray-400 uppercase">
                Technology & Strategy
              </p>
            </motion.div>

            {/* Premium Loader Bar Segment */}
            <div className="w-full mt-12 bg-white/5 border border-white/5 h-1.5 rounded-full overflow-hidden relative">
              <motion.div
                className="h-full bg-[#d4af37]"
                style={{ width: `${percent}%` }}
                transition={{ ease: "easeInOut" }}
              />
            </div>

            {/* Live Progress Metrics */}
            <div className="w-full mt-4 flex items-center justify-between font-mono text-[10px] text-gray-500">
              <motion.span
                key={textIndex}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="text-[#d4af37]/80 text-left truncate max-w-[200px]"
              >
                {loadingPhrases[textIndex]}
              </motion.span>
              <span className="text-right tabular-nums">{Math.round(percent)}%</span>
            </div>

          </div>

          {/* Absolute bottom tagline */}
          <div className="absolute bottom-10 left-0 right-0 text-center pointer-events-none z-10">
            <span className="font-mono text-[9px] tracking-[0.3em] text-gray-600 uppercase">
              Elite Portfolio Integration • © 2026
            </span>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
