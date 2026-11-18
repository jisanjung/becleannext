import Image from 'next/image'
import Link from 'next/link'
import { formatPrice } from './tiers'

export default function CoatingHero({ tier }) {
  const { heroImage } = tier

  return (
    <section id='top' className='relative overflow-hidden bg-ink text-white'>
      <div className='container-x relative grid items-center gap-10 pt-14 pb-16 md:pt-20 lg:grid-cols-[1fr_1.15fr] lg:gap-6 lg:py-24'>
        <div className='max-w-xl'>
          <span className='eyebrow'>Level {tier.level} · Ceramic Coating</span>
          <h1 className='mt-4 text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl'>
            {tier.years} Year Protection
          </h1>
          <p className='mt-6 max-w-md text-lg leading-relaxed text-white/80'>{tier.tagline}</p>

          <p className='mt-8 flex items-baseline gap-2'>
            <span className='text-sm text-white/60'>From</span>
            <span className='text-3xl font-bold tracking-tight'>{formatPrice(tier.price)}</span>
          </p>

          <div className='mt-6 flex flex-col gap-3 sm:flex-row'>
            <Link href='/book' className='btn'>Book Now</Link>
            <a href='#compare' className='btn-ghost'>Compare Levels</a>
          </div>

          <ul className='mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/80'>
            <li className='flex items-center gap-2'>
              <span className='text-[#FDCF0A]' aria-hidden>★★★★★</span> 5-star rated
            </li>
            <li className='flex items-center gap-2'>
              <span className='h-1 w-1 rounded-full bg-white/40' aria-hidden /> Same-day turnaround
            </li>
            <li className='flex items-center gap-2'>
              <span className='h-1 w-1 rounded-full bg-white/40' aria-hidden /> Free pickup &amp; delivery
            </li>
          </ul>
        </div>

        <div className='relative'>
          {/* Accent glow behind the car, tinted per level */}
          <div
            aria-hidden
            className='pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[130%] -translate-x-1/2 -translate-y-1/2'
            style={{ background: `radial-gradient(closest-side, ${tier.accent}66 0%, ${tier.accent}1f 45%, transparent 100%)` }}
          />
          <div className='relative aspect-[3/2] w-full overflow-hidden'>
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              fill
              priority
              sizes='(min-width: 1024px) 640px, 100vw'
              className={`object-contain ${heroImage.className ?? ''}`}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
