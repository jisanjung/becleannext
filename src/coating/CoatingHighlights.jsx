import Image from 'next/image'
import { HIGHLIGHTS } from './tiers'

export default function CoatingHighlights() {
  return (
    <section className='section bg-mist'>
      <div className='container-x'>
        <div className='max-w-2xl'>
          <span className='eyebrow'>The Experience</span>
          <h2 className='heading mt-3'>Full convenience, start to finish.</h2>
        </div>

        <div className='mt-12 grid gap-6 md:grid-cols-3'>
          {HIGHLIGHTS.map((h) => (
            <article key={h.title} className='group flex flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-black/5'>
              <div className='relative aspect-[4/3] overflow-hidden'>
                <Image
                  src={h.image}
                  alt=''
                  fill
                  sizes='(min-width: 768px) 33vw, 100vw'
                  className='object-cover transition duration-700 ease-out group-hover:scale-105'
                />
              </div>
              <div className='p-6 md:p-8'>
                <h3 className='text-xl font-bold tracking-tight text-ink'>{h.title}</h3>
                <p className='mt-3 leading-relaxed text-ink/70'>{h.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
