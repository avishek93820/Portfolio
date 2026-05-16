import { Award } from 'lucide-react';
import { CERTIFICATIONS } from '@/utils/constants';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

export function Certifications() {
  return (
    <section id="certifications" className="section-padding relative">
      <div className="container-narrow">
        <SectionHeading
          label="Certifications"
          title="Continuous Learning"
          subtitle="NPTEL certifications in core computer science and artificial intelligence."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 0.05}>
              <div className="glass rounded-2xl p-6 h-full flex flex-col border border-white/5 hover:border-violet-500/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-violet-400" />
                </div>

                <span className="text-xs font-mono text-violet-400 mb-2">
                  {cert.provider}
                </span>

                <h3 className="font-display font-semibold text-base leading-snug flex-1">
                  {cert.title}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
