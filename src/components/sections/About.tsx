import { Layers, Puzzle, Zap } from 'lucide-react';
import { ABOUT_HIGHLIGHTS } from '@/utils/constants';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

const iconMap = {
  zap: Zap,
  puzzle: Puzzle,
  layers: Layers,
} as const;

export function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="container-narrow">
        <SectionHeading
          label="About"
          title="Crafting Intelligent Solutions"
          subtitle="Passionate Electronics and Computer Science undergraduate with strong foundations in software engineering, AI, ML, and full-stack development."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {ABOUT_HIGHLIGHTS.map((item, i) => {
            const Icon = iconMap[item.icon];

            return (
              <Reveal key={item.title} delay={i * 0.05}>
                <div className="glass rounded-2xl p-6 h-full border border-white/5 hover:border-cyan-500/25 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>

                  <h3 className="font-display text-lg font-semibold mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
