import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import BackgroundScene from '../components/BackgroundScene';

export default function Projects() {
  const sectionRef = useRef(null);

  const projects = [
    {
      name: "Wavemood",
      tagline: "Spotify-API powered mood-based music discovery",
      problem: "Users experience choice paralysis when filtering through millions of tracks on standard streaming platforms.",
      role: "Product Manager (API Specification, UX Flow Architecture, Mock Recommendation Logic)",
      link: "/Spotify_Wavemood.pdf",
      gradient: "from-sunset-purple to-sunset-coral"
    }
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center py-20 overflow-hidden"
    >
      {/* Digital Grid & Mockups Background */}
      <BackgroundScene type="projects" containerRef={sectionRef} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          className="mb-16 md:mb-20 text-center"
        >
          <span className="font-sans font-semibold text-xs tracking-widest text-sunset-coral uppercase block mb-3">
            Case Studies
          </span>
          <h2 className="font-display font-black text-3xl md:text-5xl uppercase tracking-wider text-white">
            FEATURED <span className="gradient-text">PROJECT</span>
          </h2>
        </motion.div>

        {/* Project Card (Centered) */}
        <div className="flex justify-center w-full max-w-3xl mx-auto">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: "easeOut" }}
              whileHover={{ y: -8 }}
              className="glassmorphism p-8 md:p-10 rounded-2xl border border-white/5 shadow-2xl flex flex-col justify-between hover:border-sunset-coral/30 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] transition-all duration-300 relative group overflow-hidden w-full"
            >
              {/* Top border ambient glow indicator */}
              <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${project.gradient} opacity-50 group-hover:opacity-100 transition-opacity`} />
              
              <div>
                <span className="font-sans font-bold text-xs tracking-widest text-slate-400 uppercase block mb-2">
                  Featured Case Study
                </span>
                <h3 className="font-display font-black text-2xl md:text-3xl text-white uppercase tracking-wide mb-2 group-hover:text-sunset-coral transition-colors duration-300">
                  {project.name}
                </h3>
                <p className="font-sans font-medium text-xs md:text-sm text-sunset-gold tracking-widest uppercase mb-6">
                  {project.tagline}
                </p>

                <div className="space-y-4 text-slate-300 text-sm md:text-base leading-relaxed mb-8">
                  <p>
                    <strong className="text-white block text-xs tracking-widest uppercase mb-1">Problem Statement:</strong>
                    {project.problem}
                  </p>
                  <p>
                    <strong className="text-white block text-xs tracking-widest uppercase mb-1">My Role:</strong>
                    {project.role}
                  </p>
                </div>
              </div>

              <div>
                <a
                  href={project.link}
                  target={project.link.startsWith('/') || project.link.startsWith('http') ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-xs md:text-sm font-bold uppercase tracking-widest text-white border-b border-white/20 pb-1 group-hover:border-sunset-coral group-hover:text-sunset-coral transition-all duration-200"
                >
                  <span>View Case Study</span>
                  <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
