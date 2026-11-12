import Hero from "@/landing/Hero";
import AboutSection from "@/landing/AboutSection";
import Services from "@/landing/Services";
import HomeOurWork from "@/landing/HomeOurWork";
import HomeTestimonials from "@/landing/HomeTestimonials";
import OurStory from "@/landing/OurStory";
import FAQ from "@/landing/FAQ";
import Contact from "@/landing/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <Services />
      <HomeOurWork />
      <HomeTestimonials />
      <OurStory />
      <FAQ />
      <Contact />
    </main>
  );
}
