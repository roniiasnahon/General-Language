import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpenText, Brain, ChartBar, Flask, Users, CaretRight } from '@phosphor-icons/react';

const useCases = [
  {
    id: 'research',
    title: 'Thesis Research',
    icon: <BookOpenText className="w-[18px] h-[18px] mr-3" />,
    description: 'Accelerate your literature review process with advanced semantic synthesis. General Language can seamlessly cross-reference hundreds of academic journals, extract key methodologies, and map thematic overlaps without losing nuance. Instead of spending weeks untangling dense bibliographies, let the system organize conflicting conclusions and generate structured, comprehensive summaries that act as the perfect foundation for your dissertation or capstone project.',
    features: [
      { title: 'Semantic Indexing', description: 'Upload entire gigabytes of PDFs. The system builds a vector-searchable index, letting you instantly locate the exact sentence referencing your thesis statement across thousands of pages.' },
      { title: 'Methodology Extraction', description: 'Automatically generate comparison tables grouping papers by their experimental methods, statistical models, and sample sizes for your literature review chapter.' },
      { title: 'Citation Management', description: 'Export perfectly formatted citations in APA, MLA, or Chicago style directly into your LaTeX or Word documents alongside contextual summaries.' },
      { title: 'Contradiction Flagging', description: 'Identify where authors disagree. The engine analyzes conflicting findings automatically and prompts you with interesting angles for your own novel research.' }
    ],
    strategyName: 'Research Velocity',
    strategyText1: 'We eliminate the friction of data gathering.',
    strategyText2: 'By integrating advanced document orchestrators deeply into your workflows, the tedious tasks of sorting and formatting are entirely automated. You are provided with the absolute freedom to focus purely on synthesis, creative argumentation, and drawing novel conclusions from the data.',
    strategyText3: 'Students utilizing these semantic analysis tools are completing complex literature reviews substantially faster than historical averages. The ability to converse with your bibliography globally transforms the landscape of academic research.',
    securityName: 'Academic Integrity & Data Privacy',
    securityText1: 'Your hypotheses remain entirely yours.',
    securityText2: 'At General Language, we prioritize local execution pathways and zero-retention policies for academic documents. Your uploads are never used to train global public models, ensuring that un-published, sensitive research data remains heavily insulated within your private enclave.',
    securityText3: 'By employing state-of-the-art containerization and transparent sourcing, the engine provides exact lineage for every claim it makes, ensuring you never accidentally commit plagiarism or introduce hallucinations into your final paper.'
  },
  {
    id: 'exam',
    title: 'Exam Preparation',
    icon: <Brain className="w-[18px] h-[18px] mr-3" />,
    description: 'Transform passive reading into active mastery. Our Socratic review modules adapt dynamically to your course material, identifying weak points in your understanding before you even step into the exam hall. By generating custom problem sets, breaking down complex mathematical proofs step-by-step, and facilitating interactive dialogue, the system ensures you internalize high-level concepts rather than just memorizing formulas.',
    features: [
      { title: 'Socratic Dialogue', description: 'The AI refuses to just give you the answer. It asks guiding questions, forcing you to arrive at the solution yourself to build genuine conceptual frameworks.' },
      { title: 'Dynamic Flashcards', description: 'Generate spaced-repetition decks instantly from your lecture transcripts. The system identifies key entities, dates, and definitions automatically.' },
      { title: 'Proof Deconstruction', description: 'Stuck on a complex theorem? Have it broken down line-by-line using intuitive analogies related to your personal interests or hobbies.' },
      { title: 'Mock Assessments', description: 'Simulate the pressure of an exam environment by having the engine generate timed, unique practice tests modeled after past syllabus questions.' }
    ],
    strategyName: 'Active Learning Pipelines',
    strategyText1: 'We engineer focus and retention.',
    strategyText2: 'By shifting from passive review to highly interactive, adversarial learning environments, recall rates dramatically increase. The orchestrator actively adapts the difficulty of the material based on where you consistently stumble, creating a hyper-personalized curriculum.',
    strategyText3: 'Cognitive models show that spaced repetition combined with active recall yields substantially better performance. Giving the student an infinite, tireless tutor allows for 1-to-1 education dynamics to be scaled globally for the first time.',
    securityName: 'Distraction-Free Architecture',
    securityText1: 'Your attention is heavily protected.',
    securityText2: 'We designed the review modules to be entirely self-contained. Our environment actively strips away algorithmic feeds, internet noise, and unrequested social elements to give you a pure, uninterrupted flow state for studying.',
    securityText3: 'Furthermore, progress tracking and analytics are stored locally. They are exclusively used to inform your personalized review schedule and are never sold to third-party metric brokers.'
  },
  {
    id: 'analysis',
    title: 'Analysis',
    icon: <ChartBar className="w-[18px] h-[18px] mr-3" />,
    description: 'Deepen your comprehension by automatically breaking down complex lessons into their core components. The system analyzes long lecture transcripts, presentation slides, and reading materials, extracting the central arguments and mapping them visually. It identifies gaps in your knowledge by tracking which lesson parts you engage with most and generates tailored summaries to ensure you completely grasp the curriculum\'s underlying narratives.',
    features: [
      { title: 'Thematic Mapping', description: 'Automatically categorize multi-hour lecture transcripts into visual topic outlines, allowing you to quickly locate specific discussions without scrubbing through video timelines.' },
      { title: 'Argument Deconstruction', description: 'Feed dense philosophical or historical texts into the system. It will extract the primary thesis, supporting evidence, and counterarguments into a clear, structured debate matrix.' },
      { title: 'Cross-Lesson Synthesis', description: 'Connect ideas across different weeks of your syllabus. The orchestrator identifies how a concept introduced in week two acts as a foundation for the advanced theories taught in week ten.' },
      { title: 'Engagement Tracking', description: 'Track your processing time across different modules to identify cognitive bottlenecks. The system highlights which specific lessons require more review based on your interaction patterns.' }
    ],
    strategyName: 'Curriculum Decoding',
    strategyText1: 'We shift the focus from rote memorization to structural comprehension.',
    strategyText2: 'By digesting massive volumes of lesson materials and presenting them architecturally, students can see the "big picture" of a course. This prevents getting lost in the details and allows for genuine synthesis of ideas.',
    strategyText3: 'Our semantic analysis engines give every student an absolute structural map of their syllabus, ensuring that no core concept is left misunderstood.',
    securityName: 'Contextual Privacy',
    securityText1: 'Your course materials are processed securely.',
    securityText2: 'Whether it\'s proprietary lecture recordings or private syllabus documents, we ensure that analysis algorithms only process your data in isolated environments and never share insights externally.',
    securityText3: 'Your study patterns and engagement metrics are exclusively used to improve your personal summaries and are never commodified or sold.'
  },
  {
    id: 'labs',
    title: 'Data Analysis',
    icon: <Flask className="w-[18px] h-[18px] mr-3" />,
    description: 'Turn chaotic raw lab data into coherent, visually compelling narratives. From conducting intensive statistical regressions to formatting intricate tables for physics or chemistry reports, our orchestration tools manage the computational heavy lifting. It helps hypothesis testing by acting as a rigorous peer reviewer—pointing out logical fallacies, suggesting alternative models, and ensuring your methodologies are robust and clearly articulated.',
    features: [
      { title: 'Automated Regressions', description: 'Feed raw CSVs into the console. The agent automatically cleans formatting anomalies, handles missing values, and identifies statistically significant correlations.' },
      { title: 'Chart Generation', description: 'Render publication-ready graphs instantly. Request "a scatter plot of X against Y with a logarithmic trendline" and receive a beautifully styled SVG.' },
      { title: 'Error Analysis', description: 'Struggling with error propagation formulas in physics? The system will calculate uncertainties and map out the exact derivation for your appendix.' },
      { title: 'Formatting Engine', description: 'Convert your raw data and markdown notes directly into two-column IEEE format or standard Nature publishing templates with zero LaTeX debugging required.' }
    ],
    strategyName: 'Mathematical Rigor',
    strategyText1: 'We eliminate the barriers between raw discovery and clear reporting.',
    strategyText2: 'The most frustrating part of the scientific method is often the administrative overhead of cleaning data and fighting with visualization libraries. By completely automating data tidying and rendering, students spend their energy interpreting the phenomena.',
    strategyText3: 'This approach fundamentally democratizes advanced statistical analysis. Students without a deep background in R or Python Pandas can still apply mathematically rigorous techniques to prove their lab hypotheses, raising the bar for undergraduate research.',
    securityName: 'Verifiable Calculations',
    securityText1: 'Data integrity is an absolute priority.',
    securityText2: 'We know that hallucinations in statistical models lead to invalid science. Therefore, our system writes verifiable Python scripts under the hood to perform mathematical logic, executing them in an internal sandbox. It never guesses the answer to a math problem.',
    securityText3: 'You can explicitly review the exact code used to generate your lab results. This transparent pipeline guarantees flawless execution and provides absolute confidence when you are defending your findings to your instructors.'
  },
  {
    id: 'collaboration',
    title: 'Group Projects',
    icon: <Users className="w-[18px] h-[18px] mr-3" />,
    description: 'Synchronize your study groups and eliminate workflow bottlenecks. By integrating directly into your shared digital workspaces, the system can instantly summarize hours of recorded lecture notes, distill group discussions into actionable task lists, and resolve conflicting ideas. It provides a centralized, universally accessible knowledge base that keeps every project member aligned, informed, and focused on the core academic objectives.',
    features: [
      { title: 'Meeting Distillation', description: 'Drop in a rough audio transcript of your 2-hour group planning session. The agent outputs a concise list of agreed-upon architecture choices and exact individual action items.' },
      { title: 'Tone Harmonization', description: 'When assembling a final paper written by five different students, the orchestrator seamlessly rewrites the entire document to ensure a single, cohesive academic voice.' },
      { title: 'Conflict Resolution', description: 'If team members propose conflicting architectural choices or report theses, the system neutrally evaluates both approaches, outlining the pros and cons objectively.' },
      { title: 'Version Lineage', description: 'Never lose track of who wrote what. Generate instant summaries of version-control commits or document history logs to ensure equitable grading.' }
    ],
    strategyName: 'Synchronized Workflow',
    strategyText1: 'We orchestrate team dynamics.',
    strategyText2: 'The primary failure mode of university group projects is a breakdown in communication and tracking, not a lack of technical capability. By acting as an impartial, automated project manager, the agent drastically reduces administrative friction.',
    strategyText3: 'Delegating the roles of note-taker, copy-editor, and task-tracker to an autonomous system empowers every human student to act strictly as a contributor. They spend their time actually building the project, rather than organizing it.',
    securityName: 'Equitable Access',
    securityText1: 'The workspace remains fundamentally neutral.',
    securityText2: 'Every action taken by the collaborative agent is logged transparently for all group members to see. There are no hidden prompts or asymmetric information advantages. The system serves the objective goals of the group as a whole.',
    securityText3: 'Data partitioning ensures that while the shared workspace is open to all collaborators, personal notes and individual study areas remain cryptographically sealed, respecting the boundaries between collective effort and personal privacy.'
  }
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
        <CaretRight className="w-[14px] h-[14px] mx-[6px] text-zinc-300" weight="bold" />
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
        {useCase.features.map((feature, i) => (
          <motion.div key={i} variants={cardVariants} className="space-y-4">
            <h3 className="text-xl font-bold tracking-tight text-zinc-950">
              {feature.title}
            </h3>
            <p className="text-zinc-600 leading-relaxed font-sans text-sm md:text-base">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Philosophy & Approach Section */}
      <div className="mt-32 pt-24 border-t border-zinc-300">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-5">
            <h2 className="font-sans text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 sticky top-32">
              {useCase.strategyName}
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-8 font-serif text-lg md:text-[21px] text-zinc-900 leading-[1.6]">
            <p>
              <strong className="font-semibold mix-blend-multiply">{useCase.strategyText1}</strong> {useCase.strategyText2}
            </p>
            <p>
              {useCase.strategyText3}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-24 border-t border-zinc-300">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-5">
            <h2 className="font-sans text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 sticky top-32">
              {useCase.securityName}
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-8 font-serif text-lg md:text-[21px] text-zinc-900 leading-[1.6]">
            <p>
              <strong className="font-semibold mix-blend-multiply">{useCase.securityText1}</strong> {useCase.securityText2}
            </p>
            <p>
              {useCase.securityText3}
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

