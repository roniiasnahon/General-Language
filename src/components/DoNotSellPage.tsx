import React, { useEffect } from 'react';
import { motion } from 'motion/react';

export function DoNotSellPage() {
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
          Do Not Sell or Share My Personal Information
        </h1>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[700px] mx-auto font-serif text-[1.125rem] md:text-[1.25rem] text-zinc-900 leading-[1.7] space-y-8"
      >
        <p>
          At General Language, we hold your privacy in the highest regard. We are fundamentally committed to transparency regarding how your personal information is collected, used, shared, and, where applicable under specific jurisdictional laws, "sold." This comprehensive disclosure is designed to provide you with all necessary context and instructions to exercise your rights under comprehensive state privacy laws, including but not limited to the California Consumer Privacy Act (CCPA), the California Privacy Rights Act (CPRA), the Virginia Consumer Data Protection Act (VCDPA), the Colorado Privacy Act (CPA), the Connecticut Data Privacy Act (CTDPA), and the Utah Consumer Privacy Act (UCPA).
        </p>

        <h2 className="font-sans text-2xl font-bold mt-12 mb-6 tracking-tight text-zinc-950">1. Understanding the Definition of "Sale" and "Sharing"</h2>
        <p>
          It is crucial to understand that General Language does not "sell" your personal information in the traditional sense of exchanging it for direct monetary compensation. We do not package your data and broker it to third-party data merchants. However, modern privacy legislation, particularly in California, defines a "sale" and "sharing" extremely broadly.
        </p>
        <p>
          Under these frameworks, a "sale" can include making personal information available to third-party ad networks, social media companies, or analytics providers in exchange for services, algorithmic insights, or other valuable considerations, even if no money changes hands. "Sharing" typically refers specifically to disclosing data for cross-context behavioral advertising purposes. Because we utilize some of these standard web technologies to understand our user base and deliver relevant content, we provide this comprehensive opt-out mechanism.
        </p>

        <h2 className="font-sans text-2xl font-bold mt-12 mb-6 tracking-tight text-zinc-950">2. Categories of Personal Information Involved</h2>
        <p>
          When interacting with our digital platforms, certain categories of personal information may be collected and potentially shared within the broad legal definitions mentioned above. These categories primarily encompass:
        </p>
        <ul className="list-disc pl-6 space-y-3 font-sans text-base text-zinc-800">
          <li><strong>Identifiers:</strong> Such as unique cookie identifiers, internet protocol (IP) addresses, device identifiers, and mobile advertising IDs.</li>
          <li><strong>Internet or Network Activity:</strong> Browsing history, search history, interaction data with our websites and applications, referring URLs, and session duration.</li>
          <li><strong>Inferred Data:</strong> Profiles created based on the aggregation of your viewing habits and interactions with our educational content, reflecting preferences and characteristics.</li>
          <li><strong>Geolocation Data:</strong> Broad geographic location derived from your IP address, strictly down to the city or zip code level, rather than precise latitude/longitude coordinates.</li>
        </ul>

        <h2 className="font-sans text-2xl font-bold mt-12 mb-6 tracking-tight text-zinc-950">3. Purpose of Processing and Sharing</h2>
        <p>
          The primary reason we allow select third-party partners to collect this information from our platforms is to enhance the functionality and reach of our educational tools. Specifically, this data aids in:
        </p>
        <ul className="list-disc pl-6 space-y-3 font-sans text-base text-zinc-800">
          <li>Delivering properly targeted contextual content that aligns with the user's educational journey.</li>
          <li>Analyzing web traffic and user behavior to troubleshoot usability issues and improve our interface infrastructure.</li>
          <li>Measuring the efficacy of our outreach programs and understanding which demographics benefit most from our offerings.</li>
          <li>Detecting, preventing, and mitigating fraudulent activity, bot traffic, and security incidents.</li>
        </ul>

        <h2 className="font-sans text-2xl font-bold mt-12 mb-6 tracking-tight text-zinc-950">4. Your Right to Opt-Out</h2>
        <p>
          If you are a resident of a jurisdiction that grants the right to opt-out of the sale or sharing of personal information for cross-context behavioral advertising, you may exercise that right at any time. By invoking this right, we will instruct our downstream partners and integrated third-party systems to cease using your personal information for these defined purposes.
        </p>
        <p>
          Please note that exercising your right to opt-out will not prevent you from seeing advertisements or content altogether. Instead, the content you encounter will be contextual (based on the current page you are viewing) rather than targeted based on your historical behavior across different websites.
        </p>

        <h2 className="font-sans text-2xl font-bold mt-12 mb-6 tracking-tight text-zinc-950">5. How to Exercise Your Rights</h2>
        <p>
          We provide multiple avenues for you to exercise your privacy rights, ensuring accessibility and ease of use:
        </p>
        <ul className="list-disc pl-6 space-y-3 font-sans text-base text-zinc-800">
          <li><strong>Browser-Based Global Privacy Control (GPC):</strong> We fully support the Global Privacy Control (GPC) signal. If you utilize a browser or browser extension that transmits a recognized GPC signal, our systems are configured to automatically detect this signal and inherently process it as a valid request to opt-out of the "sale" and "sharing" of your data for the specific browser and device you are using.</li>
          <li><strong>Direct Request via Email:</strong> You may submit a formal request by sending an email to our dedicated compliance team at privacy@generallanguage.com. Please include "Opt-Out Request" in the subject line to ensure routing priority.</li>
          <li><strong>Account Settings:</strong> If you are a registered user of our platform, you will find a dedicated "Privacy Preferences" section within your account dashboard where you can toggle your sharing permissions dynamically.</li>
        </ul>

        <h2 className="font-sans text-2xl font-bold mt-12 mb-6 tracking-tight text-zinc-950">6. Authorized Agents</h2>
        <p>
          Depending on your jurisdiction, you may have the right to designate an authorized agent to submit an opt-out request on your behalf. If you choose to use an authorized agent, we require that you provide the agent with written permission to do so. We may also require you to verify your own identity directly with us before we can definitively process the request submitted by the agent, to prevent fraudulent privacy alterations.
        </p>

        <h2 className="font-sans text-2xl font-bold mt-12 mb-6 tracking-tight text-zinc-950">7. Non-Discrimination Policy</h2>
        <p>
          General Language maintains a strict policy of non-discrimination. Exercising your privacy rights, including the right to opt-out of the sale or sharing of your personal information, will never result in you being denied goods or services, being charged different prices or rates, or receiving a different quality of service. Your educational experience on our platform remains paramount, regardless of your privacy configuration.
        </p>

        <h2 className="font-sans text-2xl font-bold mt-12 mb-6 tracking-tight text-zinc-950">8. Continuous Compliance and Updates</h2>
        <p>
          The landscape of digital privacy law is rapidly evolving. We continually monitor regulatory developments across all operating jurisdictions. Consequently, this detailed disclosure may be updated periodically to reflect changes in our data practices, new legal requirements, or advancements in our technological infrastructure. The "Effective Date" at the top of this document indicates the most recent comprehensive revision.
        </p>

        <div className="mt-16 p-8 bg-[#f4ebd8] rounded-2xl border border-zinc-200/50 font-sans text-base text-zinc-800">
          <h3 className="font-bold text-lg mb-3">Device-Specific Limitations</h3>
          <p className="mb-0">
            Please be advised that opt-out preferences managed via browser cookies or GPC signals are inherently tied to the specific browser and device from which the request or signal originates. If you utilize multiple devices (e.g., a smartphone, a tablet, and a desktop computer) or multiple browsers on a single device, you will need to ensure your preferences are established, or the GPC signal is active, across all environments. If you clear your browser cache and delete your cookies, your saved preferences will be erased, and you will need to submit a new opt-out request.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

