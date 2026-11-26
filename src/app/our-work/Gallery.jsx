'use client'

import Image from 'next/image'
import { useCallback, useState } from 'react'
import { IoImagesOutline } from 'react-icons/io5'
import Lightbox from '@/components/Lightbox'
import { GALLERY } from './cars'

function CarCard({ car, onOpen, priority }) {
  const photos = car.images.length

  return (
    <button
      type='button'
      onClick={onOpen}
      aria-label={`View ${car.name} photos`}
      className='group relative block aspect-[4/3] w-full overflow-hidden rounded-3xl bg-mist text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 cursor-pointer'
    >
      <Image
        src={car.images[0]}
        alt={car.name}
        fill
        priority={priority}
        sizes='(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw'
        className='object-cover transition duration-700 ease-out group-hover:scale-105'
      />
      <span className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent' />

      {photos > 1 && (
        <span className='absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-black/45 px-3 py-1 text-xs font-semibold text-white backdrop-blur'>
          <IoImagesOutline aria-hidden /> {photos}
          <span className='sr-only'>photos</span>
        </span>
      )}

      <span className='absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5'>
        <span className='text-lg font-bold tracking-tight text-white [text-shadow:0_1px_12px_rgba(0,0,0,0.4)]'>
          {car.name}
        </span>
        <span aria-hidden className='translate-x-[-4px] text-sm font-semibold text-white opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100'>
          View →
        </span>
      </span>
    </button>
  )
}

export default function Gallery() {
  const [open, setOpen] = useState(null) // { car, index }
  const close = useCallback(() => setOpen(null), [])

  return (
    <>
      <ul className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6'>
        {GALLERY.map((car, i) => (
          <li key={car.id}>
            <CarCard car={car} priority={i < 3} onOpen={() => setOpen({ car, index: 0 })} />
          </li>
        ))}
      </ul>

      {open && (
        <Lightbox
          images={open.car.images}
          index={open.index}
          title={open.car.name}
          thumbnails
          onClose={close}
          onSelect={(index) => setOpen((o) => ({ ...o, index }))}
        />
      )}
    </>
  )
}
