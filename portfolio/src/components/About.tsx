const skills = [
  "JavaScript", "TypeScript", "React", "Next.js",
  "Node.js", "Python", "SQL", "Git"
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I&apos;m a passionate developer with experience building web applications.
              I love turning ideas into reality through clean, efficient code.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              When I&apos;m not coding, you can find me exploring new technologies,
              contributing to open source, or enjoying a good cup of coffee.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
