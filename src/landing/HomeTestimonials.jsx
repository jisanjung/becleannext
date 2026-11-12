import Image from 'next/image'
import Link from 'next/link'

const reviews = [
  { src: '/referral/review1.png', w: 1179, h: 916 },
  { src: '/referral/review5.PNG', w: 1179, h: 1097 },
  { src: '/referral/review2.png', w: 1179, h: 709 },
  { src: '/referral/review6.PNG', w: 1179, h: 833 },
  { src: '/referral/review3.png', w: 1179, h: 782 },
  { src: '/referral/review7.PNG', w: 1179, h: 586 },
  { src: '/referral/review4.png', w: 1179, h: 703 },
]

const Stars = ({ className = '' }) => (
  <span className={`text-[#FDCF0A] tracking-[0.15em] ${className}`} aria-hidden>★★★★★</span>
)

function ReviewCard({ src, w, h, index }) {
  return (
    <figure className='overflow-hidden rounded-2xl bg-white p-3 shadow-lg shadow-black/20 ring-1 ring-white/10 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30'>
      <Image
        src={src}
        alt={`Google review ${index + 1}`}
        width={w}
        height={h}
        sizes='(min-width: 1024px) 360px, 80vw'
        className='h-auto w-full'
      />
    </figure>
  )
}

export default function HomeTestimonials() {
  return (
    <section id='testimonialsSection' className='section overflow-hidden bg-ink text-white'>
      <div className='container-x'>
        <div className='mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between'>
          <div>
            <span className='eyebrow'>Testimonials</span>
            <h2 className='heading mt-3'>What Our Clients Say</h2>
          </div>
          <div className='flex items-center gap-4'>
            <div className='rounded-2xl bg-white/5 px-5 py-3 ring-1 ring-white/10'>
              <Stars className='text-xl' />
              <p className='mt-1 text-sm text-white/70'>5-star reviews on Google</p>
            </div>
            <Link href='/reviews' className='link-arrow'>Read more →</Link>
          </div>
        </div>

        {/* Mobile / tablet: swipeable row */}
        <div
          className='-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 md:-mx-10 md:px-10 lg:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'
          aria-label='Client reviews'
        >
          {reviews.map((r, i) => (
            <div key={r.src} className='w-[80%] max-w-sm shrink-0 snap-center self-start'>
              <ReviewCard {...r} index={i} />
            </div>
          ))}
        </div>

        {/* Desktop: staggered grid */}
        <div className='hidden columns-3 gap-6 lg:block'>
          {reviews.map((r, i) => (
            <div key={r.src} className='mb-6 break-inside-avoid'>
              <ReviewCard {...r} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
