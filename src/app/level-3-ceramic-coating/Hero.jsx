import Image from "next/image"

const Hero = ({ className }) => {
  return (
    <div className={`service-hero ${className}`}>
        <div className="wrapper px-4 md:px-10 py-4">
            <h1 className="text-center font-bold mb-1 text-white lg:text-2xl lg:my-4">Level 3 Ceramic Coating Service</h1>
            <h2 className="text-center font-bold text-2xl text-white lg:text-5xl mb-0">9 Year Protection</h2>
            <div className="flex justify-center mb-3 lg:mb-0 overflow-hidden">
              <Image
                src="/services/m4_green.png"
                alt="Oxford Green M4"
                width={1920}
                height={1080}
                sizes="100vw"
                className="w-full h-auto lg:w-[120%] mx-auto"
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