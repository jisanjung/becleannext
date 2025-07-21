import React from 'react'
import Card from './Card'

const IncludedServices = () => {
  return (
    <section className='wrapper px-4 md:px-10 py-4'>
        <h3 className='mb-4'><span className='text-2xl font-bold text-gray-500'>Our Ceramic Coating Services.</span>
            <br/>
            <span className='text-2xl font-bold'>
                What it includes.
            </span>
        </h3>
        <Card
            title='Ceramic Coatings Perfected.'
            description='Ceramic coating isn’t one of many services, it’s the only one. Our exclusive focus allows us to perfect every step, from surface preparation to final application. By dedicating ourselves solely to ceramic coatings, we deliver unmatched precision, lasting protection, and a finish that consistently shines.'
            imgSrc='/services/bmw_fast.jpg'
        />
    </section>
  )
}

export default IncludedServices