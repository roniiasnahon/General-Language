import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Laptop, CircleDot, Menu, X, Check, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenDemo: () => void;
  currentView?: string;
  onNavigate?: (view: any) => void;
}

export function Navbar({ onOpenDemo, currentView = 'home', onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);
  const [isMobileNestsOpen, setIsMobileNestsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsGetStartedOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setEmail('');
        setShowModal(false);
      }, 1500);
    }, 1000);
  };

  const categorizedItems = [
    {
      category: 'Platform',
      items: [
        { title: 'Cosmi', view: 'download' as const },
        { title: 'AI Engines', view: 'llm-learning' as const },
      ]
    },
    {
      category: 'Company',
      items: [
        { title: 'About Us', view: 'about' as const },
        { title: 'Our Story', view: 'story' as const },
        { title: 'Supporting Students', view: 'why-students' as const },
      ]
    },
    {
      category: 'Policies',
      items: [
        { title: 'Privacy Policy', view: 'privacy' as const },
        { title: 'Terms of Use', view: 'terms' as const },
        { title: 'Compliance Group', view: 'compliance' as const },
      ]
    }
  ];

  return (
    <>
      <nav id="navbar-main" className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-[#FAF6EE]/80 backdrop-blur-xl border-b border-zinc-200/50 shadow-sm' : 'bg-transparent border-b border-transparent'}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo in Nordic Editorial Style */}
            <div className="w-44 flex items-center justify-start shrink-0">
              <button 
                onClick={() => onNavigate?.('home')}
                className="flex items-center gap-0 cursor-pointer select-none border-0 bg-transparent p-0 text-left focus:outline-none"
              >
                <span className="font-sans font-bold text-lg tracking-tighter text-black flex items-center">
                  <span>Gen</span>
                  <motion.span
                    initial={false}
                    animate={{
                      width: scrolled ? 0 : 'auto',
                      opacity: scrolled ? 0 : 1,
                    }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block overflow-hidden whitespace-nowrap"
                  >
                    eral
                  </motion.span>
                  <span>Lang</span>
                  <motion.span
                    initial={false}
                    animate={{
                      width: scrolled ? 0 : 'auto',
                      opacity: scrolled ? 0 : 1,
                    }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block overflow-hidden whitespace-nowrap"
                  >
                    uage
                  </motion.span>
                </span>
              </button>
            </div>

            {/* Desktop Navigation Links - Editorial Uppercase Tracking-Widest */}
            <div className="hidden md:flex flex-1 justify-end items-center pr-8 lg:pr-12 space-x-6 lg:space-x-10">
              <button onClick={() => onNavigate?.('policies')} className="text-xs font-bold uppercase tracking-widest text-zinc-800 hover:text-black hover:opacity-70 transition-opacity">Policies</button>
              <button onClick={() => onNavigate?.('support')} className="text-xs font-bold uppercase tracking-widest text-zinc-800 hover:text-black hover:opacity-70 transition-opacity">Support</button>
              <button onClick={() => onNavigate?.('releases')} className="text-xs font-bold uppercase tracking-widest text-zinc-800 hover:text-black hover:opacity-70 transition-opacity">Releases</button>
              <button onClick={() => onNavigate?.('blog')} className="text-xs font-bold uppercase tracking-widest text-zinc-800 hover:text-black hover:opacity-70 transition-opacity">Blog</button>
              <button onClick={() => onNavigate?.('use-cases')} className="text-xs font-bold uppercase tracking-widest text-zinc-800 hover:text-black hover:opacity-70 transition-opacity">Use Cases</button>
            </div>

            {/* CTA Buttons - Pure Editorial Style with Zero Glows and Soft Curved borders */}
            <div className="hidden md:flex items-center gap-3 relative" ref={dropdownRef}>
              <div className="relative">
                <button 
                  id="cta-nav-get-started"
                  onClick={() => setIsGetStartedOpen(!isGetStartedOpen)}
                  onMouseEnter={() => setIsGetStartedOpen(true)}
                  className={`rounded-full px-5 py-2 font-sans text-xs font-bold uppercase tracking-widest flex items-center gap-1.5 shadow-none transition-all cursor-pointer border ${
                    isGetStartedOpen 
                      ? 'bg-zinc-100 text-zinc-950 border-zinc-400' 
                      : 'bg-zinc-950 text-[#FAF6EE] border-transparent hover:bg-zinc-800'
                  }`}
                >
                  Get Started
                  <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${isGetStartedOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu - Clean Minimalist Nordic style, strictly NO glow, vertical columns */}
                <AnimatePresence>
                  {isGetStartedOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      onMouseLeave={() => setIsGetStartedOpen(false)}
                      className="absolute right-0 mt-2 w-64 bg-[#FAF6EE] border border-zinc-200 rounded-xl shadow-sm p-5 z-50 overflow-hidden"
                    >
                      <div className="flex flex-col gap-5 text-zinc-950">
                        {categorizedItems.map((cat, catIdx) => (
                          <div key={catIdx} className="flex flex-col gap-2">
                            <span className="font-sans text-[10px] font-extrabold uppercase tracking-widest text-zinc-400 select-none pb-1 border-b border-zinc-200/40">
                              {cat.category}
                            </span>
                            <div className="flex flex-col gap-1.5">
                              {cat.items.map((item, itemIdx) => (
                                <button
                                  key={itemIdx}
                                  onClick={() => {
                                    setIsGetStartedOpen(false);
                                    if ('view' in item && item.view) {
                                      onNavigate?.(item.view);
                                    } else if ('action' in item && item.action === 'signUp') {
                                      setShowModal(true);
                                    } else {
                                      onNavigate?.('home');
                                    }
                                  }}
                                  className="w-full text-left py-0.5 rounded text-[11px] font-extrabold uppercase tracking-widest text-[#18181b] hover:text-black hover:pl-1.5 transition-all cursor-pointer whitespace-nowrap"
                                >
                                  {item.title}
                                </button>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden">
              <button
                id="mobile-menu-toggle"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-zinc-800 hover:bg-zinc-100 transition-colors"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
              className="absolute left-0 right-0 bg-[#FAF6EE]/95 backdrop-blur-xl px-4 py-6 md:hidden flex flex-col gap-4 rounded-b-xl border-b border-zinc-200/50 shadow-sm z-50 max-h-[85vh] overflow-y-auto"
            >
              {/* Mobile Get Started collapsible section */}
              <div className="px-2">
                <button
                  onClick={() => setIsMobileNestsOpen(!isMobileNestsOpen)}
                  className="w-full flex items-center justify-between font-sans text-xs font-bold uppercase tracking-widest text-zinc-800 hover:opacity-50 py-1.5 text-left focus:outline-none"
                >
                  <span>Get Started</span>
                  <ChevronDown className={`h-3 w-3 transform transition-transform ${isMobileNestsOpen ? 'rotate-180' : ''}`} />
                </button>
                
                 <AnimatePresence>
                  {isMobileNestsOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-3 pt-2 border-l border-zinc-200/60 mt-1"
                    >
                      <div className="flex flex-col gap-4">
                        {categorizedItems.map((cat, catIdx) => (
                          <div key={catIdx} className="flex flex-col gap-1">
                            <span className="font-sans text-[8px] font-bold uppercase tracking-widest text-zinc-400 select-none">
                              {cat.category}
                            </span>
                            <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                              {cat.items.map((item, itemIdx) => (
                                <button
                                  key={itemIdx}
                                  onClick={() => {
                                    setIsOpen(false);
                                    if ('view' in item && item.view) {
                                      onNavigate?.(item.view);
                                    } else if ('action' in item && item.action === 'signUp') {
                                      setShowModal(true);
                                    }
                                  }}
                                  className="flex flex-col items-start py-1 text-left cursor-pointer"
                                >
                                  <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-zinc-800 hover:text-black transition-colors">
                                    {item.title}
                                  </span>
                                </button>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="h-px bg-zinc-200/40 my-1" />
              <div className="flex flex-col gap-2 px-2 pb-2">
                <button onClick={() => { setIsOpen(false); onNavigate?.('policies'); }} className="w-full text-left py-2 font-sans text-xs font-bold uppercase tracking-widest text-zinc-800 hover:opacity-50">Policies</button>
                <button onClick={() => { setIsOpen(false); onNavigate?.('support'); }} className="w-full text-left py-2 font-sans text-xs font-bold uppercase tracking-widest text-zinc-800 hover:opacity-50">Support</button>
                <button onClick={() => { setIsOpen(false); onNavigate?.('releases'); }} className="w-full text-left py-2 font-sans text-xs font-bold uppercase tracking-widest text-zinc-800 hover:opacity-50">Releases</button>
                <button onClick={() => { setIsOpen(false); onNavigate?.('blog'); }} className="w-full text-left py-2 font-sans text-xs font-bold uppercase tracking-widest text-zinc-800 hover:opacity-50">Blog</button>
                <button onClick={() => { setIsOpen(false); onNavigate?.('use-cases'); }} className="w-full text-left py-2 font-sans text-xs font-bold uppercase tracking-widest text-zinc-800 hover:opacity-50">Use Cases</button>
              </div>

              <div className="h-px bg-zinc-200/40 my-1" />
              <div className="flex flex-col gap-2 px-2">
                <button
                  id="mobile-signup-btn"
                  onClick={() => {
                    setIsOpen(false);
                    setShowModal(true);
                  }}
                  className="w-full text-center py-3 rounded-lg font-sans text-xs font-bold uppercase tracking-widest text-zinc-950 border border-zinc-300 bg-[#FAF6EE]"
                >
                  Start Free
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Auth Modal (Pristine, Editorial B&W design, strictly zero glows, curved corners) */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-xs"
            />
            
            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              className="relative w-full max-w-md border border-zinc-200 rounded-2xl bg-white p-8 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                id="close-modal-btn"
                onClick={() => setShowModal(false)}
                className="absolute right-4 top-4 p-1.5 rounded-lg text-zinc-400 hover:bg-zinc-50 hover:text-black transition"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400 block mb-2">
                  ESTABLISHED 2026
                </span>
                <h3 className="font-sans text-2xl font-bold tracking-tight text-zinc-950 uppercase leading-none">
                  JOIN GENERAL LANGUAGE
                </h3>
                <p className="font-sans text-xs text-zinc-500 mt-2 leading-relaxed">
                  Connect instantly to experience organized, low-friction workspace orchestration. Flat, minimal, highly functional.
                </p>
              </div>

              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center py-8 text-center"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 mb-4 border border-emerald-100">
                    <Check className="h-6 w-6" />
                  </div>
                  <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-zinc-950">ENTRY VERIFIED</h4>
                  <p className="font-sans text-xs text-zinc-500 mt-2">Prisitinely reserved, check your workspace dashboard shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSignup} className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-zinc-800 mb-1.5 font-sans">
                      WORK EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="YOU@COMPANY.COM"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 font-sans text-xs uppercase text-zinc-900 placeholder-zinc-400 focus:border-zinc-950 transition-colors"
                    />
                  </div>

                  <div className="flex items-start gap-2.5 py-1">
                    <input
                      type="checkbox"
                      id="opt-in"
                      defaultChecked
                      className="h-4 w-4 rounded border-zinc-300 text-zinc-900 focus:ring-0"
                    />
                    <label htmlFor="opt-in" className="font-sans text-[10px] text-zinc-550 leading-tight">
                      YES, DISPATCH THE WEEKLY SYSTEM LOGS AND RUNTIME UPDATES.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-zinc-900 py-3 font-sans text-xs font-bold uppercase tracking-widest text-white hover:bg-zinc-800 transition disabled:bg-zinc-300"
                  >
                    {isSubmitting ? (
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    ) : (
                      <>
                        RESERVE FREE ACCESS
                        <ArrowRight className="h-3.5 w-3.5" />
                      </>
                    )}
                  </button>

                  <div className="text-center pt-2">
                    <p className="font-sans text-[9px] uppercase tracking-widest text-zinc-400">
                      NO CREDIT CARD REQUIRED • 14 DAYS DISCOVERY
                    </p>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
