import React from 'react'

const Testimonials = () => {
  return (
    <section className='wrapper px-4 py-8 bg-gray-200'>
        <h1 className="text-2xl font-bold text-center mb-4">What Our Clients Say</h1>
        <div className='flex flex-col '>
            <img src='/referral/review1.PNG' className='mb-4 rounded-2xl'/>
            <img src='/referral/review2.PNG' className='mb-4 rounded-2xl'/>
            <img src='/referral/review3.PNG' className='mb-4 rounded-2xl'/>
            <img src='/referral/review4.PNG' className='mb-4 rounded-2xl'/>
            <img src='/referral/review5.PNG' className='mb-4 rounded-2xl'/>
            <img src='/referral/review6.PNG' className='mb-4 rounded-2xl'/>
            <img src='/referral/review7.PNG' className='mb-4 rounded-2xl'/>
        </div>
    </section>
  )
}

export default Testimonials