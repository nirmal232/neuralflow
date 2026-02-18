const projects = [
  {
    title: "Segmentation sevice",
    description: "A Python based service which uses Meta's SAM model for segmenting images",
    tech: ["Python", "SAM", "OpenCV", "NumPy", "Pillow"],
    github: "https://github.com/nirmal232/segmentation",
    // live: "https://example.com",
  },
  {
    title: "Project Two",
    description: "Mobile-first responsive dashboard with real-time data",
    tech: ["React", "Tailwind CSS", "Firebase"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Project Three",
    description: "REST API with authentication and database integration",
    tech: ["Node.js", "Express", "MongoDB"],
    github: "https://github.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm"
                >
                  GitHub
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Live Demo
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
