import Image from 'next/image'
import React from 'react'

const Deliverables = () => {
  return (
    <section className='wrapper px-4 md:px-10'>
        <div className='flex flex-col items-center border-t-1 border-gray-400 p-8 lg:p-16'>
            <div className='flex flex-col items-center mb-6'>
                <Image
                    src='/services/shield.png'
                    alt='Shield Icon'
                    width={0}
                    height={200}
                    sizes="100vw"
                    style={{ width: '150px', objectFit: 'cover' }}
                />
                <p className='pt-2'>8 - Year Ceramic Coating</p>
            </div>
            <div className='flex flex-col items-center mb-4'>
                <Image
                    src='/services/pickup.png'
                    alt='Pickup Icon'
                    width={0}
                    height={200}
                    sizes="100vw"
                    style={{ width: '150px', objectFit: 'cover' }}
                />
                <p className='pt-2'>Free Pick Up, Same Day Delivery, and Aftercare Kit</p>
            </div>
            <div className='flex flex-col items-center mb-4'>
                <Image
                    src='/services/target.png'
                    alt='Target Icon'
                    width={0}
                    height={200}
                    sizes="100vw"
                    style={{ width: '150px', objectFit: 'cover' }}
                />
                <p className='pt-2'>Ceramic Coatings Perfected</p>
            </div>
        </div>
    </section>
  )
}

export default Deliverables