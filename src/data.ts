import { Stat, Experience, Education, SkillCategory, Achievement, Project } from "./types";

export const PORTRAIT_PATH = "https://raw.githubusercontent.com/ahmathmusharraf/Nushath-Portfolio/refs/heads/main/nush.jpg";

export const PERSONAL_INFO = {
  name: "Nushath Nisardeen",
  title: "Software Engineer • Business Strategist • Entrepreneur • CEO",
  avatar: PORTRAIT_PATH,
  introduction: "Passionate entrepreneur, software engineer, and business leader dedicated to building innovative digital solutions and creating global business opportunities. Combining technology expertise with strategic business management to drive impactful growth.",
  linkedinUrl: "https://www.linkedin.com/in/nushath-nisardeen-75b09b248/",
  email: "nushathnisardeen@gmail.com",
};

export const STATS: Stat[] = [
  {
    id: "experience",
    value: 5,
    suffix: "+",
    label: "Years of Experience",
    description: "In technology leadership, corporate growth, and platform development"
  },
  {
    id: "projects",
    value: 45,
    suffix: "+",
    label: "Projects Completed",
    description: "Enterprise software designs, modern digital suites, and structural innovations"
  },
  {
    id: "businesses",
    value: 2,
    suffix: "",
    label: "Businesses Founded",
    description: "Pioneering technological consultancies and global distribution firms"
  },
  {
    id: "connections",
    value: 500,
    suffix: "+",
    label: "Professional Connections",
    description: "Global corporate network crossing tech innovators and strategic partners"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "exp-1",
    role: "CEO",
    company: "Nuzi PVT LTD",
    companyUrl: "https://nuzii.co/",
    period: "2023 - Present",
    description: "Leading overall corporate trajectory, technology roadmap execution, digital transformation programs, and pioneering high-scale web and application architectures for international clients.",
    details: [
      "Orchestrating high-growth business frameworks, scaling digital operations across multiple segments, and managing full-cycle software releases.",
      "Spearheading specialized consultancy projects to modernize legacy architecture for enterprises using cutting-edge cloud stacks and robust DB engines.",
      "Synthesizing tech capabilities with corporate strategy to scale product-market fit, leading core cross-functional engineering teams."
    ],
    skills: ["Software Engineering", "Strategic Planning", "Project Management", "Leadership", "Cloud Technologies"]
  },
  {
    id: "exp-2",
    role: "Co-Founder",
    company: "Orbit Overseas",
    companyUrl: "https://www.orbitoverseaslk.com/",
    period: "2021 - Present",
    description: "Co-founded and driving strategic operational growth for Orbit Overseas, a premier international air ticketing office and travel solutions agency.",
    details: [
      "Establishing direct air ticketing pipelines, GDS integrations, and global airline partner networks to streamline international travel reservations.",
      "Designing responsive reservation architectures and automated ticketing flows that optimize partner commission structure and client fulfillment cycles.",
      "Structuring cross-region customer retention workflows and digital ticketing interfaces to ensure rapid, seamless booking experiences for corporate and leisure clients."
    ],
    skills: ["Air Ticketing", "GDS Systems", "Business Development", "Travel Management", "Strategic Operations"]
  }
];

