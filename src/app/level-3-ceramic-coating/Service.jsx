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
        <AlertBanner background="#C5B270" color="#ffffff">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdd8xeXyN501FlSOvWhe-c7mibQPedlGWLX9U5ljGmf7PCYzQ/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Get a FREE Custom Car Cleaning Plan
        </a>
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