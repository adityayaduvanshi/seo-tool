'use client';

import TypewriterComponent from 'typewriter-effect';

import { UrlForm } from '@/components/url-form';

export default function Home() {
  return (
    <main className="flex h-[100vh] flex-col py-40 items-center  md:p-24">
      <div className="space-y-5 mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold ">
        <h1>The best SEO tool</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r  from-purple-400 to-pink-600">
          <TypewriterComponent
            options={{
              strings: [
                'SEO Status',
                'SEO Score',
                'Speed Insights',
                'Meta Tags',
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>

      <div>
        <UrlForm />
      </div>
    </main>
  );
}
