import { GraduationCap } from 'lucide-react';
import { EDUCATION } from '@/utils/constants';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

export function Education() {
  return (
    <section id="education" className="section-padding relative bg-white/[0.02]">
      <div className="container-narrow">
        <SectionHeading
          label="Education"
          title="Academic Journey"
          subtitle="Building a strong foundation in electronics, computer science, and intelligent systems."
        />

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-px" />

          {EDUCATION.map((item, i) => (
            <Reveal key={`${item.institution}-${item.period}`} delay={i * 0.08}>
              <div
                className={`relative flex flex-col md:flex-row gap-6 mb-12 last:mb-0 ${
                  i % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="hidden md:block md:w-1/2" />

                <div
                  className={`md:w-1/2 pl-12 md:pl-0 ${
                    i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                  }`}
                >
                  <div className="glass rounded-2xl p-6 border border-white/5">
                    <div
                      className={`flex items-center gap-2 mb-2 ${
                        i % 2 === 0 ? 'md:justify-end' : ''
                      }`}
                    >
                      <GraduationCap className="w-5 h-5 text-cyan-400 shrink-0" />

                      <span className="text-xs font-mono text-cyan-400">
                        {item.period}
                      </span>

                      {item.current && (
                        <span className="px-2 py-0.5 text-[10px] uppercase tracking-wider rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                          Current
                        </span>
                      )}
                    </div>

                    <h3 className="font-display text-lg font-semibold mb-1">
                      {item.institution}
                    </h3>

                    <p className="text-[var(--color-muted)] text-sm">
                      {item.degree}
                    </p>

                    {item.detail && (
                      <p className="text-cyan-400/90 text-sm mt-2 font-mono">
                        {item.detail}
                      </p>
                    )}
                  </div>
                </div>

                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-cyan-400 border-4 border-[var(--color-background)] md:-translate-x-1/2 top-6" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
