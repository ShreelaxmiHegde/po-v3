import "./globals.css";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Ossc from "./components/Ossc"

export default function Home() {
  return (
    <>
      <div className="relative mx-auto w-[92%] md:w-[50%] lg:w-[38%] pb-40 pt-16">
        <Hero />
        <Projects />
        <TechStack />
        <Ossc />
        <Navbar />
        <Footer />
      </div>
    </>
  );
}
