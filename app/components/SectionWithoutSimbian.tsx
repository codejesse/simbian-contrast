import AlertCard from './AlertCard';

export default function SectionWithoutSimbian() {
  return (
    <section className="p-10 bg-gradient-to-r from-gray-900 via-red-900 to-black">
      <h2 className="text-4xl font-extrabold mb-8 text-center tracking-wide">Without Simbian</h2>
      <div className="grid gap-8 md:grid-cols-3">
        <AlertCard type="Ignored Alerts" />
        <AlertCard type="Wrongly Closed Alerts" />
        <AlertCard type="Active Threats" />
      </div>
      <div className="mt-10 text-center text-lg text-white/80 space-y-2">
        <p>⚠️ Wasting valuable analyst time on false positives</p>
        <p>🧩 Processing one alert at a time, missing the big picture</p>
        <p>🔧 More time fixing SOAR automation, less time on real threats</p>
      </div>
    </section>
  );
}