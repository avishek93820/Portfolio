import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';
import { PERSONAL, ROTATING_ROLES } from '@/utils/constants';
import { useTypingEffect } from '@/hooks/useTypingEffect';
import { useParallax } from '@/hooks/useParallax';
import { Button } from '@/components/ui/Button';
import { ParticleBackground } from '@/components/ui/ParticleBackground';
import { scrollToSection } from '@/utils/scroll';

export function Hero() {
  const typedRole = useTypingEffect(ROTATING_ROLES);
  const parallaxY = useParallax(0.15);
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding pt-28"
    >
      <ParticleBackground />

      <div className="absolute inset-0 neural-grid opacity-60 pointer-events-none" />
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none"
        style={{ transform: `translate(-50%, ${parallaxY}px)` }}
      />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-violet-500/10 blur-[100px] pointer-events-none" />

      <div className="container-narrow relative z-10 grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-center">
        <motion.div
          className="flex justify-center lg:justify-start order-2 lg:order-1"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="relative"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/40 via-violet-500/30 to-fuchsia-500/40 blur-xl scale-110" />
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full p-1 bg-gradient-to-br from-cyan-400 via-violet-500 to-fuchsia-500 glow-border">
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 flex items-center justify-center">
                {!imgError ? (
                  <img
                    src="/profile.jpg"
                    alt={PERSONAL.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const img = e.currentTarget;
                      if (!img.src.endsWith('/file.svg')) {
                        img.src = '/file.svg';
                      } else {
                        setImgError(true);
                      }
                    }}
                  />
                ) : (
                  <span className="font-display text-5xl font-bold gradient-text">AC</span>
                )}
              </div>
            </div>
            <motion.div
              className="absolute -bottom-2 -right-2 px-3 py-1.5 rounded-full glass text-xs font-mono text-cyan-400 border border-cyan-500/30"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Open to opportunities
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="text-center lg:text-left order-1 lg:order-2"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          <motion.p
            className="text-sm font-mono text-cyan-400 mb-4 tracking-wider uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Hello, I&apos;m
          </motion.p>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
            <span className="gradient-text">{PERSONAL.name}</span>
          </h1>

          <p className="text-lg sm:text-xl text-[var(--color-muted)] mb-2">{PERSONAL.headline}</p>

          <div className="h-10 sm:h-12 mb-6 flex items-center justify-center lg:justify-start">
            <span className="text-xl sm:text-2xl font-semibold text-[var(--color-foreground)]">
              {typedRole}
              <motion.span
                className="inline-block w-0.5 h-6 sm:h-7 bg-cyan-400 ml-1 align-middle"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </span>
          </div>

          <p className="text-base text-[var(--color-muted)] max-w-xl mx-auto lg:mx-0 mb-6 leading-relaxed">
            {PERSONAL.tagline}
          </p>

          <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-[var(--color-muted)] mb-8">
            <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
            {PERSONAL.location}
          </div>

          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            <Button variant="primary" onClick={() => scrollToSection('projects')}>
              View Projects
            </Button>
            <Button
              variant="secondary"
              href={PERSONAL.resumePath}
              download="Avishek_Chatterjee_Resume.pdf"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </Button>
            <Button variant="outline" onClick={() => scrollToSection('contact')}>
              <Mail className="w-4 h-4" />
              Contact Me
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection('about');
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--color-muted)] hover:text-cyan-400 transition-colors z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Scroll to about"
      >
        <ArrowDown className="w-6 h-6" />
      </motion.a>
    </section>
  );
}
