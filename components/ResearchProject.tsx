'use client';

import { motion } from 'framer-motion';
import { researchProject } from '@/lib/projects';

export function ResearchProject() {
  return (
    <section id="research" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-2">Featured Research</h2>
          <div className="w-12 h-1 bg-primary rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-card via-card to-background rounded-xl border border-border overflow-hidden shadow-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12">
            {/* Left Content */}
            <div className="space-y-6">
              <div>
                <div className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-4">
                  {researchProject.status}
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                  {researchProject.title}
                </h3>
                <p className="text-primary text-lg font-semibold">{researchProject.subtitle}</p>
              </div>

              <p className="text-foreground/80 text-lg leading-relaxed">
                {researchProject.description}
              </p>

              {/* Key Highlights */}
              <div className="space-y-3 pt-4">
                <h4 className="text-primary font-semibold text-lg">Key Highlights</h4>
                {researchProject.keyHighlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-foreground/70">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Technologies & Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6 bg-background/50 rounded-lg p-6 border border-border"
            >
              <div>
                <h4 className="text-primary font-semibold text-lg mb-4">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {researchProject.technologies.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/30"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <h4 className="text-primary font-semibold text-lg mb-3">Project Details</h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-foreground/60">University</p>
                    <p className="text-foreground font-semibold">{researchProject.university}</p>
                  </div>
                  <div>
                    <p className="text-foreground/60">Research Area</p>
                    <p className="text-foreground font-semibold">Customer Churn Prediction</p>
                  </div>
                  <div>
                    <p className="text-foreground/60">Industry Focus</p>
                    <p className="text-foreground font-semibold">Multi-Sector Analysis</p>
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
              >
                View Research Details
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
