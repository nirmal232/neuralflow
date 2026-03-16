import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950">
      <ScrollProgress />
      <Header />
      <Hero />
      <div className="relative">
        {/* SVG wave divider */}
        <svg className="w-full h-16 text-gray-950 -mb-1" viewBox="0 0 1440 64" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,32L80,37.3C160,43,320,53,480,48C640,43,800,21,960,16C1120,11,1280,21,1360,26.7L1440,32L1440,64L0,64Z" />
        </svg>
        <About />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
