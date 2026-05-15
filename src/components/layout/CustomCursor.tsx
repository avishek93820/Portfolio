import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

/*export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const onEnter = () => setVisible(true);
    const onLeave = () => setVisible(false);

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setHovering(
        !!target.closest('a, button, [role="button"], input, textarea, select, label'),
      );
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', onOver);
    document.body.addEventListener('mouseenter', onEnter);
    document.body.addEventListener('mouseleave', onLeave);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', onOver);
      document.body.removeEventListener('mouseenter', onEnter);
      document.body.removeEventListener('mouseleave', onLeave);
    };
  }, [cursorX, cursorY, visible]);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference hidden md:block"
        style={{ x: cursorXSpring, y: cursorYSpring }}
        animate={{ opacity: visible ? 1 : 0, scale: hovering ? 1.8 : 1 }}
        transition={{ scale: { duration: 0.2 } }}
      >
        <motion.div
          className="-translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-cyan-400"
          animate={{ scale: hovering ? 0.5 : 1 }}
        />
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none hidden md:block"
        style={{ x: cursorXSpring, y: cursorYSpring }}
        animate={{ opacity: visible ? 0.4 : 0 }}
      >
        <motion.div
          className="-translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-cyan-400/50"
          animate={{ scale: hovering ? 1.5 : 1 }}
          transition={{ duration: 0.25 }}
        />
      </motion.div>
    </>
  );
}*/
