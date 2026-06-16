import React, { useState, useEffect, Suspense, lazy } from "react";
import { Helmet } from "react-helmet-async";
import Loader from "./components/Loader";
import Header from "./components/Header";
import Hero from "./components/Hero";

// Lazy-load below-the-fold components to maximize initial paint speeds and cut bundle size
const About = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Achievements = lazy(() => import("./components/Achievements"));
const Vision = lazy(() => import("./components/Vision"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

interface SEOMetadata {
  title: string;
  description: string;
  keywords: string;
}

const SECTION_SEO: Record<string, SEOMetadata> = {
  home: {
    title: "Nushath Nisardeen | Software Engineer & Business Strategist",
    description: "Nushath Nisardeen is a multidisciplinary leader, software engineer, and high-growth business strategist bridging technological systems architecture and global commercial markets.",
    keywords: "Nushath Nisardeen, Software Engineer, Business Strategist, CEO, Nuzi, Orbit Overseas, Entrepreneur, Founder"
  },
  about: {
    title: "About Nushath Nisardeen | Multidisciplinary Specialist",
    description: "Discover Nushath's unique dual profile: an academically trained software engineer combined with robust commercial strategy, management systems, and regional logistics leadership.",
    keywords: "About Nushath Nisardeen, Biography, Solent University, Business honors graduate, Female Tech Leader, Portfolio"
  },
  experience: {
    title: "Corporate Experience | Nuzi PVT LTD & Orbit Overseas",
    description: "Explore Nushath's executive professional path as active CEO at Nuzi PVT LTD and Co-Founder of Orbit Overseas.",
    keywords: "CEO Nuzi, Orbit Overseas, Professional Experience, Career Timeline, Tech Exec"
  },
  projects: {
    title: "Corporate Projects | KALI VIP Gilt Trading Signal Market Insights",
    description: "Explore custom trading dashboards, Gilt / Gold financial signals, headless commerce engines, and maritime supply systems designed by Nushath Nisardeen.",
    keywords: "KALI VIP, xauvip.com, Gilt trading, Gilt Signals, Headless e-commerce, Nuzi, Software Engineer Projects"
  },
  skills: {
    title: "Innovative Skills & Execution | Tech, Growth, Leadership",
    description: "Multi-disciplinary tech core: full-stack web architectures, secure database management, cloud systems, paired with strategic corporate leadership and communication traits.",
    keywords: "Software Engineering Skills, Strategic Planning, Business Growth, DevOps, UI UX design"
  },
  achievements: {
    title: "Distinguished Milestones & Accolades | Nushath Nisardeen",
    description: "Review core accomplishments and strategic initiatives including corporate expansion projects, tech developments, and global partner alliances.",
    keywords: "Milestones, Accolades, Corporate Alliances, Tech Projects, Executive Strategy"
  },
  vision: {
    title: "Corporate Vision & Mission | Global Strategic Solutions",
    description: "Bridge state-of-the-art technological solutions, global trade corridors, and venture management to deliver positive worldwide impact.",
    keywords: "Corporate Vision, Professional Mission, Tech Ethics, Future Logistics"
  },
  contact: {
    title: "Contact & Consultation Inquiries | Connect with Nushath",
    description: "Start a strategic alliance, project consultation, or venture inquiry. Automate mail client transmissions and direct professional networking.",
    keywords: "Contact Nushath Nisardeen, Email Nushath, Consultation Inquiry, Business Partnership"
  }
};

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSegment, setActiveSegment] = useState("home");
  const [loading, setLoading] = useState(true);

  // Sync scroll lock during loader
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  // Sync index.html root component with active dark class
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      root.classList.remove("light");
      root.style.backgroundColor = "#030303";
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
      root.style.backgroundColor = "#ffffff";
    }
  }, [darkMode]);

  const currentSEO = SECTION_SEO[activeSegment] || SECTION_SEO.home;

  return (
    <div className={`min-h-screen text-white font-sans transition-colors duration-500 overflow-x-hidden ${
      darkMode ? "bg-[#030303]" : "bg-[#ffffff]"
    }`}>
      {/* Dynamic luxury web loader */}
      <Loader onFinish={() => setLoading(false)} />

      <Helmet>
        <title>{currentSEO.title}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords} />
        
        {/* Open Graph Tags for Section Sharing */}
        <meta property="og:title" content={currentSEO.title} />
        <meta property="og:description" content={currentSEO.description} />
        <meta property="og:image" content="https://raw.githubusercontent.com/ahmathmusharraf/Nushath-Portfolio/refs/heads/main/nush.jpg" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:title" content={currentSEO.title} />
        <meta name="twitter:description" content={currentSEO.description} />
        <meta name="twitter:image" content="https://raw.githubusercontent.com/ahmathmusharraf/Nushath-Portfolio/refs/heads/main/nush.jpg" />
      </Helmet>

      {/* Background Particle Effects / Custom Atmospheric Lights */}
      {darkMode && (
         <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
           {/* Ambient top & bottom mesh lines */}
           <div className="absolute top-[8%] left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-indigo-950/20 via-blue-900/10 to-transparent blur-[120px] opacity-70 animate-mesh" />
           <div className="absolute bottom-[20%] right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#d4af37]/5 via-purple-950/10 to-transparent blur-[110px] opacity-70 animate-mesh" />
         </div>
      )}

      {/* Floating Header Navigation */}
      <Header darkMode={darkMode} setDarkMode={setDarkMode} activeSegment={activeSegment} setActiveSegment={setActiveSegment} />

      {/* Dynamic Content Streams */}
      <main className="relative z-10 w-full">
        {/* HERO SECTION */}
        <Hero />

        <Suspense fallback={<div className="min-h-[40vh] flex items-center justify-center bg-[#030303]" />}>
          {/* BIOGRAPHICAL DETAILS */}
          <About />

          {/* EXPERIENCE & EDUCATION TIMELINE */}
          <Experience />

          {/* SOFTWARE ARCHITECTURES & ACTIVE SERVICES */}
          <Projects />

          {/* MULTI-DISCIPLINARY TECHNICAL & BUSINESS SKILLS */}
          <Skills />

          {/* ENTERPRISE MILESTONES & ACHIEVEMENTS */}
          <Achievements />

          {/* MASTER CORPORATE VISION AND STRATEGY */}
          <Vision />

          {/* INQUIRIES & NETWORKING CHANNELS */}
          <Contact />
        </Suspense>
      </main>

      {/* FOOTER */}
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
