'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

/**
 * Small booking bar pinned to the bottom on phones once the element with id `startAfter`
 * (the hero by default) has scrolled away, hidden again while the closing book CTA is on screen.
 */
export default function MobileBookBar({ title, subtitle, startAfter = 'top' }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hero = document.getElementById(startAfter)
    const finalCta = document.getElementById('book-cta')
    if (!hero) return

    let heroVisible = true
    let ctaVisible = false
    const update = () => setVisible(!heroVisible && !ctaVisible)

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === hero) heroVisible = entry.isIntersecting
        if (entry.target === finalCta) ctaVisible = entry.isIntersecting
      })
      update()
    })
    observer.observe(hero)
    if (finalCta) observer.observe(finalCta)
    return () => observer.disconnect()
  }, [startAfter])

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-30 border-t border-black/10 bg-white/90 px-4 py-3 backdrop-blur transition-transform duration-300 md:hidden ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className='flex items-center justify-between gap-4'>
        <div className='min-w-0'>
          <p className='truncate text-sm font-semibold text-ink'>{title}</p>
          {subtitle && <p className='text-xs text-ink/60'>{subtitle}</p>}
        </div>
        <Link href='/book' tabIndex={visible ? 0 : -1} className='btn shrink-0 !px-5 !py-2.5'>
          Book Now
        </Link>
      </div>
    </div>
  )
}
