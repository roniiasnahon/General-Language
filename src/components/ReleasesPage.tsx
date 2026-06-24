import React, { useState } from 'react';
import { CaretDown, CaretUp } from '@phosphor-icons/react';
import { motion, AnimatePresence } from 'motion/react';

const LogoMark = () => (
  <img src="/cosmi.png" alt="AI Icon" className="flex-shrink-0 w-8 h-8 mt-1 object-contain" />
);

interface Release {
  id: string;
  date: string;
  version: string;
  subtitle: string;
  summary: string;
  bullets: React.ReactNode[];
}

const releases: Release[] = [
  {
    id: 'v1.0.3',
    date: 'June 24, 2026',
    version: 'v. 1.0.3',
    subtitle: 'Cosmiwise by General Language',
    summary: 'This release expands our core intelligence suite by integrating new state-of-the-art models, alongside substantial interface improvements that modernize our tooltip engine and agent selectors. Additionally, we have refined the display nomenclature for our suite of models to align with our poetic designation schema, establishing a more cohesive and professional workspace experience.',
    bullets: [
      <><strong>New Intelligence Models</strong>: Integrated <strong>Villanelle Post (reka-flash)</strong> for lightning-fast, multimodal intelligence powered by Reka AI, securely nested inside the More Models category, and <strong>Cinquain Lite (mercury-2)</strong>, an advanced reasoning model developed by Inception Labs.</>,
      <><strong>Modern Tooltip Engine</strong>: Model descriptions have been removed from the primary list view to optimize horizontal space, and are now rendered dynamically as high-contrast hover tooltips.</>,
      <><strong>Interface Polish & Spacing</strong>: Built custom sharp pointer anchors reflecting a refined, clean, and professional visual layout. Refined container alignment, paddings, and agent dropdown menus to remain pristine and cohesive without visual clutter.</>,
      <><strong>Poet-Inspired Rebranding</strong>: Updated display titles to align with our poetic designation schema, including transitions such as Composition I to Ode I, Sift II to Sestina, Visor IV to Pantoum V, and Kindle Preview to Prose Preview.</>
    ],
  },
  {
    id: 'v1.0.2',
    date: 'June 20, 2026',
    version: 'v. 1.0.2',
    subtitle: 'Cosmiwise by General Language',
    summary: 'We are thrilled to introduce Cohere Command A+ 2026 as the primary inference engine out-of-the-box for the Raisee V orchestration tier. This integration drastically enhances retrieval-augmented reasoning and academic synthesis, delivering unprecedented accuracy when parsing complex scientific documentation.',
    bullets: [
      <>Integrated <strong>Cohere Command A+ 2026</strong>: Deployed as the default analytical model for the Raisee V tier, providing exceptional reasoning capabilities and deep abstract synthesis.</>,
      <>Optimized RAG Workloads: Leveraged Cohere's unique architecture to massively reduce hallucinations during heavy literature extraction.</>,
      <>Expanded contextual memory limits to facilitate seamless cross-referencing across larger sets of reference PDFs without degradation in output quality.</>
    ],
  },
  {
    id: 'v1.0.1',
    date: 'June 13, 2026',
    version: 'v. 1.0.1',
    subtitle: 'Cosmiwise by General Language',
    summary: 'This minor release introduces critical updates to the core orchestration layer, drastically improving agent delegation speeds. Furthermore, Cosmiwise now natively implements Claude Opus 4.6 for unparalleled synthesis logic, and expands background worker capabilities with highly detailed agent tasks and granular progress tracking.',
    bullets: [
      <>Integrated <strong>Claude Opus 4.6</strong>: Vastly increased reasoning capabilities across complex multi-document synthesis workflows, enabling flawless extraction of abstract methodological data.</>,
      <>Refactored the <strong>Orchestration Engine</strong>: Background agents now prioritize concurrent literature indexing, significantly reducing time-to-completion when managing gigabytes of academic PDFs.</>,
      <>Detailed <strong>Agent Task Tracking</strong>: Introduced a highly granular, step-by-step progress visualizer for autonomous sub-agents, letting you inspect intermediate reasoning steps during intensive data processing.</>,
      <>Resolved edge-case failures during deep recursive searches, ensuring the engine never hallucinates sources when citations are missing from the primary dataset.</>,
      <>Polished UI transitions across the main dashboard, optimizing rendering performance when displaying extensive methodology comparison matrices.</>
    ],
  },
  {
    id: 'v2.4.2026',
    date: 'June 11, 2026',
    version: 'v. 1.0.0',
    subtitle: 'Cosmiwise by General Language',
    summary: 'We are incredibly excited to announce the official release of Cosmiwise 1.0.0, our flagship advanced orchestration platform meticulously tailored for the rigorous demands of academic and scientific researchers. By automating the extraction, synthesis, and organization of dense quantitative data and qualitative literature, Cosmiwise drastically reduces the administrative friction of discovery. It features a novel, highly deterministic natural language engine that allows researchers to seamlessly query massive document libraries, instantly identifying thematic overlaps, methodological consistency, and narrative contradictions without sacrificing scholarly nuance. This initial release sets the foundation for an entirely new paradigm of self-directed research velocity.',
    bullets: [
      <>Introduced breakthrough <strong>Semantic Deep Indexing</strong>: Users can now upload massive libraries of academic PDFs (up to 50GB per local enclave). The system builds an immediate, vector-searchable index, allowing researchers to instantly locate exact sentences or methodologies referencing their thesis statement across thousands of pages simultaneously.</>,
      <>Added automated <strong>Methodology and Data Extraction pipelines</strong>: The engine now possesses the capability to intelligently scan literature reviews and automatically generate comprehensive comparison tables. It accurately groups disparate research papers by their experimental methods, chosen statistical models, sample sizes, and geographic data.</>,
      <>Integrated robust <strong>Intelligent Citation Management</strong>: We have completely overhauled the export process. Cosmiwise now seamlessly generates perfectly formatted citations in APA, MLA, Harvard, or Chicago style, injecting them directly alongside contextual summaries into LaTeX compilers or Microsoft Word documents with zero manual formatting.</>,
      <>Implemented heuristic <strong>Contradiction Flagging & Synthesis Analysis</strong>: The system acts as an analytical peer. It automatically maps out conflicting findings across multiple papers on the same topic, objectively outlines the discrepancies in their datasets, and proactively prompts the user with highly novel angles for their own original research.</>,
      <>Established <strong>Zero-Trust Local Execution Pathways</strong>: Recognizing the critical nature of unpublished academic data, all document processing, indexing, and synthesis can now be configured to run entirely offline within heavily sandboxed local containers. This guarantees absolute academic integrity and ensures proprietary logic is never exposed to public telemetry or external model training cycles.</>,
      <>Added interactive <strong>Socratic Review Modules</strong>: Beyond just literature organization, the system can now engage researchers in dynamic, adversarial dialogues based on their uploaded materials, helping to pressure-test hypotheses and identify logical fallacies prior to formal peer review submission.</>
    ],
  }
];

