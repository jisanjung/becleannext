'use client';

import React from 'react'
import Hero from './Hero'
import Testimonials from './Testimonials'
import OurGuarantee from './OurGuarantee'
import Benefits from './Benefits'
import WhyChoose from './WhyChoose'
import Endorsements from './Endorsements'
import FaqSection from '@/components/FaqSection'
import OurWork from './OurWork';

const Referral = () => {
  return (
    <div>
        <Hero/>
        <Testimonials/>
        <OurWork/>
        <OurGuarantee/>
        <Benefits/>
        <WhyChoose/>
        <Endorsements/>
        <FaqSection className='px-4 md:px-10 wrapper lg:my-10'/>
    </div>
  )
}

export default Referral