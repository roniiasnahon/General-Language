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
import { SupportPage } from './components/SupportPage';
import { ReleasesPage } from './components/ReleasesPage';
import { UseCasesPage } from './components/UseCasesPage';
import { ChangelogPage } from './components/ChangelogPage';
import { PolicyDetailPage } from './components/PolicyDetailPage';
import { ShuffleHero } from './components/ShuffleHero';
import { LatestReleases } from './components/LatestReleases';
import { CosmiwisePage } from './components/CosmiwisePage';
import { DoNotSellPage } from './components/DoNotSellPage';
import { CookiePreferencesPage } from './components/CookiePreferencesPage';
import { motion } from 'motion/react';

type MainViews = 'home' | 'download' | 'terms' | 'privacy' | 'blog' | 'story' | 'about' | 'compliance' | 'why-students' | 'llm-learning' | 'policies' | 'support' | 'releases' | 'use-cases' | 'changelog' | 'cosmiwise' | 'do-not-sell' | 'cookie-preferences';
const validViews: MainViews[] = ['home', 'download', 'terms', 'privacy', 'blog', 'story', 'about', 'compliance', 'why-students', 'llm-learning', 'policies', 'support', 'releases', 'use-cases', 'changelog', 'cosmiwise', 'do-not-sell', 'cookie-preferences'];

export default function App() {
  const [currentView, setCurrentView] = useState<MainViews | `blog-post/${string}` | `policy/${string}`>(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const hash = window.location.hash.replace('#', '') as any;
      if (validViews.includes(hash) || String(hash).startsWith('blog-post/') || String(hash).startsWith('policy/')) {
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
    let description = 'General Language — Workspace Orchestration and Cosmi development platforms. Build future proof skills and orchestrate your computing workspaces seamlessly.';
    
    if (currentView === 'download') {
      title = 'Download Cosmi — General Language';
      description = 'Download Cosmi, our flagship workspace orchestration tool. Available for Windows, macOS, and Linux.';
    } else if (currentView === 'terms') {
      title = 'Terms of Use — General Language';
      description = 'Read the Terms of Use and Service Agreements for General Language and Cosmi development platforms.';
    } else if (currentView === 'privacy') {
      title = 'Privacy Policy — General Language';
      description = 'Learn how General Language protects your privacy, secures your data, and adheres to global compliance standards.';
    } else if (currentView === 'blog') {
      title = 'Blog — General Language';
      description = 'Insights, product updates, and technical deep-dives from the General Language engineering and research teams.';
    } else if (currentView === 'story') {
      title = 'Our Story — General Language';
      description = 'Discover the origins of General Language, our mission, and our vision for the future of workspace orchestration.';
    } else if (currentView === 'about') {
      title = 'About Us — General Language';
      description = 'Learn about the General Language team, our values, and our commitment to building the best workspace orchestration platform.';
    } else if (currentView === 'compliance') {
      title = 'Compliance & Standards — General Language';
      description = 'General Language meets the highest standards for data security and compliance, including SOC 2, HIPAA, and GDPR.';
    } else if (currentView === 'why-students') {
      title = 'Why We Help Students — General Language';
      description = 'Learn why General Language is committed to providing free and accessible workspace orchestration tools for students worldwide.';
    } else if (currentView === 'llm-learning') {
      title = 'AI Orchestration Engine — General Language';
      description = 'Explore the General Language AI orchestration engine, designed to seamlessly integrate LLMs into your daily workflows.';
    } else if (currentView === 'policies') {
      title = 'Policies — General Language';
      description = 'Review the policies that govern the use of General Language platforms, including our Acceptable Use Policy and Code of Conduct.';
    } else if (currentView === 'support') {
      title = 'Support — General Language';
      description = 'Get help with General Language platforms. Access documentation, community forums, and direct support channels.';
    } else if (currentView === 'releases') {
      title = 'Releases — General Language';
      description = 'Stay up-to-date with the latest features, fixes, and improvements to the General Language workspace orchestration platform.';
    } else if (currentView === 'use-cases') {
      title = 'Use Cases — General Language';
      description = 'Discover how teams across industries use General Language to orchestrate their workspaces and boost productivity.';
    } else if (currentView === 'changelog') {
      title = 'Changelog — General Language';
      description = 'Detailed changelog for General Language products. Track every update, fix, and new feature.';
    } else if (currentView === 'do-not-sell') {
      title = 'Do Not Sell My Information — General Language';
      description = 'Exercise your right to opt-out of the sale or sharing of your personal information under applicable privacy laws.';
    } else if (currentView === 'cookie-preferences') {
      title = 'Cookie Preferences — General Language';
      description = 'Manage your cookie preferences and learn how General Language uses cookies to improve your experience.';
    } else if (currentView === 'cosmiwise') {
      title = 'Cosmiwise — General Language';
      description = 'Cosmiwise is our dedicated hub for learning how to maximize your potential with the Cosmi platform.';
    } else if (currentView.startsWith('blog-post/')) {
      const slug = currentView.replace('blog-post/', '');
      const formattedSlug = slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      title = `${formattedSlug} — General Language`;
      description = `Read our latest insights on ${formattedSlug} from the General Language blog.`;
    } else if (currentView.startsWith('policy/')) {
      const slug = currentView.replace('policy/', '');
      const formattedSlug = slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      title = `${formattedSlug} — General Language`;
      description = `Read our detailed policy on ${formattedSlug}.`;
    }
    
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update og:title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }
    
    // Update og:description
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }
    
    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', window.location.href.split('#')[0] + (currentView === 'home' ? '' : `#${currentView}`));
    
  }, [currentView]);

  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as any;
      if (validViews.includes(hash) || String(hash).startsWith('blog-post/') || String(hash).startsWith('policy/')) {
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
      ) : currentView === 'support' ? (
        <SupportPage />
      ) : currentView === 'releases' ? (
        <ReleasesPage />
      ) : currentView === 'use-cases' ? (
        <UseCasesPage />
      ) : currentView === 'changelog' ? (
        <ChangelogPage />
      ) : currentView === 'do-not-sell' ? (
        <DoNotSellPage />
      ) : currentView === 'cookie-preferences' ? (
        <CookiePreferencesPage />
      ) : currentView === 'cosmiwise' ? (
        <CosmiwisePage />
      ) : currentView.startsWith('blog-post/') ? (
        <BlogPostPage slug={currentView.replace('blog-post/', '')} />
      ) : currentView.startsWith('policy/') ? (
        <PolicyDetailPage slug={currentView.replace('policy/', '')} />
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
                  Jump right in, anywhere.
                </h2>
                <p className="font-sans text-sm text-zinc-600 leading-relaxed">
                  Studying shouldn't mean scrolling through endless menus or deciphering broken interfaces. We build simple, interactive study apps that let you grab the resources you need and start working instantly—wherever you are.
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
          {/* Shuffle Hero Section */}
          <motion.section
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <ShuffleHero />
          </motion.section>

          <LatestReleases onNavigate={setCurrentView} />
        </>
      )}

      {/* Footer Content */}
      <Footer onNavigate={setCurrentView} />
    </div>
  );
}
