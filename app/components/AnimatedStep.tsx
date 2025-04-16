import { motion } from 'framer-motion';

export default function AnimatedStep({ step, delay }: { step: string; delay: number }) {
  return (
    <motion.div
      className="min-w-[220px] bg-white text-black p-6 rounded-xl shadow-xl text-center text-lg font-semibold border-2 border-green-500"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
    >
      {step}
    </motion.div>
  );
}