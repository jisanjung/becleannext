import Image from 'next/image'
import React from 'react'

const WindowCoatingInfo = ({ className }) => {
  return (
    <section className={`px-4 md:px-10 py-4 mt-4 bg-gray-100 ${className}`}>
        <div className='wrapper lg:py-12'>
            <h3 className='mb-4'><span className='text-2xl font-bold text-gray-500 lg:text-4xl'>Precision vision.</span>
                <br/>
                <span className='text-2xl font-bold lg:text-4xl'>
                    Dedicated Window Ceramic Coating.
                </span>
            </h3>
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
                <h3 className='mb-4'><span className='text-2xl font-bold text-gray-500 lg:text-4xl'>Curated care.</span>
                    <br/>
                    <span className='text-2xl font-bold lg:text-4xl'>
                        Ceramic Coating Maintenance Kit.
                    </span>
                </h3>
                <p className='mb-8 lg:w-2/3 lg:text-lg lg:mb-0'>
                    Your maintenance kit is  a collection of products designed to preserve the full potential of your ceramic coating.
                    Each item is hand-selected to work in perfect harmony with the coatings we apply. Unlike generic car care products, 
                    this kit enhances gloss, reinforces hydrophobic behavior, and maintains the slick, clean feel you invested in. Every wash, every wipe,
                    every detail is engineered to protect your finish and elevate your maintenance routine. This is not just upkeep. 
                    It's the discipline behind lasting brilliance.
                </p>
            </div>
        </div>
    </section>
  )
}

export default WindowCoatingInfo