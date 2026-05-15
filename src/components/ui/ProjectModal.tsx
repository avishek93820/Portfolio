import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  tech: readonly string[];
  features: readonly string[];
  github: string;
  demo: string;
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {project && (
        <>
          <motion.div
            className="fixed inset-0 z-[80] bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-[81] md:w-full md:max-w-2xl max-h-[90vh] overflow-y-auto glass rounded-2xl p-6 md:p-8 glow-border"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 id="project-modal-title" className="font-display text-2xl font-bold mb-3 pr-10">
              {project.title}
            </h3>
            <p className="text-[var(--color-muted)] leading-relaxed mb-6">{project.description}</p>

            <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-3">
              Features
            </h4>
            <ul className="space-y-2 mb-6">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-[var(--color-muted)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 text-xs rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Button variant="primary" href={project.github} external>
                <Github className="w-4 h-4" />
                GitHub
              </Button>
              <Button variant="outline" href={project.demo} external>
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
