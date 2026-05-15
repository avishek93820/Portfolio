import { motion, type HTMLMotionProps } from 'framer-motion';
import type { ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: ReactNode;
  variant?: Variant;
  href?: string;
  download?: string;
  external?: boolean;
}

const variants: Record<Variant, string> = {
  primary:
    'bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40',
  secondary:
    'glass text-[var(--color-foreground)] hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10',
  ghost: 'text-[var(--color-muted)] hover:text-cyan-400 hover:bg-white/5',
  outline:
    'border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400/60',
};

export function Button({
  children,
  variant = 'primary',
  className = '',
  href,
  download,
  external,
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none';

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        download={download}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={classes}
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button className={classes} whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }} {...props}>
      {children}
    </motion.button>
  );
}
