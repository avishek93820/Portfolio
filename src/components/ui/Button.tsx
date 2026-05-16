import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline';

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  href?: string;
  download?: string;
  external?: boolean;
}

type ButtonProps =
  | (BaseProps & ButtonHTMLAttributes<HTMLButtonElement>)
  | (BaseProps & AnchorHTMLAttributes<HTMLAnchorElement>);

const variants: Record<Variant, string> = {
  primary:
    'bg-gradient-to-r from-cyan-500 to-violet-600 text-white hover:opacity-90',
  secondary:
    'glass text-[var(--color-foreground)] hover:border-cyan-500/40',
  ghost:
    'text-[var(--color-muted)] hover:text-cyan-400 hover:bg-white/5',
  outline:
    'border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10',
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
    'inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-colors duration-200 disabled:opacity-50 disabled:pointer-events-none';

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        download={download}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
