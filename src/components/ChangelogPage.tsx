import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const changelogData = [
  {
    version: 'F 1.0.7',
    date: 'June 24, 2026',
    title: 'User Interface & Aesthetic Improvements',
    description: 'Sleek minimalist layouts, sharp-pinnacle tooltips, and ultra-clean agent dropdowns alongside stability and performance patches.',
    accordions: [
      {
        label: 'Improvements (3)',
        category: 'improvements',
        content: (
          <ul className="list-disc pl-4 space-y-2">
            <li><strong>Sleek Minimalist Layouts:</strong> Removed static descriptive text beneath the model labels to save space and present an ultra-clean dropdown panel.</li>
            <li><strong>Sharp-Pinnacle Tooltips:</strong> Added hover-activated tooltips to the main chat model selector. These tooltips feature a sharp, rotated border-pointer pointing precisely to the selected model row, fast, GPU-accelerated enter/exit transitions (transition-all duration-150), and slate styling matching the dark theme of the container.</li>
            <li><strong>Ultra-Clean Agent Dropdown:</strong> Removed all tooltips and description text from the Agent's specific model selection menu as requested, ensuring a direct and focused workspace view.</li>
          </ul>
        )
      },
      {
        label: 'Fixes & Patches (3)',
        category: 'fixes',
        content: (
          <ul className="list-disc pl-4 space-y-2">
            <li><strong>Responsive Width Reductions:</strong> Scaled down the dropdown container widths to fit the model name listings perfectly without unnecessary negative margin padding.</li>
            <li><strong>Linter & Type Alignment:</strong> Resolved all TypeScript type dependencies across both MainChat.tsx and App.tsx relative to the newly nested model lists.</li>
            <li><strong>Build System Verification:</strong> Successfully validated the entire application pipeline through production-grade build tests.</li>
          </ul>
        )
      }
    ]
  },
  {
    version: 'F 1.0.6',
    date: 'June 23, 2026',
    title: 'Core Features, UI Polish & Robust Infrastructure',
    description: 'Major improvements to document pipeline, security, multilingual support, and interactive academic tools.',
    accordions: [
      {
        label: 'Fixes & Patches (4)',
        category: 'fixes',
        content: (
          <ul className="list-disc pl-4 space-y-2">
            <li><strong>Robust PDF Infrastructure:</strong> We patched the document pipeline with signature-based "sniffing" and multi-layered decompression (Gzip/Brotli/Deflate). This fixes issues where papers would download as corrupted or unreadable files.</li>
            <li><strong>Access Bypass & Self-Healing:</strong> Implemented a "self-healing" mechanism that detects 403 Forbidden errors or broken downloads and automatically reconstructs a metadata-enriched PDF from Firestore records, ensuring researchers never lose access to their citation context.</li>
            <li><strong>UI Polish & JSON Leak Stripping:</strong> Added advanced regex-based cleansing (cleanJsonLeak) to both the server and client. This fixes "AI slop" where the model might accidentally output technical JSON markers or internal reasoning tags in the chat.</li>
            <li><strong>File Integrity Maintenance:</strong> Created a cleanup.ts utility to automatically detect and prune corrupted .bin files from storage that don't meet valid PDF headers.</li>
          </ul>
        )
      },
      {
        label: 'Improvements (3)',
        category: 'improvements',
        content: (
          <ul className="list-disc pl-4 space-y-2">
            <li><strong>Global Multilingual Support:</strong> Expanded the interface with a comprehensive translation system supporting 10+ languages, including Arabic, Chinese, Hindi, and several European languages.</li>
            <li><strong>Rapid-Loading Cache System:</strong> Integrated a dual-layer caching strategy using the browser's Cache Storage API and an in-memory session cache. This allows previously viewed PDFs to open near-instantly without secondary network requests.</li>
            <li><strong>Cross-Platform Architecture:</strong> Improved the project structure to support Desktop (Tauri/Electron) environments alongside the web app, including deep-link plugins and native URL openers.</li>
          </ul>
        )
      },
      {
        label: 'New Features (3)',
        category: 'features',
        content: (
          <ul className="list-disc pl-4 space-y-2">
            <li><strong>Interactive Citation Mapping:</strong> Added support for dynamic citations using [[page:NUMBER|SOURCE_TITLE]] syntax. The AI mentor now uses this to create clickable links that jump users directly to specific pages in their research PDFs.</li>
            <li><strong>Academic Statistics Suite:</strong> Integrated a specialized tools panel featuring Slovin’s Formula, Likert Scale analysis, and Weighted Mean calculators, specifically designed for research data processing.</li>
            <li><strong>Research Paper Autopilot:</strong> Connected the system to OpenAlex and VoyageAI to enable real-world academic discovery, allowing the assistant to find, summarize, and download real scholarly works.</li>
          </ul>
        )
      }
    ]
  },
  {
    version: 'F 1.0.5',
    date: 'June 22, 2026',
    title: 'Statistics Tools Localization & Library Enhancements',
    description: 'Extensive localization for Statistics Tools, enhanced Library Panel interfaces, and foundational technical fixes.',
    accordions: [
      {
        label: 'Improvements (4)',
        category: 'improvements',
        content: (
          <ul className="list-disc pl-4 space-y-2">
            <li><strong>Menu Titles:</strong> Updated the Statistics Tools section in the main view to use localized titles for all tools, including Slovin's Formula, Percentage Calculator, Weighted Arithmetic Mean, and Likert Scale.</li>
            <li><strong>In-Tool Support:</strong> Implemented a comprehensive translation engine within the Statistics Tools component: added support for 10+ languages (English, Spanish, French, German, Italian, Portuguese, Arabic, Chinese, Japanese, and Hindi); localized all internal UI elements such as Tool Parameters, Calculation Breakdown, Population Size, Margin of Error, and the Interpretation Guide; translated specific descriptions and educational tooltips for each statistical method.</li>
            <li><strong>Visual Polish:</strong> Integrated a subtle separator in the dropdown menu for better grouping and readability.</li>
            <li><strong>Language Expansion:</strong> Exhaustively mapped the "Learn about File Types" label across all supported languages, including a full localized translation set for the Hindi library interface.</li>
          </ul>
        )
      },
      {
        label: 'Fixes (1)',
        category: 'fixes',
        content: (
          <ul className="list-disc pl-4 space-y-2">
            <li><strong>Cleanup:</strong> Resolved a code duplication issue in the Library Panel that occurred during the translation update, ensuring the component remains performant and bug-free.</li>
          </ul>
        )
      },
      {
        label: 'Patches (1)',
        category: 'patches',
        content: (
          <ul className="list-disc pl-4 space-y-2">
            <li><strong>State Synchronization:</strong> Ensured the active language state from the main application is correctly passed to the Statistics Tools to maintain a consistent multilingual experience.</li>
          </ul>
        )
      }
    ]
  },
  {
    version: 'F 1.0.4',
    date: 'June 20, 2026',
    title: 'Desktop Interface & Branding',
    description: 'Updates to the desktop interface, branding, profile architecture, and structural layering.',
    accordions: [
      {
        label: 'Improvements (4)',
        category: 'improvements',
        content: (
          <ul className="list-disc pl-4 space-y-2">
            <li><strong>Cosmi Identity:</strong> Integrated the "cosmi" brand text directly into the desktop sidebar. It now utilizes high-contrast white, extra-bold typography with tight tracking to match your signature loading style.</li>
            <li><strong>Responsive Visibility:</strong> Anchored the brand tag inside the sidebar container; it now elegantly disappears and reappears in sync with the sidebar's toggle state, ensuring it never overlaps with active editor tabs.</li>
            <li><strong>Core Essentials:</strong> Streamlined the profile dropdown by removing the "Upgrade" and "Workspace" modules. The interface now focuses exclusively on high-utility actions: Settings, Invite members, Add account, and Log out.</li>
            <li><strong>Visual Polish:</strong> Updated the dropdown aesthetics with a deeper #161616 background and subtle zinc-colored iconography. Removed all glow effects and implemented soft, non-intrusive hover states.</li>
          </ul>
        )
      },
      {
        label: 'Fixes (1)',
        category: 'fixes',
        content: (
          <ul className="list-disc pl-4 space-y-2">
            <li><strong>Isolation Fix:</strong> Added relative positioning to the main sidebar to ensure the dropdown remains contextually pinned but visually superior to all background editor components.</li>
          </ul>
        )
      },
      {
        label: 'Patches (1)',
        category: 'patches',
        content: (
          <ul className="list-disc pl-4 space-y-2">
            <li><strong>Z-Index Authority:</strong> Resolved the overlapping issue where editor elements appeared above the menu. Implemented a strict layering hierarchy: Base Layer (z-0), Foundation (z-[100]), Interaction (z-[110]), and Peak Layer (z-[120]).</li>
          </ul>
        )
      }
    ]
  },
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
