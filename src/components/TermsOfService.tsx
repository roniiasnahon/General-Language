import React, { useEffect } from 'react';
import { motion } from 'motion/react';

export const TermsOfService: React.FC = () => {
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
          Terms of Service and User Agreements
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[700px] mx-auto font-serif text-[1.125rem] md:text-[1.25rem] text-zinc-900 leading-[1.7] space-y-8"
      >
        <p>
          These Terms of Service govern your access to and use of GeneralLanguage's educational tools and student coordination services, whether accessed directly through our platform, via any connected application, or integrated services. By continuing to use our products, you explicitly accept these terms in full. <strong>Access to certain specialized models or premium features may be subject to additional conditions.</strong>
        </p>

        <h2 className="font-sans text-2xl font-bold mt-12 mb-6 tracking-tight text-zinc-950">1. Acceptance of Terms</h2>
        <p>
          By accessing or using the services provided by GeneralLanguage, including but not limited to our web applications, mobile applications, APIs, and associated software, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services. These terms apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/or contributors of content.
        </p>
        <p>
          Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service. Any new features or tools which are added to the current store shall also be subject to the Terms of Service.
        </p>

        <h2 className="font-sans text-2xl font-bold mt-12 mb-6 tracking-tight text-zinc-950">2. Educational Autonomy and Integrity</h2>
        <p>
          We created GeneralLanguage to empower students and researchers by accelerating their day-to-day coordination. As a platform used by a global academic userbase, we strictly prohibit utilizing our systems for academic dishonesty, automated cheating schemas, or any method designed to obfuscate original understanding. 
        </p>
        <p>
          Users must retain full responsibility for the academic work they submit. GeneralLanguage acts as a supplementary assistant, a tutor, and a research coordination entity, not as a proxy for the student's own intellectual labor. Misrepresentation of AI-generated content or coordination outputs as wholly original human work without appropriate citation violates the core principles of our community guidelines and may result in immediate suspension of account privileges. We encourage academic institutions to collaborate with us in formulating fair-use guidelines that align with modern pedagogical standards.
        </p>

        <h2 className="font-sans text-2xl font-bold mt-12 mb-6 tracking-tight text-zinc-950">3. User Accounts, Security, and Eligibility</h2>
        <p>
          In order to utilize certain features of the service, you will be required to create an account. You must provide accurate, current, and complete information and keep your account information updated. You are solely responsible for the activity that occurs on your account, and you must keep your account password secure. We strongly encourage the use of strong passwords and multi-factor authentication where available.
        </p>
        <p>
          You must notify GeneralLanguage immediately of any breach of security or unauthorized use of your account. Although GeneralLanguage will not be liable for your losses caused by any unauthorized use of your account, you may be liable for the losses of GeneralLanguage or others due to such unauthorized use. By using this Service, you represent and warrant that you are at least the age of majority in your state or province of residence, or that you are the age of majority and have given us your consent to allow any of your minor dependents to use this site.
        </p>

        <h2 className="font-sans text-2xl font-bold mt-12 mb-6 tracking-tight text-zinc-950">4. Privacy, Data Usage, and Information Security</h2>
        <p>
          Your privacy is critically important to us. Our Privacy Policy explains how we collect, use, and share your personal information. By using the services, you agree that GeneralLanguage can use such data in accordance with our Privacy Policy. This includes the processing of queries, documents, and interactions with our models to improve the safety, efficacy, and educational value of our systems.
        </p>
        <p>
          We do not sell your personal data to third-party advertisers. Educational data, including interactions with our learning models, may be anonymized and aggregated for research purposes aimed at improving pedagogical outcomes and the structural understanding of large language models within educational contexts. GeneralLanguage employs industry-standard administrative, physical, and technical measures designed to safeguard your information from unauthorized access, loss, or disclosure.
        </p>

        <h2 className="font-sans text-2xl font-bold mt-12 mb-6 tracking-tight text-zinc-950">5. Service Modifications, Limits, and Availability</h2>
        <p>
          From time to time, we may suspend access to particular features in accordance with regional laws, global compliance mandates, or internal safety audits. In such instances, we prioritize providing clear alternatives and minimal disruption to your broader educational workflow.
        </p>
        <p>
          We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time. We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service. We may also impose general limits on our systems or restrict access to features without prior warning to ensure service stability for all users.
        </p>

        <h2 className="font-sans text-2xl font-bold mt-12 mb-6 tracking-tight text-zinc-950">6. Acceptable Use and Prohibited Conduct</h2>
        <p>
          In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the site or its content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability.
        </p>
        <p>
          Additionally, you may not: (f) submit false or misleading information; (g) upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Service or of any related website, other websites, or the Internet; (h) collect or track the personal information of others; (i) spam, phish, pharm, pretext, spider, crawl, or scrape; (j) use the service for any obscene or immoral purpose; or (k) interfere with or circumvent the security features of the Service or any related website, other websites, or the Internet. We reserve the right to terminate your use of the Service or any related website for violating any of the prohibited uses.
        </p>

        <h2 className="font-sans text-2xl font-bold mt-12 mb-6 tracking-tight text-zinc-950">7. Proprietary Rights and License</h2>
        <p>
          The Service, including its "look and feel" (e.g., text, graphics, images, logos, and button icons), editorial styling, software, algorithms, trademarks, and all intellectual property rights associated therein, are and will remain the exclusive property of GeneralLanguage and its licensors. 
        </p>
        <p>
          Subject to your strict compliance with these Terms, GeneralLanguage grants you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to access and build upon the platform’s interface solely for educational, personal, and non-commercial coordination purposes. Any unauthorized reproduction, reverse engineering, redistribution, or modification of the software is strictly prohibited by law.
        </p>

        <h2 className="font-sans text-2xl font-bold mt-12 mb-6 tracking-tight text-zinc-950">8. Disclaimer of Warranties</h2>
        <p>
          We do not guarantee, represent or warrant that your use of our service will be uninterrupted, timely, secure or error-free. We do not warrant that the results that may be obtained from the use of the service will be accurate or reliable. You agree that from time to time we may remove the service for indefinite periods of time or cancel the service at any time, without notice to you.
        </p>
        <p>
          You expressly agree that your use of, or inability to use, the service is at your sole risk. The service and all products and services delivered to you through the service are (except as expressly stated by us) provided 'as is' and 'as available' for your use, without any representation, warranties or conditions of any kind, either express or implied, including all implied warranties or conditions of merchantability, merchantable quality, fitness for a particular purpose, durability, title, and non-infringement.
        </p>

        <h2 className="font-sans text-2xl font-bold mt-12 mb-6 tracking-tight text-zinc-950">9. Limitation of Liability</h2>
        <p>
          In no event shall GeneralLanguage, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage.
        </p>
        <p>
          Because some states or jurisdictions do not allow the exclusion or the limitation of liability for consequential or incidental damages, in such states or jurisdictions, our liability shall be limited to the maximum extent permitted by law.
        </p>

        <h2 className="font-sans text-2xl font-bold mt-12 mb-6 tracking-tight text-zinc-950">10. Indemnification</h2>
        <p>
          You agree to indemnify, defend and hold harmless GeneralLanguage and our parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns and employees, harmless from any claim or demand, including reasonable attorneys' fees, made by any third-party due to or arising out of your breach of these Terms of Service or the documents they incorporate by reference, or your violation of any law or the rights of a third-party.
        </p>

        <h2 className="font-sans text-2xl font-bold mt-12 mb-6 tracking-tight text-zinc-950">11. Severability and Complete Agreement</h2>
        <p>
          In the event that any provision of these Terms of Service is determined to be unlawful, void or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed to be severed from these Terms of Service, such determination shall not affect the validity and enforceability of any other remaining provisions.
        </p>
        <p>
          The failure of us to exercise or enforce any right or provision of these Terms of Service shall not constitute a waiver of such right or provision. These Terms of Service and any policies or operating rules posted by us on this site or in respect to the Service constitutes the entire agreement and understanding between you and us and govern your use of the Service, superseding any prior or contemporaneous agreements, communications and proposals, whether oral or written, between you and us.
        </p>

        <h2 className="font-sans text-2xl font-bold mt-12 mb-6 tracking-tight text-zinc-950">12. Governing Law and Arbitration</h2>
        <p>
          These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of the Republic of the Philippines, without regard to principles of conflicts of law.
        </p>
        <p>
          Any dispute, controversy, or claim arising out of or relating to this contract, including its formation, interpretation, performance, breach, termination, or invalidity, shall be settled by binding arbitration in accordance with standard rules of arbitration. The place of arbitration shall be designated in accordance with our corporate location, and the proceedings shall be conducted in the English language.
        </p>

        <h2 className="font-sans text-2xl font-bold mt-12 mb-6 tracking-tight text-zinc-950">13. Contact Information and Revisions</h2>
        <p>
          We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website. It is your responsibility to check our website periodically for changes. Your continued use of or access to our website or the Service following the posting of any changes to these Terms of Service constitutes acceptance of those changes.
        </p>
        <p>
          Questions about the Terms of Service, compliance inquiries, or reports of prohibited conduct should be directed to our legal department through our digital platform channels.
        </p>
      </motion.div>
    </div>
  );
}
