'use client'

import './styles/services.css'
import Image from "next/image"
import { useEffect, useState } from "react"

export default function ConsultationSection() {

  const bottleImages = [
    '/level_1_no_background.png',
    '/level_2_no_background.png',
    '/level_3_no_background.png',
  ]

  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % bottleImages.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-[#FFFFFF] py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4">
          <span className="text-[#43BDD5]">FREE</span> Custom Consultation
        </h2>

        <p className="text-gray-700 max-w-3xl mx-auto mb-12">
          These custom guides are curated to your specific driving habits, needs, and lifestyle.
          Select either one to discover the ideal ceramic coating or cleaning plan for you.
        </p>

        <div className="border-t border-gray-400 mb-12"></div>

        {/* Two Columns */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT CARD – Revolving Bottles */}
<div>
  <h3 className="text-2xl font-bold mb-6">
    Which Ceramic Coating is Right for You?
  </h3>

  <div className="relative rounded-2xl bg-gradient-to-br from-[#2b2b2b] via-[#242424] to-[#1f1f1f] 
                  p-8 overflow-hidden min-h-[240px] flex items-center justify-between">

    {/* Text */}
    <div className="relative z-10 max-w-xs text-white text-center">
      <p className="mb-6 text-sm text-left md:text-base md:text-center text-gray-200">
        <span className="block md:inline">Answer a few </span>
        <span className="block md:inline">questions to </span>
        <span className="block md:inline">find the best ceramic </span>
        <span className="block md:inline">coating for you.</span>
      </p>
    </div>

    {/* Revolving Bottle Visual */}
    <div className="relative z-20 h-36 w-36">
      {bottleImages.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt="Ceramic coating level"
          fill
          className={`object-contain transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>

    {/* Decorative Pattern — bottom layer */}
    <div
      className="absolute right-0 top-0 h-full w-1/3 z-0 pointer-events-none"
      style={{
        backgroundImage: "url('wasp.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "40px 40px",
        WebkitMaskImage:
          "linear-gradient(to left, black 0%, black 10%, transparent 100%)",
        maskImage:
          "linear-gradient(to left, black 0%, black 10%, transparent 100%)",
      }}
    />
  </div>

  {/* Get Started button, same positioning as right card */}
  <a
    href="https://docs.google.com/forms/d/1CMcB841EMiGIzINViwXbMBGX8OhA2f3Nm0kYo3S9rEU/edit"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-8 inline-block bg-[#43BDD5] text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition"
  >
    Get Started
  </a>
</div>

          {/* RIGHT CARD – Cleaning Plan */}
<div>
  <h3 className="text-2xl font-bold mb-6">
    Custom Car Cleaning Plan
  </h3>

  <div className="relative rounded-3xl bg-[#F7F7F7] p-10 lg:p-12  min-h-[260px]  flex flex-col items-center justify-start lg:justify-center 
  pt-9 lg:pt-12 
  overflow-hidden">

{/* TOP LEFT */}
<img
  src="/wasp.png"
  alt=""
  className="absolute top-6 left-6 w-12 -rotate-45 scale-x-[-1] scale-y-[-1]"
/>

{/* TOP RIGHT */}
<img
  src="/wasp.png"
  alt=""
  className="absolute top-6 right-6 w-12 -rotate-135 scale-x-[-1]"
/>

{/* BOTTOM LEFT */}
<img
  src="/wasp.png"
  alt=""
  className="absolute bottom-6 left-6 w-12 -rotate-135 scale-y-[-1]"
/>

{/* BOTTOM RIGHT */}
<img
  src="/wasp.png"
  alt=""
  className="absolute bottom-6 right-6 w-12 -rotate-45"
/>

    {/* CENTER LOGO */}
    <div className="mb-1">
      <Image
        src="/beclean_wreath_white_background.png" 
        alt="Logo"
        width={75}
        height={75}
      />
    </div>

    {/* CENTER TEXT */}
    <p className="text-center text-lg font-medium max-w-md">
      Answer a few questions to get your ideal car cleaning plan
    </p>

  </div>

  <a
    href="https://docs.google.com/forms/d/e/1FAIpQLSdd8xeXyN501FlSOvWhe-c7mibQPedlGWLX9U5ljGmf7PCYzQ/viewform?usp=header"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-8 inline-block bg-[#43BDD5] text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition"
  >
    Get Started
  </a>
</div>

        </div>

      </div>
    </section>
  )
}