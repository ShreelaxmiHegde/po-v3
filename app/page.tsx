import "./globals.css";
import Navbar from "./ui/Navbar";
import Footer from "./ui/Footer";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import TechStack from "./sections/TechStack";
import Ossc from "./sections/Ossc"
import { SOCIALS } from "@/lib/constants";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Shreelaxmi Hegde",
  jobTitle: "Full Stack Developer",
  url: SOCIALS.url,
  sameAs: [SOCIALS.github, SOCIALS.linkedin],
  knowsAbout: [
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    "Docker",
    "CICD",
    "Backend Engineering",
    "AI Systems",
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <main className="relative mx-auto w-[92%] md:w-[50%] lg:w-[38%] pb-40 pt-16">
        <Hero />
        <Projects />
        <TechStack />
        <Ossc />
      </main>
      <Navbar />
      <Footer />
    </>
  );
}
