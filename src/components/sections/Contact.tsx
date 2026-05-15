import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Send } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { PERSONAL } from '@/utils/constants';
import { openContactMailto } from '@/utils/contact';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    openContactMailto(form);
  };

  const contactLinks = [
    { icon: Mail, label: PERSONAL.email, href: `mailto:${PERSONAL.email}` },
    { icon: Linkedin, label: 'LinkedIn', href: PERSONAL.linkedin },
    { icon: Github, label: 'GitHub', href: PERSONAL.github },
    { icon: MapPin, label: PERSONAL.location, href: '#' },
  ];

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-t from-violet-500/5 via-transparent to-transparent pointer-events-none" />
      <div className="container-narrow relative">
        <SectionHeading
          label="Contact"
          title="Let's Connect"
          subtitle="Send a message through your email app — no backend or API required."
        />

        <div className="grid lg:grid-cols-5 gap-10">
          <Reveal className="lg:col-span-2">
            <motion.div className="glass rounded-2xl p-8 h-full">
              <h3 className="font-display text-xl font-semibold mb-6">Get in touch</h3>
              <ul className="space-y-5">
                {contactLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 text-[var(--color-muted)] hover:text-cyan-400 transition-colors group"
                      onClick={item.href === '#' ? (e) => e.preventDefault() : undefined}
                    >
                      <span className="p-2.5 rounded-xl bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-colors">
                        <item.icon className="w-5 h-5 text-cyan-400" />
                      </span>
                      <span className="text-sm break-all">{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all text-[var(--color-foreground)]"
                  placeholder="Your name"
                />
              </div>
              <motion.div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all text-[var(--color-foreground)]"
                  placeholder="you@email.com"
                />
              </motion.div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none text-[var(--color-foreground)]"
                  placeholder="Your message..."
                />
              </div>

              <p className="text-xs text-[var(--color-muted)]">
                Submit opens your email client with a pre-filled message to {PERSONAL.email}.
              </p>

              <Button variant="primary" type="submit" className="w-full sm:w-auto">
                <Send className="w-4 h-4" />
                Send via Email
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
