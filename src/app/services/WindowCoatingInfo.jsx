import Image from 'next/image'
import React from 'react'

const WindowCoatingInfo = () => {
  return (
    <section className='wrapper px-4 md:px-10 py-4 mt-4 bg-gray-100'>
        <h3 className='mb-4'><span className='text-2xl font-bold text-gray-500'>Precision vision.</span>
            <br/>
            <span className='text-2xl font-bold'>
                Dedicated Window Ceramic Coating
            </span>
        </h3>
        <p className='mb-8'>
            Your windshield is more than just glass. It is your view of the world and your shield from it. Unlike standard ceramic coatings made for paint, 
            our dedicated window coating is formulated specifically for glass. It bonds tighter, repels water faster, and resists the constant friction of wiper blades. 
            Rain vanishes on contact. Dirt slides away. Glare fades. Visibility sharpens. This is not just protection. 
            It is a clear and undeniable edge for those who demand precision every time they drive.
        </p>
        <div className='flex justify-center'>
            <Image
                src='/services/shield.png'
                alt='Shield Icon'
                width={0}
                height={200}
                sizes="100vw"
                style={{ width: '150px', objectFit: 'cover' }}
            />
        </div>
    </section>
  )
}

export default WindowCoatingInfo