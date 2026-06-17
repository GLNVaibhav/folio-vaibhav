export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  link?: string;
  github?: string;
  status?: "startup" | "research" | "ongoing" | "completed";
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "beyondbreathe",
    title: "BeyondBreathe",
    category: "HealthTech | Startup",
    description:
      "An AI-powered healthcare ecosystem integrating emergency response, blood donation networks, patient health records, and insurance services to improve healthcare accessibility.",
    technologies: ["HealthTech", "AI", "System Design", "Product Strategy"],
    github: "https://github.com/GLNVaibhav/BeyondBreathe_MVP",
    status: "ongoing",
    featured: true,
  },
  {
    id: "village-connect",
    title: "VillageConnect",
    category: "Full Stack | Social Impact",
    description:
      "A full-stack platform empowering rural communities through agriculture, healthcare, education, and grievance management with role-based access control.",
    technologies: ["React.js", "Node.js", "MongoDB", "JWT"],
    github: "https://github.com/GLNVaibhav/Village-Connect",
    status: "completed",
    featured: true,
  },
  {
    id: "business-analysis-agent",
    title: "Business Analysis Agent",
    category: "AI | Analytics",
    description:
      "An AI-powered system that transforms raw business data into structured insights, identifies inefficiencies, and supports data-driven decision-making.",
    technologies: ["Python", "AI", "Analytics", "System Design"],
    github: "https://github.com/sweeyamsrmap/sweeyam_team26",
    status: "completed",
    featured: true,
  },
  {
    id: "healthqueue",
    title: "HealthQueue",
    category: "DSA | Healthcare",
    description:
      "A priority-queue-based healthcare scheduling system that optimizes patient handling based on urgency using efficient data structures and scheduling algorithms.",
    technologies: ["DSA", "Priority Queues", "Algorithms", "System Design"],
    github: "https://github.com/GLNVaibhav/Greedy-Algo",
    status: "completed",
    featured: true,
  },
  {
    id: "delivery-cycle-simulation",
    title: "Delivery Cycle Simulation",
    category: "DSA | Algorithms",
    description:
      "A delivery workflow simulation system leveraging data structures and scheduling algorithms to optimize routing, task allocation, and operational efficiency.",
    technologies: ["DSA", "Graphs", "Queues", "Scheduling Algorithms"],
    github: "https://github.com/GLNVaibhav/DeliveryCycle_Simulation",
    status: "completed",
    featured: true,
  },
  {
    id: "srms",
    title: "SRMS",
    category: "Full Stack | Education",
    description:
      "A Student Record Management System designed to streamline academic administration through efficient management of student records, attendance, and academic data.",
    technologies: ["React.js", "Node.js", "MongoDB", "REST APIs"],
    github: "https://github.com/GLNVaibhav/SRM_S",
    status: "completed",
    featured: true,
  },
  {
    id: "civicpay",
    title: "CivicPay",
    category: "FinTech | GovTech",
    description:
      "A digital platform simplifying tax, insurance, and municipal bill management through automated reminders and a unified dashboard.",
    technologies: ["FinTech", "Product Design", "System Design", "UX"],
    github: "https://github.com/GLNVaibhav/CivicPay_MVP",
    status: "startup",
    featured: false,
  },
];
