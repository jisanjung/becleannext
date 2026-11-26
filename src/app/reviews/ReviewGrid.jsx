'use client'

import Image from 'next/image'
import { useCallback, useState } from 'react'
import { IoExpandOutline } from 'react-icons/io5'
import Lightbox from '@/components/Lightbox'
import { REVIEWS } from './reviewList'

const photos = REVIEWS.map(({ src }) => src)

export default function ReviewGrid() {
  const [openIndex, setOpenIndex] = useState(null)
  const close = useCallback(() => setOpenIndex(null), [])

  return (
    <>
      <ul className='columns-1 gap-4 sm:columns-2 lg:columns-3 lg:gap-6'>
        {REVIEWS.map(({ src, w, h }, i) => (
          <li key={src} className='mb-4 break-inside-avoid lg:mb-6'>
            <button
              type='button'
              onClick={() => setOpenIndex(i)}
              aria-label={`Enlarge Google review ${i + 1}`}
              className='group relative block w-full overflow-hidden rounded-3xl bg-white p-3 text-left ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 cursor-pointer'
            >
              <Image
                src={src}
                alt={`Google review ${i + 1}`}
                width={w}
                height={h}
                priority={i < 3}
                sizes='(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw'
                className='h-auto w-full rounded-2xl'
              />
              <span className='absolute bottom-5 right-5 flex h-9 w-9 items-center justify-center rounded-full bg-ink/80 text-white opacity-0 shadow transition duration-300 group-hover:opacity-100 group-focus-visible:opacity-100'>
                <IoExpandOutline aria-hidden />
              </span>
            </button>
          </li>
        ))}
      </ul>

      {openIndex !== null && (
        <Lightbox images={photos} index={openIndex} label='Google review' onClose={close} onSelect={setOpenIndex} />
      )}
    </>
  )
}
