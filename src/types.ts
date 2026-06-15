export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  description: string;
  details: string[];
  skills: string[];
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  period: string;
  description: string;
  details: string[];
}

export interface Skill {
  name: string;
  level: number; // For visualization progress bars
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}

export interface Achievement {
  id: string;
  title: string;
  category: string;
  description: string;
  stat?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  url: string;
  techStack: string[];
  category: string;
  featured?: boolean;
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}
