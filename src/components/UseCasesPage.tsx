import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Network, Code2, Layers, FlaskConical, Megaphone, ChevronRight } from 'lucide-react';

const useCases = [
  {
    id: 'enterprise',
    title: 'Enterprise',
    icon: <Network className="w-[18px] h-[18px] mr-3" strokeWidth={1.5} />,
    description: 'General Language comes with a new command center surface for background agents to tackle backlog tasks, perform codebase research, and reduce context switching.'
  },
  {
    id: 'frontend',
    title: 'Frontend',
    icon: <Code2 className="w-[18px] h-[18px] mr-3" strokeWidth={1.5} />,
    description: 'Streamline your UI development. Let orchestrators generate React components, handle state management plumbing, and ensure exact design system compliance.'
  },
  {
    id: 'fullstack',
    title: 'Fullstack',
    icon: <Layers className="w-[18px] h-[18px] mr-3" strokeWidth={1.5} />,
    description: 'Bridge the gap between client and server. Orchestrate complete API workflows, database schemas, and end-to-end type safety without leaving your editor.'
  },
  {
    id: 'science',
    title: 'Science',
    icon: <FlaskConical className="w-[18px] h-[18px] mr-3" strokeWidth={1.5} />,
    description: 'Cross-reference academic papers or synthesize vast theoretical datasets. Our systems organize semantic chaos into clear, concise, and rigorously cited logic.'
  },
  {
    id: 'marketer',
    title: 'Marketer',
    icon: <Megaphone className="w-[18px] h-[18px] mr-3" strokeWidth={1.5} />,
    description: 'Automate content distribution and outreach. Background tasks map market trends and draft omni-channel campaigns with your exact brand voice.'
  },
];

