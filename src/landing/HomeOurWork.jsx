'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import { IoChevronBack, IoChevronForward, IoClose, IoExpandOutline } from 'react-icons/io5'

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

function Lightbox({ index, onClose, onPrev, onNext }) {
  const closeRef = useRef(null)
  const touchStartX = useRef(null)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    closeRef.current?.focus()
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose, onPrev, onNext])

  const btn =
    'flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-2xl text-white backdrop-blur transition hover:bg-white/20 cursor-pointer'

  return (
    <div
      role='dialog'
      aria-modal='true'
      aria-label={`Our work photo ${index + 1} of ${workImages.length}`}
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-10'
      onClick={onClose}
      onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX }}
      onTouchEnd={(e) => {
        if (touchStartX.current === null) return
        const diff = touchStartX.current - e.changedTouches[0].clientX
        if (diff > 50) onNext()
        if (diff < -50) onPrev()
        touchStartX.current = null
      }}
    >
      <div className='relative h-full w-full max-w-6xl' onClick={(e) => e.stopPropagation()}>
        <Image
          src={workImages[index].src}
          alt={`Our work ${index + 1}`}
          fill
          sizes='100vw'
          className='object-contain'
        />
      </div>

      <button ref={closeRef} type='button' onClick={onClose} className={`${btn} absolute right-4 top-4`} aria-label='Close'>
        <IoClose />
      </button>
      <button type='button' onClick={(e) => { e.stopPropagation(); onPrev() }} className={`${btn} absolute left-4 top-1/2 -translate-y-1/2`} aria-label='Previous photo'>
        <IoChevronBack />
      </button>
      <button type='button' onClick={(e) => { e.stopPropagation(); onNext() }} className={`${btn} absolute right-4 top-1/2 -translate-y-1/2`} aria-label='Next photo'>
        <IoChevronForward />
      </button>
      <p className='absolute bottom-5 left-1/2 -translate-x-1/2 text-sm text-white/70'>
        {index + 1} / {workImages.length}
      </p>
    </div>
  )
}

export default function HomeOurWork() {
  const [openIndex, setOpenIndex] = useState(null)
  const count = workImages.length

  const close = useCallback(() => setOpenIndex(null), [])
  const prev = useCallback(() => setOpenIndex((i) => (i - 1 + count) % count), [count])
  const next = useCallback(() => setOpenIndex((i) => (i + 1) % count), [count])

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
        <Lightbox index={openIndex} onClose={close} onPrev={prev} onNext={next} />
      )}
    </section>
  )
}
