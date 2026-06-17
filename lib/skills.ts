export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "AI & Data Science",
    skills: ["Pandas", "Scikit-learn", "Data Analysis", "Statistical Modeling", "Feature Engineering", "Exploratory Data Analysis"],
  },
  {
    category: "Full Stack",
    skills: ["React.js", "Next.js", "TailwindCSS", "Responsive Design", "UI/UX", "REST APIs"],
  },
  {
    category: "Backend & Database",
    skills: ["Node.js", "Express.js", "MongoDB", "MySQL", "API Design", "Database Management Systems"],
  },
  {
    category: "Languages",
    skills: ["C", "C++", "Python", "JavaScript", "SQL", "HTML/CSS"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Postman", "AWS", "Vercel", "Docker"],
  },
  {
    category: "Business & Strategy",
    skills: ["Leadership", "Negotiation", "Power Dynamics", "Strategic Thinking", "Stakeholder Management", "Decision Making"],
  },
];