export const EDUCATIONS: Education[] = [
  {
    id: "edu-1",
    degree: "B.Sc (Hons) in Software Engineering",
    school: "Solent University UK",
    period: "Graduated",
    description: "Rigorous academic study focusing on clean code principles, enterprise system architectures, high-performance database management, and emerging cloud computing methodologies.",
    details: [
      "Core focus on design patterns, mathematical modeling, secure software life-cycles, algorithms, and agile methodologies.",
      "Developed high-grade software architectures as capstones, showcasing multi-layered service design and modular frontend frameworks."
    ]
  },
  {
    id: "edu-2",
    degree: "Bachelor of Business Management (Hons)",
    school: "Northumbria University",
    period: "Graduated",
    description: "Specialized study in global corporate economics, direct marketing paradigms, corporate governance, strategic leadership, and innovative startup operations.",
    details: [
      "Acquired mastery in entrepreneurial risk evaluation, venture capital modeling, corporate metrics tracking, and employee scaling philosophies.",
      "Authored strategic thesis analyzing digital disruption in global logistics markets, combining technological insights with fiscal metrics."
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "tech",
    title: "Technology & Code",
    skills: [
      { name: "Software Development", level: 95 },
      { name: "Web Development (SPA/Full-Stack)", level: 98 },
      { name: "UI/UX Understanding & Design Systems", level: 88 },
      { name: "Database Management (Relational & NoSQL)", level: 90 },
      { name: "Cloud Technologies & DevOps", level: 85 }
    ]
  },
  {
    id: "business",
    title: "Business & Strategy",
    skills: [
      { name: "Strategic Planning", level: 96 },
      { name: "Business Development", level: 94 },
      { name: "Entrepreneurship & Launch", level: 98 },
      { name: "Executive Leadership", level: 95 },
      { name: "Project & Risk Management", level: 90 }
    ]
  },
  {
    id: "professional",
    title: "Core Professional Traits",
    skills: [
      { name: "Executive Communication", level: 95 },
      { name: "High-Performance Team Building", level: 92 },
      { name: "Creative Problem Solving", level: 96 },
      { name: "Technology & Process Innovation", level: 98 },
      { name: "Decisive Executive Action", level: 94 }
    ]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "ach-1",
    category: "CEO Leadership",
    title: "Corporate Growth at Nuzi PVT LTD",
    description: "Established robust internal processes, scaling direct consultancies and tech delivery teams to support rapid business operations.",
    stat: "CEO"
  },
  {
    id: "ach-2",
    category: "Startup Growth",
    title: "Two Successful Ventures Active",
    description: "Simultaneously scaled educational/tech software solutions and cross-border commercial platforms with self-sustaining capital structures.",
    stat: "Founder"
  },
  {
    id: "ach-3",
    category: "Business Expansion",
    title: "Orbit Overseas Regional Scaling",
    description: "Successfully penetrated international commercial channels and secured key logistical partnerships with global trade associations.",
    stat: "Global"
  },
  {
    id: "ach-4",
    category: "Technology Innovation",
    title: "Engineered Scalable Custom Solutions",
    description: "Engineered cloud-native and client-driven web services reducing operational compute costs while increasing processing concurrency.",
    stat: "Tech Specialist"
  },
  {
    id: "ach-5",
    category: "Strategic Partnerships",
    title: "Key Multi-Channel Corporate Alliances",
    description: "Forged multi-million-value strategic alliances across technical sectors, expanding access to talent pools and commercial accounts.",
    stat: "Partners"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "KALI VIP Gilt Trading Signal Market Insights",
    url: "https://xauvip.com/",
    description: "High-grade financial analytics and live gilt trading indicators delivered via responsive custom dashboards.",
    longDescription: "Engineered as a modern telemetry and market-monitoring engine. Features live signal alerts, technical indicators (Gold/Gilt trends), and lightning-fast analytics charts tailored for active institutional and retail market participants.",
    techStack: ["React 18", "Fintech Algorithms", "Tailwind CSS", "Recharts", "Secure WebSockets"],
    category: "Fintech Systems",
    featured: true
  },
  {
    id: "proj-2",
    title: "Nuzi Headless Commerce Engine",
    url: "https://nuzii.co/",
    description: "Decentralized custom e-commerce architecture facilitating global merchant transactions with dual-theme design.",
    longDescription: "Pioneered as the core product delivery system for Nuzi clients. Provides multi-regional stock synchronization, secure checkouts, automated invoice generation, and custom administrative controls.",
    techStack: ["React", "TypeScript", "Node.js", "Express API", "Tailwind CSS"],
    category: "Enterprise SaaS",
    featured: false
  },
  {
    id: "proj-3",
    title: "Orbit Ticketing & Reservation Platform",
    url: "https://www.orbitoverseaslk.com/",
    description: "High-performance air ticketing and travel reservation interface built to handle real-time flight bookings.",
    longDescription: "Formulated to optimize booking flows and airfare routing for Orbit Overseas. Leverages real-time flight search metrics, integrated GDS reservation logs, and compliance validation pipelines to lower booking overhead and automate ticketing issues.",
    techStack: ["React", "Tailwind CSS", "GDS API Integrations", "REST Services", "Lucide Icons"],
    category: "Travel Tech",
    featured: false
  }
];

export const VISION = {
  title: "Building the Future Through Technology & Business",
  mission: "My mission is to bridge innovation, technology, and entrepreneurship to create sustainable solutions that positively impact businesses and communities worldwide."
};
