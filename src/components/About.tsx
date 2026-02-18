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
              I’m a Engineer driven by curiosity about how technology shapes experience. Professionally, I work across 3D graphics, pipeline development, and AI-powered systems, building scalable tools with Python, cloud, and web technologies while exploring new frontiers in digital fashion and immersive environments. Personally, I’m drawn to storytelling, aesthetics, and experimentation — from visual creation to reflective exploration of ideas that inspire growth. I aim to bridge creativity and engineering to craft meaningful digital experiences and evolve toward leadership roles that shape products, people, and impact.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              On a personal note, I’m a software engineer from Chennai who has always been excited and inspired by the latest technology since childhood. Like many Indians, I love playing cricket and am an avid movie buff (feel free to suggest the last movie that affected you the most). I enjoy getting hands-on and experimenting with any new technology that impresses me. Thanks for taking the time to get to know me.
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
