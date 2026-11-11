import Link from 'next/link'
import Slider from './Slider'

const reviews = [
  '/referral/review1.png',
  '/referral/review2.png',
  '/referral/review3.png',
  '/referral/review4.png',
  '/referral/review5.PNG',
  '/referral/review6.PNG',
  '/referral/review7.PNG',
]

export default function HomeTestimonials() {
  return (
    <section id='testimonialsSection' className='section bg-ink text-white'>
      <div className='container-x'>
        <div className='mx-auto mb-12 max-w-2xl text-center'>
          <div className='mb-4 flex justify-center gap-1 text-2xl text-[#FDCF0A]' aria-label='5 out of 5 stars'>
            {[...Array(5)].map((_, i) => <span key={i} aria-hidden>★</span>)}
          </div>
          <h2 className='heading'>What Our Clients Say</h2>
          <Link href='/reviews' className='link-arrow mt-5'>Read more reviews →</Link>
        </div>
        <div className='mx-auto max-w-4xl'>
          <Slider images={reviews} altPrefix='Google review' dark fit='object-contain p-4 md:p-8' />
        </div>
      </div>
    </section>
  )
}
