import React from 'react';

export function SuggestionsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
      <h1 className="font-sans text-4xl sm:text-5xl font-black tracking-tight text-zinc-950 mb-8 uppercase">
        Suggestions
      </h1>
      <div className="prose prose-zinc prose-sm sm:prose-base max-w-none font-sans">
        <p className="text-zinc-600 leading-relaxed font-sans mt-4">
          We welcome community feedback to improve General Language's orchestration systems.
        </p>
        <p className="text-zinc-600 leading-relaxed font-sans mt-4">
          Please route your feature requests and bug reports through the official portal.
        </p>
      </div>
    </div>
  );
}
