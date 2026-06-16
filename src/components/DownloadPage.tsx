import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Check,
  Plus,
  HelpCircle
} from 'lucide-react';

const MacOSIcon = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <img 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg" 
    alt="macOS" 
    referrerPolicy="no-referrer"
    {...props} 
  />
);

const WindowsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M0 3.449L9.75 2.1v9.45H0V3.449zM0 12.45h9.75v9.45L0 20.551v-8.1zM10.8 1.95L24 0v11.55H10.8V1.95zM10.8 12.45H24v11.55l-13.2-1.95v-9.6z" />
  </svg>
);

const LinuxIcon = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <img 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" 
    alt="Linux" 
    referrerPolicy="no-referrer"
    {...props} 
  />
);

const AndroidIcon = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <img 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg" 
    alt="Android" 
    referrerPolicy="no-referrer"
    {...props} 
  />
);

interface DownloadPageProps {
  onBackToHome: () => void;
}

const faqData = [
  { q: "Do I need a paid plan to use the desktop or mobile apps?", a: "Cosmi desktop apps are completely free to download and use for all basic features. Advanced synchronization features require an active Pro subscription." },
  { q: "What's the difference between the desktop app and using Cosmi in my browser?", a: "The desktop application offers deep system integration, including global keyboard shortcuts, native notifications, and significantly faster startup times." },
  { q: "Can I use the same account across desktop, web, and mobile?", a: "Absolutely. All your configurations, preferences, and data sync securely and instantly across all your authorized devices." },
  { q: "Is Cosmi available for my specific Linux distribution?", a: "We provide an AppImage, a snap package, and a .deb file that cover most modern Linux distributions like Ubuntu, Debian, Fedora, and Arch." },
  { q: "How do I update the desktop application?", a: "Cosmi will automatically check for updates in the background. You'll receive a prompt when a new version is ready to install." },
  { q: "Are there any enterprise deployment options?", a: "Yes, we offer MSI installers for Windows and customized deployment packages for enterprise customers. Please contact our sales team for details." },
  { q: "Where does Cosmi store its data locally?", a: "Local data is stored in your user profile's standard application data directory. On Windows, typically in AppData\\Roaming; on macOS, ~/Library/Application Support; and on Linux, ~/.config." },
  { q: "Can I use Cosmi entirely offline?", a: "Cosmi requires an active internet connection to use its features and sync your data." },
  { q: "What should I do if the installer is blocked by my OS?", a: "Our binaries are signed. If you see a warning on a fresh release, you can bypass it by clicking 'More info' -> 'Run anyway' on Windows, or by right-clicking the app and selecting 'Open' on macOS." },
  { q: "How do I uninstall Cosmi from my system?", a: "You can uninstall it via 'Add or Remove Programs' on Windows, moving the app to the Trash on macOS, or using your respective package manager on Linux." },
];