function UseCaseDetailView({ 
  useCase, 
  onBack 
}: { 
  useCase: typeof useCases[0], 
  onBack: () => void 
}) {
  const letters = useCase.title.split("");

  const container = {
    hidden: { opacity: 1 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 * i },
    }),
  };

  const child = {
    visible: { opacity: 1, transition: { duration: 0.01 } },
    hidden: { opacity: 0 },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
      transition={{ duration: 0.3 }}
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32"
    >
      <nav className="mb-12 flex items-center text-zinc-500 text-sm tracking-wide font-medium uppercase min-h-[24px]">
        <button 
          onClick={onBack} 
          className="hover:text-zinc-950 transition-colors uppercase outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF6EE] rounded w-fit inline-flex items-center"
        >
          Use Cases
        </button>
        <ChevronRight className="w-[14px] h-[14px] mx-[6px] text-zinc-300 stroke-[2.5px]" />
        <span className="text-zinc-950 uppercase">{useCase.title}</span>
      </nav>

      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start mb-24">
        <div>
          <motion.h1 
            variants={container}
            initial="hidden"
            animate="visible"
            className="font-sans text-6xl sm:text-7xl lg:text-[5rem] font-black tracking-tight text-zinc-950 flex flex-wrap"
          >
            {letters.map((letter, index) => (
              <motion.span variants={child} key={index}>
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.h1>
        </div>
        <div className="lg:pt-4">
          <p className="font-serif text-2xl md:text-3xl text-zinc-900 leading-snug">
            {useCase.description}
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

      {/* Grid Section */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: { staggerChildren: 0.15, delayChildren: 0.6 }
          }
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 font-sans"
      >
        <motion.div variants={cardVariants} className="space-y-4">
          <h3 className="text-xl font-bold tracking-tight text-zinc-950">
            Rapid Prototyping
          </h3>
          <p className="text-zinc-600 leading-relaxed font-sans text-sm md:text-base">
            Spin up fully functional mockups instantly. Let the orchestrator translate your natural language ideas into clean, typed code components.
          </p>
        </motion.div>

        <motion.div variants={cardVariants} className="space-y-4">
          <h3 className="text-xl font-bold tracking-tight text-zinc-950">
            System Integration
          </h3>
          <p className="text-zinc-600 leading-relaxed font-sans text-sm md:text-base">
            Connect disparate services effortlessly. The agents handle API connections, robust error handling, and end-to-end data pipelines for your stack.
          </p>
        </motion.div>

        <motion.div variants={cardVariants} className="space-y-4">
          <h3 className="text-xl font-bold tracking-tight text-zinc-950">
            Automated Testing
          </h3>
          <p className="text-zinc-600 leading-relaxed font-sans text-sm md:text-base">
            Ensure your applications are fault-tolerant. Background tasks automatically write robust unit and integration tests based on your exact specifications.
          </p>
        </motion.div>

        <motion.div variants={cardVariants} className="space-y-4">
          <h3 className="text-xl font-bold tracking-tight text-zinc-950">
            Architecture Optimization
          </h3>
          <p className="text-zinc-600 leading-relaxed font-sans text-sm md:text-base">
            Continuously refactor and improve your codebase. The intelligent agents map complex legacy dependencies and suggest modern architectural redesigns.
          </p>
        </motion.div>
      </motion.div>

      {/* Philosophy & Approach Section */}
      <div className="mt-32 pt-24 border-t border-zinc-300">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-5">
            <h2 className="font-sans text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 sticky top-32">
              Implementation Strategy
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-8 font-serif text-lg md:text-[21px] text-zinc-900 leading-[1.6]">
            <p>
              <strong className="font-semibold mix-blend-multiply">We reshape the limits of productivity.</strong> By integrating advanced linguistic orchestrators deeply into your workflows, tedious tasks are fully automated. General Language provides you with the freedom to focus purely on high-level architecture and creative problem solving.
            </p>
            <p>
              Teams utilizing these powerful orchestration tools are adopting new methodologies <span className="underline decoration-1 underline-offset-4 cursor-pointer hover:text-zinc-600 transition-colors">substantially faster</span> than historical industry averages. The ability to articulate complex logic conceptually and watch the system generate production-ready code is transforming the landscape of modern digital infrastructure.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-24 border-t border-zinc-300">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-5">
            <h2 className="font-sans text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 sticky top-32">
              Security & Scale
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-8 font-serif text-lg md:text-[21px] text-zinc-900 leading-[1.6]">
            <p>
              <strong className="font-semibold mix-blend-multiply">Your logic remains exceptionally safe.</strong> At General Language, we prioritize zero-trust validation and local execution wherever feasible. Our models integrate with your private repositories securely, keeping proprietary business logic insulated from public data swamps.
            </p>
            <p>
              Employing state-of-the-art containerization and sandboxed processing, our orchestration layer ensures every generated execution path operates with strictly delineated permissions, preventing leaks and mitigating supply chain vulnerabilities.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function UseCasesPage() {
  const [activeTab, setActiveTab] = useState(useCases[0].id);
  const [exploredId, setExploredId] = useState<string | null>(null);

  const activeUseCase = useCases.find(uc => uc.id === activeTab) || useCases[0];

  return (
    <div className="bg-[#FAF6EE] text-zinc-900 min-h-screen font-sans selection:bg-zinc-950 selection:text-white pb-32">
      <AnimatePresence mode="wait">
        {exploredId ? (
          <UseCaseDetailView 
            key="detail-view" 
            useCase={useCases.find(u => u.id === exploredId) || useCases[0]} 
            onBack={() => setExploredId(null)} 
          />
        ) : (
          <motion.div 
            key="tabs-view"
            initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
            transition={{ duration: 0.3 }}
            className="pt-16 md:pt-24"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 md:mt-12">
              <div className="flex flex-col md:flex-row gap-12 lg:gap-8 items-start">
                
                {/* Left Sidebar */}
                <div className="w-full md:w-56 flex-shrink-0 flex flex-col space-y-3 lg:ml-8">
                  {useCases.map(uc => (
                    <button
                      key={uc.id}
                      onClick={() => setActiveTab(uc.id)}
                      className={`flex items-center px-5 py-3.5 rounded-full border transition-all duration-200 w-full ${
                        activeTab === uc.id 
                          ? 'border-zinc-950 text-zinc-950 bg-transparent' 
                          : 'border-zinc-200/60 text-zinc-500 hover:border-zinc-300 hover:text-zinc-700 bg-transparent'
                      }`}
                    >
                      <div className={activeTab === uc.id ? "text-zinc-950" : "text-zinc-400"}>
                        {uc.icon}
                      </div>
                      <span className="font-medium text-[15px]">{uc.title}</span>
                    </button>
                  ))}
                </div>

                {/* Main Content */}
                <div className="flex-1 flex flex-col items-center text-center mt-4 md:mt-8 md:-ml-12 lg:-ml-24">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="flex flex-col items-center w-full max-w-[42rem]"
                    >
                      <h1 className="text-4xl sm:text-5xl lg:text-[4rem] font-medium tracking-tight text-zinc-950 mb-6 font-sans">
                        {activeUseCase.title}
                      </h1>
                      <p className="text-[1.1rem] sm:text-[1.2rem] text-zinc-700 leading-[1.6] mb-10 w-full px-4 font-sans max-w-2xl">
                        {activeUseCase.description}
                      </p>
                      <button 
                        onClick={() => setExploredId(activeUseCase.id)}
                        className="px-7 py-3 rounded-full bg-zinc-950 text-white font-medium text-[15px] hover:bg-zinc-800 transition-colors tracking-wide focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-900 focus:ring-offset-[#FAF6EE]"
                      >
                        Explore use case
                      </button>
                    </motion.div>
                  </AnimatePresence>
                </div>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

