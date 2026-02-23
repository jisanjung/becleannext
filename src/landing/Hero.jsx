import './styles/global.css';
import './styles/home.css';
import Image from "next/image"
import Link from "next/link"

export default function CeramicCTA() {
  return (
    <section className="w-full">
      <div className="grid lg:grid-cols-2 min-h-[500px]">

        {/* LEFT PANEL */}
        <div className="bg-[#43BDD5] flex items-center justify-center px-10 py-20 relative">
          <div className="max-w-md text-white">

            <h2 className="text-4xl font-bold leading-tight mb-6">
              Want a <br /> Ceramic  <br className="block lg:hidden" /> Coating?
            </h2>

            <p className="text-lg mb-8 text-white">
              Book a ceramic coating service from
              an installer that specializes in ceramic coatings
            </p>

<Link
  href="/book"
  className="inline-block bg-white text-[#43BDD5] px-6 py-3 rounded-md font-bold hover:opacity-90 transition"
>
  Book Now
</Link>
          </div>

{/* Logo */}
<div className="absolute 
                right-6 
                top-27 sm:top-10 lg:top-22
                w-30 h-30 
                sm:w-30 sm:h-30 
                lg:w-40 lg:h-40">
  <Image
    src="/logo_white.png"
    alt="Company Logo"
    fill
    className="object-contain"
  />
</div>
</div>

        {/* RIGHT IMAGE */}
        <div className="relative min-h-[400px]">
          <Image
            src="/landing/home_section.jpeg"
            alt="Car being washed"
            fill
            className="object-cover"
          />
            {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>
        </div>
        

      </div>
    </section>
  )
}