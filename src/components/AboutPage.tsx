import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function AboutPage() {
  const words1 = ["Making", "learning"];
  const words2 = ["something", "you", "love"];

  const titleContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        delay: 0.65,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <div className="bg-[#FAF6EE] text-zinc-900 min-h-screen font-sans selection:bg-zinc-950 selection:text-white pb-32">
      
      {/* Editorial Hero Area */}
      <section className="pt-32 md:pt-48 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <div className="flex flex-col items-center">
          
          {/* Headline Animated Word-By-Word */}
          <motion.h1 
            variants={titleContainerVariants}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-zinc-950 mb-7 leading-[1.05] font-sans"
          >
            <span className="inline-block">
              {words1.map((word, idx) => (
                <motion.span
                  key={`w1-${idx}`}
                  variants={wordVariants}
                  className="inline-block mr-3 md:mr-5"
                >
                  {word}
                </motion.span>
              ))}
            </span>
            <br className="hidden md:block" />
            <span className="inline-block">
              {words2.map((word, idx) => (
                <motion.span
                  key={`w2-${idx}`}
                  variants={wordVariants}
                  className="inline-block mr-3 md:mr-5"
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </motion.h1>
          
          <motion.p 
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="text-lg md:text-xl text-zinc-650 max-w-xl mx-auto leading-relaxed mb-10 font-sans font-light"
          >
            We are an educational design and research group. We build beautiful, approachable, and highly interactive learning interfaces that draw students back to knowledge.
          </motion.p>

          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <a 
              href="#story"
              className="inline-flex items-center gap-2 px-10 py-3.5 rounded-full bg-[#EFECE3] hover:bg-[#E5E1D7] text-zinc-900 font-medium text-sm tracking-wide transition-all duration-200 cursor-pointer border border-zinc-300/40"
            >
              Our Story <ArrowRight className="size-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Thin elegant horizontal line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full h-[1px] bg-zinc-200/80" />
      </div>

      {/* Classic Architectural Grid Section 1: Our Purpose */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 shrink-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 font-sans">
          
          {/* Left Column: Our Purpose */}
          <div className="lg:col-span-5">
            <div className="sticky top-32 space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-950">
                Our Purpose
              </h2>
              <p className="text-xl md:text-2xl text-zinc-800 font-medium leading-relaxed">
                We believe education should be a source of wonder, not stress. We are dedicated to building interfaces that students love, simplifying complex subjects so they can gain profound confidence and a lifelong draw to education.
              </p>
            </div>
          </div>

          {/* Right Columns: Styled Grid Blocks */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold tracking-tight text-zinc-950">
                We Build Safer Systems
              </h3>
              <p className="text-zinc-655 leading-relaxed font-sans text-sm md:text-base">
                We aim to build intuitive lesson environments that are completely free of cognitive noise. We isolate dry formulas and replace them with warm, real-world metaphors that help youngsters grasp the "why" before they memorize the metric.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold tracking-tight text-zinc-950">
                Learning Is a Science
              </h3>
              <p className="text-zinc-655 leading-relaxed font-sans text-sm md:text-base">
                We treat interaction design as a systematic science, studying how stress levels affect retention. By feeding these insights back into our curriculum and software templates, we ensure students stay calm, happy, and fully productive.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold tracking-tight text-zinc-950">
                Interdisciplinary Design
              </h3>
              <p className="text-zinc-655 leading-relaxed font-sans text-sm md:text-base">
                True enlightenment lives at the intersection of disciplines. Our system handles everything from quantitative calculus proofs to modern narrative composition side-by-side, encouraging students to trace connections across files and environments.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold tracking-tight text-zinc-950">
                Education is Personal
              </h3>
              <p className="text-zinc-655 leading-relaxed font-sans text-sm md:text-base">
                Students are not statistical data points. We design with respect for individual pacing, giving every child a custom space to play, make mistakes without penalties, and find their unique path toward intellectual independence.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Thin horizontal line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
        <div className="w-full h-[1px] bg-zinc-200/80" />
      </div>

      {/* Classic Architectural Grid Section 2: Our Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 shrink-0 font-sans">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Our Philosophy */}
          <div className="lg:col-span-5">
            <div className="sticky top-32 space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-950">
                Our Philosophy
              </h2>
              <p className="text-xl md:text-2xl text-zinc-805 font-medium leading-relaxed">
                We want to make studying genuinely fun, highly engaging, and deeply attractive. When learning feels like an adventure of discovery rather than a test-taking chore, student retention naturally climbs.
              </p>
            </div>
          </div>

          {/* Right Column: Styled Grid Blocks */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold tracking-tight text-zinc-950">
                The Coercion Trap
              </h3>
              <p className="text-zinc-655 leading-relaxed text-sm md:text-base">
                Traditional frameworks rely heavily on pressure and testing anxiety. When a student's main motivator is fear of losing points, the brain shifts into defensive avoidance—shutting down the centres for creative visualization and playful problem-solving.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold tracking-tight text-zinc-950">
                Designing Active Play
              </h3>
              <p className="text-zinc-655 leading-relaxed text-sm md:text-base">
                We design with 'Pull' mechanics. By presenting gorgeous, bite-sized interactive concepts and interactive code sandboxes, we turn dry worksheets into living components that students naturally want to touch, change, and play with.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold tracking-tight text-zinc-950">
                Safe Learning Loops
              </h3>
              <p className="text-zinc-655 leading-relaxed text-sm md:text-base">
                Games are fun because you are allowed to fail, learn, and restart without shame. We bring that exact low-stakes trial-and-error delight to mathematics and creative writing, making setbacks feel like organic steps to a personal triumph.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold tracking-tight text-zinc-955">
                Intrinsic Satisfaction
              </h3>
              <p className="text-zinc-655 leading-relaxed text-sm md:text-base">
                True competence isn’t built on pleasing a grading metric. By connecting abstract curricula to real-world context, we help students regain complete creative agency, building a sturdy habit of lifelong interest and active exploration.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Thin horizontal line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
        <div className="w-full h-[1px] bg-zinc-200/80" />
      </div>

      {/* Classic Architectural Grid Section 3: Our Research */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-6 shrink-0 font-sans">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Our Research */}
          <div className="lg:col-span-5">
            <div className="sticky top-32 space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-955 block">
                Our Research
              </h2>
              <p className="text-xl md:text-2xl text-zinc-805 font-medium leading-relaxed">
                Developing delightful tools requires deliberate cognitive science. We work alongside designers and educators to map raw human curiosity directly onto fluid, digital environments.
              </p>
            </div>
          </div>

          {/* Right Column: Styled Grid Blocks */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold tracking-tight text-zinc-955">
                Cognitive Fatigue Reduction
              </h3>
              <p className="text-zinc-655 leading-relaxed text-sm md:text-base">
                We investigate how visual layout, typography pairing, and lesson density affect mental stamina. We design information to reveal itself in gorgeous layers, so students feel continuous focus and excitement rather than textbook fatigue.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold tracking-tight text-zinc-955">
                Anxiety Dissolution
              </h3>
              <p className="text-zinc-655 leading-relaxed text-sm md:text-base">
                Many students carry built-in stress linking quantitative fields to a feeling of personal failure. We examine how low-stakes interfaces can safely dissolve academic trauma, returning a student's gaze back to the beauty of numbers and words.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold tracking-tight text-zinc-955">
                Physical Analogies on Screen
              </h3>
              <p className="text-zinc-655 leading-relaxed text-sm md:text-base">
                How do we map mathematical formulas onto general human intuition? We build digital translation scripts where changing a visual slider shifts the curve instantly, allowing young minds to sense mathematical connections like real-world gravity.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold tracking-tight text-zinc-955">
                Multi-disciplinary Agency
              </h3>
              <p className="text-zinc-655 leading-relaxed text-sm md:text-base">
                Discovery thrives when lines get blurred. We build systems where a student can write an essay, code a physics game, and generate molecular drawings side-by-side, guiding them to see education as a single, connected web of possibilities.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Thin horizontal line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
        <div className="w-full h-[1px] bg-zinc-200/80" />
      </div>

      {/* Classic Architectural Grid Section 4: Our Standards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-6 shrink-0 font-sans">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Our Standards */}
          <div className="lg:col-span-5">
            <div className="sticky top-32 space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#0F0F0F]">
                Our Standards
              </h2>
              <p className="text-xl md:text-2xl text-zinc-805 font-medium leading-relaxed">
                We hold ourselves to strict typographic, systemic, and qualitative principles. A student's time is valuable, and human attention deserves pure dignity.
              </p>
            </div>
          </div>

          {/* Right Column: Styled Grid Blocks */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold tracking-tight text-[#0F0F0F]">
                Uncompromising Fast Speeds
              </h3>
              <p className="text-zinc-655 leading-relaxed text-sm md:text-base">
                Lag breaks focus. Every translation script and dynamic layout we program runs at responsive smooth margins. Page states initialize instantly because we optimize memory allocation loops from day one.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold tracking-tight text-[#0F0F0F]">
                Respecting Student Silence
              </h3>
              <p className="text-zinc-655 leading-relaxed text-sm md:text-base">
                We strictly ban uninvited banners, blinking metrics, and gamification streaks. We never send intrusive focus pings or marketing triggers, ensuring the study environment is a quiet, sacred sanctuary.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold tracking-tight text-[#0F0F0F]">
                Symmetric Spacing Rules
              </h3>
              <p className="text-zinc-655 leading-relaxed text-sm md:text-base">
                Every layout is spaced down to the pixel. Balanced typography hierarchy, fluid margins, and spacious tracking are not decorative luxuries—they are structural guidelines that promote logical order.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold tracking-tight text-[#0F0F0F]">
                High Accessibility Contrast
              </h3>
              <p className="text-zinc-655 leading-relaxed text-sm md:text-base">
                Eyes deserve easy reading. We follow high AAA contrast indexes to support diverse visual requirements, rendering all equations in accessible fonts that make reading light, comfortable, and simple.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Thin horizontal line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
        <div className="w-full h-[1px] bg-zinc-200/80" />
      </div>

      {/* Classic Architectural Grid Section 5: Our Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-24 shrink-0 font-sans">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Our Team */}
          <div className="lg:col-span-5">
            <div className="sticky top-32 space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-950">
                Our Team
              </h2>
              <p className="text-xl md:text-2xl text-zinc-805 font-medium leading-relaxed">
                We are a team of passionate educators, cognitive scientists, and visual designers striving to make intellectual fields accessible to everyone around the world.
              </p>
            </div>
          </div>

          {/* Right Column: Styled Grid Blocks */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold tracking-tight text-zinc-950">
                Deep Research Labs
              </h3>
              <p className="text-zinc-655 leading-relaxed text-sm md:text-base">
                Our cognitive science wing investigates student memory triggers. Working alongside universities, we develop and test real pedagogical breakthroughs that shift learning patterns from compliance to deep satisfaction.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold tracking-tight text-zinc-955">
                UX Interaction Group
              </h3>
              <p className="text-zinc-655 leading-relaxed text-sm md:text-base">
                Our designers dedicate their careers to crafting fluid screen environments. They ensure that complex interfaces are welcoming, visually balanced, and intuitive for users of any background or experience level.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold tracking-tight text-zinc-950">
                Curriculum Integration
              </h3>
              <p className="text-zinc-655 leading-relaxed text-sm md:text-base">
                Our academic experts digest massive datasets to strip away unnecessary vocabulary. By organizing lessons into clear, natural steps, they bridge the gap between textbook instruction and independent thought.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold tracking-tight text-zinc-950">
                Community & Culture
              </h3>
              <p className="text-zinc-655 leading-relaxed text-sm md:text-base">
                We believe in listening and learning. We work closely with students, teachers, and parents around the world to constant-test and improve our products, making feedback the foundation of our design strategy.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
