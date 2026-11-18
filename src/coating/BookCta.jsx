import Link from 'next/link'

/** Closing "book now" band. Its id lets MobileBookBar hide while it is on screen. */
export default function BookCta({ title, subtitle, eyebrow = 'Ready When You Are' }) {
  return (
    <section id='book-cta' className='bg-ink py-20 text-white md:py-24'>
      <div className='container-x flex flex-col items-start justify-between gap-8 md:flex-row md:items-center'>
        <div>
          <span className='eyebrow'>{eyebrow}</span>
          <h2 className='heading mt-3'>{title}</h2>
          {subtitle && <p className='mt-4 text-lg text-white/70'>{subtitle}</p>}
        </div>
        <Link href='/book' className='btn shrink-0'>Book Now</Link>
      </div>
    </section>
  )
}
