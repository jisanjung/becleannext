'use client'

import Image from 'next/image'
import { useState, useRef } from 'react'

const reviews = [
  '/referral/review1.png',
  '/referral/review2.png',
  '/referral/review3.png',
  '/referral/review4.png',
  '/referral/review5.PNG',
  '/referral/review6.PNG',
  '/referral/review7.PNG',
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const touchStartX = useRef(null)

  const next = () => {
    if (active < reviews.length - 1) {
      setActive(active + 1)
    }
  }

  const prev = () => {
    if (active > 0) {
      setActive(active - 1)
    }
  }

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return

    const touchEndX = e.changedTouches[0].clientX
    const diff = touchStartX.current - touchEndX
    const threshold = 50

    if (diff > threshold) next()
    if (diff < -threshold) prev()

    touchStartX.current = null
  }

  return (
    <section className="w-full bg-[#363434] pt-16 lg:py-20 flex justify-center">
      <div className="w-full max-w-5xl text-center px-6">

        <h2 className="text-white text-2xl lg:text-5xl font-semibold mb-4">
          What Our Clients Say
        </h2>

        <div className="flex justify-center gap-2 mb-10">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-[#FDCF0A] text-6xl">★</span>
          ))}
        </div>

        {/* Slideshow */}
        <div className="px-2 py-4 lg:p-6">
          <div
            className="relative mx-auto w-full max-w-none lg:max-w-3xl aspect-[4/3] lg:aspect-[16/9] overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >

            {/* Sliding Track */}
            <div
              className="flex h-full transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {reviews.map((src, index) => (
                <div key={index} className="relative min-w-full h-full">
                  <Image
                    src={src}
                    alt={`Google review ${index + 1}`}
                    fill
                    className="object-contain"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>

            {/* Left Arrow */}
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2
              bg-black/40 hover:bg-black/60
              text-white text-3xl
              w-10 h-10 rounded-full
              flex items-center justify-center
              cursor-pointer
              transition hover:scale-110"
            >
              ‹
            </button>

            {/* Right Arrow */}
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2
              bg-black/40 hover:bg-black/60
              text-white text-3xl
              w-10 h-10 rounded-full
              flex items-center justify-center
              cursor-pointer
              transition hover:scale-110"
            >
              ›
            </button>

          </div>
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-center">
          <div className="bg-[#262629] rounded-full px-8 py-6 max-w-full overflow-x-auto flex gap-3">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`cursor-pointer h-3 rounded-full shrink-0 transition-all duration-300 ${
                  active === index
                    ? 'w-13 bg-white'
                    : 'w-3 bg-white/60 hover:bg-white'
                }`}
                aria-label={`View review ${index + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}