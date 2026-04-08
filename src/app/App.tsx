import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { VideoGallery } from "./components/VideoGallery";
import { Portfolio } from "./components/Portfolio";
import { Pricing } from "./components/Pricing";
import { Benefits } from "./components/Benefits";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { Navbar } from "./components/Navbar";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Services />
      <VideoGallery />
      <div id="portafolio">
        <Portfolio />
      </div>
      <div id="precios">
        <Pricing />
      </div>
      <Benefits />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}