import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const cursorXSpring = useSpring(cursorX, {
    damping: 30,
    stiffness: 300,
  });

  const cursorYSpring = useSpring(cursorY, {
    damping: 30,
    stiffness: 300,
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    setEnabled(true);

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      setHovering(
        !!target.closest(
          'a, button, [role="button"], input, textarea, select'
        )
      );
    };

    window.addEventListener('mousemove', move, { passive: true });
    window.addEventListener('mouseover', onOver);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', onOver);
    };
  }, [cursorX, cursorY]);

  if (!enabled) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
      animate={{
        scale: hovering ? 1.5 : 1,
        opacity: 1,
      }}
      transition={{
        scale: { duration: 0.15 },
      }}
    >
      <div className="-translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border border-cyan-400/70 bg-cyan-400/20 backdrop-blur-sm" />
    </motion.div>
  );
}
