import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaBug, FaExclamationTriangle, FaSkullCrossbones } from 'react-icons/fa';
import AlertStream from './AlertStream';

type AlertType = 'Ignored Alerts' | 'Wrongly Closed Alerts' | 'Active Threats';

const icons = {
  'Ignored Alerts': FaExclamationTriangle,
  'Wrongly Closed Alerts': FaBug,
  'Active Threats': FaSkullCrossbones,
};

const startingCounts = {
  'Ignored Alerts': 200,
  'Wrongly Closed Alerts': 35,
  'Active Threats': 5,
};

interface AlertCardProps {
  type: AlertType;
}

export default function AlertCard({ type }: AlertCardProps) {
  const Icon = icons[type];
  const [count, setCount] = useState(startingCounts[type]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + Math.floor(Math.random() * 3));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="bg-red-800/80 p-6 rounded-2xl shadow-2xl w-full max-w-sm mx-auto backdrop-blur-sm border border-red-500"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="flex items-center space-x-4 mb-4">
        <Icon className="text-4xl text-white drop-shadow-lg" />
        <div>
          <h3 className="text-xl font-bold tracking-wide">{type}</h3>
          <motion.div
            className="text-3xl font-mono text-white"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            {count}
          </motion.div>
        </div>
      </div>
      <AlertStream />
    </motion.div>
  );
}