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
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 bg-card -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-20 bg-card -z-10" />

      <motion.div
        className="w-full max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Top Label */}
        <motion.div variants={itemVariants} className="mb-8">
          <span className="inline-block px-4 py-2 bg-white rounded-full text-sm font-semibold text-secondary border border-border">
            <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2" />
            Open to Opportunities
          </span>
        </motion.div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-10">
            {/* Heading */}
            <div className="space-y-6">
              <motion.div variants={itemVariants}>
                <p className="text-sm md:text-base font-semibold text-secondary uppercase tracking-widest mb-4">
                  Hello, I am
                </p>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-6xl md:text-7xl lg:text-8xl font-black text-primary leading-none"
              >
                Vaibhav
              </motion.h1>

              <motion.h2
                variants={itemVariants}
                className="text-5xl md:text-6xl lg:text-7xl font-black text-primary leading-none"
              >
                Gollamudi
              </motion.h2>
            </div>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl font-semibold text-secondary leading-relaxed max-w-lg"
            >
              CS Student | ML Researcher <br /> Data-Driven Builder
            </motion.p>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-secondary leading-relaxed max-w-md"
            >
              Building intelligent systems with predictive analytics at their core. Currently diving deep into customer churn modeling and crafting products that solve real-world problems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 pt-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group px-8 py-4 bg-primary text-white font-bold text-lg rounded-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
              >
                View Research
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white text-primary font-bold text-lg rounded-lg border-2 border-primary hover:bg-primary/5 transition-all duration-300"
              >
                Let's Connect
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-8 pt-12 border-t-2 border-border"
            >
              <div>
                <p className="text-4xl font-black text-primary">2+</p>
                <p className="text-sm text-secondary font-semibold mt-2">Research Projects</p>
              </div>
              <div>
                <p className="text-4xl font-black text-primary">5+</p>
                <p className="text-sm text-secondary font-semibold mt-2">Full-Stack Apps</p>
              </div>
              <div>
                <p className="text-4xl font-black text-primary">3</p>
                <p className="text-sm text-secondary font-semibold mt-2">Startups</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            variants={itemVariants}
            className="relative h-96 md:h-full flex items-center justify-center"
          >
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="relative w-80 h-80 md:w-96 md:h-96"
            >
              {/* Image Container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-muted to-white border-4 border-white">
                <Image
                  src="/vaibhav.png"
                  alt="Vaibhav Gollamudi"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                  priority
                />
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/10 rounded-3xl -z-10"
              />
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
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
