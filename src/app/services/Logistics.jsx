import Image from 'next/image'
import React from 'react'

const Logistics = () => {
  return (
    <section className='wrapper px-4 md:px-10 py-4 mt-4 lg:py-12'>
        <h3 className='mb-8'><span className='text-2xl font-bold text-gray-500 lg:text-4xl'>The Art of Ceramic Coatings.</span>
            <br/>
            <span className='text-2xl font-bold lg:text-4xl'>
                Mastered.
            </span>
        </h3>
        <div className='mb-8'>
            <h4 className='text-xl font-bold mb-4 lg:text-2xl'>Book.</h4>
            <div className='lg:flex'>
                <p className='mb-4 lg:text-lg lg:w-2/3'>
                    Scheduling with beclean is effortless. In just a few clicks, you can reserve your ceramic coating appointment through our streamlined booking system. No calls, no waiting. Simply choose your service, pick a time that works for you, and we'll handle the rest. Precision starts the moment you book.
                </p>
                <div className='flex justify-center lg:w-1/3'>
                    <Image
                        src='/services/schedule.png'
                        alt='Schedule Icon'
                        width={0}
                        height={200}
                        sizes="100vw"
                        style={{ width: '150px', objectFit: 'cover' }}
                    />
                </div>
            </div>
        </div>
        <div className='mb-8'>
            <h4 className='text-xl font-bold mb-4 lg:text-2xl'>Pickup.</h4>
            <div className='lg:flex'>
                <p className='mb-4 lg:text-lg lg:w-2/3'>
                    beclean offers free vehicle pickup, making your ceramic coating experience effortless from the start. We come directly to you, handle your vehicle with care, and bring it to our studio for expert treatment. Premium service begins at your doorstep.
                </p>
                <div className='flex justify-center lg:w-1/3'>
                    <Image
                        src='/services/pickup.png'
                        alt='Pickup Icon'
                        width={0}
                        height={200}
                        sizes="100vw"
                        style={{ width: '150px', objectFit: 'cover' }}
                    />
                </div>
            </div>
        </div>
        <div className='mb-8'>
            <h4 className='text-xl font-bold mb-4 lg:text-2xl'>Delivered.</h4>
            <div className='lg:flex'>
                <p className='mb-4 lg:text-lg lg:w-2/3'>
                    When your vehicle is ready, you'll return to something remarkable: a ceramic-coated finish that turns heads and stands the test of time. Along with it, you'll receive our Signature Gift Box to preserve the brilliance long after you drive away.
                </p>
                <div className='flex justify-center lg:w-1/3'>
                    <Image
                        src='/services/hand_key.png'
                        alt='Hand Key Icon'
                        width={0}
                        height={200}
                        sizes="100vw"
                        style={{ width: '150px', objectFit: 'cover' }}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Logistics