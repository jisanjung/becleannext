import { FAQ_LIST } from '@/constants'
import FAQ from '@/landing/FAQ'
import HomeOurWork from '@/landing/HomeOurWork'
import HomeTestimonials from '@/landing/HomeTestimonials'
import BookCta from './BookCta'
import CoatingCompare from './CoatingCompare'
import CoatingHero from './CoatingHero'
import CoatingHighlights from './CoatingHighlights'
import CoatingIncluded from './CoatingIncluded'
import CoatingOverview from './CoatingOverview'
import CoatingProcess from './CoatingProcess'
import MobileBookBar from './MobileBookBar'
import { TIERS, formatPrice } from './tiers'

/** Shared layout for the Level 1, 2, and 3 ceramic coating pages. */
export default function CoatingPage({ level }) {
  const tier = TIERS[level]
  const price = `From ${formatPrice(tier.price)}`

  return (
    <main>
      <CoatingHero tier={tier} />
      <CoatingOverview tier={tier} />
      <CoatingHighlights />
      <CoatingIncluded tier={tier} />
      <CoatingProcess intro={tier.processIntro} />
      <HomeOurWork />
      <HomeTestimonials />
      <CoatingCompare tier={tier} />
      <FAQ items={FAQ_LIST} contactHref='/#contactSection' />
      <BookCta
        title={`Book your ${tier.name}.`}
        subtitle={`${price} · ${tier.years} year protection · Same-day delivery`}
      />
      <MobileBookBar title={tier.name} subtitle={`${price} · ${tier.years} year protection`} />
    </main>
  )
}
