import { Github, Heart, Linkedin, Mail } from 'lucide-react';
import { NAV_LINKS, PERSONAL } from '@/utils/constants';
import { scrollToSection } from '@/utils/scroll';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-white/[0.02]">
      <div className="container-narrow section-padding py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div className="lg:col-span-2">
            <p className="font-display text-xl font-bold gradient-text mb-3">{PERSONAL.name}</p>
            <p className="text-sm text-[var(--color-muted)] max-w-sm leading-relaxed">
              {PERSONAL.tagline}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-[var(--color-muted)] hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              <a
                href={PERSONAL.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl glass hover:border-cyan-500/30 text-[var(--color-muted)] hover:text-cyan-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={PERSONAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl glass hover:border-cyan-500/30 text-[var(--color-muted)] hover:text-cyan-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${PERSONAL.email}`}
                className="p-2.5 rounded-xl glass hover:border-cyan-500/30 text-[var(--color-muted)] hover:text-cyan-400 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--color-muted)]">
          <p>&copy; {year} {PERSONAL.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" /> React + Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
