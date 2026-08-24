import { PersonalInfo, SkillItem, EducationItem, CertificationItem, ProjectItem, NavItem } from '../types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Certification', href: '#certification' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const PERSONAL_INFO: PersonalInfo = {
  name: 'Namish Yadav',
  roleHeadline: 'CSE Student | AI/ML Enthusiast',
  shortBio: 'B.Tech Computer Science Engineering student at GLA University with a specialization in AI & Machine Learning, passionate about programming, problem solving, and building practical software.',
  aboutParagraphs: [
    'My name is Namish Yadav. I am currently pursuing my Bachelor of Technology (B.Tech) in Computer Science and Engineering with a specialization in Artificial Intelligence & Machine Learning at GLA University.',
    'I have a strong interest in programming, software development, AI/ML, and building practical, impactful projects. I focus on developing solid computer science fundamentals, writing clean code, and understanding algorithmic concepts.',
    'I am continuously improving my technical skillset by exploring real-world programming concepts, version control practices, and modern technology frameworks.'
  ],
  college: 'GLA University',
  degree: 'B.Tech — Computer Science Engineering',
  specialization: 'Artificial Intelligence & Machine Learning',
  email: 'namishyadav20@gmail.com',
  academicPerformance: {
    tenth: {
      percentage: '82%',
      label: 'Secondary School (10th Standard)'
    },
    twelfth: {
      percentage: '92%',
      label: 'Senior Secondary (12th Standard)'
    }
  },
  socials: {
    github: 'https://github.com/namishyadav',
    linkedin: 'https://www.linkedin.com/in/namishyadav/',
    email: 'mailto:namishyadav20@gmail.com'
  }
};

/**
 * STRICTLY ONLY: C, Python, HTML, CSS, JavaScript, Git.
 * No fake percentages or unlisted technologies.
 */
export const SKILLS_DATA: SkillItem[] = [
  {
    name: 'C',
    category: 'Core Programming',
    description: 'Foundational systems language used for understanding memory management, data structures, algorithms, and low-level computer architecture concepts.',
    iconName: 'Cpu',
    tagline: 'Procedural & Systems Logic'
  },
  {
    name: 'Python',
    category: 'Core Programming',
    description: 'High-level language applied for algorithmic problem solving, scripting, and practical implementations in Artificial Intelligence & Machine Learning.',
    iconName: 'FileCode2',
    tagline: 'Scripting, Logic & AI/ML Workflows'
  },
  {
    name: 'HTML',
    category: 'Web Technologies',
    description: 'Semantic markup structuring modern web pages with accessibility, clean hierarchy, and standard document architectures.',
    iconName: 'Layout',
    tagline: 'Semantic Web Structure'
  },
  {
    name: 'CSS',
    category: 'Web Technologies',
    description: 'Styling language utilized for crafting responsive layouts, flexbox, grid systems, custom UI animations, and visual presentation.',
    iconName: 'Palette',
    tagline: 'Responsive Layouts & Styling'
  },
  {
    name: 'JavaScript',
    category: 'Web Technologies',
    description: 'Dynamic scripting language powering client-side interactivity, DOM manipulation, asynchronous operations, and event handling.',
    iconName: 'Code2',
    tagline: 'Client Interactivity & Logic'
  },
  {
    name: 'Git',
    category: 'Version Control',
    description: 'Distributed version control system essential for tracking code revisions, branch workflows, collaboration, and repository management.',
    iconName: 'GitBranch',
    tagline: 'Repository & Branch Management'
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    institution: 'GLA University',
    degree: 'Bachelor of Technology (B.Tech)',
    specialization: 'Computer Science Engineering (AI & ML)',
    status: 'Currently Pursuing',
    details: [
      'Focusing on Computer Science fundamentals, Object-Oriented Programming, and Data Structures.',
      'Specializing in Artificial Intelligence and Machine Learning paradigms.',
      'Actively developing practical software development and coding problem-solving skills.'
    ]
  },
  {
    institution: 'Senior Secondary Education',
    degree: '12th Standard',
    score: '92%',
    scoreLabel: 'Academic Score',
    details: [
      'Comprehensive study in Science and Mathematics streams with strong analytical foundation.'
    ]
  },
  {
    institution: 'Secondary School Education',
    degree: '10th Standard',
    score: '82%',
    scoreLabel: 'Academic Score',
    details: [
      'Solid academic record in foundational sciences, mathematics, and analytical reasoning.'
    ]
  }
];

