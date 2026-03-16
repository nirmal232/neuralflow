"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const projects: { title: string; description: string; tech: string[]; github: string; live?: string; color: string }[] = [
  {
    title: "Segmentation Service",
    description:
      "A Python-based service using Meta's SAM model for segmenting images with high accuracy and real-time processing.",
    tech: ["Python", "SAM", "OpenCV", "NumPy", "Pillow"],
    github: "https://github.com/nirmal232/segmentation",
    color: "from-indigo-500/20 to-blue-500/20",
  },
  {
    title: "AI Creative Director",
    description:
      "A multi-agent system that automates product photography creation. Give it a product name and brand, and it generates professional product images with different compositions, then evaluates them against brand guidelines.",
    tech: ["Python", "MCP", "Langchain", "Langhgraph", "FastAPI", "Huggingface", "PostgreSQL" ],
    github: "https://github.com/nirmal232/AiCreativeDirector",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Project Three",
    description:
      "REST API with authentication, role-based access control, and database integration.",
    tech: ["Node.js", "Express", "MongoDB"],
    github: "https://github.com",
    color: "from-emerald-500/20 to-teal-500/20",
  },
];

export default function Projects() {
  useScrollReveal();

  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <p className="text-accent text-sm tracking-widest uppercase mb-3">What I&apos;ve built</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {projects.map((project) => (
            <article
              key={project.title}
              className="animate-on-scroll group glass rounded-2xl p-6 hover:border-accent/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
            >
              {/* Color accent bar */}
              <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${project.color} mb-5 group-hover:w-20 transition-all duration-500`} />

              <h3 className="font-heading text-xl font-semibold mb-3 text-gray-100 group-hover:text-white transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 bg-white/5 rounded-md text-xs text-gray-400 border border-white/5"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-2 border-t border-white/5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 hover:text-accent-light transition-colors flex items-center gap-1.5"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                  Code
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-500 hover:text-accent-light transition-colors flex items-center gap-1.5"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    Live
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
