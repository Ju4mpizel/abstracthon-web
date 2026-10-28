import ScrollProgress from "./components/common/ScrollProgress";
import ParticleCanvas from "./components/common/ParticleCanvas";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./components/sections/Hero/Hero";
import DiagonalBands from "./components/sections/DiagonalBands";
import Countdown from "./components/sections/Countdown";
import About from "./components/sections/About";
import Gallery from "./components/sections/Gallery";
import Sedes from "./components/sections/Sedes";
import Marquee from "./components/sections/Marquee";
import CtaSection from "./components/sections/CtaSection";

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink text-copy overflow-x-hidden">
      <ScrollProgress />
      <ParticleCanvas />

      <Navbar />

      <main>
        <Hero />
        <DiagonalBands />
        <Countdown />
        <About />
        <Gallery />
        <Sedes />
        <Marquee />
        <CtaSection />
      </main>

      <Footer />
    </div>
  );
}
