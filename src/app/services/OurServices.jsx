'use client'

import Image from "next/image"
import { useRef, useState } from "react"
import Link from "next/link"

const tiers = [
  {
    name: "Level 3 Ceramic Coating",
    years: "9 Year Protection",
    duration: "9",
    description: "For those who want the best.",
    price: "From $3,000",
    image: "/level_3_no_background.png",
    learnMoreHref: "/level-3-ceramic-coating",
    bookHref: "/book",
  },
  {
    name: "Level 2 Ceramic Coating",
    years: "4 Year Protection",
    duration: "4",
    description: (
      <>
        The perfect harmony{' '}
        <br className="lg:hidden" />
        of performance,{' '}
        <br className="lg:hidden" />
        protection, & polish.
      </>
    ),
    price: "From $1,500",
    image: "/level_2_no_background.png",
    learnMoreHref: "/level-2-ceramic-coating",
    bookHref: "/book",
  },
  {
    name: "Level 1 Ceramic Coating",
    years: "1 Year Protection",
    duration: "1",
    description: "The minimum in ceramic protection.",
    price: "From $1,000",
    image: "/level_1_no_background.png",
    learnMoreHref: "/level-1-ceramic-coating",
    bookHref: "/book",
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

  const getPrevColor = () =>
    currentIndex === 0 ? "#3F3F3F" : "#838383"

  const getNextColor = () =>
    currentIndex === totalSlides - 1 ? "#3F3F3F" : "#838383"

  const getPrevChevronColor = () =>
    currentIndex === 0 ? "#656767" : "#FFFFFF"

  const getNextChevronColor = () =>
    currentIndex === totalSlides - 1 ? "#656767" : "#FFFFFF"

  return (
    <section className="bg-[#F7F7F7] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Updated Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <h2 className="text-5xl font-bold">
            Our Ceramic Coating
            < br/> 
            Services.
          </h2>

        <Link
        href="#lineupSection"
        className="text-[#43BDD5] mt-4 lg:mt-0 flex items-center gap-1 group"
        >
        Compare all ceramic coating services
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        </Link>
        </div>

        {/* Mobile Swipe Version */}
        <div className="lg:hidden">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 mb-4"
          >
            {tiers.map((tier, index) => (
              <div
                key={index}
                className="min-w-[85%] sm:min-w-[70%] flex-shrink-0 snap-center flex flex-col"
              >
                <div className="relative h-48 w-full mb-6">
                  <Image
                    src={tier.image}
                    alt={tier.name}
                    fill
                    className="object-contain"
                  />
                </div>

                <h3 className="text-xl font-semibold">
                  {tier.name.split(" Ceramic Coating")[0]}
                  <br />
                  Ceramic Coating
                </h3>

                <p className="text-base font-semibold mt-3">
                  {tier.years}
                </p>

                <p className="text-sm mt-4 min-h-[80px]">
                  {tier.description}
                </p>

                <p className="text-base font-semibold mt-4">
                  {tier.price}
                </p>

                <div className="flex gap-4 mt-5">
                  <Link
                    href={tier.learnMoreHref}
                    className="bg-[#43BDD5] text-white text-sm px-4 py-2 rounded-full"
                  >
                    Learn More
                  </Link>

                  <Link
                    href={tier.bookHref}
                    className="text-[#43BDD5] text-sm flex items-center gap-1 group"
                  >
                    Book
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Arrows */}
          <div className="flex justify-end gap-4 mt-4">
            <button
              onClick={() => scroll("prev")}
              style={{ backgroundColor: getPrevColor() }}
              className="h-10 w-10 rounded-full flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke={getPrevChevronColor()}
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={() => scroll("next")}
              style={{ backgroundColor: getNextColor() }}
              className="h-10 w-10 rounded-full flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke={getNextChevronColor()}
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop Grid Version */}
        <div className="hidden lg:block">
          <div className="grid lg:grid-cols-3 gap-16">
            {tiers.map((tier, index) => (
              <div key={index} className="flex flex-col text-center">
                <div className="relative h-48 w-full mb-6">
                  <Image
                    src={tier.image}
                    alt={tier.name}
                    fill
                    className="object-contain"
                  />
                </div>

                <h3 className="text-xl font-semibold">
                  {tier.name.split(" Ceramic Coating")[0]}
                  <br />
                  Ceramic Coating
                </h3>

                <p className="text-base font-semibold mt-3">
                  {tier.years}
                </p>

                <p className="text-sm mt-4 px-6 min-h-[80px]">
                  {tier.description}
                </p>

                <p className="text-base font-semibold mt-4">
                  {tier.price}
                </p>

                <div className="flex justify-center gap-4 mt-5">
                  <Link
                    href={tier.learnMoreHref}
                    className="bg-[#43BDD5] text-white text-sm px-4 py-2 rounded-full"
                  >
                    Learn More
                  </Link>

                  <Link
                    href={tier.bookHref}
                    className="text-[#43BDD5] text-sm flex items-center gap-1 group"
                  >
                    Book
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}