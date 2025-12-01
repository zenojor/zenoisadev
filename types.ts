export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  year: string;
  link?: string;
  demoUrl?: string;
  codeUrl?: string;
  status: 'ONLINE' | 'OFFLINE' | 'DEV';
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'FRONTEND' | 'BACKEND' | 'TOOLS' | 'CREATIVE';
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: '首页.SYS', href: '#root' },
  { id: 'projects', label: '作品.EXE', href: '#projects' },
  { id: 'about', label: '关于.DAT', href: '#about' },
  { id: 'contact', label: '联络.NET', href: '#contact' },
];