import React, { useRef } from "react";
import BackgroundScene from "../components/BackgroundScene";

const projects = [
  {
    name: "Wavemood",
    tagline: "Music playlist app case study",
    link: "/Spotify_Wavemood.pdf",
  },
  {
    name: "Zepto Product Teardown",
    tagline: "Cart pricing and fee transparency case study",
    link: "/zepto-teardown.pdf",
  },
];

export default function Projects() {
  const sectionRef = useRef(null);
  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center py-12 overflow-hidden"
    >
      {/* Re‑use the same animated background as other sections */}
      <BackgroundScene type="hero" containerRef={sectionRef} />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj) => (
            <div
              key={proj.name}
              className="bg-white/10 backdrop-blur rounded-xl p-6 text-white border border-white/20"
            >
              <h3 className="text-2xl font-semibold mb-2">{proj.name}</h3>
              <p className="mb-4">{proj.tagline}</p>
              <a
                href={proj.link}
                className="inline-block underline hover:text-gray-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Case Study
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
