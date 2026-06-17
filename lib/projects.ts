export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "village-connect",
    title: "VillageConnect",
    description: "A full-stack platform designed to bridge the gap between rural and urban communities. Features real-time communication, resource sharing, and community engagement.",
    technologies: ["React.js", "Node.js", "MongoDB", "TailwindCSS", "Express.js"],
    github: "https://github.com/GLNVaibhav",
    featured: true,
  },
  {
    id: "business-analysis-agent",
    title: "Business Analysis Agent",
    description: "An AI-powered system that analyzes business data, generates insights, and provides actionable recommendations for strategic decision-making.",
    technologies: ["Python", "Data Analysis", "Machine Learning", "Pandas"],
    featured: true,
  },
  {
    id: "healthqueue",
    title: "HealthQueue",
    description: "A healthcare scheduling platform that optimizes patient appointment booking and queue management using efficient algorithms.",
    technologies: ["DSA", "Algorithms", "Backend Architecture", "Database Design"],
    featured: true,
  },
  {
    id: "resume-shortlisting",
    title: "Resume Shortlisting System",
    description: "An automated system that screens and shortlists resumes based on job requirements, leveraging NLP and pattern matching techniques.",
    technologies: ["Python", "Pandas", "NLP", "Automation"],
    featured: true,
  },
];

export const researchProject = {
  title: "Predictive Modelling of Customer Churn Analysis using Machine Learning",
  subtitle: "Across Multiple Sectors",
  description:
    "A comprehensive research project analyzing customer churn patterns across diverse industry sectors using advanced machine learning techniques. This project develops predictive models to identify high-risk customers and provide actionable insights for customer retention strategies.",
  keyHighlights: [
    "Multi-sector analysis covering retail, telecom, and SaaS industries",
    "Implemented ensemble ML models with 85%+ accuracy",
    "Feature engineering and exploratory data analysis on large datasets",
    "Business impact: 40% improvement in customer retention strategies",
  ],
  technologies: ["Python", "Machine Learning", "Data Analysis", "Pandas", "Scikit-learn", "Statistical Modeling"],
  status: "Ongoing",
  university: "SRM University AP",
};
