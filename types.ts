export type LensMode = 'technical' | 'business';

export interface TechStackItem {
  name: string;
  icon: string; // Lucide icon name or image url
  color: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
  trend: 'up' | 'down' | 'neutral';
  description: string;
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  category: 'AI' | 'Blockchain' | 'Data Science' | 'Full Stack';
  techStack: TechStackItem[];
  codeSnippet?: string; // For technical view
  architectureUrl?: string; // For technical view
  liveLink?: string;
  repoLink?: string;
  businessMetrics: ProjectMetric[]; // For business view
  businessCase: string; // "Problem -> Solution -> Impact" summary
}

export interface SkillNode {
  id: string;
  group: number; // 1: AI, 2: Blockchain, 3: Data, 4: Business
  val: number; // Size
}

export interface SkillLink {
  source: string;
  target: string;
  value: number;
}

export interface SkillGraphData {
  nodes: SkillNode[];
  links: SkillLink[];
}