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
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj) => (
            <div
              key={proj.name}
              className="bg-white/10 backdrop-blur rounded-xl p-6 text-white border border-white/20"
            >
              {/* Featured label */}
              <p className="text-xs uppercase text-gray-400 mb-1">{proj.featured}</p>
              {/* Title */}
              <h3 className="text-2xl font-semibold mb-2">{proj.title}</h3>
              {/* Short description */}
              <p className="mb-2 italic">{proj.description}</p>
              {/* Problem Statement */}
              <p className="mb-2"><strong>Problem Statement:</strong> {proj.problem}</p>
              {/* My Role */}
              <p className="mb-4"><strong>My Role:</strong> {proj.role}</p>
              {/* Link */}
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
