'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground text-balance leading-tight">
            Full-Stack Developer & <span className="text-primary">ML Enthusiast</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-foreground/70 text-balance max-w-2xl mx-auto">
            I build intelligent systems that solve real-world problems. Specializing in web development, machine learning, and data-driven solutions.
          </p>

          {/* Key Identity */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <span className="px-4 py-2 rounded-full bg-card text-foreground text-sm font-medium border border-border">
              React & Node.js
            </span>
            <span className="px-4 py-2 rounded-full bg-card text-foreground text-sm font-medium border border-border">
              ML & Data Analysis
            </span>
            <span className="px-4 py-2 rounded-full bg-card text-foreground text-sm font-medium border border-border">
              SRM University AP
            </span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-12"
        >
          <Link
            href="#projects"
            className="px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200"
          >
            View My Work
          </Link>
          <Link
            href="#contact"
            className="px-8 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors duration-200"
          >
            Get in Touch
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="pt-16 flex justify-center"
        >
          <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-foreground/30 rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
