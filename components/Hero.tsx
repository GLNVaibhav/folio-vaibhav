'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative min-h-screen bg-background flex items-center justify-center pt-20 pb-12 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 bg-card -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-20 bg-card -z-10" />

      <motion.div
        className="w-full max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Open to Opportunities */}
        <motion.div variants={itemVariants} className="mb-8">
          <span className="inline-block px-4 py-2 bg-white rounded-full text-sm font-semibold text-secondary border border-border">
            <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2" />
            Open to Opportunities
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* LEFT SIDE */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="space-y-6">
              <p className="text-sm md:text-base font-semibold text-secondary uppercase tracking-widest">
                Hello, I am
              </p>

              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-primary leading-none">
                Vaibhav
              </h1>

              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-primary leading-none">
                Gollamudi
              </h2>
            </div>

            {/* Updated Identity */}
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl font-semibold text-secondary leading-relaxed max-w-xl"
            >
              AI Researcher • HealthTech Entrepreneur <br />
              Full-Stack Developer
            </motion.p>

            {/* Updated Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-secondary leading-relaxed max-w-xl"
            >
              Building impactful solutions at the intersection of Healthcare,
              AI, and Business. Passionate about research, entrepreneurship,
              and creating technology that solves real-world problems.
            </motion.p>

            {/* Identity Badges */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3"
            >
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                🚧 Building BeyondBreathe
              </span>

              <span className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium border border-blue-500/20">
                🔬 ML Research Intern
              </span>

              <span className="px-4 py-2 rounded-full bg-green-500/10 text-green-400 text-sm font-medium border border-green-500/20">
                🎓 SRM University AP
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 pt-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group px-8 py-4 bg-primary text-white font-bold text-lg rounded-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
              >
                View Projects
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white text-primary font-bold text-lg rounded-lg border-2 border-primary hover:bg-primary/5 transition-all duration-300"
              >
                Let's Connect
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-8 pt-12 border-t-2 border-border"
            >
              <div>
                <p className="text-4xl font-black text-primary">2+</p>
                <p className="text-sm text-secondary font-semibold mt-2">
                  Research Projects
                </p>
              </div>

              <div>
                <p className="text-4xl font-black text-primary">8+</p>
                <p className="text-sm text-secondary font-semibold mt-2">
                  Projects
                </p>
              </div>

              <div>
                <p className="text-4xl font-black text-primary">∞</p>
                <p className="text-sm text-secondary font-semibold mt-2">
                  Startup Mindset
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            variants={itemVariants}
            className="relative flex items-center justify-center"
          >
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="relative w-80 h-[420px] md:w-[360px] md:h-[500px]"
            >
              {/* Glow */}
              <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full -z-10" />

              {/* Image Card */}
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl border border-primary/20 bg-card">
                <Image
                  src="/vaibhav.png"
                  alt="Vaibhav Gollamudi"
                  fill
                  priority
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />

                {/* Top Badge */}
                <div className="absolute top-4 right-4 px-4 py-2 rounded-full bg-background/90 backdrop-blur border border-border shadow-lg text-sm font-medium">
                  🚀 Startup
                </div>

                {/* Bottom Badge */}
                <div className="absolute bottom-4 left-4 px-4 py-2 rounded-full bg-background/90 backdrop-blur border border-border shadow-lg text-sm font-medium">
                  🔬 Research
                </div>
              </div>

              {/* Floating Shapes */}
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/10 rounded-3xl -z-10"
              />

              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  delay: 0.5,
                }}
                className="absolute -top-8 -left-8 w-40 h-40 bg-muted rounded-3xl -z-10"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="text-center cursor-pointer"
          >
            <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-3">
              Scroll to explore
            </p>
            <ChevronDown className="w-6 h-6 text-secondary mx-auto" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
