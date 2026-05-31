export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  category: string;
  role: string;
  description: string;
  techStack: string[];
  highlights?: string[];
  links?: ProjectLink[];
  featured?: boolean;
}
