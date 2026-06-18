'use client';

import { motion } from 'framer-motion';

export function CurrentlyBuilding() {
  const projects = [
    {
      title: 'BeyondBreathe',
      tag: '🚧 Startup in Progress',
      description:
        'An AI-powered healthcare ecosystem integrating emergency response, blood donation networks, patient health records, and insurance services.',
    },
    {
      title: 'Customer Churn Prediction',
      tag: '🔬 Ongoing Research Internship',
      description:
        'Developing machine learning models for customer churn prediction using predictive analytics and customer behavior analysis.',
    },
  ];

  return (
    <section id="building" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-2">
            Currently Building
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
                {project.tag}
              </span>

              <h3 className="text-2xl font-bold mb-3">
                {project.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
