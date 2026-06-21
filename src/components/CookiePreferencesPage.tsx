import React, { useEffect } from 'react';
import { motion } from 'motion/react';

export function CookiePreferencesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF6EE] pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto flex flex-col items-center text-center"
      >
        <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[800] tracking-tight text-zinc-950 leading-[1.05] max-w-[1000px] mb-16">
          Comprehensive Cookie Policy and Preferences
        </h1>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[700px] mx-auto font-serif text-[1.125rem] md:text-[1.25rem] text-zinc-900 leading-[1.7] space-y-8"
      >
        <p>
          General Language is deeply committed to maintaining clear, transparent communication regarding our data collection practices. This exhaustive Cookie Policy explains precisely how we, alongside our trusted third-party partners and service providers, utilize cookies, web beacons, tracking pixels, and other similar tracking technologies when you interact with our websites, applications, and digital platforms.
        </p>

        <h2 className="font-sans text-2xl font-bold mt-12 mb-6 tracking-tight text-zinc-950">1. What Exactly Ar Cookies?</h2>
        <p>
          Cookies are small text files, often consisting of a string of alphanumeric characters, which are downloaded onto your personal computer, smartphone, or other internet-enabled device when you visit a web property. These files are securely stored by your web browser and allow the website—or a third-party entity holding the cookie—to recognize you and make your next visit easier and more tailored to your historical usage.
        </p>
        <p>
          Cookies play an indispensable role in the modern web. Without them, basic functions like logging into a secure portal, keeping items in a digital shopping cart, or remembering your language preferences across sessions would be functionally impossible. Cookies can be characterized by their duration: "Session Cookies" are temporary and expire the moment you close your browser, while "Persistent Cookies" remain on your hard drive until you meticulously delete them or until they reach a predefined expiration date set by the creator.
        </p>

        <h2 className="font-sans text-2xl font-bold mt-12 mb-6 tracking-tight text-zinc-950">2. First-Party vs. Third-Party Deployment</h2>
        <p>
          The origination of the cookie dictates its classification. <strong>First-party cookies</strong> are generated and placed directly by General Language. These are primarily utilized to ensure our platform operates smoothly, securely, and seamlessly. Conversely, <strong>Third-party cookies</strong> are placed by external domains, independent from General Language. We occasionally grant carefully vetted partners the ability to place third-party cookies on our site to facilitate deep analytics, aggregate demographic studies, and to assist in our targeted marketing initiatives across the broader internet ecosystem.
        </p>

        <h2 className="font-sans text-2xl font-bold mt-12 mb-6 tracking-tight text-zinc-950">3. Exhaustive Categorization of Cookies We Utilize</h2>
        <p>
          Our platform employs a varied matrix of cookies, which we have meticulously categorized based on their core function and necessity to the underlying infrastructure:
        </p>
        
        <h3 className="font-sans text-xl font-bold mt-8 mb-4 tracking-tight text-zinc-950">A. Strictly Necessary (Essential) Cookies</h3>
        <p>
          These are the foundational building blocks of our web architecture. They are absolutely critical to enable you to navigate our systems and utilize their features, including accessing secure, authenticated areas. Without these essential cookies, services such as session management, security token validation, and basic routing cannot be provided. Because our educational platform relies on persistent authentication to track academic progress and maintain data sovereignty, these cookies cannot be disabled without completely breaking the fundamental utility of the site.
        </p>

        <h3 className="font-sans text-xl font-bold mt-8 mb-4 tracking-tight text-zinc-950">B. Performance and Analytical Metrics Cookies</h3>
        <p>
          In our pursuit of continuous operational excellence, we deploy analytical cookies to gather exhaustive, aggregated data regarding how visitors interact with our domains. This includes tracking metrics such as the specific pages visited most frequently, average time spent on specialized educational modules, geographic dispersion of our audience, and any error conditions users might encounter. This data is strictly aggregated and anonymized; it does not explicitly identify an individual user. The insights derived from these metrics dictate our development roadmap, allowing us to enhance load times, streamline navigation patterns, and refine our user interface architecture.
        </p>

        <h3 className="font-sans text-xl font-bold mt-8 mb-4 tracking-tight text-zinc-950">C. Functionality and Personalization Cookies</h3>
        <p>
          To enrich your educational journey, functionality cookies allow our platform to explicitly remember the discrete choices you make as you interact with our tools. This can encompass remembering your preferred dialect or language, your visual theme settings, or your timezone configuration. The goal of these cookies is an elevated, highly personalized experience that eliminates the friction of constantly reconfiguring your environment upon every discrete login event.
        </p>

        <h3 className="font-sans text-xl font-bold mt-8 mb-4 tracking-tight text-zinc-950">D. Advertising, Targeting, and Retargeting Cookies</h3>
        <p>
          We, alongside our advertising consortiums, may deploy targeting cookies to deliver promotional content that is highly relevant to your demonstrated interests. These tracking agents monitor your browsing habits across different web domains over extended periods. Their primary mechanism is to build an interest profile, which is then utilized to display pertinent General Language advertisements on external sites you visit. They are equally critical for imposing frequency caps (ensuring you do not see our ads repeatedly) and for calculating the return on investment (ROI) of our expansive marketing campaigns.
        </p>

        <h2 className="font-sans text-2xl font-bold mt-12 mb-6 tracking-tight text-zinc-950">4. Comprehensive Guide to Managing Your Preferences</h2>
        <p>
          We believe in total user autonomy regarding local storage technologies. You have the ultimate authority to dictate how cookies are handled by intercepting them at the browser level. Most modern web browsers are configured to implicitly accept cookies by default; however, you possess the capability to alter these settings to universally decline cookies or to issue a warning protocol before a cookie is successfully accepted.
        </p>
        <p>
          Below are detailed instructions for managing cookies in the most ubiquitous web browsers:
        </p>
        <ul className="list-disc pl-6 space-y-4 font-sans text-base text-zinc-800">
          <li><strong>Google Chrome:</strong> Navigate to Settings &gt; Privacy and security &gt; Cookies and other site data. Here, you can actively block all third-party cookies or command Chrome to clear all local data upon exiting the application.</li>
          <li><strong>Apple Safari:</strong> Proceed to Preferences &gt; Privacy. The "Prevent cross-site tracking" option handles most third-party vectors, while the "Block all cookies" checkbox applies a universal restriction.</li>
          <li><strong>Mozilla Firefox:</strong> Access Options &gt; Privacy &amp; Security. Firefox offers standard, strict, and custom configurations for actively managing cross-site tracking cookies, fingerprinting scripts, and cryptominers.</li>
          <li><strong>Microsoft Edge:</strong> Open Settings &gt; Cookies and site permissions &gt; Manage and delete cookies and site data. Edge provides granular controls for defining explicit allow/block lists for distinct domains.</li>
        </ul>

        <h2 className="font-sans text-2xl font-bold mt-12 mb-6 tracking-tight text-zinc-950">5. Do Not Track (DNT) Signals and Global Privacy Control (GPC)</h2>
        <p>
          Certain web browsers incorporate a "Do Not Track" (DNT) feature that broadcasts a signal to websites indicating that you categorically object to being tracked. Due to the lack of a universally established technological standard for interpreting DNT signals, our platform does not natively respond to DNT headers. However, we strongly emphasize our full support and compliance with the modern "Global Privacy Control" (GPC) specification. GPC signals broadcasted by compliant browsers or extensions will be definitively honored as explicit directives to opt-out of targeted advertising and the sale/sharing of personal data.
        </p>

        <h2 className="font-sans text-2xl font-bold mt-12 mb-6 tracking-tight text-zinc-950">6. Unintended Consequences of Disabling Cookies</h2>
        <p>
          Please be explicitly advised that employing aggressive ad-blockers or universally restricting all cookies will precipitate unintended functional degradation on our platform. Core elements of our architecture, specifically our authenticated learning modules, student progress tracking systems, and secure document vaults, require the presence of essential session cookies. Blocking these will render large portions of our educational suite utterly inoperable.
        </p>

        <div className="mt-16 p-8 bg-[#f4ebd8] rounded-2xl border border-zinc-200/50 font-sans text-base text-zinc-800">
          <h3 className="font-bold text-lg mb-3">Policy Revisions and Contact</h3>
          <p className="mb-0">
            This Cookie Policy is subject to architectural review and may be amended to reflect the introduction of new tracking capabilities, changes in international regulatory frameworks, or shifts in our internal engineering practices. We urge all users to review this document periodically. For highly technical questions regarding our local storage implementation, please direct correspondence to privacy@generallanguage.com.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

