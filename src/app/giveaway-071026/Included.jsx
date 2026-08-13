'use client'

import Image from "next/image"

const tiers = [
  {
    name: "Level 3 Ceramic Coating",
    href: "/level-3-ceramic-coating",
    years: "9 Year Protection",
    duration: "9",
    description: "For those who want the best.",
    price: "From $3,000",
    image: "/level_3_black.png",
    features: [
      { label: "Windows coated", icon: "/icons/windshield.png", included: true },
      { label: "Decontamination wash", icon: "/icons/car_wash_white.png", included: true },
      { label: "Paint correction", icon: "/icons/car_polish_white.png", included: true },
      { label: "Wheel faces coated", icon: "/icons/wheel_white.png", included: true },
      { label: "Exterior vinyl & plastics coated", icon: "/icons/bumper_white.png", included: true },
      { label: "Headlights & taillights coated", icon: "/icons/headlight_white.png", included: true },
      { label: "9 year warranty", icon: "/icons/warranty_white.png", included: true },
      { label: "6 month guarantee", icon: "/icons/guarantee_white.png", included: true },
      { label: "Ceramic coating giftbox", icon: "/icons/gift_white.png", included: true },
    ],
  },
]

export default function Included() {
  const tier = tiers[0]
 

  return (
    <section className="bg-[#363434] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-16">Grand Prize Breakdown</h2>

        {/* Desktop Grid Version */}
        <div className="max-w-2xl mx-auto text-center">

  <div className="relative h-64 w-full mb-6">
    <Image
      src={tier.image}
      alt={tier.name}
      fill
      className="object-contain"
    />
  </div>

  <h3 className="text-3xl font-semibold">
    Level 3
    <br />
    Ceramic Coating
  </h3>

  <p className="text-xl font-semibold text-white mt-3">
    {tier.years}
  </p>

  <p className="text-white mt-6">
    Engineered for those who want the best.
    <br />
    Our most complete ceramic coating service.
  </p>

  <p className="text-2xl font-semibold mt-6">
    {tier.price}
  </p>

  <div className="flex justify-center gap-6 mt-8">
    <a
      href={tier.href}
      className="bg-[#43BDD5] text-white px-6 py-3 rounded-full"
    >
      Learn More
    </a>

    <a
      href="#giveaway-form"
      className="text-[#43BDD5] flex items-center gap-1"
    >
      ENTER GIVEAWAY
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </a>
  </div>

  <div className="border-t border-white my-10"></div>

  <div>
    <p className="text-4xl font-bold">
      9
      <span className="text-lg ml-2">years</span>
    </p>

    <p className="text-white">Durability</p>
  </div>

  <div className="space-y-6 mt-10">
    {tier.features.map((feature, i) => (
      <div
        key={i}
        className="flex flex-col items-center space-y-3"
      >
        <div className="relative h-14 w-14">
          <Image
            src={feature.icon}
            alt={feature.label}
            fill
            className="object-contain"
          />
        </div>

        <p>{feature.label}</p>
      </div>
    ))}
  </div>
              </div>
          </div>
    </section>
  )
}