import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useEffect, useMemo, useState } from 'react';
import type { ISourceOptions } from '@tsparticles/engine';

export function ParticleBackground() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let mounted = true;

    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      if (mounted) setReady(true);
    });

    return () => {
      mounted = false;
    };
  }, []);

  const options = useMemo<ISourceOptions>(
    () => ({
      fullScreen: {
        enable: false,
      },

      background: {
        color: {
          value: 'transparent',
        },
      },

      fpsLimit: 24,
      detectRetina: false,

      interactivity: {
        detectsOn: 'canvas',
        events: {
          onHover: {
            enable: false,
          },
          onClick: {
            enable: false,
          },
          resize: false,
        },
      },

      particles: {
        number: {
          value: 12,
          density: {
            enable: true,
            width: 1000,
            height: 1000,
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
          speed: 0.2,
          direction: 'none',
          random: false,
          straight: false,
          outModes: {
            default: 'out',
          },
        },

        opacity: {
          value: 0.18,
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
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <Particles
        id="particle-bg"
        className="absolute inset-0"
        options={options}
      />
    </div>
  );
}
