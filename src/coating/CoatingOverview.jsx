export default function CoatingOverview({ tier }) {
  const stats = [
    { value: `${tier.years} yr`, label: 'Rated durability' },
    { value: tier.features.warranty ? `${tier.years} yr` : '6 mo', label: tier.features.warranty ? 'Warranty' : 'Guarantee' },
    { value: '1 day', label: 'Turnaround' },
    { value: 'Free', label: 'Pickup & delivery' },
  ]

  return (
    <section className='section bg-white'>
      <div className='container-x'>
        <div className='grid gap-12 lg:grid-cols-2 lg:gap-20'>
          <div>
            <span className='eyebrow'>The Coating</span>
            <h2 className='heading mt-3'>{tier.name}.</h2>
            <p className='mt-6 text-lg leading-relaxed text-ink/70'>{tier.description}</p>
          </div>

          <div className='lg:pt-9'>
            <h3 className='text-sm font-semibold uppercase tracking-[0.2em] text-ink/50'>Who it’s for</h3>
            <p className='mt-4 text-2xl font-bold tracking-tight text-ink'>{tier.audienceHeading}</p>
            <p className='mt-4 leading-relaxed text-ink/70'>{tier.audience}</p>
          </div>
        </div>

        <dl className='mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-black/10 ring-1 ring-black/10 md:grid-cols-4'>
          {stats.map((s) => (
            <div key={s.label} className='bg-mist p-6 md:p-8'>
              <dt className='text-sm text-ink/60'>{s.label}</dt>
              <dd className='mt-2 text-3xl font-bold tracking-tight text-ink md:text-4xl'>{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
