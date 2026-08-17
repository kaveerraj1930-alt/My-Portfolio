import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import BackgroundScene from '../components/BackgroundScene';

export default function Contact() {
  const sectionRef = useRef(null);

  const contactLinks = [
    { name: "Email", value: "kaveerraj2138@gmail.com", url: "mailto:kaveerraj2138@gmail.com", color: "hover:text-sunset-gold hover:border-sunset-gold/50" },
    { name: "LinkedIn", value: "linkedin.com/in/kaveer-singh-83518b351", url: "https://www.linkedin.com/in/kaveer-singh-83518b351/", color: "hover:text-sunset-purple hover:border-sunset-purple/50" },
    { name: "GitHub", value: "github.com/kaveerraj1930-alt", url: "https://github.com/kaveerraj1930-alt", color: "hover:text-sunset-coral hover:border-sunset-coral/50" }
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center py-20 overflow-hidden"
    >
      {/* Reactor Fluid Columns Background */}
      <BackgroundScene type="contact" containerRef={sectionRef} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex items-center justify-center relative z-10">
        
        {/* Centered Glassmorphic Portal */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glassmorphism max-w-2xl w-full p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl text-center"
        >
          <span className="font-sans font-semibold text-xs tracking-widest text-sunset-gold uppercase block mb-3 animate-pulse">
            Available for Roles
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl uppercase tracking-wider text-white mb-6">
            LET'S <span className="gradient-text">BUILD</span>
          </h2>
          <p className="text-slate-300 font-sans text-sm md:text-base leading-relaxed mb-10 max-w-md mx-auto">
            Looking for an aspiring Product Manager who can translate operational insights and workflows into high-impact products? Let's talk!
          </p>

          <div className="space-y-4 max-w-sm mx-auto">
            {contactLinks.map((link, idx) => (
              <motion.a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center justify-between p-4 rounded-xl border border-white/5 bg-white/5 font-sans font-bold text-xs md:text-sm text-slate-300 tracking-wider uppercase transition-all duration-300 ${link.color}`}
              >
                <span>{link.name}</span>
                <span className="text-white select-all text-right font-medium lowercase tracking-normal">
                  {link.value}
                </span>
              </motion.a>
            ))}
          </div>

          <div className="mt-12 text-slate-500 font-sans text-xs tracking-widest uppercase">
            &copy; 2026 Kaveer Singh. All rights reserved.
          </div>
        </motion.div>

      </div>
    </section>
  );
}
