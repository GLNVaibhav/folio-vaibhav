export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  current?: boolean;
  description: string[];
  technologies: string[];
}

export const experience: Experience[] = [
  {
    id: "sree-satyata",
    company: "Sree Satyata Consulting",
    role: "Business & Operations Intern",
    startDate: "May 2024",
    endDate: "Dec 2025",
    current: true,
    description: [
      "Led business operations and strategy initiatives for consulting engagements",
      "Conducted market research and competitive analysis for client projects",
      "Developed data-driven insights and recommendations for business optimization",
      "Collaborated with cross-functional teams to implement operational improvements",
      "Managed stakeholder communications and project documentation",
    ],
    technologies: ["Business Analysis", "Data Analysis", "Market Research", "Project Management"],
  },
  {
    id: "research-internship",
    company: "SRM University AP",
    role: "Research Intern",
    startDate: "2025",
    endDate: "Present",
    current: true,
    description: [
      "Conducting research on Predictive Modelling of Customer Churn Analysis using Machine Learning",
      "Analyzing churn patterns across multiple sectors (retail, telecom, SaaS)",
      "Developing and optimizing machine learning models for customer retention",
      "Publishing research findings and contributing to academic publications",
    ],
    technologies: ["Machine Learning", "Python", "Data Analysis", "Statistical Modeling"],
  },
];
