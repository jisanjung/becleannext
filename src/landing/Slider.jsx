'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'
import { IoChevronBack, IoChevronForward } from 'react-icons/io5'

/**
 * Minimal image slider used on the home page.
 * Supports arrows, dots, swipe, and left/right keyboard navigation.
 */
export default function Slider({ images, altPrefix, dark = false, aspect = 'aspect-[4/3] md:aspect-[16/9]', fit = 'object-cover' }) {
  const [active, setActive] = useState(0)
  const touchStartX = useRef(null)
  const last = images.length - 1

  const go = (i) => setActive(Math.max(0, Math.min(last, i)))

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX }
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (diff > 50) go(active + 1)
    if (diff < -50) go(active - 1)
    touchStartX.current = null
  }
  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); go(active + 1) }
    if (e.key === 'ArrowLeft') { e.preventDefault(); go(active - 1) }
  }

  const arrow =
    'absolute top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-ink shadow-md backdrop-blur transition hover:bg-white disabled:pointer-events-none disabled:opacity-0 cursor-pointer'

  return (
    <div
      role='region'
      aria-roledescription='carousel'
      aria-label={altPrefix}
      tabIndex={0}
      onKeyDown={onKeyDown}
      className='outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-3xl'
    >
      <div
        className={`relative w-full overflow-hidden rounded-3xl ${dark ? 'bg-ink-deep' : 'bg-mist'} ${aspect}`}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className='flex h-full transition-transform duration-500 ease-out'
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {images.map((src, i) => (
            <div key={src} className='relative h-full min-w-full' aria-hidden={i !== active}>
              <Image
                src={src}
                alt={`${altPrefix} ${i + 1}`}
                fill
                sizes='(min-width: 1024px) 1100px, 100vw'
                className={fit}
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        <button type='button' onClick={() => go(active - 1)} disabled={active === 0} className={`${arrow} left-4`} aria-label='Previous slide'>
          <IoChevronBack />
        </button>
        <button type='button' onClick={() => go(active + 1)} disabled={active === last} className={`${arrow} right-4`} aria-label='Next slide'>
          <IoChevronForward />
        </button>
      </div>

      <div className='mt-6 flex flex-wrap items-center justify-center gap-2'>
        {images.map((_, i) => (
          <button
            key={i}
            type='button'
            onClick={() => go(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === active}
            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
              i === active
                ? `w-8 ${dark ? 'bg-white' : 'bg-ink'}`
                : `w-1.5 ${dark ? 'bg-white/30 hover:bg-white/60' : 'bg-ink/20 hover:bg-ink/40'}`
            }`}
          />
        ))}
      </div>
    </div>
  )
}
