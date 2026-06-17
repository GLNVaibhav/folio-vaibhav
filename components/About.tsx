'use client';

import { motion } from 'framer-motion';

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-2">About Me</h2>
          <div className="w-12 h-1 bg-primary rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {/* Text Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-foreground/80 text-lg leading-relaxed">
              I&apos;m a passionate full-stack developer and machine learning enthusiast currently pursuing my B.Tech in Computer Science at SRM University AP. My journey combines technical excellence with entrepreneurial mindset.
            </p>
            <p className="text-foreground/80 text-lg leading-relaxed">
              With expertise in the MERN stack, I build scalable web applications that solve real problems. Simultaneously, I&apos;m diving deep into machine learning, currently researching predictive models for customer churn analysis across multiple sectors.
            </p>
            <p className="text-foreground/80 text-lg leading-relaxed">
              As a Business & Operations Intern at Sree Satyata Consulting, I&apos;ve developed skills in strategic analysis, market research, and project management that complement my technical expertise.
            </p>
          </motion.div>

          {/* Stats/Info */}
          <motion.div
            variants={itemVariants}
            className="space-y-6 bg-background rounded-lg p-8 border border-border"
          >
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h3 className="text-primary font-semibold mb-1">Education</h3>
                  <p className="text-foreground/70">B.Tech CSE, SRM University AP</p>
                  <p className="text-foreground/60 text-sm">Minor in Management</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h3 className="text-primary font-semibold mb-1">Current Role</h3>
                  <p className="text-foreground/70">Research Intern</p>
                  <p className="text-foreground/60 text-sm">ML & Customer Churn Analysis</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h3 className="text-primary font-semibold mb-1">Expertise</h3>
                  <p className="text-foreground/70">Full-Stack Development</p>
                  <p className="text-foreground/60 text-sm">React, Node.js, ML & Data Analysis</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h3 className="text-primary font-semibold mb-1">Location</h3>
                  <p className="text-foreground/70">India</p>
                  <p className="text-foreground/60 text-sm">Andhra Pradesh</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
