'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative w-64 h-64 md:w-72 md:h-72">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-50 to-transparent"></div>
              <Image
                src="/vaibhav.png"
                alt="Vaibhav Gollamudi"
                width={288}
                height={288}
                className="rounded-full w-full h-full object-cover border-8 border-white shadow-lg"
                priority
              />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-sm font-semibold text-green-700 tracking-wider uppercase">
                Building at SRM University AP
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl font-black text-foreground leading-tight text-balance">
              CS Student, ML Researcher
              <span className="text-blue-600 block">& Data-Driven Builder</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg text-secondary leading-relaxed">
              I build intelligent systems with a data-first mindset. Currently diving deep into predictive analytics and crafting products that solve real-world problems across healthcare, agriculture, and fintech.
            </p>

            {/* Key Focus Areas */}
            <div className="space-y-3 pt-4">
              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5">📊</span>
                <div>
                  <p className="font-semibold text-foreground">ML & Predictive Analytics</p>
                  <p className="text-sm text-secondary">Customer churn prediction, data modeling</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5">🚀</span>
                <div>
                  <p className="font-semibold text-foreground">Full-Stack Development</p>
                  <p className="text-sm text-secondary">React, Node.js, scalable systems</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5">💼</span>
                <div>
                  <p className="font-semibold text-foreground">Entrepreneurial Ventures</p>
                  <p className="text-sm text-secondary">Healthcare & fintech innovation</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-start gap-4 pt-8"
            >
              <Link
                href="#research"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 hover:shadow-lg"
              >
                See My Research
              </Link>
              <Link
                href="#contact"
                className="px-8 py-3 border-2 border-foreground text-foreground rounded-lg font-semibold hover:bg-foreground/5 transition-colors duration-200"
              >
                Get in Touch
              </Link>
            </motion.div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://linkedin.com/in/vaibhav-gollamudi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-foreground transition-colors"
              >
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
              <span className="text-border">•</span>
              <a
                href="https://github.com/vaibhavgollamudi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-foreground transition-colors"
              >
                <span className="text-sm font-medium">GitHub</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="pt-20 flex justify-center"
        >
          <div className="text-center">
            <p className="text-xs font-semibold text-secondary uppercase tracking-widest mb-3">Scroll to explore</p>
            <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex items-start justify-center p-2 mx-auto">
              <div className="w-1 h-2 bg-foreground/40 rounded-full" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
