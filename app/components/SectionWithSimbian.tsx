import { motion } from "framer-motion";
import AnimatedStep from "./AnimatedStep";
import CountDownToZero from "./CountDown";

const steps = [
  "Triaged & Reported",
  "Automated Response",
  "Comprehensive Analysis",
  "Accurate Detection",
  "24/7 Coverage",
];

const issues = [
  { label: "Ignored Alerts", from: 87 },
  { label: "Wrongly Closed Alerts", from: 46 },
  { label: "Active Threats", from: 19 },
];

export default function SectionWithSimbian() {
  return (
    <section className="p-10 bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-lg shadow-lg">
      <h2 className="text-4xl font-extrabold mb-8 text-center tracking-wide">
        With Simbian
      </h2>

      <div className="flex overflow-x-auto space-x-6 pb-4">
        {steps.map((step, i) => (
          <AnimatedStep key={step} step={step} delay={i * 0.3} />
        ))}
      </div>

      <div className="grid gap-8 md:grid-cols-3 mt-10">
        {issues.map(({ label, from }, i) => (
          <motion.div
            key={label}
            className="bg-emerald-700 p-6 rounded-2xl text-center shadow-lg border border-emerald-500"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 + i * 0.3 }}
          >
            <div className="text-4xl mb-2">✅</div>
            <div className="text-xl font-semibold tracking-wide">{label}</div>
            <CountDownToZero from={from} />
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
