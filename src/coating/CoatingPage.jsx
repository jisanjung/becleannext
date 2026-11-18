import Link from 'next/link'
import { FAQ_LIST } from '@/constants'
import FAQ from '@/landing/FAQ'
import HomeOurWork from '@/landing/HomeOurWork'
import HomeTestimonials from '@/landing/HomeTestimonials'
import CoatingCompare from './CoatingCompare'
import CoatingHero from './CoatingHero'
import CoatingHighlights from './CoatingHighlights'
import CoatingIncluded from './CoatingIncluded'
import CoatingOverview from './CoatingOverview'
import CoatingProcess from './CoatingProcess'
import MobileBookBar from './MobileBookBar'
import { TIERS, formatPrice } from './tiers'

function BookCta({ tier }) {
  return (
    <section id='book-cta' className='bg-ink py-20 text-white md:py-24'>
      <div className='container-x flex flex-col items-start justify-between gap-8 md:flex-row md:items-center'>
        <div>
          <span className='eyebrow'>Ready When You Are</span>
          <h2 className='heading mt-3'>Book your {tier.name}.</h2>
          <p className='mt-4 text-lg text-white/70'>
            From {formatPrice(tier.price)} · {tier.years} year protection · Same-day delivery
          </p>
        </div>
        <Link href='/book' className='btn shrink-0'>Book Now</Link>
      </div>
    </section>
  )
}

/** Shared layout for the Level 1, 2, and 3 ceramic coating pages. */
export default function CoatingPage({ level }) {
  const tier = TIERS[level]

  return (
    <main>
      <CoatingHero tier={tier} />
      <CoatingOverview tier={tier} />
      <CoatingHighlights />
      <CoatingIncluded tier={tier} />
      <CoatingProcess tier={tier} />
      <HomeOurWork />
      <HomeTestimonials />
      <CoatingCompare tier={tier} />
      <FAQ items={FAQ_LIST} contactHref='/#contactSection' />
      <BookCta tier={tier} />
      <MobileBookBar tier={tier} />
    </main>
  )
}
