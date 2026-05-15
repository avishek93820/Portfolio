import { motion } from 'framer-motion';
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
            <Reveal key={cert.title} delay={i * 0.1}>
              <motion.div
                className="glass rounded-2xl p-6 h-full flex flex-col border border-white/5 hover:border-violet-500/30 transition-all group"
                whileHover={{ y: -6, scale: 1.02 }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-violet-400" />
                </div>
                <span className="text-xs font-mono text-violet-400 mb-2">{cert.provider}</span>
                <h3 className="font-display font-semibold text-base leading-snug flex-1">
                  {cert.title}
                </h3>
                <motion.div
                  className="mt-4 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-500"
                />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
