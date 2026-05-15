import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import { useState } from 'react';
import { PROJECTS } from '@/utils/constants';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { ProjectModal, type ProjectData } from '@/components/ui/ProjectModal';

export function Projects() {
  const [selected, setSelected] = useState<ProjectData | null>(null);

  return (
    <section id="projects" className="section-padding relative">
      <div className="container-narrow">
        <SectionHeading
          label="Projects"
          title="Featured Work"
          subtitle="AI-driven engineering projects at the intersection of research and real-world impact."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.12}>
              <motion.article
                className={`group relative glass rounded-2xl overflow-hidden cursor-pointer border border-white/5 hover:border-cyan-500/30 transition-all duration-500 bg-gradient-to-br ${project.gradient}`}
                whileHover={{ y: -8 }}
                onClick={() => setSelected(project)}
                onKeyDown={(e) => e.key === 'Enter' && setSelected(project)}
                role="button"
                tabIndex={0}
              >
                <div className="p-8">
                  <motion.div
                    className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                    Project {i + 1}
                  </span>
                  <h3 className="font-display text-xl font-bold mt-2 mb-3 pr-8 group-hover:gradient-text transition-all">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>
                  <motion.div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-xs rounded-md bg-white/5 text-[var(--color-muted)]"
                      >
                        {t}
                      </span>
                    ))}
                  </motion.div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-cyan-400 flex items-center gap-1 group-hover:gap-2 transition-all">
                      View details <ArrowUpRight className="w-4 h-4" />
                    </span>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 rounded-lg hover:bg-white/10 text-[var(--color-muted)] hover:text-cyan-400 transition-colors"
                      aria-label="GitHub repository"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>

        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      </div>
    </section>
  );
}
