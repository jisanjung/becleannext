'use client'

import Image from 'next/image'
import { useState } from 'react'

const reviews = [
  '/referral/review1.png',
  '/referral/review2.png',
  '/referral/review3.png',
  '/referral/review4.png',
  '/referral/review5.png',
  '/referral/review6.png',
  '/referral/review7.png',
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

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
 <div className="relative mx-auto w-full max-w-none lg:max-w-3xl aspect-[4/3] lg:aspect-[16/9]">
    <Image
      src={reviews[active]}
      alt={`Google review ${active + 1}`}
      fill
      className="object-contain"
      priority={active === 0}
    />
  </div>
</div>

        {/* Pagination */}
        <div className="mt-8 flex justify-center">
          <div className="bg-[#7F7F7F] rounded-full px-8 py-6 max-w-full overflow-x-auto flex gap-3">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`h-3 rounded-full shrink-0 transition-all duration-300 ${
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