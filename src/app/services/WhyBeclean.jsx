import { GoShieldCheck } from 'react-icons/go'
import { IoCarSportOutline, IoFlashOutline, IoGiftOutline, IoKeyOutline, IoRibbonOutline } from 'react-icons/io5'

const REASONS = [
  {
    icon: IoCarSportOutline,
    title: 'Free Pickup & Same-Day Delivery',
    tag: 'Harleysville + 50 mile radius',
    body: 'You don’t need to rearrange your life to protect your vehicle. We arrive, retrieve, and return your car coated and ready, all in the same day. Booking takes minutes: pick your car, your coating, and a date.',
  },
  {
    icon: IoKeyOutline,
    title: 'Reserved Only for You',
    tag: 'One car per day',
    body: 'We dedicate ourselves to one craft and accept only one ceramic coating appointment per day, so every ounce of expertise, precision, and care goes into your car’s transformation.',
  },
  {
    icon: IoFlashOutline,
    title: 'Same-Day Turnaround',
    tag: 'Created for speed',
    body: 'While other installers need multiple days, we return your car by the end of the day, thanks to the latest coating technology, refined techniques, and a workflow built around one vehicle at a time.',
  },
  {
    icon: GoShieldCheck,
    title: '6 Month Guarantee',
    tag: 'Our promise to you',
    body: 'If after 6 months you aren’t completely in love with how your vehicle looks and performs, we’ll correct the issue at no cost to you.',
  },
  {
    icon: IoRibbonOutline,
    title: 'Registered Warranty',
    tag: 'Levels 2 & 3',
    body: 'A registered warranty keeps your coating performing for the journeys ahead. Return once a year for an inspection, warranty wash, and topper application.',
  },
  {
    icon: IoGiftOutline,
    title: 'Ceramic Coating Gift Box',
    tag: 'A personal touch',
    body: 'Our service doesn’t end at drop-off. Every car comes with a quick detailer, soft microfiber towel, warranty card, and stickers so the curing process goes smoothly.',
  },
]

export default function WhyBeclean() {
  return (
    <section className='section bg-mist'>
      <div className='container-x'>
        <div className='max-w-2xl'>
          <span className='eyebrow'>Why beclean</span>
          <h2 className='heading mt-3'>The best place to get a ceramic coating.</h2>
        </div>

        <ul className='mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6'>
          {REASONS.map(({ icon: Icon, title, tag, body }) => (
            <li key={title} className='rounded-3xl bg-white p-6 ring-1 ring-black/5 md:p-8'>
              <span className='flex h-11 w-11 items-center justify-center rounded-full bg-mist text-lg text-brand'>
                <Icon aria-hidden />
              </span>
              <p className='mt-5 text-xs font-semibold uppercase tracking-[0.15em] text-ink/50'>{tag}</p>
              <h3 className='mt-1 text-xl font-bold tracking-tight text-ink'>{title}</h3>
              <p className='mt-3 leading-relaxed text-ink/70'>{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
