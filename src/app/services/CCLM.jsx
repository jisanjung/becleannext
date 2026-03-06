import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const bottleImages = [
  '/level_1_no_background.png',
  '/level_2_no_background.png',
  '/level_3_no_background.png',
]

const CCLM = () => {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % bottleImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-[#F7F7F7] py-12">
  <div className="max-w-7xl mx-auto px-4 md:px-10">
    <h2 className="mb-6 text-3xl font-bold lg:text-5xl text-center">
      Which Ceramic Coating is Right for You?
    </h2>

    {/* Dark panel spanning full width of container */}
    <div className="relative flex flex-col lg:flex-row items-center justify-between rounded-2xl p-8 lg:p-12 overflow-hidden bg-[#363434]">
      
      {/* Left Content */}
      <div className="relative z-10 max-w-lg text-white text-center flex flex-col items-center">
        <p className="mb-6 text-lg lg:text-xl text-gray-200">
          Answer a few questions to find the best ceramic coating for you.
        </p>

        <a
          href="https://docs.google.com/forms/d/1CMcB841EMiGIzINViwXbMBGX8OhA2f3Nm0kYo3S9rEU/edit"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full px-6 py-3 text-sm font-semibold text-white transition"
          style={{ backgroundColor: '#43BDD5' }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#36A9BF')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#43BDD5')}
        >
          Get started
        </a>
      </div>

      {/* Right Visual — revolving images */}
      <div className="relative z-20 mt-8 lg:mt-0 lg:ml-10 h-50 w-75">
        {bottleImages.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt="Ceramic coating Levels"
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
  </div>
</section>
  )
}

export default CCLM