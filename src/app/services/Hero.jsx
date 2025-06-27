import ButtonPrimary from "@/components/ButtonPrimary"
import Image from "next/image"

const Hero = ({ className }) => {
  return (
    <div className={`${className}`}>
        <div className="wrapper px-4 md:px-10 py-4">
            <h1 className="text-center font-bold mb-1">Ceramic Coating Services</h1>
            <h2 className="text-center font-bold text-3xl">Brilliance that Lasts.</h2>
            < Image
                src='/service_hero.png'
                alt='Porshe 911 GT3RS'
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto object-cover"
            />
            <ButtonPrimary className='mb-4'>
                Book now
            </ButtonPrimary>
            <p className="text-center">From $1,500</p>
        </div>
    </div>
  )
}

export default Hero