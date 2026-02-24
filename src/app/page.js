import Contact from "@/landing/Contact";
import Hero from "@/landing/Hero";
import OurStory from "@/landing/OurStory";
import Services from "@/landing/Services";
import FAQ from "@/landing/FAQ";
import Testimonials from "@/components/Testimonials";
import OurWork from "@/components/OurWork";
import AboutSection from "@/landing/AboutSection";

export default function Home() {
  return (
    <main>
      <Hero className='landing'/>
      <Services className='landing'/>
      <FAQ className='px-4 md:px-10 wrapper lg:my-10' />
      <OurStory className='landing'/>
      <Contact className='landing'/>
      <Testimonials className='landing'/>
      <OurWork classname='landing'/>
      <AboutSection className='landing'/>
    </main>
  );
}
