import { motion } from 'framer-motion';
import AnimatedStep from './AnimatedStep';

const steps = [
  'Triaged & Reported',
  'Automated Response',
  'Comprehensive Analysis',
  'Accurate Detection',
  '24/7 Coverage',
];

export default function SectionWithSimbian() {
  return (
    <section className="p-10 bg-gradient-to-r from-emerald-800 to-emerald-900">
      <h2 className="text-4xl font-extrabold mb-8 text-center tracking-wide">With Simbian</h2>
      <div className="flex overflow-x-auto space-x-6 pb-4">
        {steps.map((step, i) => (
          <AnimatedStep key={step} step={step} delay={i * 0.3} />
        ))}
      </div>
      <div className="grid gap-8 md:grid-cols-3 mt-10">
        {['Ignored Alerts', 'Wrongly Closed Alerts', 'Active Threats'].map((type) => (
          <motion.div
            key={type}
            className="bg-emerald-700 p-6 rounded-2xl text-center shadow-lg border border-emerald-500"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="text-4xl mb-2">✅</div>
            <div className="text-xl font-semibold tracking-wide">{type}</div>
            <motion.div
              className="text-3xl font-mono text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              0
            </motion.div>
          </motion.div>
        ))}
      </div>
      <div className="mt-10 text-center text-lg text-white/90 space-y-2">
        <p>✅ 90% of alerts resolved automatically, 24/7</p>
        <p>✅ Correlates alerts to your environment</p>
        <p>✅ Investigate every alert—no SOAR needed</p>
      </div>
    </section>
  );
}