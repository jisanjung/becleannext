import { FaCheck } from 'react-icons/fa6'
import { GoShieldCheck } from 'react-icons/go'
import { IoCarSportOutline, IoGiftOutline, IoRibbonOutline } from 'react-icons/io5'
import { TfiSpray } from 'react-icons/tfi'
import { GIFT_BOX_CONTENTS } from './tiers'

export default function CoatingIncluded({ tier }) {
  const items = [
    {
      icon: TfiSpray,
      title: `${tier.years} Year Ceramic Coating`,
      body: tier.features.windows
        ? 'All painted surfaces, trim, rims, lights, and every window.'
        : 'All painted surfaces, trim, rims, and lights.',
    },
    {
      icon: GoShieldCheck,
      title: '6 Month Guarantee',
      body: 'Your coating performs exactly as intended. If any issue arises, it is corrected without hesitation.',
    },
    tier.features.warranty && {
      icon: IoRibbonOutline,
      title: `${tier.years} Year Warranty`,
      body: 'Designed to accompany your vehicle for the long term. The warranty is there to make sure of it.',
    },
    {
      icon: IoGiftOutline,
      title: 'Ceramic Coating Gift Box',
      body: 'Everything you need for the 7-day curing window, to handle bird droppings, tar, or other contaminants.',
      list: GIFT_BOX_CONTENTS,
    },
    {
      icon: IoCarSportOutline,
      title: 'Free Pickup & Delivery',
      body: 'We collect your car from home or work and return it the same day.',
    },
  ].filter(Boolean)

  return (
    <section className='section bg-white'>
      <div className='container-x grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20'>
        <div className='lg:sticky lg:top-28 lg:self-start'>
          <span className='eyebrow'>What’s Included</span>
          <h2 className='heading mt-3'>Everything in Level {tier.level}.</h2>
          <p className='mt-6 text-lg leading-relaxed text-ink/70'>{tier.includedIntro}</p>
        </div>

        <ul className='grid gap-4 sm:grid-cols-2 sm:[&>li:last-child:nth-child(odd)]:col-span-2'>
          {items.map(({ icon: Icon, title, body, list }) => (
            <li key={title} className='rounded-2xl bg-mist p-6'>
              <span className='flex h-11 w-11 items-center justify-center rounded-full bg-white text-lg text-brand'>
                <Icon aria-hidden />
              </span>
              <p className='mt-4 font-semibold text-ink'>{title}</p>
              <p className='mt-1 text-sm leading-relaxed text-ink/60'>{body}</p>
              {list && (
                <ul className='mt-3 space-y-1.5 text-sm text-ink/70'>
                  {list.map((entry) => (
                    <li key={entry} className='flex items-start gap-2'>
                      <FaCheck aria-hidden className='mt-1 shrink-0 text-[10px] text-brand' />
                      {entry}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
