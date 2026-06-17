'use client';

import { motion } from 'framer-motion';
import { skillsData } from '@/lib/skills';

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-2">Skills & Expertise</h2>
          <div className="w-12 h-1 bg-primary rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-10"
        >
          {skillsData.map((category) => (
            <motion.div key={category.category} variants={categoryVariants} className="space-y-4">
              <h3 className="text-2xl font-bold text-primary mb-4">{category.category}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    variants={skillVariants}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.08, y: -4 }}
                    className="px-4 py-3 bg-background rounded-lg border border-border text-center cursor-pointer hover:border-primary hover:bg-primary/5 transition-all duration-200"
                  >
                    <p className="text-foreground font-semibold text-sm">{skill}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certification */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-border"
        >
          <h3 className="text-2xl font-bold text-primary mb-6">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-background rounded-lg border border-primary/30 hover:border-primary transition-colors duration-200"
            >
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-accent mt-2 flex-shrink-0" />
                <div>
                  <h4 className="text-foreground font-semibold">MongoDB Associate Developer</h4>
                  <p className="text-foreground/60 text-sm mt-1">Certified in MongoDB database development and querying</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
