import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export function LLMModelsPage() {
  const line1 = "Cognitive orchestration,";
  const line2 = "diverse minds.";
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
            We do not believe in a one-size-fits-all model. To make studying engaging, personalized, and robust, General Language orchestrates a diverse symphony of the world's finest AI engines—each acting as a specialist for your mind.
          </p>
        </motion.div>
      </section>

      {/* Narrative Body & Model Showcase */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.6 }}
          className="space-y-16 md:space-y-24"
        >
          {/* Chapter 1: Z.ai */}
          <div id="model-z-ai" className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
            <div className="md:col-span-4 space-y-4">
              {/* Actual Z.ai logo representation */}
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 flex items-center justify-center">
                  <img src="/z-ai.svg?v=2" alt="Z.ai" className="w-20 h-20 object-contain" referrerPolicy="no-referrer" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-zinc-950 font-sans">
                  Z.ai
                </h2>
              </div>
            </div>
            <div className="md:col-span-8 text-zinc-700 leading-relaxed space-y-6 font-sans text-base md:text-[17px]">
              <p>
                At the core of the General Language architecture sits <strong>Z.ai</strong>, our lead model optimized for ultra-fast task redirection, orchestrating multi-agent streams, and managing dynamic workspace state transfers. Z.ai acts as the central coordinator, connecting individual workspace components and deciding precisely when to route complex problems to specialized downstream engines.
              </p>
              <p>
                Through its custom, low-cost attention layers, Z.ai processes raw curriculum data in real-time. It maps out the hierarchical structure of your uploaded textbooks, builds logical dependencies between chapters, and feeds your active study feed with instant, relevant material.
              </p>
            </div>
          </div>

          <div className="w-full h-[1px] bg-zinc-200/60" />

          {/* Chapter 2: Mistral */}
          <div id="model-mistral" className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
            <div className="md:col-span-4 space-y-4">
              {/* Actual Mistral logo representation */}
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 flex items-center justify-center">
                  <img src="/mistral-color.svg" alt="Mistral" className="w-20 h-20 object-contain" referrerPolicy="no-referrer" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-zinc-950 font-sans">
                  Mistral
                </h2>
              </div>
            </div>
            <div className="md:col-span-8 text-zinc-700 leading-relaxed space-y-6 font-sans text-base md:text-[17px]">
              <p>
                Active recall is the fastest path to long-term memory. Mistral AI's highly optimized, open weights serve as the foundational driver for our lightning-fast flashcard generations, immediate active recall drills, and spaced vocabulary runs.
              </p>
              <p>
                Mistral's outstanding efficiency makes it the perfect candidate for rapid-fire interactions. When you request a prompt run, Mistral processes and streams answers back to your local client inside a fraction of a second, keeping your brain in a flow state without breaking focus.
              </p>
            </div>
          </div>

          <div className="w-full h-[1px] bg-zinc-200/60" />

          {/* Chapter 3: Cohere */}
          <div id="model-cohere" className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
            <div className="md:col-span-4 space-y-4">
              {/* Actual Cohere logo representation */}
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 flex items-center justify-center">
                  <img src="/cohere-color.svg" alt="Cohere" className="w-20 h-20 object-contain" referrerPolicy="no-referrer" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-zinc-950 font-sans">
                  Cohere
                </h2>
              </div>
            </div>
            <div className="md:col-span-8 text-zinc-700 leading-relaxed space-y-6 font-sans text-base md:text-[17px]">
              <p>
                Deep learning requires deep memory. We utilize <strong>Cohere</strong>'s specialized semantic embedding models to index, parse, and partition large PDF study materials, lecture slides, and historical syllabuses. 
              </p>
              <p>
                When a student enters a search or triggers a question within Cosmi, Cohere parses the query and matches it against the exact paragraph in your uploaded textbooks. This semantic precision shields you from synthetic hallucinations, anchoring every Socratic challenge in real, verifiable information from your curriculum guidelines.
              </p>
            </div>
          </div>

          <div className="w-full h-[1px] bg-zinc-200/60" />

          {/* Chapter 4: ChatGPT */}
          <div id="model-chatgpt" className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
            <div className="md:col-span-4 space-y-4">
              {/* Actual ChatGPT logo representation */}
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 flex items-center justify-center">
                  <img src="/openai.svg?v=2" alt="ChatGPT" className="w-20 h-20 object-contain" referrerPolicy="no-referrer" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-zinc-950 font-sans">
                  ChatGPT
                </h2>
              </div>
            </div>
            <div className="md:col-span-8 text-zinc-700 leading-relaxed space-y-6 font-sans text-base md:text-[17px]">
              <p>
                OpenAI's <strong>ChatGPT (GPT-4o)</strong> stands as our mathematical validation and programming execution powerhouse. When you feed Genlang dense algorithmic questions, algebra files, or complex physics questions, ChatGPT reviews the raw code or quantitative calculations.
              </p>
              <p>
                It acts as a background verifier to ensure that any conceptual steps or mathematical examples provided by other engines are strictly sound and aligned with scientific facts. By pairing ChatGPT's computational strength with our narrative dialogue, we offer an education that is as mathematically accurate as it is emotionally inviting.
              </p>
            </div>
          </div>

          <div className="w-full h-[1px] bg-zinc-200/60" />

          {/* Chapter 5: Claude */}
          <div id="model-claude-anthropic" className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
            <div className="md:col-span-4 space-y-4">
              {/* Actual Claude logo representation */}
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 flex items-center justify-center">
                  <img src="/claude-color.svg" alt="Claude" className="w-20 h-20 object-contain" referrerPolicy="no-referrer" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-zinc-950 font-sans">
                  Claude
                </h2>
              </div>
            </div>
            <div className="md:col-span-8 text-zinc-700 leading-relaxed space-y-6 font-sans text-base md:text-[17px]">
              <p>
                Anthropic's <strong>Claude</strong> powers the highly narrative and interactive Socratic dialogue layers of our platform. Renowned for its superb nuance, balanced tone, and highly articulate explanations, Claude is the voice of Genlang that turns abstract, clinical, or intimidating subjects into delightful stories you can actually connect with.
              </p>
              <p>
                Claude is instructed never to simply hand over bare solutions or complete homework assignments. Instead, it carefully constructs metaphorical analogies—such as comparing photosynthesis to a microscopic leaf bakery, or a computer cache to a kitchen countertop—helping you grasp the underlying logic, and asking targeted check-in questions so you draw the final conclusion on your own.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
