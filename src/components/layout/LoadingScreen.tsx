import { motion } from 'framer-motion';
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
      setProgress((p) => {
        const next = Math.min(100, p + Math.random() * 22 + 10);
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(finish, 300);
        }
        return next;
      });
    }, 100);

    const safety = setTimeout(finish, 3500);

    return () => {
      clearInterval(interval);
      clearTimeout(safety);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--color-background)] neural-grid"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        className="relative mb-8 p-6 rounded-2xl glass glow-border"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        >
          <Brain className="w-12 h-12 text-cyan-400" />
        </motion.div>
      </motion.div>

      <h1 className="font-display text-2xl md:text-3xl font-bold gradient-text mb-2">
        Avishek Chatterjee
      </h1>
      <p className="text-sm text-[var(--color-muted)] font-mono mb-10">
        Loading portfolio...
      </p>

      <div className="w-64 h-1 rounded-full bg-white/5 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full transition-all duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>
      <span className="mt-3 text-xs font-mono text-cyan-400/80">{Math.round(progress)}%</span>
    </motion.div>
  );
}
