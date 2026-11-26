import Image from 'next/image'
import Link from 'next/link'
import { FaCheck, FaMinus } from 'react-icons/fa6'
import { CLEANING_FORM_URL, COATING_FORM_URL, FEATURES, TIERS, formatPrice } from './tiers'

const outlineBtn =
  'inline-flex w-full items-center justify-center rounded-full border border-ink/20 px-7 py-3.5 text-sm font-semibold text-ink transition hover:bg-ink hover:text-white'

// `current`: this card is the level the visitor is viewing.
// `overview`: no level is being viewed (e.g. the services page), so every card offers both actions.
function TierCard({ tier, current, overview }) {
  return (
    <article
      className={`relative flex h-full flex-col rounded-3xl p-6 md:p-8 ${
        current ? 'bg-ink text-white ring-2 ring-brand' : 'bg-mist text-ink ring-1 ring-black/5'
      }`}
    >
      {current && (
        <span className='absolute -top-3 left-6 z-10 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white'>
          You’re viewing
        </span>
      )}
      <div className={`relative -mx-2 h-32 overflow-hidden rounded-2xl ${current ? '' : 'bg-ink'}`}>
        <Image src={tier.lineupImage} alt='' fill sizes='(min-width: 1024px) 320px, 80vw' className='object-contain' />
      </div>
      <h3 className='mt-6 text-xl font-bold tracking-tight'>{tier.name}</h3>
      <p className={`mt-1 text-sm ${current ? 'text-white/70' : 'text-ink/60'}`}>{tier.summary}</p>
      <p className='mt-5 flex items-baseline gap-2'>
        <span className='text-3xl font-bold tracking-tight'>{tier.years} yr</span>
        <span className={`text-sm ${current ? 'text-white/60' : 'text-ink/60'}`}>protection</span>
      </p>
      <p className={`mt-1 text-sm ${current ? 'text-white/70' : 'text-ink/60'}`}>From {formatPrice(tier.price)}</p>

      <ul className={`mt-6 space-y-2.5 border-t pt-6 text-sm ${current ? 'border-white/10' : 'border-black/10'}`}>
        {FEATURES.map((f) => {
          const included = tier.features[f.key]
          const label = f.key === 'warranty' && included ? `${tier.years} year warranty` : f.label
          return (
            <li
              key={f.key}
              className={`flex items-start gap-2.5 ${included ? '' : current ? 'text-white/35' : 'text-ink/35'}`}
            >
              {included ? (
                <FaCheck aria-hidden className='mt-0.5 shrink-0 text-xs text-brand' />
              ) : (
                <FaMinus aria-hidden className='mt-0.5 shrink-0 text-xs' />
              )}
              <span>
                <span className='sr-only'>{included ? 'Included: ' : 'Not included: '}</span>
                {label}
              </span>
            </li>
          )
        })}
      </ul>

      <div className='mt-auto pt-8'>
        {current ? (
          <Link href='/book' className='btn w-full'>Book Level {tier.level}</Link>
        ) : overview ? (
          <div className='flex flex-col gap-3'>
            <Link href={`/${tier.slug}`} className='btn w-full'>Learn More</Link>
            <Link href='/book' className={outlineBtn}>Book Now</Link>
          </div>
        ) : (
          <Link href={`/${tier.slug}`} className={outlineBtn}>
            View Level {tier.level} →
          </Link>
        )}
      </div>
    </article>
  )
}

export default function CoatingCompare({
  tier,
  eyebrow = 'Compare Levels',
  heading = 'Explore the lineup.',
  headingAs: Heading = 'h2',
}) {
  const tiers = Object.values(TIERS)

  return (
    <section id='compare' className='section bg-white'>
      <div className='container-x'>
        <div className='mx-auto max-w-2xl text-center'>
          <span className='eyebrow'>{eyebrow}</span>
          <Heading className='heading mt-3'>{heading}</Heading>
          <p className='mt-5 text-lg leading-relaxed text-ink/70'>
            Every level includes paint correction, same-day turnaround, and free pickup &amp; delivery.
            Higher levels add durability, a longer warranty, and glass coating.
          </p>
        </div>

        <div className='-mx-4 mt-12 flex pt-3 snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 md:-mx-10 md:px-10 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'>
          {tiers.map((t) => (
            <div key={t.level} className='w-[85%] max-w-sm shrink-0 snap-center lg:w-auto lg:max-w-none'>
              <TierCard tier={t} current={t.level === tier?.level} overview={!tier} />
            </div>
          ))}
        </div>

        <div className='mt-12 flex flex-col items-start justify-between gap-6 rounded-3xl bg-mist p-8 md:flex-row md:items-center md:p-10'>
          <div>
            <h3 className='text-2xl font-bold tracking-tight text-ink'>Not sure which level is right?</h3>
            <p className='mt-2 text-ink/70'>
              Answer a few questions and we’ll recommend the best ceramic coating for how you drive.
            </p>
          </div>
          <div className='flex shrink-0 flex-col gap-3 sm:flex-row sm:items-center'>
            <a href={COATING_FORM_URL} target='_blank' rel='noopener noreferrer' className='btn'>
              Find Your Coating <span aria-hidden>→</span>
            </a>
            <a
              href={CLEANING_FORM_URL}
              target='_blank'
              rel='noopener noreferrer'
              className='link-arrow px-2'
            >
              Free cleaning plan →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
