"use client";

import { useEffect, useRef } from "react";

const orbs = [
  { size: 500, x: "15%", y: "20%", color: "rgba(99, 102, 241, 0.15)", duration: 25, delay: 0 },
  { size: 400, x: "70%", y: "60%", color: "rgba(168, 85, 247, 0.12)", duration: 30, delay: 5 },
  { size: 350, x: "50%", y: "30%", color: "rgba(236, 72, 153, 0.10)", duration: 20, delay: 10 },
  { size: 300, x: "80%", y: "15%", color: "rgba(59, 130, 246, 0.10)", duration: 28, delay: 3 },
  { size: 250, x: "25%", y: "70%", color: "rgba(139, 92, 246, 0.12)", duration: 22, delay: 8 },
];

export default function FloatingOrbs() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    const handleMove = (e: PointerEvent) => {
      if (!glowRef.current) return;
      glowRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Floating gradient orbs */}
      {orbs.map((orb, i) => (
        <div
          key={i}
          className="absolute rounded-full will-change-transform"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: `radial-gradient(circle, ${orb.color}, transparent 70%)`,
            animation: `float-orb ${orb.duration}s ease-in-out ${orb.delay}s infinite`,
            filter: "blur(60px)",
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}

      {/* Cursor glow */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 will-change-transform"
        style={{
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
          transition: "transform 0.15s ease-out",
        }}
      />
    </div>
  );
}
