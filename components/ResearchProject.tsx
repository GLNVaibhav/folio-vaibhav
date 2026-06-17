'use client';

import { motion } from 'framer-motion';

const researchItems = [
  {
    title: 'Customer Churn Prediction',
    tag: 'Ongoing Research Internship',
    description:
      'Developing machine learning models for customer churn prediction using predictive analytics and customer behavior analysis.',
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'Matplotlib'],
  },
  {
    title: 'Public Awareness on Government Welfare Schemes',
    tag: 'Survey-Based Study',
    description:
      'Survey-based research project studying awareness and accessibility of government welfare schemes.',
    technologies: ['Survey Design', 'Data Analysis', 'Public Policy Research'],
  },
];

export function ResearchProject() {
  return (
    <section id="research" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-2">Research & Innovation</h2>
          <div className="w-12 h-1 bg-primary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {researchItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="bg-gradient-to-br from-card to-background rounded-lg border border-border p-6 hover:border-primary/50 transition-all duration-300"
            >
              <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/15 text-blue-600 dark:text-blue-300 border border-blue-500/30 mb-4">
                {item.tag}
              </span>
              <h3 className="text-2xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-foreground/70 leading-relaxed mb-4">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium border border-primary/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
