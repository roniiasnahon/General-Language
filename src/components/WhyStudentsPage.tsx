import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export function WhyStudentsPage() {
  const line1 = "Empowering minds,";
  const line2 = "preserving the spark.";
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
    }, 55);

    return () => clearInterval(interval);
  }, []);

  const isFinished = typedLine1 === line1 && typedLine2 === line2;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FAF6EE] text-zinc-900 min-h-screen font-sans selection:bg-zinc-950 selection:text-white pb-32">
      {/* Hero Section */}
      <section className="pt-32 md:pt-48 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center font-sans">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-955 mb-8 leading-[1.1] min-h-[5.5rem] md:min-h-[14rem] lg:min-h-[16rem]">
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
            Every child and adult is born with an innate, fiery curiosity. We build our tools because we believe that education should amplify that spark, not extinguish it under the weight of static lectures and academic stress.
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
                Our Core Motivation
              </h2>
              <p className="text-zinc-500 font-medium text-sm mt-2 font-sans">Why we do what we do</p>
            </div>
            <div className="md:col-span-8 text-zinc-700 leading-relaxed space-y-6 font-sans text-base md:text-[17px]">
              <p>
                Learning is one of the most natural human capabilities. From the moment we are born, we seek to understand gravity by reaching for objects, to master sound by speaking, and to decipher our surroundings. Yet, traditional educational systems often convert this playful, experimental process into a rigid checklist of memory tests.
              </p>
              <p>
                We build tools like Cosmi to restore that original, self-directed thrill of learning. When a student receives an explanation tailored specifically to how they think, with gorgeous visuals and intuitive analogies, the conceptual wall falls. Witnessing that instant where frustration melts into deep comprehension is what fuels our engineering every day.
              </p>
            </div>
          </div>

          <div className="w-full h-[1px] bg-zinc-200/60" />

          {/* Chapter 2 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-950 font-sans">
                Abolishing Stress & Fear
              </h2>
              <p className="text-zinc-500 font-medium text-sm mt-2 font-sans">Fostering emotional safety</p>
            </div>
            <div className="md:col-span-8 text-zinc-700 leading-relaxed space-y-6 font-sans text-base md:text-[17px]">
              <p>
                Fear is the absolute enemy of learning. When a classroom environment penalizes mistakes or sets harsh, fast timers, it activates the brain's stress response. Under anxiety, students cannot think creatively or absorb complex logical patterns.
              </p>
              <p>
                We purposefully design supportive, non-critical, and beautiful spaces. Mistakes are treated as interesting data points rather than moral or intellectual failures. By providing gentle, incremental clues rather than outright answers, we guard the student’s sense of personal achievement. They discover that they can master anything if given the proper translation and space to stumble.
              </p>
            </div>
          </div>

          <div className="w-full h-[1px] bg-zinc-200/60" />

          {/* Chapter 3 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-950 font-sans">
                Intellectual Sovereignty
              </h2>
              <p className="text-zinc-500 font-medium text-sm mt-2 font-sans">Independent reasoning</p>
            </div>
            <div className="md:col-span-8 text-zinc-700 leading-relaxed space-y-6 font-sans text-base md:text-[17px]">
              <p>
                In a world increasingly saturated with automated answers, the ability to reason from first principles is the ultimate superpower. We avoid building interfaces that write assignments for students. Instead, our systems ask guided questions, build mental pathways, and teach students *how* to think.
              </p>
              <p>
                Our goal is to assist students in cultivating their own intellectual sovereignty. We want learners to trust their own minds to tackle unknown mathematical systems, craft beautiful written compositions, and program software. We don't just want them to remember definitions—we want them to own the concepts.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
