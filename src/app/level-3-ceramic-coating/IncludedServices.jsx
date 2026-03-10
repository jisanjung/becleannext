import React from 'react'
import Card from './Card'

const IncludedServices = () => {
  return (
    <section className='wrapper px-4 md:px-10 py-4 lg:py-12'>
        <h2 className='mb-4'><span className='text-2xl font-bold text-gray-500 lg:text-5xl'>Our Level 3 Ceramic Coating Service.</span>
            <br/>
            <span className='text-2xl font-bold lg:text-5xl'>
                The pinnacle of ceramic coating performance.
            </span>
        </h2>
        <div className='lg:flex '>
            <Card
    title={
    <>
      Level 3
      <br />
      Ceramic Coating.
      <br />
      9 Year Protection.
    </>
  }
  description="Our Level 3 ceramic coating is the ultimate, no-compromise solution for preserving your vehicle’s beauty. Engineered for those who want the best in ceramic protection, it excels in rich gloss, ultra-slick surface, and unmatched hydrophobic performance. This ceramic coating exceeds in paint depth and vibrancy, making every curve and contour stand out. In addition, this coating is our longest rated coating. For those who demand the best and expect it to last. This is the standard."
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
        For Those Who Accept Nothing Less.
      </span>
    </h3>

    <p className='mb-4 lg:text-lg'>
      If you demand nothing short of the most inclusive ceramic coating possible, Our Level 3 ceramic coating service is made for you. Crafted for the discerning owner who sees their car as a statement of excellence, this coating delivers a breathtaking mirror-like shine that commands attention. While perfect for all vehicles, its exceptional gloss makes it especially ideal for show cars and weekend rides where uncompromising brilliance and depth of finish are paramount. Beyond unmatched gloss, this ceramic coating excels in smoothness, UV and chemical resistance, water beading, and 9 year durability.
    </p>
  </div>
    </section>
  )
}

export default IncludedServices