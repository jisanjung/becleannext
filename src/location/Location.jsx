import { SERVICE_FAQ_LIST } from '@/constants'
import BookCta from '@/coating/BookCta'
import CoatingCompare from '@/coating/CoatingCompare'
import CoatingProcess from '@/coating/CoatingProcess'
import MobileBookBar from '@/coating/MobileBookBar'
import WhyBeclean from '@/coating/WhyBeclean'
import FAQ from '@/landing/FAQ'
import HomeOurWork from '@/landing/HomeOurWork'
import HomeTestimonials from '@/landing/HomeTestimonials'
import LocationHero from './LocationHero'
import ServiceAreas from './ServiceAreas'

/** Shared layout for every service area page (/harleysville, /wayne, ...). */
export default function Location({ location, heroImgPath }) {
  return (
    <main>
      <LocationHero location={location} heroImgPath={heroImgPath} />
      <WhyBeclean location={location} />
      <CoatingProcess
        intro={`Our ${location} ceramic coating service was built for the highest level of ease, convenience, and craftsmanship. Here is exactly what your vehicle receives, from pickup to its return the same day.`}
      />
      <CoatingCompare eyebrow='Which Coating Is Right for You?' heading='Choose your level of protection.' />
      <HomeTestimonials />
      <HomeOurWork />
      <ServiceAreas location={location} />
      <FAQ items={SERVICE_FAQ_LIST} contactHref='/#contactSection' />
      <BookCta
        title={`Ready to protect your car in ${location}?`}
        subtitle='From $1,000 · Same-day turnaround · Free pickup & delivery'
      />
      <MobileBookBar title={`${location} Ceramic Coating`} subtitle='From $1,000 · 1, 4 & 9 year protection' />
    </main>
  )
}
