import React, { useState, useEffect } from "react";
import { Moon, Sun, Linkedin, Menu, X, Globe, User } from "lucide-react";
import { PERSONAL_INFO } from "../data";

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  activeSegment: string;
  setActiveSegment: (segment: string) => void;
}

export default function Header({ darkMode, setDarkMode, activeSegment, setActiveSegment }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section highlighters
      const sections = ["home", "about", "experience", "projects", "skills", "achievements", "vision", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSegment(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience & Education" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "achievements", label: "Milestones" },
    { id: "vision", label: "Vision" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      id="main-nav-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-2.5 bg-brand-black/80 dark:bg-[#030303]/80 backdrop-blur-md shadow-lg border-b border-white/5 dark:border-white/5 light:border-black/5"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <div
            id="brand-signature"
            onClick={() => handleNavClick("home")}
            className="group flex items-center space-x-2 cursor-pointer"
          >
            <div className="relative w-9 h-9 rounded-full bg-gradient-to-tr from-[#d4af37] via-[#3b82f6] to-[#d4af37] p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-md flex-shrink-0">
              <div className="w-full h-full rounded-full bg-[#0d0d12] overflow-hidden flex items-center justify-center">
                <img
                  src={PERSONAL_INFO.avatar}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                  decoding="async"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120";
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xs sm:text-sm font-semibold tracking-wide text-white dark:text-white dark:group-hover:text-[#d4af37] transition-colors duration-200">
                NUSHATH NISARDEEN
              </span>
              <span className="text-[8px] sm:text-[10px] font-mono tracking-widest text-[#d4af37]">
                FOUNDER & CEO
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav id="desktop-navigation" className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 relative ${
                  activeSegment === item.id
                    ? "text-[#d4af37]"
                    : "text-gray-400 dark:text-gray-400 dark:hover:text-white light:text-gray-600 light:hover:text-black"
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                {activeSegment === item.id && (
                  <span className="absolute inset-0 bg-[#d4af37]/10 dark:bg-[#d4af37]/10 light:bg-[#d4af37]/15 rounded-full filter blur-[1px] transition-all duration-300" />
                )}
              </button>
            ))}
          </nav>

          {/* Utility Tools */}
          <div id="navigation-actions" className="flex items-center space-x-3">
            {/* LinkedIn Active CTA */}
            <a
              id="header-linkedin-cta"
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center space-x-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium text-xs transition-all duration-300 hover:shadow-cyan-500/20 shadow-md"
            >
              <Linkedin size={13} />
              <span>Connect</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              id="mobile-drawer-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-white/5 dark:bg-white/5 light:bg-black/5 text-[#d4af37] transition-all duration-300"
              aria-label="Toggle mobile directory menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer-backdrop"
          className="lg:hidden fixed inset-x-0 top-[70px] bg-brand-black/95 dark:bg-[#030303]/95 backdrop-blur-lg border-b border-white/5 py-4 px-6 flex flex-col space-y-3 z-40 transition-all duration-350"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`mobile-nav-${item.id}`}
              onClick={() => handleNavClick(item.id)}
              className={`py-2 text-left text-sm font-medium transition-all duration-200 border-l-2 pl-3 ${
                activeSegment === item.id
                  ? "border-[#d4af37] text-[#d4af37] font-semibold"
                  : "border-transparent text-gray-400 dark:text-gray-400 light:text-gray-600"
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 border-t border-white/5">
            <a
              id="mobile-linkedin-cta"
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-xs active:scale-95 transition-transform"
            >
              <Linkedin size={14} />
              <span>Connect via LinkedIn</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
