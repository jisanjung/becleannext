import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Contact from "@/landing/Contact";
import Hero from "@/landing/Hero";
import OurStory from "@/landing/OurStory";
import Services from "@/landing/Services";

export default function Home() {
  return (
    <main>
      <Header/>
      <Hero className='landing'/>
      <Services className='landing'/>
      <Contact className='landing'/>
      <OurStory className='landing'/>
      <Footer/>
    </main>
  );
}
