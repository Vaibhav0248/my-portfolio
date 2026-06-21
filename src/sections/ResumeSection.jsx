import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Terminal, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const ResumeSection = () => {
  const { resumeUrl } = portfolioData.personalDetails;

  return (
    <section id="resume" className="py-20 bg-secondary relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-12 text-center">
          <div className="font-mono text-cyanAccent text-sm mb-2 font-semibold flex items-center gap-2">
            <span>&lt;section id="resume"&gt;</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-textWhite">
            Resume / CV
          </h2>
          <div className="w-12 h-1 bg-accent mt-3 rounded-full" />
        </div>

        {/* Content Layout */}
        <div className="max-w-3xl mx-auto">
          <motion.div 
            className="bg-card p-8 md:p-12 rounded-3xl border border-accent/10 hover:border-accent/20 hover:shadow-2xl hover:shadow-accent/5 transition-all duration-300 text-center flex flex-col items-center space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            {/* Elegant Icon Header */}
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent border border-accent/20">
              <FileText className="w-8 h-8" />
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-textWhite">
                Recruiter-Friendly Resume Format
              </h3>
              <p className="text-textGray leading-relaxed text-sm md:text-base max-w-xl mx-auto">
                Need a copy of my curriculum vitae for internal forwarding or screening databases? Download the formal PDF version containing my academic records, verified CGPA details, professional internship contributions, and detailed project frameworks.
              </p>
            </div>

            {/* Checklist */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center font-mono text-xs text-textGray">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400 shrink-0" />
                <span>One-click PDF download</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400 shrink-0" />
                <span>ATS-friendly schema</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400 shrink-0" />
                <span>Up-to-date details</span>
              </div>
            </div>

            {/* Large Download Button */}
            <div className="pt-2">
              <a
                href={resumeUrl}
                download="VAIBHAV_JADHAV_CV.pdf"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-accent text-white font-bold hover:bg-accent/80 transition-all shadow-lg shadow-accent/25 hover:shadow-accent/40 group text-base"
              >
                <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                <span>DOWNLOAD FULL PDF RESUME</span>
              </a>
            </div>

            {/* Terminal Snip */}
            <div className="w-full max-w-lg bg-secondary/80 rounded-xl p-4 border border-accent/5 font-mono text-xs text-textGray/60 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap scrollbar-none">
                <Terminal className="w-4 h-4 text-cyanAccent shrink-0" />
                <span className="text-left">wget {window.location.origin || 'http://localhost:5173'}{resumeUrl}</span>
              </div>
              <span className="text-[10px] text-accent font-bold uppercase shrink-0">PDF</span>
            </div>

          </motion.div>
        </div>

        <div className="flex justify-center font-mono text-cyanAccent text-sm mt-8">
          <span>&lt;/section&gt;</span>
        </div>

      </div>
    </section>
  );
};

export default ResumeSection;
