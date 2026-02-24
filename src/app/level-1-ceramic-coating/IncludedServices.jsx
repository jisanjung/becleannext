import React from 'react'
import Card from './Card'

const IncludedServices = () => {
  return (
    <section className='wrapper px-4 md:px-10 py-4 lg:py-12'>
        <h2 className='mb-4'><span className='text-2xl font-bold text-gray-500 lg:text-5xl'>Our Level 1 Ceramic Coating Service.</span>
            <br/>
            <span className='text-2xl font-bold lg:text-5xl'>
                What it Includes.
            </span>
        </h2>
        <div className='lg:flex '>
            <Card
    title={
    <>
      Level 1
      <br />
      Ceramic Coating.
      <br />
      1 Year Protection.
    </>
  }
  description="Level 1 Ceramic Coating represents the foundational standard of beclean. It enhances gloss, depth, and surface clarity while providing composed, everyday protection. Precisely applied and intentionally restrained, it delivers a finish that feels considered, balanced, and unmistakably refined. Chosen by owners who appreciate restraint, consistency, and a finish that looks right in every setting."
  imgSrc='/services/ceramic_coating_application.jpg'
  className='mb-4'
/>
            <Card
                title={
                    <>
      Pick Up and Same Day
      <br />
      Delivery.
        <br />
      Full Convienience.
    </>
                }
                description='Our complimentary vehicle pick-up and guaranteed same-day delivery are designed to make the ceramic coating experience as seamless as the finish itself. From the moment we collect your vehicle, every step is executed with precision. By the end of the work day, it returns to you fully coated  and ready to command attention. Gone are the days of long curing times. World-class results, delivered to you the very same day.'
                imgSrc='/services/driveway.jpg'
                className='mb-4'
            />
        </div>
        <div className='lg:flex'>
            <Card
                title={
    <>
      Same Day
      <br />
      Turnaround.
    </>
                }
                description="At beclean Ceramic Coating Studio, speed is deliberate. Traditional ceramic coating services often take multiple days to complete. By using the latest ceramic coating technology, refined techniques, and a strict one-car-per-day approach, we return your vehicle to you the same day. Our process never compromises finish or performance. It’s designed for those who want their car on the road, not sitting in a shop."
                imgSrc='/services/bmw_fast.jpg'
                className='mb-4'
            />
            <Card
                title={
                      <>
      Reserved Only
      <br />
      for You.
    </>
                }
                description="When you book a coating with beclean, the entire studio is reserved for your vehicle. This means there are no other cars, distractions, or compromises. Our one-car-per-day approach guarantees unmatched attention to detail and craftsmanship. The result: a properly coated vehicle returned to the road, treated with the exclusive care it deserves."
                imgSrc='/services/gift_box.JPG'
                className='mb-4'
            />
        </div>
        {/* Who Should Get This */}
  <div className='mt-10'>
    <h3 className='mb-4'>
      <span className='text-2xl font-bold text-gray-500 lg:text-5xl'>
        Who Should Get This?
      </span>
      <br />
      <span className='text-2xl font-bold lg:text-5xl'>
        For Those Who Expect More.
      </span>
    </h3>

    <p className='mb-4 lg:text-lg'>
      Level 1 Ceramic Coating is for owners who want the full benefits of a professionally applied ceramic coating without unnecessary excess. It suits those who drive regularly, value consistency over excess, and expect their car to look composed in any setting: daily, professional, or personal. It delivers enhanced gloss, surface slickness, and hydrophobic protection that makes routine cleaning easier and keeps the vehicle looking composed day after day. Ideal for regular drivers who still expect the clarity, shine, and low-maintenance advantages that define a true ceramic finish.
    </p>
  </div>
    </section>
  )
}

export default IncludedServices