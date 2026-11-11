import Link from 'next/link'
import Slider from './Slider'

const workImages = [
  '/referral/work_example1.JPG',
  '/referral/work_example3.JPG',
  '/referral/work_example12.JPG',
  '/referral/work_example9.JPG',
  '/referral/work_example8.JPG',
  '/referral/work_example5.JPG',
  '/referral/work_example13.JPG',
  '/referral/work_example4.JPG',
  '/referral/work_example2.JPG',
  '/referral/work_example11.JPG',
  '/referral/work_example10.JPG',
  '/referral/work_example7.JPG',
]

export default function HomeOurWork() {
  return (
    <section id='ourWorkSection' className='section bg-mist'>
      <div className='container-x'>
        <div className='mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between'>
          <div>
            <span className='eyebrow'>Portfolio</span>
            <h2 className='heading mt-3'>Our Work</h2>
          </div>
          <Link href='/our-work' className='link-arrow'>View all work →</Link>
        </div>
        <div className='mx-auto max-w-3xl'>
          <Slider images={workImages} altPrefix='Our work' aspect='aspect-[4/3]' fit='object-contain' />
        </div>
      </div>
    </section>
  )
}
