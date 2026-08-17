import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import BackgroundScene from '../components/BackgroundScene';

export default function About() {
  const sectionRef = useRef(null);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center py-20 overflow-hidden"
    >
      {/* Waterfall & Laboratory Parallax Background */}
      <BackgroundScene type="about" containerRef={sectionRef} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Glassmorphic Story Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:col-span-7 lg:col-span-6 glassmorphism p-8 md:p-12 rounded-2xl border border-white/10 shadow-2xl"
        >
          <span className="font-sans font-semibold text-xs tracking-widest text-sunset-coral uppercase block mb-3">
            My Path
          </span>
          <h2 className="font-display font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-wider text-white mb-6">
            MY <span className="gradient-text">STORY</span>
          </h2>
          
          <div className="space-y-6 text-slate-300 font-sans text-sm md:text-base leading-relaxed">
            <p>
              I began my professional career in finance and operations, working as an accountant and analyst. At companies like 
              <strong className="text-white"> Sciens Logistics</strong> and <strong className="text-white">Adroit Financial</strong>, 
              I spent my days analyzing databases, forecasting budgets, and optimizing supply chain pipelines.
            </p>
            <p>
              While I enjoyed solving complex operational bottlenecks, I realized I wanted to build the solutions rather than just count them. 
              My passion for tech, usability, and scale led me to pivot into <strong className="text-white">Product Management</strong>.
            </p>
            <p>
              To structure this transition, I joined the competitive <strong className="gradient-text font-semibold">Next Leap PM Fellowship</strong>. 
              Immersing myself in user research, wireframing, metrics analysis, and product strategy, I graduated as a 
              <strong className="text-white"> Top Fellow</strong>.
            </p>
            <p>
              Today, I merge my rigorous analytical grounding in accounting with user-first design principles to build products that are viable, 
              technically feasible, and loved by users.
            </p>
          </div>
        </motion.div>

        {/* Right Column: Kept empty on desktop so the waterfall & laboratory graphics show through */}
        <div className="hidden md:block md:col-span-5 lg:col-span-6" />

      </div>
    </section>
  );
}
