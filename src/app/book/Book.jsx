'use client'

import Image from 'next/image';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { FaCheck } from 'react-icons/fa6';
import { BOOKING_URL_MAPPING, FAQ_LIST, PRICE_MAPPING } from '@/constants';
import FAQ from '@/landing/FAQ';
import { BookStep, OptionCard } from './BookStep';
import { SummaryBar, SummaryCard, formatUSD } from './BookingSummary';
import BookInfo from './BookInfo';

const VEHICLES = [
  { value: 'sedan', title: 'Sedans, Coupes & Hatchbacks', image: '/sedan_sideview.png' },
  { value: 'suv', title: 'SUVs', image: '/suv_sideview.png' },
  { value: 'truck', title: 'Trucks & 3-Row', image: '/truck_sideview.png' },
].map((v) => ({ ...v, price: PRICE_MAPPING[v.value] }));

const GLASS = [
  {
    value: 'glass_ceramic_coating',
    title: 'Glass Dedicated Ceramic Coating',
    price: PRICE_MAPPING.glass_ceramic_coating,
    points: [
      'Ceramic coating made specifically for windows',
      'Higher coating longevity and protection',
      'Increased performance in snow and rain',
    ],
  },
  { value: 'none', title: 'No Glass Ceramic Coating', price: 0 },
];

const DELIVERY = [
  {
    value: 'drop_off',
    title: 'Pickup & Delivery',
    short: 'Included',
    body: 'Skip the hassle of scheduling a pickup. As soon as the coating cures, we drop your car off for you.',
  },
  { value: 'none', title: 'No Delivery', short: 'Not needed', body: 'You’ll drop off and pick up your car yourself.' },
];

const TRUST_POINTS = ['4 year ceramic coating', 'Free pickup & delivery', 'Gift box included'];

const Book = () => {
  const vehicleTypeSelected = useStoreState((state) => state.vehicleTypeSelected);
  const glassCoatingSelected = useStoreState((state) => state.glassCoatingSelected);
  const dropOffSelected = useStoreState((state) => state.dropOffSelected);
  const setVehicleType = useStoreActions((actions) => actions.setVehicleType);
  const setGlassCoatingSelection = useStoreActions((actions) => actions.setGlassCoatingSelection);
  const setDropOffSelection = useStoreActions((actions) => actions.setDropOffSelection);

  const vehicle = VEHICLES.find((v) => v.value === vehicleTypeSelected);
  const glass = GLASS.find((g) => g.value === glassCoatingSelected);
  const delivery = DELIVERY.find((d) => d.value === dropOffSelected);

  const total = (vehicle?.price ?? 0) + (glass?.price ?? 0);

  // Same rules as before: a size and a glass choice are required to continue.
  let href;
  if (vehicle && glass) {
    href = glass.value === 'none'
      ? BOOKING_URL_MAPPING[vehicle.value]
      : BOOKING_URL_MAPPING[`${vehicle.value}+${glass.value}`];
  }
  const hint = !vehicle ? 'Choose your vehicle size to get started.' : 'Choose a glass coating option to continue.';

  return (
    <main>
      {/* Intro */}
      <section className='bg-white pt-12 md:pt-20'>
        <div className='container-x'>
          <span className='eyebrow'>Book Now</span>
          <h1 className='heading mt-3 max-w-3xl'>Book a Ceramic Coating</h1>
          <p className='mt-5 max-w-2xl text-lg leading-relaxed text-ink/70'>
            Build your coating in three quick steps. You’ll see your total as you go, then pick a date and time.
          </p>
          <ul className='mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink/70'>
            {TRUST_POINTS.map((point) => (
              <li key={point} className='flex items-center gap-2'>
                <FaCheck aria-hidden className='text-xs text-brand' />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Configurator */}
      <section className='bg-white pt-12 pb-20 md:pt-16 md:pb-28'>
        <div className='container-x'>
          <div className='grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16'>
            <form onSubmit={(e) => e.preventDefault()} className='space-y-12'>
              <BookStep
                id='step-size'
                number={1}
                title='Vehicle size'
                subtitle='How big is your car?'
                complete={Boolean(vehicle)}
              >
                <div className='grid gap-3 sm:grid-cols-3'>
                  {VEHICLES.map((v) => (
                    <OptionCard
                      key={v.value}
                      name='vehicleType'
                      value={v.value}
                      checked={vehicleTypeSelected === v.value}
                      onChange={(e) => setVehicleType(e.target.value)}
                      title={v.title}
                      price={formatUSD(v.price)}
                      media={
                        <Image
                          src={v.image}
                          alt=''
                          fill
                          sizes='(min-width: 640px) 220px, 100vw'
                          className='scale-125 object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-[1.32]'
                        />
                      }
                    />
                  ))}
                </div>
              </BookStep>

              <BookStep
                id='step-glass'
                number={2}
                title='Glass coating'
                subtitle='Add full ceramic protection to your windows.'
                complete={Boolean(glass)}
                disabled={!vehicle}
                disabledHint='Choose a vehicle size first.'
              >
                <div className='grid gap-3 sm:grid-cols-2'>
                  {GLASS.map((g) => (
                    <OptionCard
                      key={g.value}
                      name='glassCoating'
                      value={g.value}
                      checked={glassCoatingSelected === g.value}
                      onChange={(e) => setGlassCoatingSelection(e.target.value)}
                      title={g.title}
                      price={g.price ? `+${formatUSD(g.price)}` : null}
                    >
                      {g.points ? (
                        <ul className='space-y-1.5'>
                          {g.points.map((p) => (
                            <li key={p} className='flex items-start gap-2'>
                              <FaCheck aria-hidden className='mt-1 shrink-0 text-[10px] text-brand' />
                              {p}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        'Paint, trim, and rims only.'
                      )}
                    </OptionCard>
                  ))}
                </div>
              </BookStep>

              <BookStep
                id='step-delivery'
                number={3}
                title='Pickup & delivery'
                subtitle='Free vehicle pickup and delivery.'
                complete={Boolean(delivery)}
                disabled={!glass}
                disabledHint='Choose a glass coating option first.'
              >
                <div className='grid gap-3 sm:grid-cols-2'>
                  {DELIVERY.map((d) => (
                    <OptionCard
                      key={d.value}
                      name='dropOff'
                      value={d.value}
                      checked={dropOffSelected === d.value}
                      onChange={(e) => setDropOffSelection(e.target.value)}
                      title={d.title}
                      price={d.value === 'drop_off' ? 'Free' : null}
                    >
                      {d.body}
                    </OptionCard>
                  ))}
                </div>
              </BookStep>
            </form>

            <aside className='hidden lg:block'>
              <div className='sticky top-8'>
                <SummaryCard vehicle={vehicle} glass={glass} delivery={delivery} total={total} href={href} hint={hint} />
              </div>
            </aside>
          </div>

          <SummaryBar total={total} href={href} hint={hint} />
        </div>
      </section>

      <BookInfo />
      <FAQ items={FAQ_LIST} contactHref='/#contactSection' />
    </main>
  );
};

export default Book;
