'use client'

import Image from "next/image"
import { useRef, useState } from "react"

const tiers = [
  {
    name: "Level 3 Ceramic Coating",
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
  {
    name: "Level 2 Ceramic Coating",
    years: "4 Year Protection",
    duration: "4",
    description: (
      <>
        The perfect harmony
        <br className="lg:hidden" />
        of performance,
        <br className="lg:hidden" />
        protection, & polish.
      </>
    ),
    price: "From $1,500",
    image: "/level_2_black.png",
    features: [
      { label: "Windows coated", icon: "/icons/windshield.png", included: false },
      { label: "Decontamination wash", icon: "/icons/car_wash_white.png", included: true },
      { label: "Paint correction", icon: "/icons/car_polish_white.png", included: true },
      { label: "Wheel faces coated", icon: "/icons/wheel_white.png", included: true },
      { label: "Exterior vinyl & plastics coated", icon: "/icons/bumper_white.png", included: true },
      { label: "Headlights & taillights coated", icon: "/icons/headlight_white.png", included: true },
      { label: "4 year warranty", icon: "/icons/warranty_white.png", included: true },
      { label: "6 month guarantee", icon: "/icons/guarantee_white.png", included: true },
      { label: "Ceramic coating giftbox", icon: "/icons/gift_white.png", included: true },
    ],
  },
  {
    name: "Level 1 Ceramic Coating",
    years: "1 Year Protection",
    duration: "1",
    description: "The minimum in ceramic protection.",
    price: "From $1,000",
    image: "/level_1_black.png",
    features: [
      { label: "Windows coated", icon: "/icons/windshield.png", included: false },
      { label: "Decontamination wash", icon: "/icons/car_wash_white.png", included: true },
      { label: "Paint correction", icon: "/icons/car_polish_white.png", included: true },
      { label: "Wheel faces coated", icon: "/icons/wheel_white.png", included: true },
      { label: "Exterior vinyl & plastics coated", icon: "/icons/bumper_white.png", included: true },
      { label: "Headlights & taillights coated", icon: "/icons/headlight_white.png", included: true },
      { label: "Warranty", icon: "/icons/warranty_white.png", included: false },
      { label: "6 month guarantee", icon: "/icons/guarantee_white.png", included: true },
      { label: "Ceramic coating giftbox", icon: "/icons/gift_white.png", included: true },
    ],
  },
]

export default function Lineup() {
  const scrollRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const totalSlides = tiers.length

  const scroll = (direction) => {
    if (!scrollRef.current) return
    const width = scrollRef.current.offsetWidth
    let newIndex = currentIndex

    if (direction === "next" && currentIndex < totalSlides - 1) {
      scrollRef.current.scrollBy({ left: width, behavior: "smooth" })
      newIndex += 1
    }
    if (direction === "prev" && currentIndex > 0) {
      scrollRef.current.scrollBy({ left: -width, behavior: "smooth" })
      newIndex -= 1
    }

    setCurrentIndex(newIndex)
  }

  const getPrevColor = () => {
    if (currentIndex === 0) return "#3F3F3F" // start
    return "#838383" // middle
  }

  const getNextColor = () => {
    if (currentIndex === totalSlides - 1) return "#3F3F3F" // end
    return "#838383" // middle
  }

  const getPrevChevronColor = () => (currentIndex === 0 ? "#656767" : "#FFFFFF")
  const getNextChevronColor = () => (currentIndex === totalSlides - 1 ? "#656767" : "#FFFFFF")

  return (
    <section className="bg-[#363434] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-16">Explore the lineup.</h2>

        {/* Mobile Swipe Version */}
        <div className="lg:hidden">
          <div ref={scrollRef} className="flex overflow-x-auto snap-x snap-mandatory gap-4 mb-4">
            {tiers.map((tier, index) => (
              <div key={index} className="min-w-[85%] sm:min-w-[70%] flex-shrink-0 snap-center flex flex-col relative">
                {/* Top content */}
                <div className="flex flex-col text-left lg:text-center">
                  <div className="relative h-48 w-full mb-6">
                    <Image src={tier.image} alt={tier.name} fill className="object-contain" />
                  </div>
                  <h3 className="text-xl font-semibold">
                    {tier.name.split(" Ceramic Coating")[0]}<br />Ceramic Coating
                  </h3>
                  <p className="text-base font-semibold text-white mt-3">{tier.years}</p>
                  <p className="text-sm text-white mt-4 min-h-[80px] px-0 lg:px-6">{tier.description}</p>

                  {/* Buttons */}
                  <div className="flex gap-4 mt-5 justify-start lg:justify-center">
                    <button className="bg-[#43BDD5] text-white text-sm px-4 py-2 rounded-full">Learn More</button>
                    <button className="text-[#43BDD5] text-sm flex items-center gap-1">
                      Book
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-white my-6"></div>

                  {/* Durability */}
                  <div className="text-left lg:text-center mb-10">
                    <p className="text-3xl font-bold">
                      {tier.duration}
                      <span className="text-base font-semibold ml-3">
                        year{tier.duration !== "1" && "s"}
                      </span>
                    </p>
                    <p className="text-white text-base">Durability</p>
                  </div>

                  {/* Features */}
                  <div className="space-y-6 text-left lg:text-center">
                    {tier.features.map((feature, i) => (
                      <div key={i} className="flex flex-col items-start lg:items-center justify-start space-y-3 min-h-[120px]">
                        {feature.included && (
                          <>
                            <div className="relative h-15 w-15">
                              <Image src={feature.icon} alt={feature.label} fill className="object-contain" />
                            </div>
                            <p className="text-base text-left lg:text-center text-white">{feature.label}</p>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Arrows with dynamic color */}
          <div className="flex justify-end gap-4 mt-4">
            {/* Previous */}
            <button
              onClick={() => scroll("prev")}
              style={{ backgroundColor: getPrevColor() }}
              className="h-10 w-10 rounded-full flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke={getPrevChevronColor()} strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next */}
            <button
              onClick={() => scroll("next")}
              style={{ backgroundColor: getNextColor() }}
              className="h-10 w-10 rounded-full flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke={getNextChevronColor()} strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop Grid Version */}
        <div className="hidden lg:block mb-16">
          {/* Top Section (Image, Text, Buttons) */}
          <div className="grid lg:grid-cols-3 gap-16">
            {tiers.map((tier, index) => (
              <div key={index} className="flex flex-col text-center">
                <div className="relative h-48 w-full mb-6">
                  <Image src={tier.image} alt={tier.name} fill className="object-contain" />
                </div>

                <h3 className="text-xl font-semibold">
                  {tier.name.split(" Ceramic Coating")[0]}<br />Ceramic Coating
                </h3>

                <p className="text-base font-semibold text-white mt-3">{tier.years}</p>
                <p className="text-sm text-white mt-4 px-6 min-h-[80px]">{tier.description}</p>
                <p className="text-base font-semibold mt-0">{tier.price}</p>

                <div className="flex justify-center gap-4 mt-5">
                  <button className="bg-[#43BDD5] text-white text-sm px-4 py-2 rounded-full">
                    Learn More
                  </button>
                  <button className="text-[#43BDD5] text-sm flex items-center gap-1">
                    Book
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* ONE TRUE DIVIDER */}
          <div className="border-t border-white my-10"></div>

          {/* Bottom Section (Durability + Features) */}
          <div className="grid lg:grid-cols-3 gap-16">
            {tiers.map((tier, index) => (
              <div key={index} className="text-center">
                <div>
                  <p className="text-3xl font-bold">
                    {tier.duration}
                    <span className="text-base font-semibold ml-3">
                      year{tier.duration !== "1" && "s"}
                    </span>
                  </p>
                  <p className="text-white text-base">Durability</p>
                </div>

                <div className="space-y-6 text-center mt-6">
                  {tier.features.map((feature, i) => (
                    <div key={i} className="flex flex-col items-center space-y-3 min-h-[120px]">
                      {feature.included && (
                        <>
                          <div className="relative h-15 w-15">
                            <Image src={feature.icon} alt={feature.label} fill className="object-contain" />
                          </div>
                          <p className="text-base text-white">{feature.label}</p>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}