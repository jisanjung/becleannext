import { TfiSpray } from 'react-icons/tfi';
import { GoShieldCheck } from 'react-icons/go';
import { IoGiftOutline, IoCarSportOutline } from 'react-icons/io5';

const INCLUDED = [
  { icon: TfiSpray, title: '4 Year Ceramic Coating', body: 'All painted surfaces, trim, and rims.' },
  { icon: GoShieldCheck, title: 'Glass Ceramic Coating', body: 'Optional coating made specifically for windows.' },
  { icon: IoGiftOutline, title: 'Ceramic Coating Gift Box', body: 'Quick detailer, premium microfiber towel, and warranty card.' },
  { icon: IoCarSportOutline, title: 'Free Pickup & Delivery', body: 'Free vehicle drop-off and same-day delivery.' },
];

export default function BookInfo() {
  return (
    <section className='section border-t border-black/10 bg-white'>
      <div className='container-x grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20'>
        <div>
          <span className='eyebrow'>The Service</span>
          <h2 className='heading mt-3'>Ceramic coating, done right.</h2>
          <p className='mt-6 text-lg leading-relaxed text-ink/70'>
            Ceramic coatings are the best way to get long-lasting paint protection while greatly improving the
            appearance of your car. Expert polishing revives the paint, removes scratches, and brings an amazing
            shine. Paint decontamination lets the coating bond to the paint so it lasts longer. A professional
            application gives you the perfect blend of a long-lasting, smooth, and visually striking car.
          </p>
        </div>

        <div>
          <h3 className='text-sm font-semibold uppercase tracking-[0.2em] text-ink/50'>What’s included</h3>
          <ul className='mt-6 grid gap-4 sm:grid-cols-2'>
            {INCLUDED.map(({ icon: Icon, title, body }) => (
              <li key={title} className='rounded-2xl bg-mist p-6'>
                <span className='flex h-11 w-11 items-center justify-center rounded-full bg-white text-lg text-brand'>
                  <Icon aria-hidden />
                </span>
                <p className='mt-4 font-semibold text-ink'>{title}</p>
                <p className='mt-1 text-sm leading-relaxed text-ink/60'>{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
