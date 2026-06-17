'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function Contact() {
  const contactInfo = [
    {
      icon: '📄',
      label: 'Resume',
      value: 'View My Resume',
      href: '/resume.pdf',
    },
    {
      icon: '✉️',
      label: 'Email',
      value: 'glnvaibhav@gmail.com',
      href: 'mailto:glnvaibhav@gmail.com',
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+91-7013431249',
      href: 'tel:+917013431249',
    },
    {
      icon: '🔗',
      label: 'LinkedIn',
      value: 'linkedin.com/in/vaibhav-gollamudi-254a6a33b',
      href: 'https://linkedin.com/in/vaibhav-gollamudi-254a6a33b',
    },
    {
      icon: '💻',
      label: 'GitHub',
      value: 'github.com/GLNVaibhav',
      href: 'https://github.com/GLNVaibhav',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Let's Connect</h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            I'm always open to new opportunities, collaborations, and conversations. Feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {contactInfo.map((info, index) => (
            <motion.a
              key={info.label}
              href={info.href}
              target={info.href.startsWith('http') ? '_blank' : undefined}
              rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, borderColor: 'rgb(59, 130, 246)' }}
              className="p-6 bg-background rounded-lg border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl">{info.icon}</span>
                <div>
                  <h3 className="text-foreground font-semibold mb-1">{info.label}</h3>
                  <p className="text-primary hover:text-accent transition-colors duration-200 text-sm font-medium">
                    {info.value}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="mailto:glnvaibhav@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 w-full sm:w-auto text-center"
          >
            Send me an Email
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/vaibhav-gollamudi-254a6a33b"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors duration-200 w-full sm:w-auto text-center"
          >
            Connect on LinkedIn
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
