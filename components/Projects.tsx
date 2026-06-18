'use client';

import { motion } from 'framer-motion';
import { projects } from '@/lib/projects';

export function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const badgeStyles = {
    startup: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    research: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    ongoing: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
    completed: 'bg-green-500/20 text-green-300 border-green-500/30',
  };

  const featuredProjects = projects
    .filter((p) => p.featured)
    .concat(projects.filter((p) => !p.featured));

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-2">
            Featured Projects
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {featuredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative bg-gradient-to-br from-card to-background rounded-lg border border-border p-6 hover:border-primary/50 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>

                    <div className="flex flex-col items-end gap-2">
                      <div className="flex gap-2 flex-wrap">
  {project.ventureType === "incubation" && (
    <span className="px-3 py-1 bg-green-500/15 text-green-600 rounded-full text-xs font-semibold whitespace-nowrap">
      🚀 Incubation Candidate
    </span>
  )}

  {project.ventureType === "concept" && (
    <span className="px-3 py-1 bg-purple-500/15 text-purple-600 rounded-full text-xs font-semibold whitespace-nowrap">
      💡 Entrepreneurial Work
    </span>
  )}

  {project.status === "ongoing" && (
    <span className="px-3 py-1 bg-blue-500/15 text-blue-600 rounded-full text-xs font-semibold whitespace-nowrap">
      🔄 Ongoing
    </span>
  )}
</div>

                      {project.status && (
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                            badgeStyles[project.status]
                          }`}
                        >
                          {project.status === 'startup' && '🚀 Startup'}
                          {project.status === 'research' && '🔬 Research'}
                          {project.status === 'ongoing' && '🚧 Ongoing'}
                          {project.status === 'completed' && '✅ Completed'}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-primary text-sm font-medium mb-3">
                    {project.category}
                  </p>

                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <p className="text-foreground/60 text-xs font-semibold uppercase tracking-wide mb-3">
                    Technologies
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium border border-primary/30 group-hover:border-primary/60 group-hover:bg-primary/20 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-6 border-t border-border">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-200 text-sm font-medium"
                    >
                      GitHub
                    </motion.a>
                  )}

                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-200 text-sm font-medium"
                    >
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
