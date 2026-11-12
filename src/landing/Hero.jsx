import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative flex min-h-[90svh] items-end overflow-hidden bg-ink text-white md:items-center">
      <Image
        src="/landing/home_section.jpeg"
        alt="beclean installer preparing a car for ceramic coating"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[50%_55%]"
      />
      {/* Overlays for legibility */}
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 to-black/45 md:bg-gradient-to-r md:from-black/90 md:via-black/70 md:to-black/20" />

      <div className="container-x relative z-10 pt-32 pb-16 md:pb-0">
        <div className="max-w-xl [text-shadow:0_2px_20px_rgba(0,0,0,0.5)]">
          <span className="eyebrow">Ceramic Coating Specialists</span>
          <h1 className="mt-4 text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            Want a Ceramic Coating?
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-white/90">
            Book a ceramic coating service from an installer that specializes in ceramic coatings.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/book" className="btn">Book Now</Link>
            <a href="#consultation" className="btn-ghost">Find Your Coating</a>
          </div>
          <ul className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/85">
            <li className="flex items-center gap-2">
              <span className="text-[#FDCF0A]" aria-hidden>★★★★★</span> 5-star rated
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-white/40" aria-hidden /> Free pickup &amp; delivery
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-white/40" aria-hidden /> Coatings only
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
