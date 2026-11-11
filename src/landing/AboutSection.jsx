import Image from "next/image"

export default function AboutSection() {
  return (
    <section className="section bg-white">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <span className="eyebrow">About beclean</span>
          <h2 className="heading mt-3">
            Best Ceramic Coating Shop in South Eastern Pennsylvania.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
            beclean is a ceramic coating studio located in Montgomery County
            Pennsylvania. We specialize in ceramic coatings and paint corrections
            with one goal in mind, to reveal your car’s true potential.
            Regardless of the type of vehicle, our meticulous attention to detail
            and innovative techniques guarantee that your car’s true potential
            will be achieved.
          </p>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-mist">
          <Image
            src="/referral/work_example1.JPG"
            alt="Ceramic coated vehicle"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
