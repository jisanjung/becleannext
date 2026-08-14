'use client';

import Header from "./Header";
import Form from "./Form";
import Deliverables from "./Deliverables";
import Reviews from "../lp/Reviews";
import CCProcess from "../level-3-ceramic-coating/CCProcess";
import Included from "./Included";
import Testimonials from "@/components/Testimonials";
import OurWork from "@/components/OurWork";
import Benefits from "./Benefits";
import FaqSection from "@/components/FaqSection";
import Rules from "./Rules";

const Giveaway = () => {
  return (
    <main>
    <Header/>
    <Form/>
    <Deliverables/>
    <Reviews/>
    <CCProcess />
    <Included/>
    <Testimonials/>
    <OurWork/>
    <Benefits/>
    <FaqSection className='px-4 md:px-10 wrapper lg:my-10'/>
    <Rules/>
    </main>
  )
}

export default Giveaway
