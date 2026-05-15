import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useEffect, useMemo, useState } from 'react';
import type { ISourceOptions } from '@tsparticles/engine';

export function ParticleBackground() {
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;

    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    })
      .then(() => {
        if (!cancelled) setReady(true);
      })
      .catch((err) => {
        console.warn('Particles failed to load:', err);
        if (!cancelled) setFailed(true);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: 'transparent' } },
      fpsLimit: 60,
      detectRetina: true,
      interactivity: {
        detectsOn: 'window',
        events: {
          onHover: { enable: true, mode: 'grab' },
          resize: { enable: true },
        },
        modes: {
          grab: {
            distance: 140,
            links: { opacity: 0.35 },
          },
        },
      },
      particles: {
        number: { value: 60, density: { enable: true, width: 900, height: 900 } },
        color: { value: ['#22d3ee', '#a78bfa', '#e879f9'] },
        links: {
          enable: true,
          color: '#22d3ee',
          distance: 130,
          opacity: 0.18,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.8,
          direction: 'none',
          random: true,
          outModes: { default: 'bounce' },
        },
        opacity: {
          value: { min: 0.15, max: 0.55 },
        },
        size: {
          value: { min: 1, max: 2.5 },
        },
        shape: { type: 'circle' },
      },
    }),
    [],
  );

  if (failed) {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 neural-grid opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-[var(--color-background)]" />
      </div>
    );
  }

  if (!ready) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <Particles id="tsparticles" className="absolute inset-0" options={options} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-background)]" />
    </div>
  );
}
