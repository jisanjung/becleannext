'use client';

import Video from "./Video";
import Testimonials from "@/components/Testimonials";
import OurWork from "@/components/OurWork";
import Deliverables from "./Deliverables";
import Calendar from "./Calendar";
import FaqSection from "@/components/FaqSection";
import Reviews from "./Reviews";

const Lp = () => {
  return (
    <main>
    <Video/>
    <Testimonials/>
    <OurWork/>
    <Deliverables/>
    <Reviews/>
    <Calendar/>
    <FaqSection className='px-4 md:px-10 wrapper lg:my-10'/>
    </main>
  )
}

export default Lp