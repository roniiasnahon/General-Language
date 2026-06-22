import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function PoliciesPage() {
  const title = "Policy";
  const letters = title.split("");
  
  const subtitle = "As the orchestration engine for academic learning, General Language is committed to verifiable, transparent, and student-first AI usage. We partner with educational institutions to build frameworks for the next generation of automated tutoring.";

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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="bg-[#FAF6EE] text-zinc-900 min-h-screen font-sans selection:bg-zinc-950 selection:text-white pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
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
        
        {/* Card 1 */}
        <motion.div variants={cardVariants} className="space-y-4">
          <h3 className="text-xl font-bold tracking-tight text-zinc-950">
            Academic Integrity & Verification
          </h3>
          <p className="text-zinc-600 leading-relaxed font-sans text-sm md:text-base">
            Our foundational framework for ensuring AI acts as a learning orchestrator—not simple bypass automation. We emphasize verifiable steps and Socratic dialogue through Claude and Z.ai logic.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div variants={cardVariants} className="space-y-4">
          <h3 className="text-xl font-bold tracking-tight text-zinc-950">
            Student Privacy & Data Sovereignty
          </h3>
          <p className="text-zinc-600 leading-relaxed font-sans text-sm md:text-base">
            An initial outline of our commitment to keeping student data transient. We detail how conversation logs are secured, processed locally where possible, and never used to train generalized commercial models.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div variants={cardVariants} className="space-y-4">
          <h3 className="text-xl font-bold tracking-tight text-zinc-950">
            General Language Advanced Model Framework
          </h3>
          <p className="text-zinc-600 leading-relaxed font-sans text-sm md:text-base">
            We outline our internal safety guardrails for the Z.ai orchestrator, ensuring its reasoning chains always prioritize rigorous pedagogical standards over hallucinated convenience.
          </p>
        </motion.div>

        {/* Card 4 */}
        <motion.div variants={cardVariants} className="space-y-4">
          <h3 className="text-xl font-bold tracking-tight text-zinc-950">
            2030: The Future of Global Education Networks
          </h3>
          <p className="text-zinc-600 leading-relaxed font-sans text-sm md:text-base">
            Our perspective on how intelligent LLM orchestration will bridge educational gaps worldwide, creating a universally accessible baseline of personalized tutoring.
          </p>
        </motion.div>

      </motion.div>

      {/* Philosophy & Approach Section */}
      <div className="mt-32 pt-24 border-t border-zinc-300">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-5">
            <h2 className="font-sans text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 sticky top-32">
              Philosophy & approach
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-8 font-serif text-lg md:text-[21px] text-zinc-900 leading-[1.6]">
            <p>
              <strong className="font-semibold mix-blend-multiply">We expect the world to change rapidly due to AI.</strong> General Language builds the world's most capable educational orchestration systems. We have a front-row seat to a technology that is improving faster than most people realize, with consequences that aren't yet reflected in public debate.
            </p>
            <p>
              In the Philippines, educational institutions and students are adopting AI tools <a href="#policy/10-times-faster" className="underline decoration-1 underline-offset-4 cursor-pointer hover:text-zinc-600 transition-colors">10 times faster</a> than any other new technology was adopted over the last decade. In the next few years, we expect to have powerful AI systems that are smarter than Nobel Prize winners in many fields, and that can work on complex, novel scientific challenges for days or weeks at a time.
            </p>
            <p>
              We expect AI will bring enormous <a href="#policy/benefits" className="underline decoration-1 underline-offset-4 cursor-pointer hover:text-zinc-600 transition-colors">benefits</a>. Indeed, we are already starting to see them. <a href="#policy/academic-systems" className="underline decoration-1 underline-offset-4 cursor-pointer hover:text-zinc-600 transition-colors">Academic systems</a> are using Z.ai and Claude to better qualify students for accelerated learning tracks. Our <a href="#policy/ai-for-education-program" className="underline decoration-1 underline-offset-4 cursor-pointer hover:text-zinc-600 transition-colors">AI for Education program</a> is accelerating discoveries in pedagogy and cognitive sciences. Complex study paths are now accessible to millions, with people describing what they want to learn in plain language. And institutions are using AI to increase transparency and promote access to services by allowing people to read study materials in <a href="#policy/multiple-languages" className="underline decoration-1 underline-offset-4 cursor-pointer hover:text-zinc-600 transition-colors">multiple languages</a>, helping workers navigate <a href="#policy/reentering-the-workforce" className="underline decoration-1 underline-offset-4 cursor-pointer hover:text-zinc-600 transition-colors">reentering the workforce</a>, and providing teachers with <a href="#policy/support-in-lesson-planning" className="underline decoration-1 underline-offset-4 cursor-pointer hover:text-zinc-600 transition-colors">support in lesson planning</a>.
            </p>
            <p>
              But these capabilities also carry serious <a href="#policy/risks" className="underline decoration-1 underline-offset-4 cursor-pointer hover:text-zinc-600 transition-colors">risks</a>. AI could give authoritarian governments powerful new tools for surveillance and repression, expose critical infrastructure to cyberattacks, or flood public life with hallucinated data.
            </p>
          </div>
        </div>
      </div>

      {/* AI Safety & Alignment Section */}
      <div className="mt-16 pt-24 border-t border-zinc-300">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-5">
            <h2 className="font-sans text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 sticky top-32">
              AI Safety & Alignment
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-8 font-serif text-lg md:text-[21px] text-zinc-900 leading-[1.6]">
            <p>
              <strong className="font-semibold mix-blend-multiply">Safety is not an afterthought, but our core operating principle.</strong> We believe that as AI models become more capable, the systems governing them must become proportionally robust. Our orchestration engine is designed with multiple layers of verification to ensure outputs remain helpful, harmless, and honest.
            </p>
            <p>
              We employ <a href="#policy/constitutional-ai" className="underline decoration-1 underline-offset-4 cursor-pointer hover:text-zinc-600 transition-colors">Constitutional AI</a> methodologies to instill clear behavioral boundaries. This means our models are trained to refuse requests that violate pedagogical standards, such as generating complete essays for students or solving assignments without providing the necessary learning scaffolding.
            </p>
            <p>
              Furthermore, we conduct rigorous <a href="#policy/red-teaming" className="underline decoration-1 underline-offset-4 cursor-pointer hover:text-zinc-600 transition-colors">red-teaming</a> exercises to identify potential vulnerabilities. We actively seek to break our own systems in controlled environments to prevent malicious exploits in the real world, ensuring a secure environment for educators and learners alike.
            </p>
          </div>
        </div>
      </div>

      {/* Academic Integrity Framework Section */}
      <div className="mt-16 pt-24 border-t border-zinc-300">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-5">
            <h2 className="font-sans text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 sticky top-32">
              Academic Integrity Framework
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-8 font-serif text-lg md:text-[21px] text-zinc-900 leading-[1.6]">
            <p>
              <strong className="font-semibold mix-blend-multiply">We build tools to augment learning, not to bypass it.</strong> The goal of General Language is to foster deep understanding and critical thinking. We accomplish this by designing our AI to act as a Socratic tutor rather than an answer-generating machine.
            </p>
            <p>
              Our systems are programmed to guide students through complex problems using <a href="#policy/step-by-step-reasoning" className="underline decoration-1 underline-offset-4 cursor-pointer hover:text-zinc-600 transition-colors">step-by-step reasoning</a>. Instead of providing the final solution, Z.ai asks leading questions, provides contextual hints, and encourages the student to arrive at the answer independently.
            </p>
            <p>
              We collaborate closely with <a href="#policy/educational-institutions" className="underline decoration-1 underline-offset-4 cursor-pointer hover:text-zinc-600 transition-colors">educational institutions</a> to develop features that support teachers in evaluating student progress. By providing insights into how a student interacts with the AI, educators can better understand their learning journey and identify areas where they need additional support.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
