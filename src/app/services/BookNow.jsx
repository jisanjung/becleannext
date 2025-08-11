import ButtonPrimary from '@/components/ButtonPrimary'
import { PRICE_MAPPING } from '@/constants'
import Image from 'next/image'
import React from 'react'

const BookNow = () => {
  return (
    <section className='wrapper px-4 md:px-10 mb-14'>
        <Image
            src='/service_hero.png'
            alt='Sports Car'
            width={0}
            height={200}
            sizes="100vw"
            style={{ width: '100%', maxHeight: '200px', objectFit: 'cover' }}
        />
        <div className='mb-4'>
            <h5 className='text-center font-bold text-xl'>Ceramic Coating Services</h5>
            <h6 className='text-center font-bold'>From {Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
                        .format(PRICE_MAPPING['sedan'])}
            </h6>
        </div>
        <ButtonPrimary>
            Book Now
        </ButtonPrimary>
    </section>
  )
}

export default BookNow