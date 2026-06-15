import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { GlobeInteractive } from './components/GlobeInteractive';
import { Sparkles } from './components/Sparkles';
import { Gallery4 } from './components/ui/gallery4';
import { Footer } from './components/Footer';
import { DownloadPage } from './components/DownloadPage';
import { TermsOfService } from './components/TermsOfService';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { BlogPage } from './components/BlogPage';
import { BlogPostPage } from './components/BlogPostPage';
import { StoryPage } from './components/StoryPage';
import { AboutPage } from './components/AboutPage';
import { CompliancePage } from './components/CompliancePage';
import { WhyStudentsPage } from './components/WhyStudentsPage';
import { LLMModelsPage } from './components/LLMModelsPage';
import { PoliciesPage } from './components/PoliciesPage';
import { SuggestionsPage } from './components/SuggestionsPage';
import { ReleasesPage } from './components/ReleasesPage';
import { UseCasesPage } from './components/UseCasesPage';
import { motion } from 'motion/react';

type MainViews = 'home' | 'download' | 'terms' | 'privacy' | 'blog' | 'story' | 'about' | 'compliance' | 'why-students' | 'llm-learning' | 'policies' | 'suggestions' | 'releases' | 'use-cases';
const validViews: MainViews[] = ['home', 'download', 'terms', 'privacy', 'blog', 'story', 'about', 'compliance', 'why-students', 'llm-learning', 'policies', 'suggestions', 'releases', 'use-cases'];

export default function App() {
  const [currentView, setCurrentView] = useState<MainViews | `blog-post/${string}`>(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const hash = window.location.hash.replace('#', '') as any;
      if (validViews.includes(hash) || String(hash).startsWith('blog-post/')) {
        return hash;
      }
    }
    return 'home';
  });

  React.useEffect(() => {
    window.location.hash = currentView;
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Dynamically update document title based on view
    let title = 'General Language — Workspace Orchestration';
    if (currentView === 'download') {
      title = 'Download Cosmi — General Language';
    } else if (currentView === 'terms') {
      title = 'Terms of Use — General Language';
    } else if (currentView === 'privacy') {
      title = 'Privacy Policy — General Language';
    } else if (currentView === 'blog') {
      title = 'Blog — General Language';
    } else if (currentView === 'story') {
      title = 'Our Story — General Language';
    } else if (currentView === 'about') {
      title = 'About Us — General Language';
    } else if (currentView === 'compliance') {
      title = 'Compliance & Standards — General Language';
    } else if (currentView === 'why-students') {
      title = 'Why We Help Students — General Language';
    } else if (currentView === 'llm-learning') {
      title = 'AI Orchestration Engine — General Language';
    } else if (currentView === 'policies') {
      title = 'Policies — General Language';
    } else if (currentView === 'suggestions') {
      title = 'Suggestions — General Language';
    } else if (currentView === 'releases') {
      title = 'Releases — General Language';
    } else if (currentView === 'use-cases') {
      title = 'Use Cases — General Language';
    } else if (currentView.startsWith('blog-post/')) {
      const slug = currentView.replace('blog-post/', '');
      const formattedSlug = slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      title = `${formattedSlug} — General Language`;
    }
    document.title = title;
  }, [currentView]);

  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as any;
      if (validViews.includes(hash) || String(hash).startsWith('blog-post/')) {
        setCurrentView(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleScrollToDemo = () => {
    // scroll to target
  };

  return (
    <div className="min-h-screen bg-[#FAF6EE] text-zinc-900 selection:bg-zinc-900 selection:text-white antialiased overflow-x-clip">
      {/* Pristine Navbar */}
      <Navbar 
        onOpenDemo={handleScrollToDemo} 
        currentView={currentView} 
        onNavigate={setCurrentView} 
      />

      {currentView === 'download' ? (
        <DownloadPage onBackToHome={() => setCurrentView('home')} />
      ) : currentView === 'terms' ? (
        <TermsOfService />
      ) : currentView === 'privacy' ? (
        <PrivacyPolicy />
      ) : currentView === 'blog' ? (
        <BlogPage />
      ) : currentView === 'story' ? (
        <StoryPage />
      ) : currentView === 'about' ? (
        <AboutPage />
      ) : currentView === 'compliance' ? (
        <CompliancePage />
      ) : currentView === 'why-students' ? (
        <WhyStudentsPage />
      ) : currentView === 'llm-learning' ? (
        <LLMModelsPage />
      ) : currentView === 'policies' ? (
        <PoliciesPage />
      ) : currentView === 'suggestions' ? (
        <SuggestionsPage />
      ) : currentView === 'releases' ? (
        <ReleasesPage />
      ) : currentView === 'use-cases' ? (
        <UseCasesPage />
      ) : currentView.startsWith('blog-post/') ? (
        <BlogPostPage slug={currentView.replace('blog-post/', '')} />
      ) : (
        <>
          {/* Hero Section */}
          <Hero onScrollToDemo={handleScrollToDemo} />

          {/* GLOBAL INFRASTRUCTURE: Interactive dynamic globe */}
          <motion.section 
            id="global-infrastructure"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-t border-zinc-200/40 relative"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Info descriptor */}
              <div className="lg:col-span-5 space-y-6 relative z-20">
                <h2 className="font-sans text-3xl sm:text-4xl font-[800] tracking-tight text-zinc-950 leading-[1.1]">
                  Convenience around the world
                </h2>
                <p className="font-sans text-sm text-zinc-600 leading-relaxed">
                  We empower students globally to accelerate their learning and simplify complex topics. Our educational network connects you with the right resources, study material, and AI-driven insights wherever you are—making studying more efficient and accessible for every student on the planet.
                </p>
              </div>

              {/* Interactive Globe Container with side overflow/overlap */}
              <div className="lg:col-span-7 flex justify-center lg:justify-end items-center relative">
                <div className="w-[340px] sm:w-[500px] md:w-[600px] lg:w-[800px] xl:w-[980px] aspect-square relative flex items-center justify-center lg:-mr-44 xl:-mr-64 lg:-my-24 select-none">
                  <GlobeInteractive className="w-full h-full relative z-10" />
                </div>
              </div>

            </div>
          </motion.section>

          {/* Partner Gallery Section */}
          <motion.section 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
            className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 sm:py-6 border-t border-zinc-200/40"
          >
            <Sparkles 
              density={400} 
              size={1.5} 
              color="#d4d4d8"
              className="absolute inset-0 z-0 pointer-events-none" 
            />
            <Gallery4 />
          </motion.section>
        </>
      )}

      {/* Footer Content */}
      <Footer onNavigate={setCurrentView} />
    </div>
  );
}
