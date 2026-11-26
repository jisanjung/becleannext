'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { IoChevronBack, IoChevronForward, IoClose } from 'react-icons/io5'

const btn =
  'flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-2xl text-white backdrop-blur transition hover:bg-white/20 cursor-pointer'

/**
 * Full-screen photo viewer. Escape closes, arrow keys and swipes step through `images`.
 * With `title`, it is shown at the top; with `thumbnails`, a strip of photos sits below.
 * `label` names the photos for screen readers when there is no title.
 */
export default function Lightbox({ images, index, onClose, onSelect, title, label = 'Our work', thumbnails = false }) {
  const closeRef = useRef(null)
  const touchStartX = useRef(null)
  const count = images.length
  const multiple = count > 1

  // Step from a ref, not the `index` prop, so presses that land before the next render still count.
  const indexRef = useRef(index)
  indexRef.current = index
  const go = (i) => {
    indexRef.current = i
    onSelect(i)
  }
  const prev = () => go((indexRef.current - 1 + count) % count)
  const next = () => go((indexRef.current + 1) % count)
  // Keep the latest handlers for the key listener without re-subscribing on every step.
  const handlers = useRef({ prev, next, onClose })
  handlers.current = { prev, next, onClose }

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') handlers.current.onClose()
      if (e.key === 'ArrowLeft') handlers.current.prev()
      if (e.key === 'ArrowRight') handlers.current.next()
    }
    // Return focus to whatever opened the viewer (the photo or review card) when it closes.
    const opener = document.activeElement
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    closeRef.current?.focus()
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
      if (opener instanceof HTMLElement && opener.isConnected) opener.focus({ preventScroll: true })
    }
  }, [])

  const name = title ?? label

  return (
    <div
      role='dialog'
      aria-modal='true'
      aria-label={`${name}, photo ${index + 1} of ${count}`}
      className='fixed inset-0 z-50 flex flex-col bg-black/90 p-4 md:p-8'
      onClick={onClose}
      onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX }}
      onTouchEnd={(e) => {
        if (touchStartX.current === null || !multiple) return
        const diff = touchStartX.current - e.changedTouches[0].clientX
        if (diff > 50) next()
        if (diff < -50) prev()
        touchStartX.current = null
      }}
    >
      <div className='flex min-h-12 items-center justify-between gap-4 text-white'>
        {title ? <h2 className='text-xl font-bold tracking-tight md:text-2xl'>{title}</h2> : <span />}
        <button ref={closeRef} type='button' onClick={onClose} className={`${btn} shrink-0`} aria-label='Close'>
          <IoClose />
        </button>
      </div>

      <div className='relative my-4 min-h-0 w-full flex-1'>
        <div className='relative mx-auto h-full w-full max-w-6xl' onClick={(e) => e.stopPropagation()}>
          <Image
            key={images[index]}
            src={images[index]}
            alt={`${name} ${index + 1}`}
            fill
            sizes='100vw'
            className='object-contain'
          />
        </div>

        {multiple && (
          <>
            <button type='button' onClick={(e) => { e.stopPropagation(); prev() }} className={`${btn} absolute left-0 top-1/2 -translate-y-1/2 md:left-2`} aria-label='Previous photo'>
              <IoChevronBack />
            </button>
            <button type='button' onClick={(e) => { e.stopPropagation(); next() }} className={`${btn} absolute right-0 top-1/2 -translate-y-1/2 md:right-2`} aria-label='Next photo'>
              <IoChevronForward />
            </button>
          </>
        )}
      </div>

      {thumbnails && multiple ? (
        <div className='flex justify-center gap-2 overflow-x-auto md:gap-3' onClick={(e) => e.stopPropagation()}>
          {images.map((src, i) => (
            <button
              key={src}
              type='button'
              onClick={() => onSelect(i)}
              aria-label={`Show photo ${i + 1}`}
              aria-current={i === index}
              className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-lg transition cursor-pointer md:h-16 md:w-24 ${
                i === index ? 'ring-2 ring-brand' : 'opacity-50 hover:opacity-100'
              }`}
            >
              <Image src={src} alt='' fill sizes='96px' className='object-cover' />
            </button>
          ))}
        </div>
      ) : null}

      {multiple && (
        <p className='mt-3 text-center text-sm text-white/70'>
          {index + 1} / {count}
        </p>
      )}
    </div>
  )
}
