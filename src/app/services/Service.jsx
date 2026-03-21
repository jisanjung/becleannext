'use client';

import AlertBanner from '@/components/AlertBanner';
import '../globals.css';
import './services.css';
import OurServices from './OurServices';
import CCLM from './CCLM';
import Slideshow from './Slideshow';
import Testimonials from '@/components/Testimonials';
import FAQ from './FAQ';
import OurWork from '@/components/OurWork';
import Lineup from '@/components/Lineup';
import CCProcess from './CCProcess';
import Advantages from './Advantages';

const Service = () => {
  return (
    <main className='service-page relative'>
        <AlertBanner background="#3C3B3B" color="#ffffff">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdd8xeXyN501FlSOvWhe-c7mibQPedlGWLX9U5ljGmf7PCYzQ/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Get a FREE Custom Car Cleaning Plan
        </a>
        </AlertBanner>
        <OurServices/>
        <CCLM/>
        <Slideshow/>
        <CCProcess/>
        <Lineup/>
        <Testimonials/>
        <OurWork/>
        <Advantages/>
        <FAQ/>
    </main>
  )
}

export default Service