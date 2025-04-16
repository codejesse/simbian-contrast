'use client';

import SectionWithoutSimbian from '@/app/components/SectionWithoutSimbian';
import SectionWithSimbian from '@/app/components/SectionWithSimbian';
import PulseConnector from './components/PulseConnector';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
      <SectionWithoutSimbian />
      <PulseConnector />
      <SectionWithSimbian />
    </main>
  );
}