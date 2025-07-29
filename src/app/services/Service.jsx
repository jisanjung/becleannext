import AlertBanner from '@/components/AlertBanner';
import '../globals.css';
import './services.css';
import Hero from './Hero';
import AboutSection from './AboutSection';
import IncludedServices from './IncludedServices';
import WindowCoatingInfo from './WindowCoatingInfo';
import Logistics from './Logistics';
import Testimonials from './Testimonials';

const Service = () => {
  return (
    <main className='service-page relative'>
        <AlertBanner 
            background='#3C3B3B'
            color='#fff'
        >
            Now through August 15, FREE Ceramic Window Coating with All Coatings
        </AlertBanner>
        <Hero/>
        <AboutSection/>
        <IncludedServices/>
        <WindowCoatingInfo/>
        <Logistics/>
        <Testimonials/>
    </main>
  )
}

export default Service