const ReleaseItem: React.FC<{ release: Release }> = ({ release }) => {
  const [expanded, setExpanded] = useState(false);
  const showToggle = release.bullets.length > 4;

  const visibleBullets = expanded ? release.bullets : release.bullets.slice(0, 4);
  const hiddenBulletsCount = release.bullets.length - 4;

  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-14 py-12 border-b border-zinc-200/80 last:border-0 relative">
      <div className="w-full md:w-32 flex-shrink-0 md:pt-2 text-zinc-500 font-medium text-sm sticky top-32 self-start">
        {release.date}
      </div>

      <div className="flex-1 max-w-3xl">
        <div className="flex items-start gap-4 mb-5">
          <LogoMark />
          <div className="pt-0.5">
            <div className="text-zinc-500 text-sm mb-1">{release.subtitle}</div>
            <h2 className="text-[22px] font-bold tracking-tight text-zinc-950 font-sans leading-none">{release.version}</h2>
          </div>
        </div>

        <div className="bg-zinc-900/5 rounded-md px-5 py-4 mb-6 text-zinc-800 leading-relaxed text-[15px]">
          {release.summary}
        </div>

        <ul className="list-disc list-outside ml-5 space-y-2.5 text-[#5e5e5e] text-[15px] marker:text-zinc-400">
          {visibleBullets.map((bullet, idx) => {
            // Apply fading to the last two visible items if not expanded and there are more items
            const isFading = !expanded && showToggle && idx >= 2;
            const opacityClass = !expanded && showToggle 
              ? (idx === 2 ? 'opacity-70' : idx === 3 ? 'opacity-40' : '') 
              : '';

            return (
              <li key={idx} className={`leading-relaxed ${opacityClass}`}>
                {bullet}
              </li>
            );
          })}
        </ul>

        {showToggle && (
          <button 
            onClick={() => setExpanded(!expanded)}
            className="text-zinc-500 text-[14px] mt-4 flex items-center hover:text-zinc-900 transition-colors focus:outline-none"
          >
            {expanded ? (
              <>Show less <CaretUp className="w-3.5 h-3.5 ml-1.5" weight="bold" /></>
            ) : (
              <>Show more <CaretDown className="w-3.5 h-3.5 ml-1.5" weight="bold" /></>
            )}
          </button>
        )}
      </div>
    </div>
  );
}

export function ReleasesPage() {
  const title = "Releases";
  const letters = title.split("");
  const subtitle = "Stay up to date with the latest platform versions and engine deployments.";

  const container = {
    hidden: { opacity: 1 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      transition: {
        duration: 0.01
      }
    },
    hidden: {
      opacity: 0,
    },
  };

  return (
    <div className="bg-[#FAF6EE] text-zinc-900 min-h-screen font-sans selection:bg-zinc-950 selection:text-white pb-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start mb-24">
          <div>
            <motion.h1 
              variants={container}
              initial="hidden"
              animate="visible"
              className="font-sans text-6xl sm:text-7xl lg:text-[5rem] font-black tracking-tight text-zinc-950 flex"
            >
              {letters.map((letter, index) => (
                <motion.span
                  variants={child}
                  key={index}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h1>
          </div>
          <div className="lg:pt-4">
            <p className="font-serif text-2xl md:text-3xl text-zinc-900 leading-snug">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Divider */}
        <motion.hr 
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="border-t border-zinc-300 mb-16 origin-left" 
        />

        <div className="flex flex-col">
          {releases.map((release) => (
            <ReleaseItem key={release.id} release={release} />
          ))}
        </div>
      </div>
    </div>
  );
}
