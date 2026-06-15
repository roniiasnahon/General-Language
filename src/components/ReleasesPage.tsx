import React from 'react';

export function ReleasesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
      <h1 className="font-sans text-4xl sm:text-5xl font-black tracking-tight text-zinc-950 mb-8 uppercase">
        Releases
      </h1>
      <div className="prose prose-zinc prose-sm sm:prose-base max-w-none font-sans">
        <p className="text-zinc-600 leading-relaxed font-sans mt-4">
          Stay up to date with the latest platform versions and engine deployments.
        </p>
        <p className="text-zinc-600 leading-relaxed font-sans mt-4">
          v2.4.0 is now streaming to all nodes globally.
        </p>
      </div>
    </div>
  );
}
