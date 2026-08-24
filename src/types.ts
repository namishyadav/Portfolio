export interface NavItem {
  label: string;
  href: string;
}

export interface SkillItem {
  name: 'C' | 'Python' | 'HTML' | 'CSS' | 'JavaScript' | 'Git';
  category: 'Core Programming' | 'Web Technologies' | 'Version Control';
  description: string;
  iconName: string;
  tagline: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  specialization?: string;
  period?: string;
  score?: string;
  scoreLabel?: string;
  details?: string[];
  status?: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  badgeCode: string;
  description: string;
  topicsCovered: string[];
  verified: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 
    | 'Android / Safety' 
    | 'AI / Python' 
    | 'Web Application / Dashboard' 
    | 'AI / Web Application' 
    | 'Web Application' 
    | 'Education / Productivity' 
    | 'Web Project'
    | string;
  shortDescription: string;
  detailedDescription: string;
  technologies?: string[];
  imageUrl?: string;
  imagePlaceholderText?: string;
  githubUrl?: string;
  liveUrl?: string;
  keyAspects?: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  iconName: string;
  displayHandle: string;
}

export interface PersonalInfo {
  name: string;
  roleHeadline: string;
  shortBio: string;
  aboutParagraphs: string[];
  college: string;
  degree: string;
  specialization: string;
  email: string;
  academicPerformance: {
    tenth: {
      percentage: string;
      label: string;
    };
    twelfth: {
      percentage: string;
      label: string;
    };
  };
  socials: {
    github: string;
    linkedin: string;
    email: string;
  };
}
