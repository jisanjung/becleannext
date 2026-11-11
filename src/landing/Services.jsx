'use client'

import Image from "next/image"
import { useEffect, useState } from "react"

const bottleImages = [
  '/level_1_no_background.png',
  '/level_2_no_background.png',
  '/level_3_no_background.png',
]

const COATING_FORM = 'https://docs.google.com/forms/d/1CMcB841EMiGIzINViwXbMBGX8OhA2f3Nm0kYo3S9rEU/edit'
const CLEANING_FORM = 'https://docs.google.com/forms/d/e/1FAIpQLSdd8xeXyN501FlSOvWhe-c7mibQPedlGWLX9U5ljGmf7PCYzQ/viewform?usp=header'

function Card({ title, description, href, dark, visual }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex flex-col overflow-hidden rounded-3xl p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl md:p-10 ${
        dark ? 'bg-ink text-white hover:shadow-black/20' : 'bg-mist text-ink ring-1 ring-black/5 hover:shadow-black/10'
      }`}
    >
      <div className="flex h-44 items-center justify-center">{visual}</div>
      <h3 className="mt-8 text-2xl font-bold tracking-tight">{title}</h3>
      <p className={`mt-3 mb-8 leading-relaxed ${dark ? 'text-white/70' : 'text-ink/70'}`}>{description}</p>
      <span className="btn mt-auto self-start">
        Get Started <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
      </span>
    </a>
  )
}

export default function ConsultationSection() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % bottleImages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="consultation" className="section !pt-0 bg-white">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Free Custom Consultation</span>
          <h2 className="heading mt-3">
            Find the right plan for <span className="text-brand">your car</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/70">
            These custom guides are curated to your specific driving habits, needs, and lifestyle.
            Select either one to discover the ideal ceramic coating or cleaning plan for you.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Card
            dark
            href={COATING_FORM}
            title="Which Ceramic Coating is Right for You?"
            description="Answer a few questions to find the best ceramic coating for you."
            visual={
              <div className="relative h-44 w-44">
                {bottleImages.map((src, index) => (
                  <Image
                    key={src}
                    src={src}
                    alt={index === currentImage ? 'beclean ceramic coating bottle' : ''}
                    fill
                    sizes="176px"
                    className={`object-contain transition-opacity duration-1000 ${
                      index === currentImage ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
              </div>
            }
          />
          <Card
            href={CLEANING_FORM}
            title="Custom Car Cleaning Plan"
            description="Answer a few questions to get your ideal car cleaning plan."
            visual={
              <Image
                src="/logo_wreath.png"
                alt=""
                width={120}
                height={120}
               
              />
            }
          />
        </div>
      </div>
    </section>
  )
}
