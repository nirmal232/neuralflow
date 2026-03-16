"use client";

import { useEffect, useRef, useState } from "react";
import FloatingOrbs from "./FloatingOrbs";

const roles = [
  "Applied AI Engineer",
  "Full-Stack Developer",
  "Creative Technologist",
];

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing animation
  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    if (!isDeleting && text === current) {
      const pause = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(pause);
    }
    if (isDeleting && text === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timer = setTimeout(() => {
      setText(
        isDeleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1)
      );
    }, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  // Fade-in on mount
  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    requestAnimationFrame(() => {
      el.style.transition = "opacity 1s ease, transform 1s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-gray-950 noise">
      <FloatingOrbs />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div ref={contentRef} className="relative z-10 text-center max-w-3xl">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
          <span className="text-xs tracking-widest uppercase text-gray-400">
            Available for opportunities
          </span>
        </div>

        <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold mb-4 leading-[1.1] tracking-tight">
          Hi, I&apos;m{" "}
          <span className="gradient-text">Nirmal</span>
        </h1>

        <div className="h-10 mb-6 flex items-center justify-center">
          <p className="text-lg md:text-xl text-gray-400 font-light">
            {text}
            <span className="inline-block w-[2px] h-5 bg-accent ml-1 animate-pulse" />
          </p>
        </div>

        <p className="text-gray-500 max-w-lg mx-auto mb-10 leading-relaxed">
          Crafting intelligent digital experiences with clean code,
          creative thinking, and a passion for innovation.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#projects"
            className="group px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.35)] hover:scale-105 animate-gradient"
          >
            View My Work
            <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full font-medium border border-white/10 text-gray-300 hover:border-accent/40 hover:text-white hover:bg-white/5 backdrop-blur-sm transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 animate-bounce">
          <svg className="w-5 h-5 mx-auto text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
