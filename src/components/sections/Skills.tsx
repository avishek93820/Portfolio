import { motion } from 'framer-motion';
import { Brain, Code2, Cpu, Globe, Wrench } from 'lucide-react';
import { SKILL_CATEGORIES } from '@/utils/constants';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

const categoryIcons = {
  code: Code2,
  globe: Globe,
  brain: Brain,
  cpu: Cpu,
  wrench: Wrench,
} as const;

export function Skills() {
  return (
    <section id="skills" className="section-padding relative bg-white/[0.02]">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-violet-500/5 pointer-events-none" />
      <div className="container-narrow relative">
        <SectionHeading
          label="Skills"
          title="Technical Arsenal"
          subtitle="A curated stack spanning systems, web, and cutting-edge AI/ML."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, i) => {
            const Icon = categoryIcons[cat.icon];
            return (
              <Reveal key={cat.title} delay={i * 0.08}>
                <motion.div
                  className="glass rounded-2xl p-6 h-full border border-white/5 hover:border-cyan-500/25 transition-all duration-300 group"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <motion.div
                      className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-500/15 to-violet-500/15"
                      whileHover={{ rotate: 8 }}
                    >
                      <Icon className="w-5 h-5 text-cyan-400" />
                    </motion.div>
                    <h3 className="font-display font-semibold text-lg">{cat.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white/5 text-[var(--color-muted)] border border-white/5 group-hover:border-cyan-500/20 group-hover:text-cyan-300/90 transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
