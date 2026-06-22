import React, { useEffect } from 'react';
import { motion } from 'motion/react';

export const PrivacyPolicy: React.FC = () => {
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
          Privacy Policy and Data Protection
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[700px] mx-auto font-serif text-[1.125rem] md:text-[1.25rem] text-zinc-900 leading-[1.7] space-y-8"
      >
        <p>
          At GeneralLanguage, we are committed to maintaining the trust and confidence of our users. This Privacy Policy governs the processing, storage, collection, and use of personal data, academic data, and device identifiers when you interact with our educational tools, mobile applications, API layers, and web-based platforms. By utilizing our services, you explicitly consent to the data activities described below.
        </p>

        <h2 className="font-sans text-2xl font-bold mt-12 mb-6 tracking-tight text-zinc-950">1. Information We Collect</h2>
        <p>
          We gather several categories of information to ensure a reliable and personalized learning experience. This information includes:
        </p>
        <ul className="list-disc pl-6 space-y-2 font-sans text-sm text-zinc-800">
          <li><strong>Account Registration Data:</strong> Email addresses, user-provided names, and authentication details necessary to authenticate and protect user identity.</li>
          <li><strong>Academic Interaction Logs:</strong> Content of queries, document uploads, and study prompts submitted to our modules to facilitate coordination and assistance.</li>
          <li><strong>Technical Metadata:</strong> IP addresses, browser specifications, operating system designations, and activity logs to optimize system layout and detect potential violations.</li>
          <li><strong>Usage Analytics:</strong> Tracking markers that analyze screen duration, feature preference, and interactive paths to inform pedagogical optimizations.</li>
        </ul>

        <h2 className="font-sans text-2xl font-bold mt-12 mb-6 tracking-tight text-zinc-950">2. How We Use Your Data</h2>
        <p>
          GeneralLanguage processes the collected information in strict compliance with legal structures and privacy norms. Specifically, we use your data to:
        </p>
        <p>
          Provide, maintain, and upgrade our service architecture; analyze usage trends to improve pedagogical accuracy; construct state-of-the-art protections against academic integrity violations; and safeguard user communications. Under no circumstances do we authorize the sale, rent, or commercial transfer of your personal academic records to third-party marketing entities or advertising firms.
        </p>

        <h2 className="font-sans text-2xl font-bold mt-12 mb-6 tracking-tight text-zinc-950">3. Data Sharing and Third-Party API Proxying</h2>
        <p>
          To deliver advanced coordination tools and secure language models, GeneralLanguage utilizes server-side API proxies. When queries or files are evaluated, they may be processed through our cloud-hosted instances or trusted partners. 
        </p>
        <p>
          All such transfers are executed via encrypted channels, and any sensitive user metadata is stripped prior to processing to prevent model exposures. We cooperate with law enforcement and regulatory agencies only when legally mandated by a valid subpoena, court order, or official compliance program.
        </p>

        <h2 className="font-sans text-2xl font-bold mt-12 mb-6 tracking-tight text-zinc-950">4. Retention and Storage</h2>
        <p>
          We retain your personal data and educational logs only for as long as is necessary to furnish our services or fulfill essential compliance audits. Users may request the purging or complete anonymization of their historical account activity, which is executed securely across all production databases in accordance with structural protocols. Backup systems may retain historical records for a brief transitional period to prevent catastrophic server errors.
        </p>

        <h2 className="font-sans text-2xl font-bold mt-12 mb-6 tracking-tight text-zinc-950">5. Cybersecurity and Integrity Measures</h2>
        <p>
          Keeping your data safe is one of our utmost concerns. GeneralLanguage implements industry-standard technical, organizational, and physical protective barriers. These safeguard against accidental loss, unauthorized electronic access, modification, or disclosure of raw user information. 
        </p>
        <p>
          However, no security layout is absolutely impregnable, and users share the responsibility of securing their personal account keys and choosing complex access phrases.
        </p>

        <h2 className="font-sans text-2xl font-bold mt-12 mb-6 tracking-tight text-zinc-950">6. Regional Regulations and International Standard Compliance</h2>
        <p>
          GeneralLanguage operates on a global scale and actively targets alignment with robust privacy frameworks including the <strong>Data Privacy Act of 2012 (Republic Act No. 10173)</strong> of the Philippines, as well as the General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), and academic-focused student records protection laws. 
        </p>
        <p>
          Depending on your regional legal jurisdiction, you may hold distinct privileges regarding the inspection, rectification, restriction, or total removal of your accumulated data records. Contact our legal representatives to register formal data requests.
        </p>

        <h2 className="font-sans text-2xl font-bold mt-12 mb-6 tracking-tight text-zinc-950">7. Cookies and Tracking Mechanisms</h2>
        <p>
          We may deploy subtle cookies and modern client-side session states to remember custom preferences, maintain reliable authentication status, and gather structural feedback about the performance speed of different page modules. You can configure your browser to reject all cookie devices, though this might hinder the responsiveness of the GeneralLanguage interface.
        </p>

        <h2 className="font-sans text-2xl font-bold mt-12 mb-6 tracking-tight text-zinc-950">8. Changes to this Policy</h2>
        <p>
          We reserve the right to revise this Privacy Policy at our discretion to match operational changes, security protocols, or updated regulatory guidelines. We will notify our userbase of key policy adjustments by posting notice banners or directly updating this web-based resource. Your continuing engagement with the platform signifies immediate agreement to comply with the altered guidelines.
        </p>

        <h2 className="font-sans text-2xl font-bold mt-12 mb-6 tracking-tight text-zinc-950">9. Contact and Data Representative Details</h2>
        <p>
          If you have persistent questions, detailed standard inquiries, suggestions, or complaints concerning our privacy methods, or if you would like to exert your user rights, please communicate directly with our dedicated data coordination representatives through our official interface channels.
        </p>
      </motion.div>
    </div>
  );
}
