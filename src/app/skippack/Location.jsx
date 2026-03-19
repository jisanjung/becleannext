'use client';

import Testimonials from "@/components/Testimonials";
import Header from "./Header";
import Deliverables from "./Deliverables";
import CCProcess from "./CCProcess";
import Logistics from "./Logisitcs";
import Lineup from "@/components/Lineup";
import OurWork from "@/components/OurWork";
import ServiceAreas from "./Serviceareas";

const Location = () => {
  return (
    <main className='Location-page relative'>
        <Header/>
        <Deliverables/>
        <CCProcess />
        <Lineup/>
        <Logistics/>
        <Testimonials/>
        <OurWork/>
        <ServiceAreas/>
    </main>
  )
}

export default Location