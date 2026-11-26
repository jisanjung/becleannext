import Image from 'next/image';
import { IoArrowForward } from 'react-icons/io5';

export const formatUSD = (amount) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(amount);

function ContinueButton({ href, className = '' }) {
  if (!href) {
    return (
      <button type='button' disabled className={`btn w-full !cursor-not-allowed !bg-ink/15 !text-ink/50 ${className}`}>
        Continue Booking
      </button>
    );
  }
  return (
    <a href={href} className={`btn w-full ${className}`}>
      Continue Booking <IoArrowForward aria-hidden />
    </a>
  );
}

/** Sticky summary card shown beside the steps on large screens. */
export function SummaryCard({ vehicle, glass, delivery, total, href, hint }) {
  const rows = [
    { label: 'Ceramic coating', value: vehicle ? vehicle.title : 'Select a size', price: vehicle && formatUSD(vehicle.price) },
    {
      label: 'Glass coating',
      value: glass ? (glass.price ? 'Included' : 'Not included') : '—',
      price: glass?.price ? formatUSD(glass.price) : null,
    },
    { label: 'Pickup & delivery', value: delivery ? delivery.short : '—', price: delivery?.value === 'drop_off' ? 'Free' : null },
  ];

  return (
    <div className='rounded-3xl bg-mist p-6 md:p-8'>
      <span className='eyebrow'>Summary</span>
      <h2 className='mt-2 text-2xl font-bold tracking-tight text-ink'>Your ceramic coating</h2>

      <div className='relative mt-6 aspect-[16/9] w-full'>
        <Image
          key={vehicle?.value ?? 'default'}
          src={vehicle?.image ?? '/sedan_sideview.png'}
          alt={vehicle ? vehicle.title : 'Vehicle preview'}
          fill
          priority
          sizes='(min-width: 1024px) 400px, 100vw'
          className={`scale-110 object-contain mix-blend-multiply transition-opacity duration-500 ${vehicle ? 'opacity-100' : 'opacity-30'}`}
        />
      </div>

      <dl className='mt-6 divide-y divide-black/10 border-y border-black/10 text-sm'>
        {rows.map((row) => (
          <div key={row.label} className='flex items-start justify-between gap-4 py-3.5'>
            <dt className='text-ink/60'>{row.label}</dt>
            <dd className='text-right'>
              <span className='block font-medium text-ink'>{row.value}</span>
              {row.price && <span className='block text-ink/60'>{row.price}</span>}
            </dd>
          </div>
        ))}
      </dl>

      <div className='mt-5 flex items-baseline justify-between'>
        <span className='font-semibold text-ink'>Total</span>
        <span className='text-3xl font-bold tracking-tight text-ink' aria-live='polite'>{formatUSD(total)}</span>
      </div>

      <ContinueButton href={href} className='mt-6' />
      <p className='mt-3 text-center text-xs text-ink/50'>
        {href ? 'You’ll choose a date and time on the next step.' : hint}
      </p>
    </div>
  );
}

/** Compact bar pinned to the bottom of the viewport on small screens. */
export function SummaryBar({ total, href, hint }) {
  return (
    <div className='sticky bottom-0 z-30 -mx-4 mt-10 border-t border-black/10 bg-white/90 px-4 py-3 backdrop-blur md:-mx-10 md:px-10 lg:hidden'>
      <div className='flex items-center gap-4'>
        <div className='min-w-0 flex-1'>
          <span className='block text-xs text-ink/60'>Total</span>
          <span className='block text-xl font-bold tracking-tight text-ink'>{formatUSD(total)}</span>
        </div>
        <div className='w-auto'>
          <ContinueButton href={href} className='!w-auto !px-6' />
        </div>
      </div>
      {!href && <p className='mt-1.5 text-xs text-ink/50'>{hint}</p>}
    </div>
  );
}
