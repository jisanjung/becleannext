import Image from 'next/image'
import React from 'react'

const Card = ({ title, description, imgSrc }) => {
  return (
    <div className='bg-gray-100 p-4 rounded-2xl'>
        <h4 className='mb-4 text-2xl font-bold'>{title}</h4>
        <p className='mb-4'>{description}</p>
        <div>
            <Image
                src={imgSrc}
                alt={title}
                width={0}
                height={200}
                sizes="100vw"
                style={{ width: '100%' }}
                className='rounded-2xl'
            />
        </div>
    </div>
  )
}

export default Card