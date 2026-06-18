import React from 'react';
import { motion } from 'motion/react';
import { CaretRight } from '@phosphor-icons/react';

export function SupportPage() {
  const cards = [
    {
      title: 'Facebook',
      description: 'Join the conversation',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1877F2" className="w-20 h-20">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      linkText: 'Visit',
    },
    {
      title: 'Gmail',
      description: 'Email us',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 192 192" className="w-20 h-20">
          <path fill="url(#a)" d="M146 44h38v110c0 6.627-5.373 12-12 12h-20a6 6 0 0 1-6-6z"/>
          <path fill="#fc413d" d="M46 44H8v110c0 6.627 5.373 12 12 12h20a6 6 0 0 0 6-6z"/>
          <path fill="url(#b)" d="M39.226 30.456c-8.033-6.752-20.018-5.714-26.77 2.319-6.752 8.032-5.714 20.017 2.319 26.77l76.078 63.949a8 8 0 0 0 10.295 0l76.078-63.95c8.032-6.752 9.07-18.737 2.318-26.77-6.752-8.032-18.737-9.07-26.769-2.318L96 78.18z"/>
          <defs>
            <linearGradient id="a" x1="165" x2="165" y1="44" y2="166" gradientUnits="userSpaceOnUse">
              <stop stopColor="#60d673"/>
              <stop offset=".17" stopColor="#42c868"/>
              <stop offset=".39" stopColor="#0ebc5f"/>
              <stop offset=".62" stopColor="#00a9bb"/>
              <stop offset=".86" stopColor="#3c90ff"/>
              <stop offset="1" stopColor="#3186ff"/>
            </linearGradient>
            <linearGradient id="b" x1="8" x2="184" y1="46.13" y2="46.13" gradientUnits="userSpaceOnUse">
              <stop offset=".08" stopColor="#ff63a0"/>
              <stop offset=".3" stopColor="#fc413d"/>
              <stop offset=".5" stopColor="#fc413d"/>
              <stop offset=".65" stopColor="#fc413d"/>
              <stop offset=".72" stopColor="#fc5c30"/>
              <stop offset=".86" stopColor="#feb10c"/>
              <stop offset=".91" stopColor="#fec700"/>
              <stop offset=".96" stopColor="#ffdb0f"/>
            </linearGradient>
          </defs>
        </svg>
      ),
      linkText: 'Send email',
    },
    {
      title: 'LinkedIn',
      description: 'Stay updated',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-20 h-20 text-[#0A66C2]">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      linkText: 'Visit',
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#FAF6EE] text-zinc-900 font-sans selection:bg-zinc-950 selection:text-white pt-32 pb-32 overflow-hidden flex flex-col items-center">
      {/* Decorative Dot Pattern Background */}
      <div 
        className="absolute right-0 top-0 w-full md:w-[1200px] h-[800px] md:h-[1200px] opacity-[0.85] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at center, black 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          maskImage: 'radial-gradient(ellipse 100% 100% at 80% 20%, black 10%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse 100% 100% at 80% 20%, black 10%, transparent 70%)'
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 max-w-4xl"
        >
          <h1 className="font-sans text-5xl sm:text-[68px] font-medium tracking-tight text-zinc-950 mb-10 leading-[1.05]">
            Connect with General Language team to help you with anything
          </h1>
        </motion.div>

        {/* Cards Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
        >
          {cards.map((card, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-[40px] p-8 sm:p-10 flex flex-col h-full shadow-sm cursor-pointer"
            >
              <div className="mb-12">
                {card.icon}
              </div>
              
              <div className="mt-auto">
                <h3 className="font-sans font-medium text-[22px] text-zinc-950 mb-1">
                  {card.title}
                </h3>
                <p className="font-sans text-[17px] text-zinc-500 mb-8">
                  {card.description}
                </p>
                
                <div className="flex items-center text-zinc-950 font-medium text-[15px] gap-1.5 group">
                  {card.linkText}
                  <CaretRight weight="bold" className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 mt-0.5" />
                </div>
              </div>
            </div>
          ))}
        </motion.div>
        
      </div>
    </div>
  );
}
