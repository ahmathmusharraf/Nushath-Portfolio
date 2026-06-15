import React from "react";
import { Linkedin, Globe, ShieldIcon, CheckCircle2 } from "lucide-react";
import { PERSONAL_INFO } from "../data";

export default function Footer() {
  const presentYear = "2026"; // Consistent with local system time metadata

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer id="portfolio-footer" className="relative bg-[#050507] dark:bg-[#050507] light:bg-[#f6f7f8] pt-16 pb-12 text-gray-500 overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 z-0 bg-dots opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/5">
          
          {/* Logo Brand Footer */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <span className="font-display text-white dark:text-white light:text-black font-extrabold text-lg tracking-wide hover:text-[#d4af37] transition-all cursor-pointer" onClick={handleBackToTop}>
              {PERSONAL_INFO.name.toUpperCase()}
            </span>
            <span className="text-xs text-[#d4af37] font-mono tracking-wider">
              SOFTWARE ENGINEER • BUSINESS STRATEGIST • ENTREPRENEUR
            </span>
            <span className="text-[10px] text-gray-500 max-w-sm mt-1 leading-normal">
              Combining technologies and strategic corporate management to foster international trade and digital transformations.
            </span>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <div className="flex space-x-3">
              <a
                id="footer-linkedin-link"
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 dark:bg-white/5 light:bg-black/5 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/10 text-gray-400 hover:text-white transition-all border border-white/5"
                aria-label="Visit Nushath Nisardeen's professional LinkedIn profile"
              >
                <Linkedin size={15} />
              </a>
              <button
                onClick={handleBackToTop}
                className="px-3 py-1.5 rounded-full bg-white/5 dark:bg-white/5 light:bg-black/5 text-[9px] font-mono tracking-widest text-gray-400 hover:text-white hover:border-[#d4af37]/40 transition-all border border-white/5"
              >
                BACK TO TOP ↑
              </button>
            </div>

            {/* Quick Status Pill */}
            <div className="flex flex-wrap items-center justify-center md:items-end md:justify-end gap-2">
              <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-500/5 border border-emerald-500/10">
                <CheckCircle2 size={10} className="text-emerald-400" />
                <span className="text-[9px] font-mono text-emerald-400 uppercase tracking-widest">Global Operations Stable</span>
              </div>
              <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-500/5 border border-blue-500/15" title="Managed SHA-256 SSL Certificate Secure Session">
                <ShieldIcon size={10} className="text-blue-400 animate-pulse" />
                <span className="text-[9px] font-mono text-blue-400 uppercase tracking-widest">SSL Protected • TLS 1.3</span>
              </div>
            </div>
          </div>

        </div>

        {/* Lower Legal disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono tracking-wider text-gray-600 dark:text-gray-600 light:text-gray-500 gap-4">
          <p>© {presentYear} {PERSONAL_INFO.name}. All Rights Reserved. Crafted with Premium Modern Standards.</p>
          
          <div className="flex space-x-4">
            <a
              href="https://nuzii.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 hover:text-white transition-colors duration-200"
              title="Visit Nuzi PVT LTD website"
            >
              <Globe size={11} className="text-[#d4af37]" />
              <span>Nuzi PVT LTD</span>
            </a>
            <span>•</span>
            <a
              href="https://www.orbitoverseaslk.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 hover:text-white transition-colors duration-200"
              title="Visit Orbit Overseas website"
            >
              <Globe size={11} className="text-[#d4af37]" />
              <span>Orbit Overseas</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