export const CERTIFICATION_DATA: CertificationItem = {
  name: 'Microsoft Certified: Azure Fundamentals',
  issuer: 'Microsoft',
  badgeCode: 'AZ-900',
  description: 'Validates foundational knowledge of cloud concepts, Microsoft Azure architectural services, cloud governance, security principles, and compliance management.',
  topicsCovered: [
    'Cloud Computing Concepts & Deployment Models (IaaS, PaaS, SaaS)',
    'Core Azure Architecture & Compute / Storage Services',
    'Azure Identity, Access Management & Security Solutions',
    'Cost Management, Governance & Service Level Agreements'
  ],
  verified: true
};

/**
 * STRICTLY ONLY the 5 verified projects in the requested order:
 * 1. Golf Charity
 * 2. Paper Builder
 * 3. AI-Assisted Resume Portfolio Generator
 * 4. CartShare
 * 5. Sales Dashboard
 *
 * Centralized project-data structure supporting editable screenshots, GitHub repos, and live demos.
 */
export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'golf-charity',
    title: 'Golf Charity',
    category: 'Web Project',
    shortDescription: 'A web project built around a golf-based charitable initiative, focused on presenting the organization and its purpose through a clean and engaging digital experience.',
    detailedDescription: 'A web project built around a golf-based charitable initiative, focused on presenting the organization and its purpose through a clean and engaging digital experience.',
    imageUrl: '',
    imagePlaceholderText: 'Golf Charity Web Interface Preview',
    githubUrl: '',
    liveUrl: '',
  },
  {
    id: 'paper-builder',
    title: 'Paper Builder',
    category: 'Education / Productivity',
    shortDescription: 'A web-based tool designed to simplify the creation and organization of question papers, making the process of preparing and arranging questions more structured and efficient.',
    detailedDescription: 'A web-based tool designed to simplify the creation and organization of question papers, making the process of preparing and arranging questions more structured and efficient.',
    imageUrl: '',
    imagePlaceholderText: 'Paper Builder Application Interface Preview',
    githubUrl: '',
    liveUrl: '',
  },
  {
    id: 'ai-resume-generator',
    title: 'AI-Assisted Resume Portfolio Generator',
    category: 'AI / Python',
    shortDescription: 'An AI-assisted tool that processes resume information using Python and the Gemini API, converts the information into structured data, validates the result, and generates a personalized portfolio website.',
    detailedDescription: 'An AI-assisted tool that processes resume information using Python and the Gemini API, converts the information into structured data, validates the result, and generates a personalized portfolio website.',
    technologies: ['Python', 'Gemini API', 'JSON', 'HTML', 'CSS'],
    imageUrl: '',
    imagePlaceholderText: 'AI-Assisted Resume Portfolio Generator System Preview',
    githubUrl: '',
    liveUrl: '',
  },
  {
    id: 'cartshare',
    title: 'CartShare',
    category: 'Web Application',
    shortDescription: 'A web-based application focused on making shopping and cart-related information easier to manage and share through a practical user interface.',
    detailedDescription: 'A web-based application focused on making shopping and cart-related information easier to manage and share through a practical user interface.',
    imageUrl: '',
    imagePlaceholderText: 'CartShare Application Interface Preview',
    githubUrl: '',
    liveUrl: '',
  },
  {
    id: 'sales-dashboard',
    title: 'Sales Dashboard',
    category: 'Dashboard / Web Application',
    shortDescription: 'A data-driven dashboard designed to present sales-related information through an organized and visually accessible interface, making important business data easier to understand and monitor.',
    detailedDescription: 'A data-driven dashboard designed to present sales-related information through an organized and visually accessible interface, making important business data easier to understand and monitor.',
    technologies: ['React', 'Tailwind CSS', 'Supabase', 'API integration'],
    imageUrl: '',
    imagePlaceholderText: 'Sales Dashboard Interface Preview',
    githubUrl: '',
    liveUrl: '',
  }
];
