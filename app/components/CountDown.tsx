'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';

type CountDownProps = {
  from?: number;
};

export default function CountDown({ from = 50 }: CountDownProps) {
  const count = useMotionValue(from);
  const [display, setDisplay] = useState(Math.floor(from));

  useEffect(() => {
    const controls = animate(count, 0, {
      duration: 3,
      ease: 'easeOut',
      onUpdate: (latest) => setDisplay(Math.floor(latest)),
    });

    return controls.stop;
  }, [count]);

  return (
    <motion.span
      className="text-3xl font-mono text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {display}
    </motion.span>
  );
}
