import React from 'react';
import { motion } from 'motion/react';
import { GlobeInteractive } from './GlobeInteractive';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const wordVariants = {
  hidden: { 
    opacity: 0, 
    y: 12,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

const heroWords = [
  { text: "AI", isStyled: false },
  { text: "tools", isStyled: true },
  { text: "and", isStyled: false },
  { text: "products", isStyled: true },
  { text: "that", isStyled: false },
  { text: "put", isStyled: false },
  { text: "students", isStyled: true },
  { text: "at", isStyled: false },
  { text: "the", isStyled: false },
  { text: "frontier", isStyled: false }
];

interface HeroProps {
  onScrollToDemo: () => void;
}

export function Hero({ onScrollToDemo }: HeroProps) {
  return (
    <div className="relative overflow-hidden bg-[#FAF6EE] pt-24 sm:pt-32 pb-20">
      
      <div className="absolute left-1/12 top-0 bottom-0 w-px bg-zinc-200/20 hidden md:block" />
      <div className="absolute right-1/12 top-0 bottom-0 w-px bg-zinc-200/20 hidden md:block" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Hero Column: Massive Bold Typography with custom underlines */}
          <div className="lg:col-span-7 text-left flex flex-col justify-center">
            <motion.h1 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="font-sans text-5xl sm:text-6xl lg:text-[4.75rem] font-[800] leading-[1.05] tracking-tight text-zinc-950 flex flex-wrap gap-x-[0.22em] gap-y-1 select-none"
            >
              {heroWords.map((word, idx) => (
                <motion.span
                  key={idx}
                  variants={wordVariants}
                  className="relative inline-block"
                >
                  {word.isStyled && (
                    <motion.span
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ 
                        duration: 0.8, 
                        delay: 0.6 + (idx * 0.1), 
                        ease: [0.83, 0, 0.17, 1] 
                      }}
                      className="absolute bottom-[0.05em] left-[-0.1em] right-[-0.1em] h-[1.1em] bg-zinc-950 origin-left rounded-sm z-[-1]"
                    />
                  )}
                  {word.isStyled ? (
                    <motion.span 
                      initial={{ color: "#09090b" }}
                      animate={{ color: "#ffffff" }}
                      transition={{ duration: 0.3, delay: 0.8 + (idx * 0.1) }}
                      className="relative z-10 px-1"
                    >
                      {word.text}
                    </motion.span>
                  ) : (
                    <span>{word.text}</span>
                  )}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          {/* Right Column: Editorial Lora Serif description */}
          <div className="lg:col-span-5 flex flex-col justify-start lg:pt-4 space-y-8">
            <p className="font-serif text-xl sm:text-2xl text-zinc-800 leading-relaxed font-[400]">
              GeneralLanguage transforms how students interact with knowledge. We are dedicated to making complex topics accessible, accelerating learning, and empowering learners worldwide.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

