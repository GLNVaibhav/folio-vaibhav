'use client';

import { motion } from 'framer-motion';

export function Education() {
  const achievements = [
    {
      title: "Elevator Pitch Recognition",
      description: "Recognized for outstanding business communication and pitch delivery",
    },
    {
      title: "Business Management Coursework",
      description: "Completed advanced coursework in business operations and strategy",
    },
    {
      title: "Beyond Breathe Survey Research",
      description: "Participated in research initiative examining survey methodologies and data collection",
    },
    {
      title: "E-Waste Management Workshop",
      description: "Completed workshop on environmental sustainability and waste management",
    },
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-2">Education & Achievements</h2>
          <div className="w-12 h-1 bg-primary rounded-full" />
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 bg-card rounded-lg p-8 border border-border"
        >
          <div className="flex items-start gap-4 mb-4">
            <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-foreground mb-1">Bachelor of Technology in Computer Science</h3>
              <p className="text-primary font-semibold mb-2">SRM University AP</p>
              <p className="text-foreground/70 text-sm mb-3">2024 - 2028</p>
              <p className="text-foreground/70">
                Minor in Management | GPA: Strong Academic Performance
              </p>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-foreground/60 text-sm font-semibold mb-2">Relevant Coursework</p>
                <div className="flex flex-wrap gap-2">
                  {["Data Structures", "Algorithms", "DBMS", "OOP", "System Design", "Web Development"].map((course) => (
                    <span key={course} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium border border-primary/30">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-6">Key Achievements & Activities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="p-6 bg-background rounded-lg border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="text-foreground font-semibold mb-2">{achievement.title}</h4>
                    <p className="text-foreground/70 text-sm leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