export function DownloadPage({ onBackToHome }: DownloadPageProps) {
  const [selectedOS, setSelectedOS] = useState<'macOS' | 'Windows' | 'Linux' | 'Android' | 'iOS'>('Windows');
  const [typedText, setTypedText] = useState("");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const fullText = "Download Cosmi";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.substring(0, index + 1));
      index++;
      if (index >= fullText.length) {
        clearInterval(interval);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  // Auto detect user OS
  useEffect(() => {
    if (typeof window !== 'undefined' && window.navigator) {
      const ua = window.navigator.userAgent.toLowerCase();
      if (ua.includes('mac')) {
        setSelectedOS('macOS');
      } else if (ua.includes('iphone') || ua.includes('ipad')) {
        setSelectedOS('iOS');
      } else if (ua.includes('android')) {
        setSelectedOS('Android');
      } else if (ua.includes('win')) {
        setSelectedOS('Windows');
      } else if (ua.includes('linux')) {
        setSelectedOS('Linux');
      }
    }
  }, []);

  const handleDownload = (url: string, platform: string) => {
    const a = document.createElement('a');
    a.href = url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="bg-[#FAF6EE] text-zinc-900 min-h-screen font-sans selection:bg-zinc-950 selection:text-white relative overflow-hidden">
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

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
        
        {/* New Hero Section */}
        <div className="pt-8 md:pt-16 pb-24 md:pb-32 text-left">
          <div className="max-w-5xl">
            <motion.h1 
              variants={{
                hidden: { opacity: 1 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.12, delayChildren: 0.1 },
                },
              }}
              initial="hidden"
              animate="visible"
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tight text-zinc-950 leading-[1.05]"
            >
              {["Orchestrators", "that", "help"].map((word, i) => (
                <React.Fragment key={`line1-${i}`}>
                  <motion.span 
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: {
                        opacity: 1, y: 0,
                        transition: { type: "spring", damping: 14, stiffness: 100 }
                      }
                    }}
                    className="relative inline-block"
                  >
                    {word}
                  </motion.span>
                  {i < 2 && " "}
                </React.Fragment>
              ))}

              <br className="hidden md:block" />
              <span className="md:hidden"> </span>

              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1, y: 0,
                    transition: { type: "spring", damping: 14, stiffness: 100 }
                  }
                }}
                className="relative inline-block"
              >
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 0.6, 
                      ease: [0.83, 0, 0.17, 1] 
                    }}
                    className="absolute bottom-[-0.15em] left-[-0.1em] right-[-0.1em] h-[1.25em] bg-zinc-950 origin-left rounded-sm z-[-1]"
                  />
                  <motion.span 
                    initial={{ color: "#09090b" }}
                    animate={{ color: "#ffffff" }}
                    transition={{ duration: 0.3, delay: 0.8 }}
                    className="relative z-10 px-1"
                  >
                    you
                  </motion.span>
              </motion.span>
              {" "}

              {["achieve", "mastery"].map((word, i) => (
                <React.Fragment key={`line2-${i}`}>
                  <motion.span 
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: {
                        opacity: 1, y: 0,
                        transition: { type: "spring", damping: 14, stiffness: 100 }
                      }
                    }}
                    className="relative inline-block"
                  >
                    {word}
                  </motion.span>
                  {i < 1 && " "}
                </React.Fragment>
              ))}
            </motion.h1>
          </div>
        </div>

        {/* Top Header Row with dynamic headline */}
        <div className="mb-8 md:mb-10 text-left border-t border-zinc-200/65 pt-6 mt-12 md:mt-20">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950 leading-[1.08] min-h-[1.2em] select-none">
              {typedText}
              <span className="inline-block w-[3px] h-[0.85em] bg-black ml-2 align-middle animate-pulse font-normal" />
            </h2>
          </div>
        </div>

        {/* Dynamic section without pills, rendering the primary Download client */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6 pt-2"
        >

          {/* Desktop Platforms */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pt-4">
            
            {/* macOS Column */}
            <div className="space-y-6 border-b md:border-b-0 pb-8 md:pb-0 md:pr-6 md:border-r border-zinc-200/60">
              <button 
                onClick={() => setSelectedOS('macOS')}
                className="flex items-center gap-2 group cursor-pointer text-left focus:outline-none"
              >
                <MacOSIcon className={`h-5 w-5 transition-transform ${selectedOS === 'macOS' ? 'text-zinc-950 scale-105' : 'text-zinc-400'}`} />
                <span className={`text-lg font-bold tracking-tight ${selectedOS === 'macOS' ? 'text-zinc-950' : 'text-zinc-500 hover:text-zinc-800'}`}>
                  macOS
                </span>
              </button>
              <div className="space-y-3">
                <button 
                  disabled
                  className="w-full text-center py-4 rounded-xl bg-zinc-100 text-black font-sans text-xs font-bold uppercase tracking-widest cursor-not-allowed"
                >
                  Coming Soon
                </button>
              </div>

            </div>

            {/* Windows Column */}
            <div className="space-y-6 border-b md:border-b-0 pb-8 md:pb-0 md:pr-6 md:border-r border-zinc-200/60">
              <button 
                onClick={() => setSelectedOS('Windows')}
                className="flex items-center gap-2 group cursor-pointer text-left focus:outline-none"
              >
                <WindowsIcon className={`h-5 w-5 transition-transform ${selectedOS === 'Windows' ? 'text-zinc-950 scale-105' : 'text-zinc-400'}`} />
                <span className={`text-lg font-bold tracking-tight ${selectedOS === 'Windows' ? 'text-zinc-950' : 'text-zinc-500 hover:text-zinc-800'}`}>
                  Windows
                </span>
              </button>
              <div className="space-y-3">
                <button 
                  onClick={() => handleDownload('https://github.com/roniiasnahon/Tetra/releases/download/v1.0.0/Cosmiwise.Setup.1.0.0.exe', 'Windows')}
                  className="w-full text-center py-4 rounded-xl bg-zinc-950 text-white font-sans text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 transition-colors cursor-pointer"
                >
                  Download Cosmi
                </button>
              </div>

            </div>

            {/* Linux Column */}
            <div className="space-y-6 border-b md:border-b-0 pb-8 md:pb-0 md:pr-6">
              <button 
                onClick={() => setSelectedOS('Linux')}
                className="flex items-center gap-2 group cursor-pointer text-left focus:outline-none"
              >
                <LinuxIcon className={`h-5 w-5 transition-transform ${selectedOS === 'Linux' ? 'text-zinc-950 scale-105' : 'text-zinc-400'}`} />
                <span className={`text-lg font-bold tracking-tight ${selectedOS === 'Linux' ? 'text-zinc-950' : 'text-zinc-500 hover:text-zinc-800'}`}>
                  Linux
                </span>
              </button>
              <div className="space-y-3">
                <button 
                  onClick={() => handleDownload('https://github.com/roniiasnahon/Tetra/releases/download/v1.0.0/cosmiwise-1.0.0.zip', 'Linux')}
                  className="w-full text-center py-4 rounded-xl bg-zinc-950 text-white font-sans text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 transition-colors cursor-pointer"
                >
                  Download Cosmi
                </button>
              </div>

            </div>
          </div>

          {/* Mobile Platforms */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pt-8 md:pt-12 max-w-2xl mx-auto w-full">
            
            {/* iOS Column */}
            <div className="space-y-6 border-b md:border-b-0 pb-8 md:pb-0 md:pr-6 md:border-r border-zinc-200/60">
              <button 
                onClick={() => setSelectedOS('iOS')}
                className="flex items-center gap-2 group cursor-pointer text-left focus:outline-none"
              >
                <MacOSIcon className={`h-5 w-5 transition-transform ${selectedOS === 'iOS' ? 'text-zinc-950 scale-105' : 'text-zinc-400'}`} />
                <span className={`text-lg font-bold tracking-tight ${selectedOS === 'iOS' ? 'text-zinc-950' : 'text-zinc-500 hover:text-zinc-800'}`}>
                  iOS
                </span>
              </button>
              <div className="space-y-3">
                <button 
                  disabled
                  className="w-full text-center py-4 rounded-xl bg-zinc-100 text-black font-sans text-xs font-bold uppercase tracking-widest cursor-not-allowed"
                >
                  Coming Soon
                </button>
              </div>

            </div>

            {/* Android Column */}
            <div className="space-y-6">
              <button 
                onClick={() => setSelectedOS('Android')}
                className="flex items-center gap-2 group cursor-pointer text-left focus:outline-none"
              >
                <AndroidIcon className={`h-5 w-5 transition-transform ${selectedOS === 'Android' ? 'text-zinc-950 scale-105' : 'text-zinc-400'}`} />
                <span className={`text-lg font-bold tracking-tight ${selectedOS === 'Android' ? 'text-zinc-950' : 'text-zinc-500 hover:text-zinc-800'}`}>
                  Android
                </span>
              </button>
              <div className="space-y-3">
                <button 
                  disabled
                  className="w-full text-center py-4 rounded-xl bg-zinc-100 text-black font-sans text-xs font-bold uppercase tracking-widest cursor-not-allowed"
                >
                  Coming Soon
                </button>
              </div>

            </div>

          </div>
        </motion.div>

        {/* Bold Motto */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={{
            visible: { 
              transition: { staggerChildren: 0.15 } 
            }
          }}
          className="pt-24 md:pt-40 lg:pt-48 pb-12 flex flex-col items-center"
        >
          <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-extrabold tracking-tight text-zinc-950 leading-[0.9] select-none">
            <span className="flex justify-center gap-4 md:gap-6 lg:gap-8">
              {["Do", "what", "makes"].map((word, idx) => (
                <motion.span
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 60 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                  }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </span>
            <span className="flex justify-center gap-4 md:gap-6 lg:gap-8 mt-2 md:mt-4 lg:mt-6">
              {["you", "move."].map((word, idx) => (
                <motion.span
                  key={idx + 3}
                  variants={{
                    hidden: { opacity: 0, y: 60 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                  }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </h2>
        </motion.div>

        {/* FAQ Section */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="pt-24 pb-16 max-w-3xl mx-auto w-full"
        >
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-950">
              FAQ
            </h2>
          </div>
          
          <div className="border-t border-zinc-200/65">
            {faqData.map((faq, idx) => (
              <div key={idx} className="border-b border-zinc-200/65 py-6">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="flex w-full items-center justify-between text-left focus:outline-none group cursor-pointer"
                >
                  <span className="text-[17px] font-bold text-zinc-900 group-hover:text-zinc-600 transition-colors">
                    {faq.q}
                  </span>
                  <Plus className={`h-5 w-5 text-zinc-400 shrink-0 transition-transform duration-300 ${openFaqIndex === idx ? 'rotate-45' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaqIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 pr-12 text-sm sm:text-base text-zinc-600 leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Separator block */}
        <div className="pt-12" />

      </div>
    </div>
  );
}
