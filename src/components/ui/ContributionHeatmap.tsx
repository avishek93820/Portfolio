const WEEKS = 52;
const DAYS = 7;

const PATTERN: number[][] = Array.from({ length: WEEKS }, (_, w) =>
  Array.from({ length: DAYS }, (_, d) => {
    const seed = (w * 7 + d) % 11;

    if (seed < 3) return 0;
    if (seed < 6) return 1;
    if (seed < 8) return 2;
    if (seed < 10) return 3;
    return 4;
  }),
);

const LEVEL_CLASS = [
  'bg-white/5',
  'bg-cyan-500/25',
  'bg-cyan-500/45',
  'bg-cyan-500/65',
  'bg-cyan-400/90',
];

export function ContributionHeatmap() {
  return (
    <div className="overflow-x-auto rounded-xl bg-white/5 p-4">
      <div className="flex gap-[3px] min-w-[640px]">
        {PATTERN.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-[3px]">
            {week.map((level, di) => (
              <div
                key={`${wi}-${di}`}
                className={`w-[11px] h-[11px] rounded-sm ${LEVEL_CLASS[level]}`}
              />
            ))}
          </div>
        ))}
      </div>

      <p className="text-xs text-[var(--color-muted)] mt-4 text-center">
        Activity overview — update stats in{' '}
        <code className="text-cyan-400/80">src/utils/constants.ts</code>
      </p>
    </div>
  );
}
