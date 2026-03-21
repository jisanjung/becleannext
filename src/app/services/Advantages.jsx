import Image from "next/image"

export default function Advantages() {
  return (
    <section className="bg-[#FFFFFF] py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            What are the Advantages of Ceramic Coating?
          </h2>

          <p className="text-black mb-6">
            Thinking about transforming your car with a ceramic coating?
            The advantages of a professional ceramic coating service include:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-black">

            <li>Scratch resistant</li>
            <li>Car looks immaculate</li>
            <li>Easier to clean</li>
            <li>Repels mud, dirt, and pollen</li>
            <li>Car looks newer for longer</li>
            <li>Protects against oxidation</li>
            <li>Long lasting shine</li>
            <li>Intense water-beading and smoothness</li>
            <li>Increases resale value</li>
            <li>Self cleaning</li>

          </ul>

        </div>

        {/* IMAGE */}
        <div className="relative w-full h-[240px] md:h-[380px] rounded-2xl overflow-hidden">
        <Image
            src="/referral/work_example9.JPG"
            alt="Ceramic coated car in the beclean studio"
            fill
            className="object-cover"
        />
        </div>

      </div>
    </section>
  )
}