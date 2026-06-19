import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const releases = [
  {
    id: "cosmiwise",
    title: "Cosmiwise",
    text: "A dedicated research application designed to accelerate academic discovery, synthesize complex papers, and empower deep scholarly investigation.",
    date: "June 10, 2026",
    category: "Announcements",
    linkText: "Read announcement",
    hasModelDetails: false,
  },
  {
    id: "kindle",
    title: "Kindle",
    text: "A comprehensive toolkit built specifically for teachers. Streamline lesson planning, automate grading, and generate highly personalized learning materials.",
    date: "Coming Soon",
    category: "Announcements",
    hasModelDetails: false,
  },
  {
    id: "scout",
    title: "Scout",
    text: "The ultimate study companion for students. Scout breaks down complex topics, tests your knowledge, and helps you master your curriculum faster.",
    date: "Coming Soon",
    category: "Announcements",
    hasModelDetails: false,
  }
];

export function LatestReleases({ onNavigate }: { onNavigate?: (view: any) => void }) {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 pb-24 pt-12 max-w-7xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-950 font-sans">Products</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {releases.map((release, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-xl p-8 flex flex-col justify-between bg-[#EBE5D9]"
          >
            <div className="mb-12">
              <h3 className="text-[1.4rem] font-bold tracking-tight text-zinc-950 mb-4 font-sans leading-tight">
                {release.title}
              </h3>
              <p className="text-[1.05rem] text-zinc-800 leading-relaxed font-serif">
                {release.text}
              </p>
              {release.hasModelDetails && (
                <div className="mt-4">
                  <a href="#" className="inline-flex items-center text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors">
                    Model details <ArrowRight className="ml-1 w-4 h-4" />
                  </a>
                </div>
              )}
            </div>

            <div>
              <div className="border-t border-zinc-300/60 pt-4 pb-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs tracking-wider text-zinc-600 font-medium">DATE</span>
                  <span className="text-[15px] text-zinc-900 font-medium">{release.date}</span>
                </div>
              </div>
              
              {release.linkText && (
                <button 
                  onClick={() => {
                    if (release.id === 'cosmiwise' && onNavigate) {
                      onNavigate('cosmiwise');
                    }
                  }}
                  className="bg-[#1A1A1A] hover:bg-black text-white text-sm font-medium px-5 py-2.5 rounded-lg inline-flex items-center transition-colors">
                  {release.linkText} <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
