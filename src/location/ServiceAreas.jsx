import Image from 'next/image'
import Link from 'next/link'
import { IoLocationOutline } from 'react-icons/io5'
import { SERVICE_AREA_LINKS } from '@/components/navLinks'

/** Links to every service area page; the town being viewed is highlighted. */
export default function ServiceAreas({ location }) {
  return (
    <section className='section bg-white'>
      <div className='container-x grid items-center gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20'>
        <div>
          <span className='eyebrow'>Service Areas</span>
          <h2 className='heading mt-3'>Harleysville + 50 mile radius.</h2>
          <p className='mt-6 text-lg leading-relaxed text-ink/70'>
            If you are within 50 miles of our Harleysville studio, you’re within our range. We pick up your car and
            return it ceramic coated, free of charge.
          </p>

          <ul className='mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3'>
            {SERVICE_AREA_LINKS.map(({ href, label }) => {
              const current = label === location
              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={current ? 'page' : undefined}
                    className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                      current
                        ? 'bg-ink text-white'
                        : 'bg-mist text-ink hover:bg-brand/10 hover:text-brand-dark'
                    }`}
                  >
                    <IoLocationOutline aria-hidden className={current ? 'text-brand' : 'text-ink/40'} />
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>

        <div className='relative mx-auto aspect-[325/353] w-full max-w-sm overflow-hidden rounded-3xl ring-1 ring-black/5'>
          <Image
            src='/referral/location.png'
            alt='Map of the 50 mile pickup and delivery radius around Harleysville, PA'
            fill
            sizes='(min-width: 1024px) 384px, 90vw'
            className='object-cover'
          />
        </div>
      </div>
    </section>
  )
}
