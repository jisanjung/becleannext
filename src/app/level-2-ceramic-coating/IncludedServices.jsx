import React from 'react'
import Card from './Card'

const IncludedServices = () => {
  return (
    <section className='wrapper px-4 md:px-10 py-4 lg:py-12'>
        <h2 className='mb-4'><span className='text-2xl font-bold text-gray-500 lg:text-5xl'>Our Level 2 Ceramic Coating Service.</span>
            <br/>
            <span className='text-2xl font-bold lg:text-5xl'>
                Elevated protection with uncompromising craftsmanship.
            </span>
        </h2>
        <div className='lg:flex '>
            <Card
    title={
    <>
      Level 2
      <br />
      Ceramic Coating.
      <br />
      4 Year Protection.
    </>
  }
  description="Our Level 2 Ceramic Coating service is an all-in-one solution designed for lasting brilliance and protection. This system delivers outstanding durability, deep gloss, high slickness, and powerful hydrophobic performance. This coating creates a resilient barrier against UV rays, road salts, chemicals, and contaminants. With its balanced profile, it enhances color depth while making maintenance easier than ever. A refined, long-term shield that keeps your vehicle looking exceptional for years."
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
        Who Should Get This Ceramic Coating?
      </span>
      <br />
      <span className='text-2xl font-bold lg:text-5xl'>
        For Those Who Expect More.
      </span>
    </h3>

    <p className='mb-4 lg:text-lg'>
      If you’re seeking a ceramic coating that delivers across the board, this is perfect for you. Rated for 4 years of durability, this is designed for those who value balanced excellence: a mirror-like shine, exceptional water beading and self-cleaning, and robust protection against UV rays, chemicals, and the grind of everyday driving. It’s for the discerning owner who wants refined performance in every category. Whether it’s your first time exploring ceramic coatings or you simply want something proven, elegant, and enduring, this is the all-around performer. The intelligent choice for those who expect more.
    </p>
  </div>
    </section>
  )
}

export default IncludedServices