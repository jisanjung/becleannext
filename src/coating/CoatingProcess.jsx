'use client'

import Image from 'next/image'
import { useId, useState } from 'react'
import { PROCESS_STEPS } from './tiers'

function StepImage({ step, sizes, priority = false }) {
  return (
    <Image
      key={step.image}
      src={step.image}
      alt={step.title}
      fill
      sizes={sizes}
      priority={priority}
      className={`object-cover ${step.imageClass ?? 'object-center'}`}
    />
  )
}

export default function CoatingProcess({ intro }) {
  const [active, setActive] = useState(0)
  const baseId = useId()
  const current = PROCESS_STEPS[active]

  return (
    <section className='section bg-ink text-white'>
      <div className='container-x'>
        <div className='max-w-2xl'>
          <span className='eyebrow'>How It Works</span>
          <h2 className='heading mt-3'>Our Ceramic Coating Process</h2>
          <p className='mt-5 text-lg leading-relaxed text-white/70'>{intro}</p>
        </div>

        <div className='mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16'>
          <ol className='border-t border-white/10'>
            {PROCESS_STEPS.map((step, i) => {
              const open = active === i
              const panelId = `${baseId}-panel-${i}`
              return (
                <li key={step.title} className='border-b border-white/10'>
                  <h3>
                    <button
                      type='button'
                      onClick={() => setActive(i)}
                      aria-expanded={open}
                      aria-controls={panelId}
                      className='flex w-full items-center gap-5 py-5 text-left cursor-pointer group'
                    >
                      <span
                        aria-hidden
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                          open ? 'bg-brand text-white' : 'bg-white/10 text-white/70 group-hover:bg-white/20'
                        }`}
                      >
                        {i + 1}
                      </span>
                      <span className={`text-lg font-semibold transition-colors ${open ? 'text-white' : 'text-white/70 group-hover:text-white'}`}>
                        {step.title}
                      </span>
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role='region'
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                  >
                    <div className='overflow-hidden'>
                      <p className='pb-6 pl-14 leading-relaxed text-white/70'>{step.body}</p>
                      {/* On small screens, show the photo right under the open step */}
                      {open && (
                        <div className='relative mb-6 ml-14 aspect-[4/3] overflow-hidden rounded-2xl lg:hidden'>
                          <StepImage step={step} sizes='100vw' />
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              )
            })}
          </ol>

          <div className='hidden lg:block'>
            <div className='sticky top-28 aspect-[4/5] overflow-hidden rounded-3xl bg-ink-deep'>
              <StepImage step={current} sizes='(min-width: 1024px) 560px, 0px' />
              <span className='absolute bottom-4 left-4 rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white backdrop-blur'>
                Step {active + 1} of {PROCESS_STEPS.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
