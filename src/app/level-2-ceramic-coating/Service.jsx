'use client';

import AlertBanner from '@/components/AlertBanner';
import '../globals.css';
import './services.css';
import Hero from './Hero';
import AboutSection from './AboutSection';
import IncludedServices from './IncludedServices';
import Logistics from './Logistics';
import Testimonials from '@/components/Testimonials';
import FaqSection from '@/components/FaqSection';
import BookNow from './BookNow';
import Deliverables from './Deliverables';
import CCProcess from './CCProcess';
import OurWork from '@/components/OurWork';
import Lineup from '@/components/Lineup';

const Service = () => {
  return (
    <main className='service-page relative'>
        <AlertBanner 
            background='#3C3B3B'
            color='#fff'
        >
            Now through Jan 1st 2026, BONUS Winter Window Coating For All Ceramic Coatings
        </AlertBanner>
        <Hero/>
        <IncludedServices/>
        <Logistics/>
        <Deliverables/>
        <CCProcess />
        <Testimonials/>
        <OurWork/>
        <Lineup/>
        <FaqSection className='px-4 md:px-10 wrapper lg:my-10'/>
    </main>
  )
}

export default Service