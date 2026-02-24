import Contact from "@/landing/Contact";
import Hero from "@/landing/Hero";
import OurStory from "@/landing/OurStory";
import Services from "@/landing/Services";

export default function Home() {
  return (
    <main>
      <Hero className='landing'/>
      <Services className='landing'/>
      <Contact className='landing'/>
      <OurStory className='landing'/>
    </main>
  );
}
