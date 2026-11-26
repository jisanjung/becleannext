import Image from "next/image"
import Link from "next/link"

// Alternate hero: brand-blue text panel + photo panel.
export default function HeroSplit() {
  return (
    <section className="grid bg-brand text-white lg:min-h-[90svh] lg:grid-cols-2">
      {/* LEFT PANEL */}
      <div className="relative flex items-center overflow-hidden px-4 pt-32 pb-16 md:px-10 lg:py-32 lg:pr-16 lg:pl-[max(2.5rem,calc((100vw-72rem)/2+2.5rem))]">
        {/* Subtle logo watermark */}
        <Image
          src="/logo_white.png"
          alt=""
          width={520}
          height={520}
          aria-hidden
          className="pointer-events-none absolute -right-24 -bottom-24 w-[420px] opacity-[0.08] select-none"
        />

        <div className="relative max-w-xl">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-ink/70">
            Ceramic Coating Specialists
          </span>
          <h1 className="mt-4 text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            Want a Ceramic Coating?
          </h1>
          <p className="mt-6 max-w-md text-lg font-medium leading-relaxed text-white">
            Book a ceramic coating service from an installer that specializes in ceramic coatings.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/book"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-dark transition hover:bg-ink hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Book Now
            </Link>
            <a
              href="#consultation"
              className="inline-flex items-center justify-center rounded-full border border-white/60 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Find Your Coating
            </a>
          </div>
          <ul className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-white">
            <li className="flex items-center gap-2">
              <span className="text-[#FDCF0A] [text-shadow:0_1px_2px_rgba(0,0,0,0.25)]" aria-hidden>★★★★★</span> 5-star rated
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-white/70" aria-hidden /> Free pickup &amp; delivery
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-white/70" aria-hidden /> Coatings only
            </li>
          </ul>
        </div>
      </div>

      {/* RIGHT PHOTO */}
      <div className="relative h-80 md:h-[28rem] lg:h-auto">
        <Image
          src="/landing/home_section.jpeg"
          alt="beclean installer preparing a car for ceramic coating"
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover object-[50%_55%]"
        />
        {/* Light top shade so the header stays legible over the photo */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/40 to-transparent" />
      </div>
    </section>
  )
}
