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
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-2">About Me</h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full" />
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
            <p className="text-secondary text-lg leading-relaxed">
              I&apos;m a second-year CS student at SRM University AP with a passion for building data-driven solutions. My approach combines technical depth with business acumen—I don&apos;t just build features, I understand the problems they solve.
            </p>
            <p className="text-secondary text-lg leading-relaxed">
              Currently, I&apos;m conducting research on <span className="font-semibold text-foreground">predictive modeling of customer churn</span> across multiple sectors, analyzing patterns and developing retention strategies backed by machine learning.
            </p>
            <p className="text-secondary text-lg leading-relaxed">
              Beyond research, I&apos;m exploring entrepreneurship through ventures like <span className="font-semibold text-foreground">BeyondBreathe</span> (healthcare), <span className="font-semibold text-foreground">LACHOS</span> (fashion tech), and <span className="font-semibold text-foreground">CivicPay</span> (fintech)—each addressing real-world gaps in their domains.
            </p>
            <p className="text-secondary text-lg leading-relaxed">
              My professional experience at Sree Satyata Consulting reinforced my interest in business operations, process optimization, and MIS-level decision making—skills that directly inform how I approach product development.
            </p>
          </motion.div>

          {/* Core Focus Areas */}
          <motion.div
            variants={itemVariants}
            className="space-y-6 bg-muted rounded-xl p-8 border border-border"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">Core Focus Areas</h3>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                <div>
                  <h4 className="text-blue-600 font-semibold mb-1">ML & Predictive Analytics</h4>
                  <p className="text-secondary text-sm">Customer churn, pattern recognition, feature engineering</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                <div>
                  <h4 className="text-blue-600 font-semibold mb-1">Full-Stack Development</h4>
                  <p className="text-secondary text-sm">React, Node.js, MongoDB, scalable architecture</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                <div>
                  <h4 className="text-blue-600 font-semibold mb-1">Business Analysis</h4>
                  <p className="text-secondary text-sm">Data-driven insights, process optimization, strategy</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                <div>
                  <h4 className="text-blue-600 font-semibold mb-1">Entrepreneurship</h4>
                  <p className="text-secondary text-sm">Product ideation, healthcare, fintech, fashion tech</p>
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-6 mt-8">
              <h4 className="text-foreground font-semibold mb-4">Quick Facts</h4>
              <ul className="space-y-2 text-sm text-secondary">
                <li>📍 Based in India (Andhra Pradesh)</li>
                <li>🎓 B.Tech CSE + Management Minor @ SRM University AP</li>
                <li>🔬 Ongoing Research Internship (ML)</li>
                <li>💼 Experience: Business Operations & Analysis</li>
                <li>🚀 Building: 3+ Startup Ventures</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
