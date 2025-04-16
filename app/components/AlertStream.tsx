import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { alerts } from '@/lib/AlertsData';

export default function AlertStream() {
  const [stream, setStream] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newAlert = alerts[Math.floor(Math.random() * alerts.length)];
      setStream((prev) => {
        const updated = [...prev, newAlert];
        return updated.length > 5 ? updated.slice(updated.length - 5) : updated;
      });
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-2 text-sm overflow-hidden h-28 text-left font-medium">
      <div className="flex flex-col-reverse space-y-reverse space-y-1">
        <AnimatePresence initial={false}>
          {stream.map((alert, i) => (
            <motion.div
              key={alert + i}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="bg-black bg-opacity-30 px-3 py-1 rounded text-white/90 shadow"
            >
              🚨 {alert}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}