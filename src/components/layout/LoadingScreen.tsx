import { useEffect, useRef, useState } from 'react';
import { Brain } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const finishedRef = useRef(false);

  useEffect(() => {
    const finish = () => {
      if (finishedRef.current) return;
      finishedRef.current = true;
      onComplete();
    };

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(prev + 20, 100);

        if (next >= 100) {
          clearInterval(interval);
          finish();
        }

        return next;
      });
    }, 200);

    const safety = setTimeout(finish, 2500);

    return () => {
      clearInterval(interval);
      clearTimeout(safety);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--color-background)]">
      <div className="mb-8 p-6 rounded-2xl glass">
        <Brain className="w-12 h-12 text-cyan-400" />
      </div>

      <h1 className="font-display text-2xl md:text-3xl font-bold gradient-text mb-2">
        Avishek Chatterjee
      </h1>

      <p className="text-sm text-[var(--color-muted)] font-mono mb-10">
        Loading portfolio...
      </p>

      <div className="w-64 h-1 rounded-full bg-white/5 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full transition-all duration-200"
          style={{ width: `${progress}%` }}
        />
      </div>

      <span className="mt-3 text-xs font-mono text-cyan-400/80">
        {progress}%
      </span>
    </div>
  );
}
