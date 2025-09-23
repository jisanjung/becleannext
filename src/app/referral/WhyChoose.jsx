import React from 'react'

const WhyChoose = () => {
  return (
    <section className='wrapper px-4 py-8'>
        <h1 className="text-2xl font-bold text-center mb-4">Why Choose beclean?</h1>
        <h2 className='text-lg font-bold mb-2'>Harleysville + <br/> 50 Miles Service Radius.</h2>
        <p className='mb-4'>
            Distance is never a concern. With our complimentary concierge service, we'll come to you anywhere within a 50-mile radius. 
            Whether at home or at work, we'll handle pickup and return your vehicle by the end of the day, professionally serviced and ready to impress.
        </p>
        <img src='/referral/location.png' className='rounded-2xl mb-8' alt='Harleysville, PA'/>
        <h2 className='text-lg font-bold mb-2'>Fully Insured.<br/>Updates Provided.</h2>
        <p className='mb-4'>
            Your vehicle's safety and peace of mind are our top priorities. We are fully insured, 
            so you can trust that your investment is protected from the moment we pick it up to the moment it's returned. 
            Throughout the process, we provide timely updates so you're always informed on the progress of your service. 
            With transparency and security at every step, you can relax knowing your car is in expert hands.
        </p>
        <div className='flex justify-center'>
            <img src='/services/shield.png' alt='Shield Icon' className='w-1/2'/>
        </div>
    </section>
  )
}

export default WhyChoose