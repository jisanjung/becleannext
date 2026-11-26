import Image from 'next/image'
import { FaCheck } from 'react-icons/fa6'

const ADVANTAGES = [
  'Scratch resistant',
  'Car looks immaculate',
  'Easier to clean',
  'Repels mud, dirt, and pollen',
  'Car looks newer for longer',
  'Protects against oxidation',
  'Long-lasting shine',
  'Intense water beading and smoothness',
  'Increases resale value',
  'Self cleaning',
]

export default function Advantages() {
  return (
    <section className='section bg-white'>
      <div className='container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20'>
        <div>
          <span className='eyebrow'>The Benefits</span>
          <h2 className='heading mt-3'>What are the advantages of ceramic coating?</h2>
          <p className='mt-6 text-lg leading-relaxed text-ink/70'>
            Thinking about transforming your car with a ceramic coating? A professional ceramic coating service gives
            you:
          </p>
          <ul className='mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2'>
            {ADVANTAGES.map((item) => (
              <li key={item} className='flex items-start gap-3 text-ink'>
                <span className='mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand'>
                  <FaCheck aria-hidden className='text-[10px]' />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className='relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-mist'>
          <Image
            src='/referral/work_example9.JPG'
            alt='Ceramic coated car in the beclean studio'
            fill
            sizes='(min-width: 1024px) 50vw, 100vw'
            className='object-cover'
          />
        </div>
      </div>
    </section>
  )
}
