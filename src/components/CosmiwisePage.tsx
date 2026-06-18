import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function CosmiwisePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF6EE] pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24"
        >
          <div className="flex items-center justify-center gap-4 md:gap-6 mb-8">
            <img src="/cosmi.png" alt="Cosmiwise Logo" className="w-20 h-20 md:w-28 md:h-28 object-contain" />
            <h1 className="font-sans text-5xl md:text-7xl font-bold tracking-tight text-zinc-950">
              Cosmiwise
            </h1>
          </div>
          <p className="font-sans text-xl md:text-2xl text-zinc-800 leading-relaxed max-w-2xl mx-auto">
            A dedicated research application designed to accelerate academic discovery, synthesize complex papers, and empower deep scholarly investigation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[700px] mx-auto font-sans text-[1.125rem] md:text-[1.25rem] text-zinc-900 leading-[1.7] space-y-8 mt-16"
        >
          <p>
            Cosmiwise is an advanced research associate that fundamentally shifts how academic discovery is performed. It is built to seamlessly scan the internet for a vast range of materials—scientific papers, journals, datasets, and preprints—giving you unprecedented access to the world's scholarly literature at incredible speed. Our mission is to accelerate human progress by breaking down the barriers to accessing and understanding complex knowledge. Where a single researcher might spend a lifetime reading a fraction of a percent of all published papers in their field, Cosmiwise can ingest, synthesize, and interconnect millions of documents in a matter of hours.
          </p>
          <p>
            The sheer volume of new academic publishing is impossible for any individual human to keep up with. Every day, thousands of new preprints hit servers like arXiv, bioRxiv, and SSRN. The hidden gems of insight are often buried deep within dense, interdisciplinary texts that remain siloed from the very researchers who need them most. Cosmiwise bridges this divide. It does not simply retrieve documents based on keyword matching; it comprehends the underlying semantic structure of the research. It understands methodologies, parses statistical significance, recognizes experimental constraints, and identifies when two seemingly disparate papers from completely different fields are actually describing the exact same underlying phenomenon.
          </p>

          <h2 className="font-sans text-2xl font-bold mt-12 mb-6 tracking-tight text-zinc-950">Deep Document Synthesis</h2>
          <p>
            You can upload or direct Cosmiwise to scan across massive corpuses of research. It instantly organizes, reads, and cross-references them, identifying the critical methodologies and extracting hidden connections that would take human researchers weeks to uncover.
          </p>
          <p>
            Imagine uploading an entire bibliography of three hundred PDFs concerning novel protein folding techniques in bioinformatics. Cosmiwise will not only read all of them—it will synthesize a unified understanding of the state of the art. It will chart how specific computational techniques have evolved over time, cross-referencing which labs cited which methodologies, and critically evaluating the consensus and controversies among the leading figures in the field. This isn't just summarization; it's synthesis at the highest academic level. It can detect when a paper's conclusion relies on an outdated dataset or when a novel methodology proposed in a recent paper could solve a lingering problem documented in literature from a decade ago.
          </p>
          <p>
            Furthermore, Cosmiwise can translate complex jargon. If you are a materials scientist trying to understand a paper written by a quantum physicist, Cosmiwise can bridge the disciplinary gap. It translates the mathematical notation and specific phenomenological descriptions into terms that align with your specific expertise, enabling true interdisciplinary collaboration and accelerating the cross-pollination of ideas that drives real innovation.
          </p>

          <h2 className="font-sans text-2xl font-bold mt-12 mb-6 tracking-tight text-zinc-950">Automated Literature Reviews</h2>
          <p>
            Stop spending months trying to understand the state-of-the-art in a particular field. Cosmiwise can generate a comprehensive literature review in minutes, highlighting key perspectives, dominant methodologies, and gaps in existing research to point you directly toward novel investigation.
          </p>
          <p>
            The traditional literature review is a grueling rite of passage for every graduate student and a persistent bottleneck for seasoned principal investigators. With Cosmiwise, this process is automated and elevated. You specify the parameters of your inquiry—for example, "Summarize the evolution of solid-state battery electrolytes between 2018 and 2026, focusing specifically on dendrite mitigation strategies." Cosmiwise will traverse its vast indexed knowledge base, pull the most relevant peer-reviewed literature, and assemble a coherent, chronological narrative of the field.
          </p>
          <p>
            These reviews are fully customizable. You can request that Cosmiwise focus heavily on experimental methodologies, or conversely, ask it to focus primarily on the theoretical models proposed. It will highlight the controversies—identifying where leading papers disagree—and point out the white space: the areas of the specified domain that have received the least empirical attention, thus signaling ripe opportunities for securing grants and conducting original research. You're no longer starting from a blank page; you're starting from a comprehensive, rigorously vetted landscape analysis.
          </p>

          <h2 className="font-sans text-2xl font-bold mt-12 mb-6 tracking-tight text-zinc-950">Verifiable Citations and Data Extraction</h2>
          <p>
            We know that trust in academic contexts is everything. Every claim and synthesis generated by Cosmiwise includes direct, verifiable citations linking precisely to the source text. It can also effortlessly extract statistical tables, experimental parameters, and unstructured data directly into clean, usable formats.
          </p>
          <p>
            The specter of AI "hallucination" has historically made researchers wary of using large language models for critical academic work. Cosmiwise solves this through a rigorous, transparent grounding architecture. When Cosmiwise makes a statement about a paper's findings, it provides a hyperlinked citation that takes you directly to the exact paragraph, sentence, and graph in the source PDF from which it derived that conclusion. This "show your work" functionality ensures that the human researcher maintains ultimate scholarly oversight and can independently verify every synthesis.
          </p>
          <p>
            Beyond text synthesis, Cosmiwise excels at unstructured data extraction. Often, the most valuable data in a paper is trapped in a poorly formatted table or buried in a dense supplementary materials appendix. Cosmiwise can parse thousands of these documents, identify tables containing relevant experimental parameters (e.g., reaction temperatures, yield percentages, tensile strength measurements), and extract them into a unified, cleanly formatted CSV or Excel file. What previously required an army of undergraduate research assistants entering data by hand can now be accomplished in seconds, drastically accelerating the pace of meta-analyses and empirical reviews.
          </p>
          
          <h2 className="font-sans text-2xl font-bold mt-12 mb-6 tracking-tight text-zinc-950">Unlocking the Future of Discovery</h2>
          <p>
            By handling the immense cognitive load of literature review, citation tracking, data extraction, and cross-disciplinary translation, Cosmiwise frees the human researcher to do what only human researchers can do: hypothesize, intuitively leap, and design novel experiments. It is not a replacement for the human mind, but rather an unprecedented amplifier for it. Welcome to the new era of academic discovery.
          </p>

        </motion.div>
      </div>
    </div>
  );
}
