import Image from "next/image"

export default function AboutSection() {
  return (
    <section className="bg-[#FFFFFF] py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-8">
            Best Ceramic Coating Shop <br />
            in South Eastern Pennsylvania.
          </h1>

          <p className="text-gray-800 text-lg leading-relaxed max-w-xl">
            beclean is a ceramic coating studio located in Montgomery County 
            Pennsylvania. We specialize in ceramic coatings and paint corrections 
            with one goal in mind, to reveal your car’s true potential. 
            Regardless of the type of vehicle, our meticulous attention to detail 
            and innovative techniques guarantee that your car’s true potential 
            will be achieved.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full h-[320px] lg:h-[400px] rounded-3xl overflow-hidden shadow-xl">
          <Image
            src="/referral/work_example1.JPG"
            alt="Ceramic coated vehicle"
            fill
            className="object-cover"
            priority
          />
        </div>

      </div>
    </section>
  )
}