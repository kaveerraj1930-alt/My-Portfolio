import React from "react";

const projects = [
  {
    name: "Wavemood",
    tagline: "Music playlist app",
    problem: "A placeholder description for Wavemood.",
    role: "Full‑stack development",
    link: "/Spotify_Wavemood.pdf",
    gradient: "from-pink-500 to-purple-500",
    image: "/wavemood-screenshot.jpg",
  },
  {
    name: "Zepto Product Teardown",
    tagline: "Product teardown case study",
    problem: "Analyze the Zepto product and document findings.",
    role: "Full‑stack development",
    link: "/zepto-teardown.pdf",
    gradient: "from-green-500 to-blue-500",
    image: "/zepto-screenshot.jpg",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj) => (
            <div
              key={proj.name}
              className={`bg-gradient-to-r ${proj.gradient} rounded-lg p-6 text-white`}
            >
              <img src={proj.image} alt={proj.name} className="mb-4 w-full h-48 object-cover rounded" />
              <h3 className="text-xl font-semibold">{proj.name}</h3>
              <p className="mb-2">{proj.tagline}</p>
              <a href={proj.link} className="inline-block mt-2 underline">
                View Case Study
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
