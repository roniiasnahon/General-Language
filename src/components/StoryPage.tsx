import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export function StoryPage() {
  const line1 = "Inspiring a genuine";
  const line2 = "love for learning.";
  const [typedLine1, setTypedLine1] = useState("");
  const [typedLine2, setTypedLine2] = useState("");

  useEffect(() => {
    let index1 = 0;
    let index2 = 0;
    
    const interval = setInterval(() => {
      if (index1 < line1.length) {
        setTypedLine1(line1.slice(0, index1 + 1));
        index1++;
      } else if (index2 < line2.length) {
        setTypedLine2(line2.slice(0, index2 + 1));
        index2++;
      } else {
        clearInterval(interval);
      }
    }, 55); // Smooth cadence

    return () => clearInterval(interval);
  }, []);

  const isFinished = typedLine1 === line1 && typedLine2 === line2;

  return (
    <div className="bg-[#FAF6EE] text-zinc-900 min-h-screen font-sans selection:bg-zinc-950 selection:text-white pb-32">
      {/* Hero Section */}
      <section className="pt-32 md:pt-48 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center font-sans">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-950 mb-8 leading-[1.1] min-h-[5.5rem] md:min-h-[14rem] lg:min-h-[16rem]">
            {typedLine1}
            {typedLine1 === line1 && <br className="hidden md:block" />}
            {typedLine2}
            <span 
              className={`inline-block w-[3px] md:w-[6px] h-[0.85em] bg-zinc-950 ml-2 align-middle ${
                isFinished ? 'animate-pulse opacity-40' : 'opacity-100'
              }`}
            />
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 leading-relaxed max-w-3xl mx-auto font-sans">
            Our ultimate priority is ensuring students are truly happy with their education. We exist to provide an easier approach to difficult subjects, drawing minds toward the joy of discovery rather than just the pressure of performance.
          </p>
        </motion.div>
      </section>

      {/* Narrative Body */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.6 }}
          className="space-y-16 md:space-y-24"
        >
          {/* Chapter 1 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-950 font-sans">
                The Challenge
              </h2>
              <p className="text-zinc-500 font-medium text-sm mt-2 font-sans">Redefining the classroom</p>
            </div>
            <div className="md:col-span-8 text-zinc-700 leading-relaxed space-y-6 font-sans text-base md:text-[17px]">
              <p>
                Traditional education structures can often feel passive, rigid, and disconnected from the intrinsic curiosity that children and young adults are naturally born with. By locking knowledge behind dense, dry textbooks and measuring performance solely through high-stakes memorization exams, we unintentionally breed math anxiety, essay writer's block, and academic fatigue from an early age.
              </p>
              <p>
                When studying is reduced to mere survival, the spark of organic discovery dies. We saw students spending sleepless nights trying to decipher obscure formulas or outline five-paragraph essays without ever understanding <em>why</em> these structures mattered, or <em>how</em> they could be used to unlock beautiful insights about our world. The constant treadmill of points and grades has turned classrooms into pressure chambers, detaching learners from the actual experience of knowledge acquisition.
              </p>
              <p>
                This emotional toll is heavy. When a student feels "bad at a subject" due to a single poorly explained lesson, they often internalize that failure as a personal limitation. They begin to avoid quantitative sciences, creative communication, or logical problem-solving altogether, cutting themselves off from paths they might have otherwise loved. Traditional frameworks react to this by introducing more surveillance and rote drills, further distancing the student from their natural learning drive.
              </p>
              <p>
                Redefining the classroom isn’t merely about digitizing old materials or putting worksheets onto glass screens; it’s about rebuilding the underlying emotional relationship with learning. We set out to change the conversation entirely—away from "How do we get students to pass?" and toward "How do we make students genuinely excited to expand their minds?"
              </p>
            </div>
          </div>

          <div className="w-full h-[1px] bg-zinc-200/60" />

          {/* Chapter 2 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-950 font-sans">
                An Easier Approach
              </h2>
              <p className="text-zinc-500 font-medium text-sm mt-2 font-sans">Breaking down barriers</p>
            </div>
            <div className="md:col-span-8 text-zinc-700 leading-relaxed space-y-6 font-sans text-base md:text-[17px]">
              <p>
                If a subject feels impossible, it's rarely the student's fault—it is almost always an issue of translation. Every elegant mathematical proof, literary classic, or chemical system has a core story waiting to be told. Our design philosophy centers around taking the intimidation out of complex, abstract curricula by stripping away unnecessary jargon and dry academic gatekeeping.
              </p>
              <p>
                We design intuitive mental models, interactive step-by-step visualizations, and conversational explanations that meet students exactly where they are. Complex concepts are translated into digestible, delightful ideas. When a student can visualize a calculus derivative as a slope of an actual physical hill, or see a computer science algorithm as a simple recipe, the barrier of intimidation instantly dissolves.
              </p>
              <p>
                By building safe spaces for learning—where mistakes are not penalized but are treated as valuable, interesting data points—we empower students to play with concepts. This hands-on experimentation changes the neural pathways of learning. It moves the curriculum from something a student must passively absorb to a set of living blocks they can arrange, inspect, and build with.
              </p>
              <p>
                True mastery is born when frustration turns into "Aha!" moments. By making subjects approachable with tools like Cosmi, we remove the cognitive friction that leads to self-doubt, restoring the pure, unadulterated joy that comes when things finally click. When students realize they are capable of understanding complex topics, their entire self-conception shifts.
              </p>
            </div>
          </div>

          <div className="w-full h-[1px] bg-zinc-200/60" />

          {/* Chapter 3 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-950 font-sans">
                Looking Ahead
              </h2>
              <p className="text-zinc-500 font-medium text-sm mt-2 font-sans">Joyful learning</p>
            </div>
            <div className="md:col-span-8 text-zinc-700 leading-relaxed space-y-6 font-sans text-base md:text-[17px]">
              <p>
                Joy is the ultimate catalyst for lifelong intelligence. When students are happy, safe, and excited, they don't just complete assignments; they seek out new topics, ask deeper questions, and become active creators rather than passive consumers. We want to cultivate a global community where learning feels as natural, engaging, and rewarding as mastering a favorite hobby.
              </p>
              <p>
                To achieve this, we are continually evolving our ecosystem to provide highly customized, flexible pathways. We are moving away from rigid, one-size-fits-all lesson plans and towards systems that adapt to each student's unique pacing, interests, and creative style. This level of respect for individual student agency helps replace academic pressure with a profound sense of personal growth.
              </p>
              <p>
                Tools like Cosmi and our interactive sandboxes are designed to let students see their studies not as artificial checkmarks for an exam, but as real craft tools for their own creative projects and future dreams. When a student uses their physics knowledge to build a game, or creative writing to tell a story they care about, education becomes integrated with their identity.
              </p>
              <p>
                Ultimately, our success isn't tracked in cold databases of test scores, but in the shift in a student’s posture towards education. When study sessions cease to be an obligation and become an exciting, self-directed pursuit of discovery, we have accomplished our true mission. We are here to ensure that every learner is drawn to education, for life.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
