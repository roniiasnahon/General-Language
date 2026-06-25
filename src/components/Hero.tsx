import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Download } from 'lucide-react';

const text = "Introducing Cosmiwise";
const characters = text.split("");

export function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden font-sans bg-[#FAF6EE]">
      
      {/* Right Background (App Theme) */}
      <div className="absolute inset-0 bg-[#FAF6EE]" />

      {/* Left Background */}
      <div className="absolute top-0 left-0 w-[60%] h-full bg-gradient-to-r from-[#e8e4d9] from-70% to-transparent" />

      {/* Circles Layer */}
      <div className="absolute top-[40%] left-[25%] w-[20vw] h-[20vw] rounded-full bg-zinc-300/60 mix-blend-multiply" />
      <div className="absolute top-[25%] left-[35%] w-[28vw] h-[28vw] rounded-full bg-zinc-400/50 mix-blend-multiply" />
      <div className="absolute top-[20%] left-[50%] w-[32vw] h-[32vw] rounded-full bg-zinc-500/40 mix-blend-multiply" />
      <div className="absolute top-[25%] left-[65%] w-[35vw] h-[35vw] rounded-full bg-zinc-400/50 mix-blend-multiply" />
      <div className="absolute top-[40%] left-[75%] w-[38vw] h-[38vw] rounded-full bg-zinc-300/60 mix-blend-multiply" />

      {/* Typography Layer */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-32 md:pb-40 z-20 text-zinc-950 px-4">
        <h1 className="font-bold leading-[0.95] tracking-tight text-5xl md:text-6xl lg:text-7xl flex flex-wrap justify-center text-center pointer-events-none mb-4">
          {characters.map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ 
                duration: 0.15, 
                delay: index * 0.04, 
                ease: "linear" 
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-lg md:text-xl text-zinc-700 max-w-2xl text-center mb-8 font-medium pointer-events-none"
        >
          An agentic research companion fit for your needs
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center gap-4 z-30"
        >
          <a href="#download" className="flex items-center gap-2 px-8 py-3 bg-zinc-950 text-white rounded-full font-medium hover:bg-zinc-800 transition-colors shadow-lg shadow-zinc-950/20">
            <Download size={18} />
            Download
          </a>
          <a href="#cosmiwise" className="flex items-center gap-2 px-8 py-3 bg-transparent border border-zinc-300 text-zinc-900 rounded-full font-medium hover:bg-zinc-100 transition-colors">
            Learn more
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </div>
  );
}


