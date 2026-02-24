'use client'

import Image from 'next/image'
import { useState } from 'react'

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

  return (
    <section className="w-full bg-[#363434] py-20 flex justify-center">
      <div className="w-full max-w-6xl text-center px-6">

        {/* Heading */}
        <h2 className="text-white text-2xl lg:text-5xl font-semibold mb-10">
          Our Work
        </h2>

        {/* Slideshow */}
<div className="flex justify-center px-6">
  <div className="relative w-full max-w-none lg:max-w-6xl aspect-[4/3] lg:aspect-[16/9] rounded-2xl overflow-hidden">
    <Image
      src={workImages[active]}
      alt={`Our Work ${active + 1}`}
      fill
      style={{ objectFit: 'contain' }}
      priority={active === 0}
    />
  </div>
</div>

        {/* Pagination */}
        <div className="mt-8 flex justify-center">
          <div className="bg-[#7F7F7F] rounded-full px-8 py-5 lg:px-8 lg:py-6 max-w-full flex gap-2 lg:gap-3">
            {workImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`h-3 rounded-full shrink-0 transition-all duration-300 ${
                  active === index
                    ? 'w-13 bg-white'
                    : 'w-3 bg-white/60'
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
