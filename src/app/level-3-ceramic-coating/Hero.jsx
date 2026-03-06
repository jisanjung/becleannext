import Image from "next/image"

const Hero = ({ className }) => {
  return (
    <div className="service-hero-level3">
        <div className="wrapper px-4 md:px-10 py-4">
            <h1 className="text-center font-bold mb-1 text-white lg:text-2xl lg:my-4">Level 3 Ceramic Coating Service</h1>
            <h2 className="text-center font-bold text-2xl text-white lg:text-5xl mb-0">9 Year Protection</h2>
            <div className="relative w-full h-[260px] sm:h-[360px] lg:h-[520px] mb-3 lg:mb-0 overflow-hidden">
            <Image
              src="/services/m4_green.png"
              alt="Oxford Green M4"
              width={1920}
              height={1080}
              className="absolute top-[-10%] left-[50%] -translate-x-1/2 scale-[1.3] lg:top-[-33%] lg:scale-[1.15]"
            />
          </div>
            <div className="flex justify-center">
              <a href='/book' className="mb-4 lg:mt-8 button inline-block w-full lg:w-auto text-center">Book Now</a>
            </div>
            <p className="text-center">From $3,000</p>
        </div>
    </div>
  )
}

export default Hero