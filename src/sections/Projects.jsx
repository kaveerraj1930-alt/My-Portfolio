import React, { useRef } from "react";
import BackgroundScene from "../components/BackgroundScene";

const projects = [
  {
    name: "Wavemood",
    featured: "FEATURED CASE STUDY",
    title: "WAVEMOOD",
    description: "SPOTIFY-API POWERED MOOD-BASED MUSIC DISCOVERY",
    problem: "Users experience choice paralysis when filtering through millions of tracks on standard streaming platforms.",
    role: "Product Manager (API Specification, UX Flow Architecture, Mock Recommendation Logic)",
    link: "/Spotify_Wavemood.pdf",
  },
  {
    name: "Zepto Product Teardown",
    featured: "FEATURED CASE STUDY",
    title: "ZEPTO TEARDOWN",
    description: "CART PRICING AND FEE TRANSPARENCY IN QUICK COMMERCE",
    problem: "Shoppers can’t see their running total or fees until the bottom of the cart, so they decide on top-ups without knowing what they’ll pay.",
    role: "Product Analyst (App Audit, Personas, Journey Mapping, Recommendations, Metrics Framework)",
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
        {/* Small label above main heading */}
        <p className="text-rose-500 text-sm uppercase tracking-widest mb-2 text-center">
          CASE STUDIES
        </p>
        {/* Main heading */}
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="text-white">FEATURED </span>
          <span className="bg-gradient-to-r from-violet-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
            PROJECT
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj) => (
            <div
              key={proj.name}
              className="bg-white/10 backdrop-blur rounded-xl p-6 text-white border border-white/20"
            >
              {/* Top gradient border */}
              <div className="h-1 bg-gradient-to-r from-indigo-500 to-rose-500 rounded-t-lg mb-2"></div>
              {/* Featured label */}
              <p className="text-xs uppercase text-gray-400 mb-1 tracking-widest">{proj.featured}</p>
              {/* Title */}
              <h3 className="text-2xl font-semibold mb-2 text-rose-500">{proj.title}</h3>
              {/* Subtitle / short description */}
              <p className="mb-2 italic text-amber-500">{proj.description}</p>
              {/* Problem Statement */}
              <p className="mb-2 text-gray-200"><strong className="text-white font-bold">Problem Statement:</strong> {proj.problem}</p>
              {/* My Role */}
              <p className="mb-4 text-gray-200"><strong className="text-white font-bold">My Role:</strong> {proj.role}</p>
              {/* Link */}
              <a
                href={proj.link}
                className="inline-block underline text-rose-500 hover:text-rose-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Case Study →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
