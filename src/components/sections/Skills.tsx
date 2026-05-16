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
      <div className="container-narrow relative">
        <SectionHeading
          label="Skills"
          title="Technical Arsenal"
          subtitle="A curated stack spanning systems, web, and AI/ML."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, i) => {
            const Icon = categoryIcons[cat.icon];

            return (
              <Reveal key={cat.title} delay={i * 0.05}>
                <div className="glass rounded-2xl p-6 h-full border border-white/5 hover:border-cyan-500/25 transition-colors">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 rounded-xl bg-white/5">
                      <Icon className="w-5 h-5 text-cyan-400" />
                    </div>

                    <h3 className="font-display font-semibold text-lg">
                      {cat.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white/5 text-[var(--color-muted)] border border-white/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
