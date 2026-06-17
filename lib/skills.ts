export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["C", "C++", "Python", "JavaScript", "SQL", "HTML/CSS"],
  },
  {
    category: "Frontend",
    skills: ["React.js", "TailwindCSS", "Next.js", "Responsive Design", "UI/UX"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "MongoDB", "MySQL", "API Design", "RESTful Services"],
  },
  {
    category: "Machine Learning & Data",
    skills: ["Pandas", "Scikit-learn", "Data Analysis", "Statistical Modeling", "Feature Engineering", "Exploratory Data Analysis"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "Postman", "AWS", "Vercel", "Docker"],
  },
  {
    category: "Core Computer Science",
    skills: ["Data Structures & Algorithms", "Object-Oriented Programming", "Database Management Systems", "System Design"],
  },
];
