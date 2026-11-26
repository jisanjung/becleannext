'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useState } from 'react'
import { IoExpandOutline } from 'react-icons/io5'
import Lightbox from '@/components/Lightbox'

// Order matters: it drives the bento layout below.
const workImages = [
  { src: '/referral/work_example12.JPG', span: 'col-span-2 row-span-2' },
  { src: '/referral/work_example3.JPG', span: '' },
  { src: '/referral/work_example4.JPG', span: 'row-span-2' },
  { src: '/referral/work_example9.JPG', span: '' },
  { src: '/referral/work_example8.JPG', span: '' },
  { src: '/referral/work_example13.JPG', span: '' },
  { src: '/referral/work_example10.JPG', span: 'col-span-2' },
]

const photos = workImages.map(({ src }) => src)

export default function HomeOurWork() {
  const [openIndex, setOpenIndex] = useState(null)
  const close = useCallback(() => setOpenIndex(null), [])

  return (
    <section id='ourWorkSection' className='section bg-mist'>
      <div className='container-x'>
        <div className='mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between'>
          <div>
            <span className='eyebrow'>Portfolio</span>
            <h2 className='heading mt-3'>Our Work</h2>
            <p className='mt-4 max-w-md text-ink/70'>
              A look at recent ceramic coatings, fresh out of the studio.
            </p>
          </div>
          <Link href='/our-work' className='link-arrow'>View all work →</Link>
        </div>

        <div className='grid auto-rows-[150px] grid-cols-2 gap-3 md:auto-rows-[200px] md:gap-4 lg:auto-rows-[220px] lg:grid-cols-4'>
          {workImages.map(({ src, span }, i) => (
            <button
              key={src}
              type='button'
              onClick={() => setOpenIndex(i)}
              className={`group relative overflow-hidden rounded-2xl bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 cursor-pointer ${span}`}
              aria-label={`View our work photo ${i + 1}`}
            >
              <Image
                src={src}
                alt={`Our work ${i + 1}`}
                fill
                sizes={i === 0 ? '(min-width: 1024px) 560px, 100vw' : '(min-width: 1024px) 280px, 50vw'}
                className='object-cover transition duration-700 ease-out group-hover:scale-105'
              />
              <span className='absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100' />
              <span className='absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink opacity-0 shadow transition duration-300 group-hover:opacity-100 group-focus-visible:opacity-100'>
                <IoExpandOutline />
              </span>
            </button>
          ))}
        </div>

      </div>

      {openIndex !== null && (
        <Lightbox images={photos} index={openIndex} onClose={close} onSelect={setOpenIndex} />
      )}
    </section>
  )
}
