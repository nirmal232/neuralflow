"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

import TechCarousel from "./TechCarousel";

const skills = [
  { name: "Pipeline Engineering & Automation", icon: "⚙️" },
  { name: "Full-stack & API Development", icon: "🧩" },
  { name: "AWS Cloud Architecture", icon: "☁️" },
  { name: "Generative AI & Agentic Systems", icon: "🤖" },
  { name: "Technical Leadership", icon: "🚀" },
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

        {/* Skills */}
        <div className="mb-16 animate-on-scroll">
          <h3 className="font-heading text-lg font-semibold mb-6 text-gray-200">
            Core Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="glass rounded-2xl p-5 hover:border-accent/20 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(139,92,246,0.1)] transition-all duration-300 cursor-default"
              >
                <span className="text-2xl mb-3 block">{skill.icon}</span>
                <span className="text-sm text-gray-300">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Carousel */}
        <div className="animate-on-scroll">
          <h3 className="font-heading text-lg font-semibold mb-6 text-gray-200">
            Tech Stack
          </h3>
          <TechCarousel />
        </div>
      </div>
    </section>
  );
}
