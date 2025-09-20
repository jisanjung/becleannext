import Image from "next/image"

const Hero = ({ className }) => {
  return (
    <div className={`service-hero ${className}`}>
        <div className="wrapper px-4 md:px-10 py-4">
            <h1 className="text-center font-bold mb-1 text-white lg:text-2xl lg:my-4">8 - Year Ceramic Coating</h1>
            <h2 className="text-center font-bold text-2xl text-white lg:text-5xl">Balanced for every demand.</h2>
            <div className="flex justify-center">
              <Image
                  src='/service_hero.png'
                  alt='Porshe 911 GT3RS'
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto object-cover lg:w-4/5"
              />
            </div>
            <div className="flex justify-center">
              <a href='tel:+12674096913' className="mb-4 button inline-block w-full lg:w-auto text-center">Call Us</a>
            </div>
            <p className="text-center">From $1,500</p>
        </div>
    </div>
  )
}

export default Hero