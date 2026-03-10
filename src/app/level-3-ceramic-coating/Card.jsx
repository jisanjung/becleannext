import Image from 'next/image'
import React from 'react'

const Card = ({ title, description, imgSrc, className }) => {
  return (
    <div className={`${className} bg-gray-100 p-4 rounded-2xl lg:w-1/2 lg:m-4`}>
        <h4 className='mb-4 text-3xl lg:text-4xl font-bold leading-tight'>{title}</h4>
        <p className='mb-4'>{description}</p>
        <div>
            <Image
                src={imgSrc}
                alt={title}
                width={0}
                height={400}
                sizes="100vw"
                style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                className='rounded-2xl'
            />
        </div>
    </div>
  )
}

export default Card