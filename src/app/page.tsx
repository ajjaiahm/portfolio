import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import BackgroundPatterns from "@/components/BackgroundPatterns";
import Preloader from "@/components/Preloader";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Preloader />
      <BackgroundPatterns />
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </main>
  );
}
