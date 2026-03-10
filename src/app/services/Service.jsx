'use client';

import AlertBanner from '@/components/AlertBanner';
import '../globals.css';
import './services.css';
import OurServices from './OurServices';
import CCLM from './CCLM';
import Slideshow from './Slideshow';
import Testimonials from '@/components/Testimonials';
import FaqSection from '@/components/FaqSection';
import OurWork from '@/components/OurWork';
import Lineup from '@/components/Lineup';
import CCProcess from './CCProcess';

const Service = () => {
  return (
    <main className='service-page relative'>
        <AlertBanner 
            background='#3C3B3B'
            color='#fff'
        >
            Now through Jan 1st 2026, BONUS Winter Window Coating For All Ceramic Coatings
        </AlertBanner>
        <OurServices/>
        <CCLM/>
        <Slideshow/>
        <CCProcess/>
        <Testimonials/>
        <OurWork/>
        <Lineup/>
        <FaqSection className='px-4 md:px-10 wrapper lg:my-10'/>
    </main>
  )
}

export default Service