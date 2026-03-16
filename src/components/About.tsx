"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const skills = [
  { name: "Python", level: 90 },
  { name: "JavaScript / TypeScript", level: 85 },
  { name: "React / Next.js", level: 80 },
  { name: "Node.js", level: 75 },
  { name: "SQL / Databases", level: 70 },
  { name: "AI / ML", level: 85 },
];

const techStack = [
  "Python", "TypeScript", "React", "Next.js",
  "Node.js", "OpenCV", "NumPy", "Git",
  "Docker", "AWS", "PostgreSQL", "TailwindCSS",
];

export default function About() {
  useScrollReveal();

  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <p className="text-accent text-sm tracking-widest uppercase mb-3">Get to know me</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        {/* Profile + Bio */}
        <div className="grid md:grid-cols-[280px_1fr] gap-10 mb-16 items-start">
          <div className="animate-on-scroll flex justify-center md:justify-start">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl opacity-30 blur group-hover:opacity-50 transition-opacity duration-500" />
              <Image
                src="/profile.jpg"
                alt="Nirmal Kumar"
                width={260}
                height={260}
                className="relative rounded-2xl object-cover aspect-square"
              />
            </div>
          </div>

          <div className="animate-on-scroll space-y-4">
            <p className="text-gray-300 leading-relaxed">
              I&apos;m an engineer driven by curiosity about how technology shapes experience.
              Professionally, I work across 3D graphics, pipeline development, and AI-powered
              systems — building scalable tools with Python, cloud, and web technologies while
              exploring new frontiers in digital fashion and immersive environments.
            </p>
            <p className="text-gray-400 leading-relaxed">
              On a personal note, I&apos;m a software engineer from Chennai who has always been
              excited and inspired by the latest technology since childhood. Like many Indians,
              I love playing cricket and am an avid movie buff. I enjoy getting hands-on and
              experimenting with any new technology that impresses me.
            </p>
          </div>
        </div>

        {/* Skills + Tech Stack */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Skill bars */}
          <div className="animate-on-scroll">
            <h3 className="font-heading text-lg font-semibold mb-6 text-gray-200">
              Core Skills
            </h3>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="skill-bar-fill h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech stack tags */}
          <div className="animate-on-scroll">
            <h3 className="font-heading text-lg font-semibold mb-6 text-gray-200">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 glass rounded-lg text-sm text-gray-300 hover:text-white hover:border-accent/30 transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
