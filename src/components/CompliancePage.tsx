import React, { useEffect } from 'react';
import { motion } from 'motion/react';

export function CompliancePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF6EE] pt-32 pb-24 px-4 sm:px-6 lg:px-8 font-sans selection:bg-zinc-950 selection:text-white">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto flex flex-col items-center text-center"
      >
        <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[800] tracking-tight text-zinc-955 leading-[1.05] max-w-[1000px] mb-16">
          Compliance & Standards Guidelines
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[700px] mx-auto font-serif text-[1.125rem] md:text-[1.25rem] text-zinc-900 leading-[1.7] space-y-8"
      >
        <p>
          The Compliance Group at Cosmiwise enforces strict standards of trust, digital privacy, and pedagogic design. We ensure that our educational platforms and tools remain a secure, engaging, and highly respectable environment for students, educators, and schools around the world.
        </p>

        <h2 className="font-sans text-2xl font-bold mt-12 mb-6 tracking-tight text-zinc-950">1. Academic Integrity Standards</h2>
        <p>
          We align our intellectual content directly with globally recognized educational frameworks. Our models are built to turn dry formulas into lively, intuitive metaphors that cultivate natural understanding and deep visual comprehension rather than mechanical memorization.
        </p>
        <p>
          We strictly evaluate lesson paths against standard academic matrices to guarantee conceptual accuracy. Every tutorial and exercise is peer-reviewed by our educational council to ensure high scholastic quality and proper cognitive alignment.
        </p>

        <h2 className="font-sans text-2xl font-bold mt-12 mb-6 tracking-tight text-zinc-950">2. Student Privacy and Information Security (DPA, COPPA & FERPA)</h2>
        <p>
          We hold that a student’s personal data and learning history are private and sovereign. We adhere to the <strong>Data Privacy Act of 2012</strong> of the Philippines, as well as the Children's Online Privacy Protection Act (COPPA), disabling location tracking and geo-metadata collection for any user under thirteen years of age.
        </p>
        <p>
          Our platform fully conforms to Federal Educational Rights and Privacy Act (FERPA) regulations. Progress records and metrics can only be viewed in secure, private dashboards by authorized parents, guardians, and educational representatives. We provide an absolute zero-ads guarantee inside our visual environments.
        </p>

        <h2 className="font-sans text-2xl font-bold mt-12 mb-6 tracking-tight text-zinc-950">3. Safe AI and Semantic Safeguards</h2>
        <p>
          Cosmiwise operates with rigorous handrails to keep learning interfaces focused and wholesome. Our chat interactions are filtered in real-time, blocking non-curricular or inappropriate topics to keep students completely safe and productive.
        </p>
        <p>
          We actively restrict our models from simply printing out complete answers or doing assignments on the student's behalf. Our software is designed to prompt students with incremental, healthy clues, actively supporting the critical process of intellectual struggle and independent reasoning.
        </p>

        <h2 className="font-sans text-2xl font-bold mt-12 mb-6 tracking-tight text-zinc-950">4. Platform Dignity and Inclusive Accessibility</h2>
        <p>
          We align our layout interfaces with WCAG 2.2 AAA standards. We strictly adjust font contrast levels, letter spacing, and page weights to prevent mental or visual exhaustion and ensure full support for diverse screen readers and assistive devices.
        </p>
        <p>
          In accordance with global data protection laws (including GDPR), we champion complete data sovereignty. A student's representative can view, export, or completely delete progress profiles instantly with single-click tools. We permanently outlaw deceptive gamification patterns or stress-inducing timing limits to protect mental health.
        </p>

        <h2 className="font-sans text-2xl font-bold mt-12 mb-6 tracking-tight text-zinc-950">5. Continuous Human Oversight</h2>
        <p>
          Our interdisciplinary compliance team monitors active platforms and updates safety frameworks daily. We collaborate continuously with schools, visual designers, and cognitive scientists to adjust our environments as technology and classrooms evolve.
        </p>
        <p>
          For specific coordinate inquiries regarding regional board compliance, standard school integrations, or detailed privacy audits, please contact our team directly at <strong>compliance-standards@cosmi.edu</strong>.
        </p>
      </motion.div>
    </div>
  );
}
