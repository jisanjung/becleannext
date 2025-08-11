import React from 'react'
import Card from './Card'

const IncludedServices = () => {
  return (
    <section className='wrapper px-4 md:px-10 py-4'>
        <h3 className='mb-4'><span className='text-2xl font-bold text-gray-500'>Our 8 - Year Ceramic Coating Service.</span>
            <br/>
            <span className='text-2xl font-bold'>
                What it includes.
            </span>
        </h3>
        <Card
            title='Perfectly Balanced Ceramic Coating. 8 - Year performance.'
            description="Our 8-Year Ceramic Coating* is a premium, all-in-one solution designed for lasting brilliance and protection. This system delivers outstanding durability, deep gloss, high slickness, and powerful hydrophobic performance. This coating creates a resilient barrier against UV rays, road salts, chemicals, and contaminants. With its balanced profile, it enhances color depth while making maintenance easier than ever. A refined, long-term shield that keeps your vehicle looking exceptional for years."
            imgSrc='/services/ceramic_coating_application.jpg'
            className='mb-4'
        />
        <Card
            title='Pick up and Same Day Delivery. Full Convenience.'
            description='Our complimentary vehicle pick-up and guaranteed same-day delivery are designed to make the ceramic coating experience as seamless as the finish itself. From the moment we collect your vehicle, every step is executed with precision. By the end of the work day, it returns to you fully coated  and ready to command attention. Gone are the days of long curing times. World-class results, delivered to you the very same day.'
            imgSrc='/services/driveway.jpg'
            className='mb-4'
        />
        <Card
            title='Ceramic Coatings Perfected.'
            description="Ceramic coating isn't one of many services, it's the only one. Our exclusive focus allows us to perfect every step, from surface preparation to final application. By dedicating ourselves solely to ceramic coatings, we deliver unmatched precision, lasting protection, and a finish that consistently shines."
            imgSrc='/services/bmw_fast.jpg'
            className='mb-4'
        />
        <Card
            title='beclean Signature Aftercare Kit.'
            description="Every ceramic coating comes with our Signature Aftercare Kit, designed to help you maintain your vehicle's flawless finish. Inside you'll find a plush microfiber towel and premium quick detailer. All items were hand-selected to ensure your coating stays brilliant, protected, and easy to care after you leave our studio."
            imgSrc='/services/gift_box.JPG'
            className='mb-4'
        />
    </section>
  )
}

export default IncludedServices