'use client';

import Testimonials from "@/components/Testimonials";
import Deliverables from "./Deliverables";
import CCProcess from "./CCProcess";
import Logistics from "./Logisitcs";
import Lineup from "@/components/Lineup";
import OurWork from "@/components/OurWork";
import ServiceAreas from "./ServiceAreas";
import Hero from "./Hero";

const Location = ({ location, heroImgPath }) => {
  return (
    <main className='Location-page relative'>
        <Hero location={location} heroImgPath={heroImgPath}/>
        <Deliverables location={location}/>
        <CCProcess location={location}/>
        <Lineup/>
        <Logistics/>
        <Testimonials/>
        <OurWork/>
        <ServiceAreas/>
    </main>
  )
}

export default Location