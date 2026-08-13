"use client"

import { useEffect, useState } from "react"

export default function Header() {
  const targetDate = new Date("2026-07-11T03:59:00Z")

  const calculateTimeLeft = () => {
    const difference = targetDate - new Date()

    if (difference <= 0) {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
        milliseconds: "00",
      }
    }

    return {
      days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
      hours: String(
        Math.floor((difference / (1000 * 60 * 60)) % 24)
      ).padStart(2, "0"),
      minutes: String(
        Math.floor((difference / (1000 * 60)) % 60)
      ).padStart(2, "0"),
      seconds: String(
        Math.floor((difference / 1000) % 60)
      ).padStart(2, "0"),
      milliseconds: String(
    Math.floor((difference % 1000) / 10)
  ).padStart(2, "0"),
    }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  const images = [
  "/services/little_red_corvette.png",
  "/sedan_gray_zone.png",
  "/services/m4_green.png",
  "/suv_gray_zone.png",
]

const [currentImage, setCurrentImage] = useState(0)
const [fade, setFade] = useState(true)
  useEffect(() => {
  const timer = setInterval(() => {
    setTimeLeft(calculateTimeLeft())
  }, 50)

  return () => clearInterval(timer)
}, [])

useEffect(() => {
  const imageTimer = setInterval(() => {
    setFade(false)

    setTimeout(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
      setFade(true)
    }, 500)
  }, 4000)

  return () => clearInterval(imageTimer)
}, [])

  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">

        {/* Countdown */}
        <div className="mb-16">

  <p className="uppercase tracking-[0.3em] text-xs md:text-sm text-gray-400 mb-8">
    Entry Deadline:
    <span className="text-[#F4C542] ml-3">
      July 10, 2026 · 11:59 PM ET
    </span>
  </p>

  <div className="flex justify-center items-center gap-1 md:gap-4 overflow-x-auto">

    {/* Days */}
    <div className="w-12 md:w-28">
      <div className="border border-gray-700 border-t-2 border-t-[#EC3737] bg-[#0B0B0B] py-4 md:py-6">
        <div className="text-2xl md:text-7xl font-bold text-white">
          {timeLeft.days}
        </div>
      </div>
      <div className="mt-2 text-[9px] md:text-xs tracking-[0.1em] text-gray-400 uppercase">
        Days
      </div>
    </div>

    <div className="flex items-center self-start pt-4 md:pt-8"><span className="text-[#EC3737] text-3xl md:text-5xl font-bold">:</span></div>

    {/* Hours */}
    <div className="w-12 md:w-28">
      <div className="border border-gray-700 border-t-2 border-t-[#EC3737] bg-[#0B0B0B] py-4 md:py-6">
        <div className="text-2xl md:text-7xl font-bold text-white">
          {timeLeft.hours}
        </div>
      </div>
      <div className="mt-2 text-[9px] md:text-xs tracking-[0.1em] text-gray-400 uppercase">
        Hours
      </div>
    </div>

    <div className="flex items-center self-start pt-4 md:pt-8"><span className="text-[#EC3737] text-3xl md:text-5xl font-bold">:</span></div>

    {/* Minutes */}
    <div className="w-12 md:w-28">
      <div className="border border-gray-700 border-t-2 border-t-[#EC3737] bg-[#0B0B0B] py-4 md:py-6">
        <div className="text-2xl md:text-7xl font-bold text-white">
          {timeLeft.minutes}
        </div>
      </div>
      <div className="mt-2 text-[9px] md:text-xs tracking-[0.1em] text-gray-400 uppercase">
        Minutes
      </div>
    </div>

    <div className="flex items-center self-start pt-4 md:pt-8"><span className="text-[#EC3737] text-3xl md:text-5xl font-bold">:</span></div>

    {/* Seconds */}
    <div className="w-12 md:w-28">
      <div className="border border-gray-700 border-t-2 border-t-[#EC3737] bg-[#0B0B0B] py-4 md:py-6">
        <div className="text-2xl md:text-7xl font-bold text-[#EC3737]">
          {timeLeft.seconds}
        </div>
      </div>
      <div className="mt-2 text-[9px] md:text-xs tracking-[0.1em] text-gray-400 uppercase">
        Seconds
      </div>
    </div>

    <div className="flex items-center self-start pt-4 md:pt-8"><span className="text-[#EC3737] text-3xl md:text-5xl font-bold">:</span></div>

    {/* Milliseconds */}
    <div className="w-12 md:w-28">
      <div className="border border-gray-700 border-t-2 border-t-[#EC3737] bg-[#0B0B0B] py-4 md:py-6">
        <div className="text-2xl md:text-7xl font-bold text-[#EC3737]">
          {timeLeft.milliseconds}
        </div>
      </div>
      <div className="mt-2 text-[9px] md:text-xs tracking-[0.1em] text-gray-400 uppercase">
        MS
      </div>
    </div>

  </div>
</div>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-bold mb-10">
          New Car Owners in 10 Miles of Harlesyville
          <br />
          9 Year Ceramic Coating Giveaway
        </h2>

        {/* Prize Value */}
        <div className="text-6xl md:text-8xl font-bold mb-10">
          $3,000 Value
        </div>

        {/* Legal Text */}
        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-16">
  NO PURCHASE NECESSARY. Open to eligible participants.
  Ends July 10th at 11:59 PM. See full{" "}
  <a href="#rules" className="underline hover:text-white transition-colors">Official Rules</a>{" "}below.
</p>

    <div
  id="contactSection"
  className="py-15 text-black rounded-2xl"
>
  <div className="container max-w-3xl mx-auto px-1">
    <div id="contactBanner" className="mb-0">
      <h2 className="text-6xl md:text-6xl font-bold text-white text-center mb-4">
      Enter to Win
      </h2>
      <div id="logoBanner">
        <img
        src={images[currentImage]}
        alt="Giveaway vehicle"
        className={`mx-auto transition-opacity duration-500 ${
  fade ? "opacity-100" : "opacity-0"
}`}
        />
      </div>
    </div>
  </div>
</div>

</div>

</section>
  )
}