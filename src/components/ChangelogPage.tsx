import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const changelogData = [
  {
    version: 'F 1.0.3',
    date: 'June 19, 2026',
    title: 'Interface Streamlining & Optimization',
    description: 'A major update focusing on interface streamlining, iconography calibration, and module consolidation.',
    accordions: [
      { 
        label: 'Improvements (5)', 
        category: 'improvements', 
        content: (
          <ul className="list-disc pl-4 space-y-2">
            <li><strong>Interface Streamlining:</strong> Completely removed the redundant external import sub-menus from the primary selection workspace, reducing visual clutter and streamlining the core local workflow.</li>
            <li><strong>Iconography Calibration:</strong> Replaced the generic grid iconography with a high-precision Spanner icon across the primary navigation sidebar and utility tabs, establishing a clear visual metaphor for the tools ecosystem.</li>
            <li><strong>Module Consolidation:</strong> Patched the internal state of the analysis engine to unify the feedback loops and status indicators, ensuring the interface remains professional and focused during active processing.</li>
            <li><strong>Persistent Configuration:</strong> Hardened the core system scripts to ensure these structural refinements are preserved as the application scales, maintaining a consistent aesthetic across all views.</li>
            <li><strong>Navigational Synchronization:</strong> Synchronized the iconography between the sidebar and the active tab strip to ensure immediate visual recognition of specialized workspace modules.</li>
          </ul>
        )
      },
      { label: 'Fixes (0)', category: 'fixes', content: null },
      { label: 'Patches (0)', category: 'patches', content: null },
    ]
  },
  {
    version: 'F 1.0.1',
    date: 'June 11, 2026',
    title: 'Authentication bridge for Cosmiwise',
    description: 'Authentication bridge fix.',
    accordions: [
      { label: 'Improvements (1)', category: 'improvements', content: 'Improved migration flow.' },
      { label: 'Fixes (0)', category: 'fixes', content: null },
      { label: 'Patches (0)', category: 'patches', content: null },
    ]
  },
  {
    version: 'F 1.0.2',
    date: 'June 2, 2026',
    title: 'AI orchestration fix',
    description: 'Various improvements, fixes, and patches for AI orchestration.',
    accordions: [
      { label: 'Improvements (2)', category: 'improvements', content: 'Improved AI orchestration performance and context handling.' },
      { label: 'Fixes (3)', category: 'fixes', content: 'Fixed several bugs related to AI orchestration timeouts and concurrent tool calls.' },
      { label: 'Patches (1)', category: 'patches', content: 'Applied security patch for AI orchestrator.' },
    ]
  }
];

export function ChangelogPage() {
  // State for accordions (versionIndex -> accordionIndex -> boolean)
  const [openStates, setOpenStates] = useState<Record<string, Record<number, boolean>>>({});

  const toggleAccordion = (versionIdx: number, accordionIdx: number) => {
    setOpenStates(prev => {
      const versionKey = `${versionIdx}`;
      const current = prev[versionKey]?.[accordionIdx] || false;
      return {
        ...prev,
        [versionKey]: {
          ...(prev[versionKey] || {}),
          [accordionIdx]: !current
        }
      };
    });
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-medium tracking-tight text-zinc-900 !leading-tight">
            {'General Language Products Changelog'.split('').map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.05, delay: index * 0.05 }}
              >
                {char}
              </motion.span>
            ))}
          </h1>
        </div>

        {/* Table Header */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8 pb-4 border-b border-zinc-100 mb-12 text-[15px] text-zinc-900 font-medium font-sans">
          <div>Version</div>
          <div>Description</div>
        </div>

        {/* Rows */}
        <div className="space-y-12">
          {changelogData.map((item, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-x-8 gap-y-6 md:items-start font-sans">
              
              {/* Left Column */}
              <div className="pt-2">
                <div className="text-zinc-500 text-[15px]">{item.version}</div>
                <div className="text-zinc-500 text-[15px] mt-1">{item.date}</div>
              </div>

              {/* Right Column / Card */}
              <div className="bg-[#F2EFE6] rounded-[24px] p-8 sm:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-6">
                  {/* Card Left: Title */}
                  <div>
                    <h3 className="text-[20px] font-medium text-zinc-900 leading-snug">{item.title}</h3>
                  </div>

                  {/* Card Right: Description and Accordions */}
                  <div>
                    <div className="text-zinc-600 text-[15px] mb-8">
                      {item.description}
                    </div>

                    <div className="flex flex-col">
                      {item.accordions.map((acc, aIdx) => {
                        const isOpen = openStates[`${idx}`]?.[aIdx];
                        return (
                          <div key={aIdx} className="border-t border-zinc-200/60 first:border-0">
                            <button 
                              className="w-full flex items-center justify-between py-4 text-zinc-600 hover:text-zinc-900 transition-colors"
                              onClick={() => toggleAccordion(idx, aIdx)}
                            >
                              <span className="text-[15px] text-zinc-700">{acc.label}</span>
                              {isOpen ? (
                                <ChevronUp className="w-4 h-4 text-zinc-400" />
                              ) : (
                                <ChevronDown className="w-4 h-4 text-zinc-400" />
                              )}
                            </button>
                            {/* Accordion Content with Details or Empty State */}
                            <AnimatePresence initial={false}>
                              {isOpen && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3, ease: "easeInOut" }}
                                  className="overflow-hidden"
                                >
                                  <div className="pb-4 text-[15px] text-zinc-500">
                                    {acc.content ? acc.content : `No ${acc.category} made.`}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
