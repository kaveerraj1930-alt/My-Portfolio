import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import BackgroundScene from '../components/BackgroundScene';

export default function Experience() {
  const sectionRef = useRef(null);

  const timeline = [
    {
      company: "Sciens Logistics LLC",
      role: "Accounting Executive",
      duration: "Oct 2025 - Present",
      bullets: [
        "Own end-to-end receivables and invoicing for the company's largest client account, United Airlines — applying metrics ownership and stakeholder accountability analogous to managing a key product feature area.",
        "Identify patterns in recurring billing discrepancies and resolve them at the root cause rather than case-by-case, protecting cash flow via systematic problem-diagnosis."
      ]
    },
    {
      company: "Sciens Logistics LLC",
      role: "Operations Executive",
      duration: "Feb 2024 - Oct 2025",
      bullets: [
        "Owned track-and-trace end-to-end for U.S. truckload shipments, single-handedly managing the full lifecycle of a load in the internal system from creation to delivery.",
        "Served as the primary coordination point between shippers and consignees, translating problems from both sides into fast resolutions (acting as the cross-functional bridge between users, design, and engineering)."
      ]
    },
    {
      company: "Adroit Financial Ltd.",
      role: "Operations Executive",
      duration: "Oct 2023 - Feb 2024",
      bullets: [
        "Managed backend account creation and administration for client trading IDs at a financial services firm, maintaining data accuracy and integrity across the platform to ensure high-fidelity operational scaling."
      ]
    }
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center py-20 overflow-hidden"
    >
      {/* Industrial Gears/Logistics Background */}
      <BackgroundScene type="experience" containerRef={sectionRef} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          className="mb-16 text-center md:text-left"
        >
          <span className="font-sans font-semibold text-xs tracking-widest text-sunset-coral uppercase block mb-3">
            Career Journey
          </span>
          <h2 className="font-display font-black text-3xl md:text-5xl uppercase tracking-wider text-white">
            MY <span className="gradient-text">EXPERIENCE</span>
          </h2>
        </motion.div>

        {/* Timeline Path */}
        <div className="relative max-w-4xl border-l-2 border-white/10 ml-4 md:ml-6 pl-8 md:pl-10 space-y-12">
          {timeline.map((job, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: "easeOut" }}
              className="relative group"
            >
              {/* Floating Timeline Bullet node */}
              <div className="absolute -left-[41px] md:-left-[49px] top-1.5 w-6 h-6 rounded-full bg-dark-base border-2 border-sunset-coral group-hover:bg-sunset-coral transition-colors duration-300 shadow-[0_0_10px_rgba(244,63,94,0.3)]" />
              
              <div className="glassmorphism p-6 md:p-8 rounded-xl border border-white/5 shadow-xl hover:border-sunset-purple/30 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="font-display font-bold text-xl md:text-2xl text-white group-hover:text-sunset-coral transition-colors duration-300">
                      {job.company}
                    </h3>
                    <p className="font-sans font-semibold text-xs md:text-sm text-sunset-gold tracking-wider uppercase mt-1">
                      {job.role}
                    </p>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 bg-white/5 px-3 py-1 rounded-full mt-2 md:mt-0 self-start md:self-auto">
                    {job.duration}
                  </span>
                </div>

                <ul className="space-y-3 text-slate-300 text-xs md:text-sm leading-relaxed list-disc list-inside">
                  {job.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="hover:text-white transition-colors duration-200">
                      <span className="font-sans">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
