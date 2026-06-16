import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles } from "lucide-react";
import { PERSONAL_INFO } from "../data";

export default function Loader({ onFinish }: { onFinish: () => void }) {
  const [percent, setPercent] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    let current = 0;
    const duration = 1200; // Super-fast loader (1.2 seconds max)
    const intervalTime = 16; // ~60fps updates
    const increment = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      current += increment + Math.random() * 4;
      if (current >= 100) {
        current = 100;
        setPercent(100);
        clearInterval(timer);
        setTimeout(() => {
          setShow(false);
          setTimeout(onFinish, 400); // Allow exit transition to complete
        }, 300);
      } else {
        setPercent(Math.floor(current));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#030303] text-white select-none hardware-accel"
        >
          {/* Animated decorative grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />

          <div className="relative z-10 flex flex-col items-center">
            {/* Elegant Circular Avatar Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative mb-6"
            >
              <div className="w-20 h-20 rounded-full border border-[#d4af37]/40 p-[2px] overflow-hidden flex items-center justify-center bg-[#0d0d12] shadow-[0_0_30px_rgba(214,175,55,0.15)]">
                <img
                  src={PERSONAL_INFO.avatar}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full rounded-full object-cover object-top z-10"
                  referrerPolicy="no-referrer"
                  decoding="async"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120";
                  }}
                />
                
                {/* Micro outer orbiting dashes */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                  className="absolute inset-0 rounded-full border border-dashed border-[#d4af37]/30 z-0 pointer-events-none"
                />
              </div>

              {/* Sparkling Status badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, type: "spring" }}
                className="absolute -top-1 -right-1 bg-gradient-to-r from-[#d4af37] to-amber-500 text-black p-1 rounded-full shadow-[0_2px_10px_rgba(212,175,55,0.4)]"
              >
                <Sparkles size={10} className="animate-pulse" />
              </motion.div>
            </motion.div>

            {/* Dynamic Numeric Progress Percent */}
            <div className="flex flex-col items-center">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-mono text-2xl font-extrabold tracking-widest text-[#d4af37]"
              >
                {percent}%
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-[9px] font-mono tracking-[0.3em] uppercase text-gray-500 mt-1"
              >
                SYSTEM HANDSHAKE
              </motion.span>
            </div>

            {/* Micro Sleek Horizontal Progress Line */}
            <div className="w-40 h-[1.5px] bg-white/5 rounded-full mt-6 overflow-hidden relative">
              <motion.div
                className="h-full bg-gradient-to-r from-amber-500 via-[#d4af37] to-[#ecf0f1]"
                style={{ width: `${percent}%` }}
                layoutId="loader-bar"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
