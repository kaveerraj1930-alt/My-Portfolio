import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import BackgroundScene from '../components/BackgroundScene';

export default function Skills() {
  const sectionRef = useRef(null);

  const categories = [
    {
      title: "Product Management",
      skills: [
        "Product Framing & Analysis",
        "Product Teardowns",
        "User Segmentation",
        "Product Roadmapping",
        "KPI Definition & Implementation",
        "Prioritization (RICE)",
        "A/B Testing",
        "User Research (Surveys & Interviews)"
      ],
      desc: "Structured product thinking, framing user problems, and executing core product life-cycle stages.",
      gradient: "from-sunset-purple to-sunset-coral"
    },
    {
      title: "Data & Operations",
      skills: [
        "SQL (Data Querying & Cohorts)",
        "Excel (Financial Forecasting)",
        "Google Analytics",
        "Zapier (Workflow Automation)"
      ],
      desc: "Deep analytical background from finance and operations to track metrics, analyze cohorts, and optimize pipelines.",
      gradient: "from-sunset-coral to-sunset-gold"
    },
    {
      title: "Design & Teardowns",
      skills: [
        "Figma (User Flows & Wireframes)",
        "Balsamiq (Mockups & Wireframes)",
        "Canva",
        "Whimsical (Blueprints & Schemas)"
      ],
      desc: "Translating conceptual ideas into user flows, high-fidelity wireframes, and customer journey maps.",
      gradient: "from-sunset-gold to-sunset-purple"
    },
    {
      title: "AI & Vibe Coding",
      skills: [
        "Claude Code",
        "Cursor & Windsurf",
        "Antigravity & Qoder",
        "Hugging Face",
        "Prompt Engineering",
        "Rapid MVP Prototyping"
      ],
      desc: "Leveraging cutting-edge AI coding agents to spin up fully functional applications and test products fast.",
      gradient: "from-sunset-purple to-sunset-gold"
    }
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center py-20 overflow-hidden"
    >
      {/* City Grid Parallax Background */}
      <BackgroundScene type="skills" containerRef={sectionRef} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          className="mb-16 text-center md:text-left"
        >
          <span className="font-sans font-semibold text-xs tracking-widest text-sunset-coral uppercase block mb-3">
            Toolbox &amp; Methods
          </span>
          <h2 className="font-display font-black text-3xl md:text-5xl uppercase tracking-wider text-white">
            SKILLS &amp; <span className="gradient-text">TOOLS</span>
          </h2>
        </motion.div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              whileHover={{ y: -5 }}
              className="glassmorphism p-8 rounded-2xl border border-white/5 shadow-2xl flex flex-col justify-between hover:border-sunset-coral/30 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] transition-all duration-300 relative group overflow-hidden"
            >
              {/* Accent Border */}
              <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${category.gradient} opacity-45 group-hover:opacity-100 transition-opacity`} />
              
              <div>
                <h3 className="font-display font-black text-xl md:text-2xl text-white uppercase tracking-wider mb-3 group-hover:text-sunset-coral transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="font-sans text-xs md:text-sm text-slate-400 leading-relaxed mb-6">
                  {category.desc}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1 text-[11px] font-sans font-medium text-slate-300 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
