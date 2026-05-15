export const PERSONAL = {
  name: 'Avishek Chatterjee',
  headline: 'Aspiring AI/ML Engineer | Software Developer',
  tagline: 'Building intelligent systems that solve real-world problems.',
  location: 'Kolkata, West Bengal, India',
  email: 'avishek93820@gmail.com',
  linkedin: 'https://linkedin.com/in/avishek-chatterjee6504',
  github: 'https://github.com/avishek93820',
  githubUsername: 'avishek93820',
  resumePath: 'https://drive.google.com/file/d/1pk3Iw2YTMBkAtj65tqmBnMXUmSoTwzKp/view?usp=sharing',
} as const;

export const ROTATING_ROLES = [
  'AI/ML Engineer',
  'Software Developer',
  'Machine Learning Enthusiast',
  'Problem Solver',
] as const;

export const NAV_LINKS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'github', label: 'GitHub' },
  { id: 'contact', label: 'Contact' },
] as const;

export const ABOUT_HIGHLIGHTS = [
  {
    title: 'Fast Learner',
    description: 'Quickly masters new frameworks, tools, and research-backed techniques.',
    icon: 'zap',
  },
  {
    title: 'Problem Solver',
    description: 'Breaks down complex challenges into elegant, scalable solutions.',
    icon: 'puzzle',
  },
  {
    title: 'Adaptable to New Technologies',
    description: 'Comfortable evolving with fast-moving AI and software ecosystems.',
    icon: 'layers',
  },
] as const;

export const SKILL_CATEGORIES = [
  {
    title: 'Programming',
    skills: ['Java', 'Python', 'C'],
    icon: 'code',
  },
  {
    title: 'Web',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind'],
    icon: 'globe',
  },
  {
    title: 'AI/ML',
    skills: [
      'Machine Learning',
      'Deep Learning',
      'PyTorch',
      'Scikit-Learn',
      'NumPy',
      'Pandas',
      'Matplotlib',
      'DCGAN',
    ],
    icon: 'brain',
  },
  {
    title: 'Core CS',
    skills: ['DSA', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks'],
    icon: 'cpu',
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code'],
    icon: 'wrench',
  },
] as const;

export const PROJECTS = [
  {
    id: 'photonic-dcgan',
    title: 'AI-Driven Photonic Device Design Optimization',
    description:
      'Developed an AI-driven photonic device design pipeline using DCGAN and electromagnetic simulation to generate optimized high-efficiency silicon photonic power divider layouts.',
    tech: ['Python', 'PyTorch', 'DCGAN', 'Deep Learning'],
    features: [
      'Generative design optimization',
      'AI-assisted layout generation',
      'Simulation-driven engineering workflow',
    ],
    github: 'https://github.com/avishek93820',
    demo: '#',
    gradient: 'from-cyan-500/20 via-violet-500/20 to-fuchsia-500/20',
    accent: 'cyan',
  },
  {
    id: 'agroai',
    title: 'AgroAI – AI Powered Smart Agriculture Platform',
    description:
      'Developed an AI-powered agriculture platform integrating machine learning and IoT concepts for precision farming, intelligent crop monitoring, and smart agricultural decision-making.',
    tech: ['Python', 'ML', 'IoT', 'Web Development'],
    features: [
      'Smart crop monitoring',
      'Predictive recommendations',
      'Intelligent agriculture automation',
    ],
    github: 'https://github.com/avishek93820',
    demo: '#',
    gradient: 'from-emerald-500/20 via-teal-500/20 to-cyan-500/20',
    accent: 'emerald',
  },
] as const;

export const EDUCATION = [
  {
    institution: 'Techno Main Salt Lake',
    degree: 'B.Tech Electronics and Computer Science',
    period: '2023–2027',
    detail: 'CGPA: 7.862',
    current: true,
  },
  {
    institution: 'Chandra High School',
    degree: 'Higher Secondary',
    period: '2022',
    detail: '',
    current: false,
  },
  {
    institution: 'Chandra High School',
    degree: 'Secondary',
    period: '2020',
    detail: '',
    current: false,
  },
] as const;

export const CERTIFICATIONS = [
  {
    title: 'NPTEL Fundamentals of Object-Oriented Programming',
    provider: 'NPTEL',
  },
  {
    title: 'NPTEL Artificial Intelligence: Concepts and Techniques',
    provider: 'NPTEL',
  },
  {
    title: 'NPTEL Introduction to Machine Learning',
    provider: 'NPTEL',
  },
] as const;

export const GITHUB_STATS = {
  publicRepos: 12,
  followers: 8,
  following: 12,
} as const;

export const GITHUB_LANGUAGES = [
  { name: 'Python', percentage: 42 },
  { name: 'JavaScript', percentage: 24 },
  { name: 'Java', percentage: 18 },
  { name: 'HTML', percentage: 10 },
  { name: 'CSS', percentage: 6 },
] as const;

export const GITHUB_REPOS = [
  {
    id: 1,
    name: 'AI-Photonic-DCGAN',
    description: 'AI-driven photonic device design pipeline using DCGAN and simulation.',
    html_url: 'https://github.com/avishek93820',
    language: 'Python',
    stargazers_count: 2,
    forks_count: 0,
  },
  {
    id: 2,
    name: 'AgroAI',
    description: 'AI-powered smart agriculture platform with ML and IoT concepts.',
    html_url: 'https://github.com/avishek93820',
    language: 'Python',
    stargazers_count: 1,
    forks_count: 0,
  },
  {
    id: 3,
    name: 'portfolio',
    description: 'Personal portfolio website built with React, Tailwind, and Framer Motion.',
    html_url: 'https://github.com/avishek93820',
    language: 'TypeScript',
    stargazers_count: 0,
    forks_count: 0,
  },
  {
    id: 4,
    name: 'ml-projects',
    description: 'Machine learning experiments and coursework implementations.',
    html_url: 'https://github.com/avishek93820',
    language: 'Python',
    stargazers_count: 0,
    forks_count: 0,
  },
  {
    id: 5,
    name: 'dsa-practice',
    description: 'Data structures and algorithms practice in Java and Python.',
    html_url: 'https://github.com/avishek93820',
    language: 'Java',
    stargazers_count: 0,
    forks_count: 0,
  },
  {
    id: 6,
    name: 'web-dev',
    description: 'Front-end projects and responsive web interfaces.',
    html_url: 'https://github.com/avishek93820',
    language: 'JavaScript',
    stargazers_count: 0,
    forks_count: 0,
  },
] as const;

export const SEO = {
  title: 'Avishek Chatterjee | AI/ML Engineer Portfolio',
  description:
    'Portfolio of Avishek Chatterjee — Aspiring AI/ML Engineer and Software Developer building intelligent systems that solve real-world problems.',
  keywords:
    'Avishek Chatterjee, AI, ML, Machine Learning, Software Developer, Portfolio, React, PyTorch, Deep Learning',
  author: 'Avishek Chatterjee',
  url: 'https://avishekchatterjee.dev',
} as const;
