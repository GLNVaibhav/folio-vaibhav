export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  link?: string;
  github?: string;
  featured?: boolean;
  entrepreneurship?: boolean;
  status?: string;
  ventureType?: "incubation" | "concept";
}

export const projects: Project[] = [
  {
    id: "village-connect",
    title: "VillageConnect",
    category: "Full-Stack Development",
    description: "A comprehensive full-stack platform empowering rural communities across agriculture, healthcare, education, and grievance management with role-based access and admin dashboard.",
    technologies: ["React.js", "Node.js", "MongoDB", "JWT", "TailwindCSS", "React Query"],
    github: "https://github.com/GLNVaibhav/Village-Connect",
    featured: true,
  },
  {
    id: "resume-shortlisting",
    title: "Resume Shortlisting System",
    category: "Python | Pandas | NLP",
    description: "Automated applicant screening system that ranks resumes using keyword-matching and filtering logic, significantly reducing manual screening effort and improving hiring efficiency.",
    technologies: ["Python", "Pandas", "NLP", "Data Processing", "Automation"],
    github: "https://github.com/GLNVaibhav/Resume_Shortlisting",
    featured: true,
  },
  {
    id: "business-analysis-agent",
    title: "Business Analysis Agent",
    category: "AI | Business Intelligence",
    description: "An AI-powered system that converts raw business data into structured, actionable insights, identifying inefficiencies and providing strategic recommendations for decision-making.",
    technologies: ["Python", "Data Analysis", "Machine Learning", "System Design", "Analytics"],
    github: "https://github.com/sweeyamsrmap/sweeyam_team26",
    featured: true,
    status: "ongoing"
  },
  {
    id: "healthqueue",
    title: "HealthQueue",
    category: "DSA | Healthcare",
    description: "A priority-queue-based healthcare scheduling system that optimizes patient handling based on urgency using efficient data structures and scheduling algorithms.",
    technologies: ["DSA", "Priority Queues", "Algorithms", "System Design"],
    github: "https://github.com/GLNVaibhav/Greedy-Algo",
    featured: true,
  },
  {
  id: "beyondbreathe",
  title: "BeyondBreathe",
  category: "Healthcare Startup",
  description:
    "A healthcare startup addressing respiratory health challenges with innovative technology solutions and user-centric design for real-world impact.",
  technologies: ["Healthcare", "Innovation", "Full-Stack"],
  github: "https://github.com/GLNVaibhav/BeyondBreathe_MVP",
  featured: true,
  entrepreneurship: true,
  status: "startup",
  ventureType: "incubation",
  },
  {
    id: "lachos",
  title: "LACHOS",
  category: "Fashion Technology Venture",
  description:
    "A fashion-tech venture concept bridging traditional fashion and modern technology through customization, personalization, and digital experiences.",
  technologies: ["Fashion Tech", "E-commerce", "Innovation"],
  featured: true,
  entrepreneurship: true,
  ventureType: "concept",
  },
  {
  id: "civicpay",
  title: "CivicPay",
  category: "FinTech Venture",
  description:
    "A civic-finance venture concept focused on simplifying tax, insurance, and public utility payments through a unified digital platform.",
  technologies: ["Fintech", "Payments", "Innovation"],
  github: "https://github.com/GLNVaibhav/CivicPay_MVP",
  featured: true,
  entrepreneurship: true,
  ventureType: "concept",
},
];

export const researchProject = {
  title: "Predictive Modelling of Customer Churn Analysis using Machine Learning",
  subtitle: "Across Multiple Sectors",
  description:
    "An ongoing research internship analyzing customer churn patterns across diverse industry sectors using advanced machine learning techniques. Develops predictive models to identify high-risk customers and provides actionable insights for customer retention strategies.",
  keyHighlights: [
    "Multi-sector analysis: Retail, Telecom, SaaS, and Financial Services",
    "Data preprocessing and exploratory data analysis on large-scale datasets",
    "Feature engineering and model comparison (Logistic Regression, Random Forest, XGBoost)",
    "Actionable retention strategies with business impact quantification",
  ],
  technologies: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Matplotlib", "Statistical Modeling"],
  status: "Ongoing Research",
  university: "SRM University AP",
};
