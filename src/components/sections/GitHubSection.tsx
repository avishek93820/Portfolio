import { motion } from 'framer-motion';
import { ExternalLink, GitFork, Github, Star, Users } from 'lucide-react';
import {
  GITHUB_LANGUAGES,
  GITHUB_REPOS,
  GITHUB_STATS,
  PERSONAL,
} from '@/utils/constants';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { ContributionHeatmap } from '@/components/ui/ContributionHeatmap';

const LANG_COLORS: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f7df1e',
  Python: '#3776ab',
  Java: '#ed8b00',
  HTML: '#e34c26',
  CSS: '#1572b6',
};

export function GitHubSection() {
  return (
    <section id="github" className="section-padding relative bg-white/[0.02]">
      <div className="container-narrow">
        <SectionHeading
          label="GitHub"
          title="Developer Dashboard"
          subtitle="Open-source highlights — edit stats and repos in src/utils/constants.ts."
        />

        <Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {[
              { label: 'Repositories', value: GITHUB_STATS.publicRepos, icon: Github },
              { label: 'Followers', value: GITHUB_STATS.followers, icon: Users },
              { label: 'Following', value: GITHUB_STATS.following, icon: Users },
              { label: 'Featured Repos', value: GITHUB_REPOS.length, icon: Star },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                className="glass rounded-xl p-5 text-center hover:border-cyan-500/30 transition-colors"
                whileHover={{ y: -4 }}
              >
                <stat.icon className="w-5 h-5 text-cyan-400 mx-auto mb-2" />
                <p className="text-2xl font-bold font-display">{stat.value}</p>
                <p className="text-xs text-[var(--color-muted)] mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8 mb-10">
          <Reveal delay={0.1}>
            <div className="glass rounded-2xl p-6 overflow-hidden">
              <h3 className="font-display font-semibold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Contribution Activity
              </h3>
              <ContributionHeatmap />
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <motion.div className="glass rounded-2xl p-6">
              <h3 className="font-display font-semibold mb-6">Top Languages</h3>
              <div className="space-y-4">
                {GITHUB_LANGUAGES.map((lang) => (
                  <div key={lang.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="font-medium">{lang.name}</span>
                      <span className="text-[var(--color-muted)]">{lang.percentage}%</span>
                    </div>
                    <motion.div className="h-2 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{
                          backgroundColor: LANG_COLORS[lang.name] ?? '#22d3ee',
                        }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                      />
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <h3 className="font-display font-semibold mb-6">Featured Repositories</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {GITHUB_REPOS.map((repo) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-xl p-5 block group hover:border-cyan-500/30 transition-all"
                whileHover={{ y: -4 }}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h4 className="font-semibold text-sm truncate group-hover:text-cyan-400 transition-colors">
                    {repo.name}
                  </h4>
                  <ExternalLink className="w-4 h-4 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400" />
                </div>
                <p className="text-xs text-[var(--color-muted)] line-clamp-2 mb-4 min-h-[2.5rem]">
                  {repo.description}
                </p>
                <div className="flex items-center gap-4 text-xs text-[var(--color-muted)]">
                  {repo.language && (
                    <span className="flex items-center gap-1">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{
                          backgroundColor: LANG_COLORS[repo.language] ?? '#94a3b8',
                        }}
                      />
                      {repo.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3" /> {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3 h-3" /> {repo.forks_count}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 text-center">
          <Button variant="primary" href={PERSONAL.github} external>
            <Github className="w-4 h-4" />
            View Full Profile
          </Button>
        </div>
      </div>
    </section>
  );
}
