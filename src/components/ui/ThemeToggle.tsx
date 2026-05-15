import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      className="relative p-2.5 rounded-xl glass hover:border-cyan-500/30 transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 0 : 180, scale: theme === 'dark' ? 1 : 0 }}
        transition={{ duration: 0.35 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Moon className="w-4 h-4 text-cyan-400" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'light' ? 0 : -180, scale: theme === 'light' ? 1 : 0 }}
        transition={{ duration: 0.35 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Sun className="w-4 h-4 text-amber-400" />
      </motion.div>
      <span className="w-4 h-4 opacity-0" aria-hidden>
        .
      </span>
    </motion.button>
  );
}
