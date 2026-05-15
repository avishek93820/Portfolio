import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useEffect, useMemo, useState } from 'react';
import type { ISourceOptions } from '@tsparticles/engine';

/*export function ParticleBackground() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setReady(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: 'transparent' } },

      fpsLimit: 30,
      detectRetina: false,

      interactivity: {
        detectsOn: 'canvas',
        events: {
          onHover: { enable: false },
          resize: false,
        },
      },

      particles: {
        number: {
          value: 20,
          density: {
            enable: true,
            width: 800,
            height: 800,
          },
        },

        color: {
          value: ['#22d3ee', '#a78bfa'],
        },

        links: {
          enable: false,
        },

        move: {
          enable: true,
          speed: 0.3,
          direction: 'none',
          random: false,
          outModes: {
            default: 'out',
          },
        },

        opacity: {
          value: 0.25,
        },

        size: {
          value: {
            min: 1,
            max: 2,
          },
        },

        shape: {
          type: 'circle',
        },
      },
    }),
    []
  );

  if (!ready) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <Particles
        id="tsparticles"
        className="absolute inset-0"
        options={options}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-background)]" />
    </div>
  );
}
