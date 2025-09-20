import Image from 'next/image'
import React from 'react'

const WindowCoatingInfo = ({ className }) => {
  return (
    <section className={`px-4 md:px-10 py-4 mt-4 bg-gray-100 ${className}`}>
        <div className='wrapper lg:py-12'>
            <h2 className='mb-4'><span className='text-2xl font-bold text-gray-500 lg:text-4xl'>Precision vision.</span>
                <br/>
                <span className='text-2xl font-bold lg:text-4xl'>
                    Dedicated Window Ceramic Coating.
                </span>
            </h2>
            <div className='lg:flex'>
                <p className='mb-8 lg:w-2/3 lg:text-lg'>
                    Your windshield is more than just glass. It is your view of the world and your shield from it. Unlike standard ceramic coatings made for paint, 
                    our dedicated window coating is formulated specifically for glass. It bonds tighter, repels water faster, and resists the constant friction of wiper blades. 
                    Rain vanishes on contact. Dirt slides away. Glare fades. Visibility sharpens. This is not just protection. 
                    It is a clear and undeniable edge for those who demand precision every time they drive.
                </p>
                <div className='flex justify-center lg:w-1/3'>
                    <Image
                        src='/services/shield.png'
                        alt='Shield Icon'
                        width={0}
                        height={200}
                        sizes="100vw"
                        style={{ width: '200px', objectFit: 'cover' }}
                    />
                </div>
            </div>
            <div>
                <h2 className='mb-4'><span className='text-2xl font-bold text-gray-500 lg:text-4xl'>Extended range.</span>
                    <br/>
                    <span className='text-2xl font-bold lg:text-4xl'>
                        Harleysville + 50 Mile Pickup Area.
                    </span>
                </h2>
                <p className='mb-8 lg:w-2/3 lg:text-lg lg:mb-0'>
                    Distance is never a concern. With our complimentary concierge service, we’ll come to you anywhere within a 50-mile radius. 
                    Whether at home or at work, we’ll handle pickup and return your vehicle by the end of the day, professionally serviced and ready to impress.
                </p>
            </div>
        </div>
    </section>
  )
}

export default WindowCoatingInfo