import './styles/global.css';
import './styles/home.css';
import Image from "next/image"
import Link from "next/link"

export default function CeramicCTA() {
  return (
    <section className="w-full" style={{ height: '60vh' }}>
      <div className="bg-[#43BDD5] grid lg:grid-cols-2 min-h-[500px] h-full">
        {/* LEFT PANEL */}
        <div id='homeHero' className="flex items-center justify-center px-10 py-20 relative">
          <div className="max-w-md text-white">
            <div className='flex'>
              <h2 className="text-4xl font-bold leading-tight mb-6">
                Want a <br /> Ceramic  <br className="block lg:hidden" /> Coating?
              </h2>
            {/* Logo */}
              <Image
                src="/logo_white.png"
                alt="Company Logo"
                className="object-contain"
                width={120}
                height={120}
              />
            </div>
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