import ButtonPrimary from '@/components/ButtonPrimary'
import { PRICE_MAPPING } from '@/constants'
import Image from 'next/image'
import React from 'react'

const BookNow = () => {
  return (
    <section className='wrapper px-4 md:px-10 mb-14'>
        <div className='lg:flex lg:justify-center'>
          <Image
              src='/service_hero.png'
              alt='Sports Car'
              width={0}
              height={200}
              sizes="100vw"
              style={{ objectFit: 'cover' }}
              className='w-full lg:w-3/4'
          />
        </div>
        <div className='mb-4 lg:mb-8'>
            <h5 className='text-center font-bold text-xl lg:text-2xl'>8 - Year Ceramic Coating</h5>
            <h6 className='text-center font-bold'>From {Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
                        .format(PRICE_MAPPING['sedan'])}
            </h6>
        </div>
        <div className="flex justify-center">
          <a href="/book" className="mb-4 button inline-block w-full lg:w-auto text-center">Call Us</a>
        </div>
    </section>
  )
}

export default BookNow