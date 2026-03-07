'use client'

import Image from 'next/image'
import { useState, useRef } from 'react'

const workImages = [
  '/referral/work_example1.JPG',
  '/referral/work_example3.JPG',
  '/referral/work_example12.JPG',
  '/referral/work_example9.JPG',
  '/referral/work_example8.JPG',
  '/referral/work_example5.JPG',
  '/referral/work_example13.JPG',
  '/referral/work_example4.JPG',
  '/referral/work_example2.JPG',
  '/referral/work_example11.JPG',
  '/referral/work_example10.JPG',
  '/referral/work_example7.JPG',
]

export default function OurWork() {
  const [active, setActive] = useState(0)
  const touchStartX = useRef(null)

  const next = () => {
    if (active < workImages.length - 1) {
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
    <section className="w-full bg-[#363434] py-20 flex justify-center">
      <div className="w-full max-w-6xl text-center px-6">

        <h2 className="text-white text-2xl lg:text-5xl font-semibold mb-10">
          Our Work
        </h2>

        {/* Slideshow */}
        <div className="flex justify-center px-6">
          <div
            className="relative w-full max-w-none lg:max-w-6xl aspect-[4/3] lg:aspect-[16/9] rounded-2xl overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >

            {/* Sliding Track */}
            <div
              className="flex h-full transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {workImages.map((src, index) => (
                <div key={index} className="relative min-w-full h-full">
                  <Image
                    src={src}
                    alt={`Our Work ${index + 1}`}
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
          <div className="bg-[#262629] rounded-full px-8 py-5 lg:px-8 lg:py-6 max-w-full flex gap-2 lg:gap-3">
            {workImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`h-3 rounded-full shrink-0 cursor-pointer transition-all duration-300 hover:scale-110 ${
                  active === index
                    ? 'w-13 bg-white'
                    : 'w-3 bg-white/60 hover:bg-white'
                }`}
                aria-label={`View work ${index + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}